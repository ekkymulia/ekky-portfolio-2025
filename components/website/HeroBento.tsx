import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { Share2Icon, VenetianMask } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
// import AnimatedBeamMultipleOutputDemo from "@/registry/example/animated-beam-multiple-outputs";
// import AnimatedListDemo from "@/registry/example/animated-list-demo";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import { Marquee } from "../magicui/marquee";
import { GetToKnowBG } from "./micro/gettoknowbg";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: VenetianMask,
    name: "Get to know & Chat with me",
    description: "Get to know about me (With AI).",
    href: "/myself",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className=" [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] ">
      <GetToKnowBG/>
      </div>
    ),
  },
  {
    Icon: FileTextIcon,
    name: "See My Projects",
    description: "Take a dive to everything i've worked before.",
    href: "/projects",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  // {
  //   Icon: CalendarIcon,
  //   name: "Calendar",
  //   description: "Use the calendar to filter your files by date.",
  //   className: "col-span-3 lg:col-span-1",
  //   href: "#",
  //   cta: "Learn more",
  //   background: (
  //     <Calendar
  //       mode="single"
  //       selected={new Date(2022, 4, 11, 0, 0, 0)}
  //       className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
  //     />
  //   ),
  // },
];

export default function HeroBento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
