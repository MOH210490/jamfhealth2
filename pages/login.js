import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";
import Welcome from "@/components/UI/Welcome";
import Login from "@/components/pages/Login";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return  (
    <div className="flex">
        <Welcome />
        <Login />
    </div>
  );
}
