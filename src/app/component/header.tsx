'use client';
import { useState } from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai"; 
import handbag from "../public/Handbag.png"; 
import Link from "next/link";


export default function Header() {
  const [activePage, setActivePage] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/pages" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop"  },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-black">
      <p className="text-center py-5">
        <span className="text-[#FF9F0D] text-1xl font-bold">Food</span>
        <span className="text-white text-1xl font-bold">tuck</span>
      </p>
      <div className="flex items-center justify-between px-10 lg:px-40">
        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <div className="md:hidden">
            {/* Hamburger icon */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <AiOutlineMenu className="text-white text-3xl" />
            </button>
          </div>

          <ul className="hidden md:flex flex-row space-x-6 text-white">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`relative cursor-pointer ${
                  activePage === item.name ? "font-bold" : ""
                }`}
                onClick={() => setActivePage(item.name)}
              >
                <Link href={item.href}>
                  {item.name}
                </Link>
                {activePage === item.name && (
                  <span
                    className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#FF9F0D] rounded-full"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Search Bar and Icon */}
        <div className="flex items-center space-x-6">
          <form className="hidden md:block md:w-[243px] xl:w-[310px]">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-[250px] h-[50px] p-4 bg-black border-2 border-[#FF9F0D] text-white rounded-full"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 p-20">
                <AiOutlineSearch className="text-white text-2xl" />
              </button>
            </div>
          </form>
          <Image src={handbag} alt="Handbag Icon" className="w-6 h-6" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="flex flex-col space-y-6 p-6">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer ${
                  activePage === item.name ? "font-bold" : ""
                }`}
                onClick={() => setActivePage(item.name)}
              >
                <Link href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
