import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";
import Blutzuckermesser from "@/components/pages/Blutzuckermesser";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return  (
    <div>
      <Header />
      <Blutzuckermesser />
    </div>
  );
}
