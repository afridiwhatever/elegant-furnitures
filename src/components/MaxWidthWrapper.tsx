import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-5xl px-6 pr-8 lg:px-10 lg:pr-12 md:max-w-[1600px] mx-auto h-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
