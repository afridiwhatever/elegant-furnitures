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
        "max-w-4xl px-12 lg:px-4 lg:max-w-[1600px] mx-auto h-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
