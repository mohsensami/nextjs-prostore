import { Metadata } from "next";
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import ProfileForm from "./profile-form";
import { requireAdmin } from "@/lib/auth-guard";

export const metadata: Metadata = {
  title: "Customer Profile",
};

export default async function ProfilePage() {
  await requireAdmin();
  const session: any = await auth();
  return (
    <SessionProvider session={session}>
      <div className="max-w-md  mx-auto space-y-4">
        <h2 className="h2-bold">Profile</h2>
        <ProfileForm />
      </div>
    </SessionProvider>
  );
}
