import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge } from "../ui/badge";
import { BlurFade } from "../magicui/blur-fade";

interface LinksData {
  text: string;
  link: string;
}
  
interface PortfolioItemProps {
    imageLink?: string;
    title: string;
    clearThumbnailImage?: boolean;
    description?: string;
    location: string;
    date: string;
    listItem?: string[];
    links?: LinksData[];
    thumbnailLink?: string;
  }


export default function PortfolioItem({
    imageLink,
    title,
    description,
    clearThumbnailImage = false,
    location,
    date,
    listItem = [],
    links = [],
    thumbnailLink = ""
  }: PortfolioItemProps) {
    return (
      <>
        <div className="my-4 col-span-12 flex gap-8 justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center">
            {imageLink && !clearThumbnailImage && (
              <img src={imageLink} alt="Item Image" width={42} height={42} />
            )}
            <div className={ imageLink ? "flex flex-col ml-3" : clearThumbnailImage ? "flex flex-col ml-1" : "flex flex-col ml-14" }>
              <span className="text-sm font-semibold text-gray-700">{title}</span>
              <span className="text-xs text-gray-600 whitespace-pre-line">{description}</span>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="flex flex-col items-end">
            <span className="text-right text-sm font-semibold text-gray-700">{location}</span>
            <span className="text-right text-xs font-semibold text-gray-600">{date}</span>
          </div>
        </div>
  
        {listItem.length > 0 && (
          <div className={!clearThumbnailImage ? "ml-7 my-4 col-span-12 flex justify-between items-center w-3/4" : "ml-3 my-4 col-span-12 flex justify-between items-center w-3/4"}>
            <ul className="text-xs list-disc pl-5 space-y-1 text-gray-700">
              {listItem.map((item, index) => (
                <li key={index} className="pl-2">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {(links.length > 0 || thumbnailLink !== "") && (
          <div className="mt-4 mb-8">
            {links.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-start items-start">
                {links.map((item, index) => (
                  <Badge key={index} className="inline-flex items-center max-w-fit">
                    <a href={item.link} target="_blank" className="flex gap-1">
                      {item.text}<ArrowTopRightIcon/>
                    </a>
                  </Badge>
                ))}
              </div>
            )}

            {thumbnailLink !== "" && (  
              <BlurFade delay={0.25 * 0.05} inView>
                <img
                  className="w-50 h-auto rounded-lg object-cover"
                  src={thumbnailLink}
                  alt={`Thumbnail ${title}`}
                />
              </BlurFade>
            )}
          </div>
        )}
      </>
    );
  }