import Image from "next/image";
import HeroBento from "../components/website/HeroBento";
import Footer from "@/components/website/Footer";
import { MorphingText } from "@/components/magicui/morphing-text";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-16 sm:p-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col justify-start">
            <MorphingText texts={["Hello", "There!"]} className="text-start"/>
            <span className="text-xl">I'm Ekky Mulia Lasardi, Nice to meet you</span>
        </div>
        <HeroBento/>
      </main>
      <Footer/>
    </div>
  );
}
