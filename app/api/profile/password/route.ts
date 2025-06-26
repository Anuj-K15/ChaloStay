import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

export async function PUT(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { currentPassword, newPassword } = body;

    // Get current user with password
    const user = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
    });

    if (!user || !user.hashedPassword) {
      return NextResponse.json({ error: "Invalid user" }, { status: 400 });
    }

    // Check if current password is correct
    const isCorrectPassword = await bcrypt.compare(
      currentPassword,
      user.hashedPassword
    );

    if (!isCorrectPassword) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 400 }
      );
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    // Update user password
    await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        hashedPassword,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[PASSWORD_ERROR]", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
