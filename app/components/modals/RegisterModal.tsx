"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import ProfileImageUpload from "../inputs/ProfileImageUpload";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      image: "",
    },
  });

  const image = watch("image");

  const setCustomValue = (id: string, value: unknown) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Success!");
        // Reset the form including profile image
        reset({
          name: "",
          email: "",
          password: "",
          image: "",
        });
        registerModal.onClose();
        loginModal.onOpen();
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal]);

  // Reset the form when the modal is closed
  useEffect(() => {
    if (!registerModal.isOpen) {
      reset({
        name: "",
        email: "",
        password: "",
        image: "",
      });
    }
  }, [registerModal.isOpen, reset]);

  const bodyContent = (
    <div className="flex flex-col gap-2.5 sm:gap-4">
      <Heading title="Welcome to ChaloStay" subtitle="Create an account" />
      <div className="mb-1 sm:mb-2">
        <ProfileImageUpload
          value={image}
          onChange={(value) => setCustomValue("image", value)}
        />
      </div>
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-2 mt-1 sm:mt-2">
      <hr className="mb-1" />
      <div className="w-full">
        <Button
          outline
          label="Google"
          icon={FcGoogle}
          onClick={() => signIn("Continue with Google")}
          socialLogin
        />
      </div>
      <div className="w-full">
        <Button
          outline
          label="Github"
          icon={AiFillGithub}
          onClick={() => signIn("Continue with Github")}
          socialLogin
        />
      </div>
      <div className="text-neutral-500 text-center mt-1 sm:mt-2 font-light text-xs">
        <div className="flex flex-row items-center justify-center gap-1">
          <div>Already have an account?</div>
          <div
            onClick={toggle}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Continue"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </div>
  );
};

export default RegisterModal;
