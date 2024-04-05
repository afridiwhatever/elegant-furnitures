import Link from "next/link";
import {
  ShoppingBagIcon,
  SearchIcon,
  UserIcon,
} from "../../public/icons/Icons";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <Link href="/">Logo</Link>
      <ul className="flex gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Shop</Link>
        </li>
        <li>
          <Link href="/">Product</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
      </ul>
      <div className="flex gap-2">
        <SearchIcon />
        <UserIcon />
        <ShoppingBagIcon />
      </div>
      <div className="h-6 w-6"></div>
    </nav>
  );
};

export default Navbar;
