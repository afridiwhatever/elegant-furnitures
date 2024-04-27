import Link from "next/link";
import { ArrowRight } from "../../public/icons/Icons";
import { cn } from "@/lib/utils";

const ShopNowButton = ({
  color,
  to,
  className,
}: {
  color?: string;
  to: string;
  className?: string;
}) => {
  return (
    <Link
      className={cn(
        `flex items-center border-b gap-1 max-w-max ${
          color
            ? `border-black text-${color}`
            : "border-customBlue text-customBlue"
        }`,
        className
      )}
      href={to}
    >
      Shop now
      <ArrowRight color={color} />
    </Link>
  );
};

export default ShopNowButton;
