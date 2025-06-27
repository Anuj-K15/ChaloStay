"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
  // Optional current user prop, can be used for conditional rendering
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleMenuItemClick = useCallback((callback: () => void) => {
    return () => {
      // Close the menu
      setIsOpen(false);
      // Execute the provided callback
      callback();
    };
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <div
          onClick={onRent}
          className="hidden text-center md:block text-sm font-semibold py-3 px-1 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          ChaloStay my home
        </div>
        <div
          onClick={toggleOpen}
          className="p-1.5 sm:p-3 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-1 sm:gap-2 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu size={16} className="sm:w-5 sm:h-5" />
          <div className="flex items-center">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl  shadow-md w-[30vw] sm:w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-10 sm:top-12 text-sm">
          <div className="flex flex-col  cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={handleMenuItemClick(() => router.push("/profile"))}
                  label="My profile"
                />
                <MenuItem
                  onClick={handleMenuItemClick(() => router.push("/trips"))}
                  label="My trips"
                />
                <MenuItem
                  onClick={handleMenuItemClick(() => router.push("/favorites"))}
                  label="My favorites"
                />
                <MenuItem
                  onClick={handleMenuItemClick(() =>
                    router.push("/reservations")
                  )}
                  label="My reservations"
                />
                <MenuItem
                  onClick={handleMenuItemClick(() =>
                    router.push("/properties")
                  )}
                  label="My properties"
                />
                <MenuItem
                  onClick={handleMenuItemClick(rentModal.onOpen)}
                  label="ChaloStay my home"
                />
                <hr />
                <MenuItem
                  onClick={handleMenuItemClick(() => signOut())}
                  label="Logout"
                />
              </>
            ) : (
              <>
                <MenuItem
                  onClick={handleMenuItemClick(loginModal.onOpen)}
                  label="Login"
                />
                <MenuItem
                  onClick={handleMenuItemClick(registerModal.onOpen)}
                  label="Signup"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
