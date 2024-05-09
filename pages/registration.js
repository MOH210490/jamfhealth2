import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";
import Registration from "@/components/pages/Registration";
import Welcome from "@/components/UI/Welcome";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return  (
    <div className="flex">
        <Welcome />
        <Registration />
    </div>
  );
}
