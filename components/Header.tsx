import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { NAV_ITEMS } from "@/lib/constants";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav aria-label="Main navigation">
          <Suspense fallback={
            <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
              {NAV_ITEMS.map(({ href, label }) => <li key={href}>
                <Link href={href} className="hover:text-yellow-500 transition-colors">{label}</Link>
              </li>)}
            </ul>
          }>
            <NavItems />
          </Suspense>
        </nav>
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
