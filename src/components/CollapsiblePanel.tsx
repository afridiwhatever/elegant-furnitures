"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";

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
  const auxiliaryInfoDiv = useRef<HTMLDivElement>(null);

  const [minHeight, setMinHeight] = useState(0);

  const getAndSetHeight = (height: number) => {
    setMinHeight(height + 50);
  };

  useEffect(() => {
    const communicateHeight = () => {
      if (auxiliaryInfoDiv.current) {
        console.log("from panel", auxiliaryInfoDiv.current.offsetHeight);
        getAndSetHeight(auxiliaryInfoDiv.current.offsetHeight);
      }
    };

    communicateHeight();

    const resizeObserver = new ResizeObserver(() => {
      communicateHeight();
    });

    if (auxiliaryInfoDiv.current) {
      resizeObserver.observe(auxiliaryInfoDiv.current);
    }

    const a = auxiliaryInfoDiv.current;

    return () => {
      if (a) {
        resizeObserver.unobserve(a);
      }
    };
  }, []);

  return (
    <div
      style={{
        minHeight: isOpen ? minHeight : "unset",
      }}
    >
      <div
        ref={auxiliaryInfoDiv}
        className={`flex justify-between items-center min-w-min  ${
          isOnMobile || isOpen ? "border-b border-black" : ""
        } ${isOpen ? "font-semibold" : "text-muted-foreground"}`}
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
        ref={auxiliaryInfoDiv}
        className={cn(
          `w-full duration-300 md:duration-0 transition-max-h md:transition-none max-h-0 md:absolute inset-x-0 top-16 overflow-y-auto`,
          { "max-h-[3000px]": isOpen }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsiblePanel;
