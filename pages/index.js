import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";
import Homepage from "@/components/pages/Homepage";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return  (
    <div>
      <Header />
      <Homepage />
    </div>
  );
}
