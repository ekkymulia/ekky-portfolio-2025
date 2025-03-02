'use'
import React, { useState } from "react";
import { cn } from "@/lib/utils";


interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  additionalClick?: () => void; // Accept an external click handler
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, additionalClick, ...props }, ref) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (!isSelected) setIsSelected(true); // Ensure it stays selected
    if (additionalClick) additionalClick(); // Call external click function
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold transition-all duration-300",
        isSelected
          ? "bg-gray-800 text-white border-gray-700 cursor-default" // Dark mode when selected, disabled cursor
          : "bg-background text-black border",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "h-2 w-2 rounded-full bg-primary transition-all duration-300",
            isSelected ? "scale-[100.8] bg-white" : "group-hover:scale-[100.8]"
          )}
        ></div>
        {!isSelected && (
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        )}
      </div>
      <div
        className={cn(
          "px-2 absolute top-0 z-10 flex h-full w-full items-center justify-center gap-2 opacity-0 transition-all duration-300",
          isSelected
            ? "opacity-100 -translate-x-6 text-black"
            : "translate-x-12 group-hover:-translate-x-6 group-hover:opacity-100 text-primary-foreground"
        )}
      >
        <span>{isSelected ? "Selected ✓" : children}</span>
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";