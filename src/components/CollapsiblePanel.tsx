import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

interface PanelProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: ReactNode;
  isOnMobile: boolean;
}

const CollapsiblePanel = ({
  title,
  isOpen,
  onClick,
  children,
  isOnMobile,
}: PanelProps) => {
  return (
    <div>
      <div
        className={`flex justify-between items-center min-w-min ${
          isOnMobile ? "border-b border-black" : ""
        } ${
          isOpen
            ? "font-semibold border-b border-black"
            : "text-muted-foreground"
        }`}
        onClick={onClick}
      >
        <h4 className="text-lg leading-8">{title}</h4>
        <ChevronDown
          className={cn("transition-all duration-300 md:hidden", {
            "rotate-180 ": isOpen,
          })}
        />
      </div>
      <div
        className={cn(
          `w-full duration-300 md:duration-0 transition-max-h md:transition-none max-h-0 md:absolute inset-x-0 top-10 overflow-hidden`,
          { "max-h-[500px]": isOpen }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsiblePanel;
