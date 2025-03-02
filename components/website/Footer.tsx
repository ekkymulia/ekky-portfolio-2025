import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Footer(){

    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://instagram.com/e.ky_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogoIcon/>
          e.ky_
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/ekkymulialasardi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInLogoIcon/>
          ekky.mulialasardi
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/ekkymulia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon/>
          ekkymulia
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://kymulia.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          kymulia.tech
        </a>
      </footer>
    )

}