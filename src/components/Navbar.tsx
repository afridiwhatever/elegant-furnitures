import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBagIcon,
  SearchIcon,
  UserIcon,
  ChevronDown,
} from "../../public/icons/Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <MaxWidthWrapper>
      <nav className="flex justify-between py-4 items-center">
        <Link href="/">
          <Image
            src="/glaciergear_logo.png"
            height={40}
            width={180}
            alt="logo"
          />
        </Link>

        <ul className="flex gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              <span>Shop</span>
              <ChevronDown />
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span>Product</span>
              <ChevronDown />
            </div>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <SearchIcon />
          <UserIcon />
          <ShoppingBagIcon />
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
