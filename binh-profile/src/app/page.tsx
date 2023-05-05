import Image from "next/image";
import { Inter } from "next/font/google";

import logo from "./images/logo.png";
import MyProfile from "./components/home/Profile";
import { PROFILE } from "@/lib/profile";
import { Profile } from "@/lib/models/profile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-6 lg:p-24">
      <MyProfile profile={PROFILE as Profile} />
    </main>
  );
}
