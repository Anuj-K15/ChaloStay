"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";

const ChangePasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");
  const confirmPassword = watch("confirmPassword");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Passwords don&apos;t match");
      return;
    }

    setIsLoading(true);

    axios
      .put("/api/profile/password", {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      })
      .then(() => {
        toast.success("Password updated successfully!");
        reset();
      })
      .catch((error) => {
        if (error.response?.data?.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Something went wrong.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="font-medium text-lg">Change Password</div>
      <Input
        id="currentPassword"
        label="Current Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="newPassword"
        label="New Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="confirmPassword"
        label="Confirm New Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {newPassword && confirmPassword && newPassword !== confirmPassword && (
        <div className="text-rose-500-500 text-sm">
          Passwords don&apos;t match
        </div>
      )}
      <div className="mt-2">
        <Button
          disabled={
            isLoading ||
            (newPassword && confirmPassword && newPassword !== confirmPassword)
          }
          label="Update Password"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default ChangePasswordForm;
