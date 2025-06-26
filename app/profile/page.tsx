import { redirect } from "next/navigation";

import getCurrentUser from "@/app/actions/getCurrentUser";
import { getProfileData } from "@/app/actions/getProfileData";
import ProfileClient from "./ProfileClient";

const ProfilePage = async () => {
  const currentUser = await getCurrentUser();
  const profileData = await getProfileData();

  if (!currentUser) {
    redirect("/");
  }

  return <ProfileClient currentUser={currentUser} profileData={profileData} />;
};

export default ProfilePage;
