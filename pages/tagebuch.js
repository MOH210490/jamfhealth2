import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";
import Diary from "@/components/pages/Tagebuch";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return  (
    <div>
      <Header />
      <Diary />
    </div>
  );
}
