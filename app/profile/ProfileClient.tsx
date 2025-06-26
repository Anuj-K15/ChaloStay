"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import ProfileImageUpload from "@/app/components/inputs/ProfileImageUpload";
import ChangePasswordForm from "./ChangePasswordForm";

interface ProfileClientProps {
  currentUser: SafeUser;
  profileData: SafeUser | null;
}

const ProfileClient: React.FC<ProfileClientProps> = ({
  currentUser,
  profileData,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: profileData?.name || currentUser.name,
      email: profileData?.email || currentUser.email,
      image: profileData?.image || currentUser.image || "",
    },
  });

  const image = watch("image");

  const setCustomValue = (id: string, value: unknown) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .put("/api/profile", data)
      .then(() => {
        toast.success("Profile updated!");
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto mt-24 sm:mt-28">
        <div className="flex flex-col gap-6">
          <Heading
            title="Profile"
            subtitle="Update your personal information"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-4 rounded-lg border border-neutral-200 p-4 md:p-6">
              <div className="flex flex-col gap-2 items-center justify-center">
                <ProfileImageUpload
                  value={image}
                  onChange={(value) => setCustomValue("image", value)}
                />
                <div className="mt-2 text-lg font-semibold">
                  {currentUser.name}
                </div>
                <div className="text-neutral-500 text-sm">
                  {currentUser.email}
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="text-sm text-center font-medium text-neutral-800">
                  Member since{" "}
                  {new Date(currentUser.createdAt).toLocaleDateString()}
                </div>
                {currentUser.emailVerified && (
                  <div className="text-sm text-green-600">Email verified</div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-neutral-200 p-4 md:p-6">
              <div className="font-medium text-lg">Edit Profile</div>
              <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              <div className="mt-4">
                <Button
                  disabled={isLoading}
                  label="Save changes"
                  onClick={handleSubmit(onSubmit)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-neutral-200 p-4 md:p-6">
              <ChangePasswordForm />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfileClient;
