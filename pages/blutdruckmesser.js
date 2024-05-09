import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";
import Blutdruckmesser from "@/components/pages/Blutdruckmesser";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return  (
    <div>
      <Header />
      <Blutdruckmesser/>
    </div>
  );
}
