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
  const [minHeight, setMinHeight] = useState(0);
  const contentDiv = useRef<HTMLDivElement>(null);
  const headerDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setHeight = () => {
      if (contentDiv.current && headerDiv.current) {
        setMinHeight(
          contentDiv.current.offsetHeight + headerDiv.current.offsetHeight
        );
      }
    };

    setHeight();

    const resizeObserver = new ResizeObserver(() => {
      setHeight();
    });

    if (contentDiv.current) {
      resizeObserver.observe(contentDiv.current);
    }

    return () => {
      if (contentDiv.current) {
        resizeObserver.unobserve(contentDiv.current);
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
        ref={headerDiv}
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
        ref={contentDiv}
        className={cn(
          "w-full duration-800 md:duration-0 transition-max-h md:transition-none md:absolute inset-x-0 top-16 overflow-y-auto hidden",
          { "block ": isOpen }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsiblePanel;

//
//
