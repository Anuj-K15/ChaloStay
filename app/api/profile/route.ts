import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

export async function PUT(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, email, image } = body;

    // Check if email is already taken (if it's different from current user's email)
    if (email !== currentUser.email) {
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) {
        return NextResponse.json(
          { error: "Email already in use" },
          { status: 400 }
        );
      }
    }

    // Update user in database
    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name,
        email,
        image,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("[PROFILE_ERROR]", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
