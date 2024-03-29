"use client";

import { images } from "@/constants";
import { logout } from "@/redux/actions/user";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

interface NavItemProps {
  item: { name: string; type: string; items?: string[] };
}

const navItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropwdown", items: ["About Us", "Contacts"] },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const [dropwdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <Link href="/" className="px-4 py-2">
            {item.name}
          </Link>
          <span className=" cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <Link
            href="/"
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdownHandler}
          >
            {item.name}
            <MdKeyboardArrowDown />
          </Link>
          <div
            className={`${
              dropwdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item?.items?.map((page, index) => (
                <Link
                  key={index}
                  href="/"
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                >
                  {page}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [navIsVisible, setNavIsVisible] = useState(false);
  const userState = useSelector((state: any) => state.user);
  const [profileDropwdown, setProfileDropwdown] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      console.log(curState);

      return !curState;
    });
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <Image src={images.Logo} alt="logo" width={100} />
        </div>

        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6 cursor-pointer"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu
              className="w-6 h-6 cursor-pointer"
              onClick={navVisibilityHandler}
            />
          )}
        </div>

        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[70px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:flex-row lg:justify-end fixed  bottom-0 top-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-5 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          {userState.userInfo ? (
            <div className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-5 font-semibold">
              <div className="relative group">
                <div className="flex flex-col items-center">
                  <Link
                    href="/"
                    className="px-4 py-2 flex gap-x-1 items-center"
                    onClick={() => setProfileDropwdown(true)}
                  >
                    <span>Profile</span>
                    <MdKeyboardArrowDown />
                  </Link>
                  <div
                    className={`${
                      profileDropwdown ? "block" : "hidden"
                    } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                  >
                    <ul className="bg-dark-soft lg:bg-transparent flex flex-col shadow-lg rounded-lg overflow-hidden">
                      <button
                        type="button"
                        className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                      >
                        Dashboard
                      </button>
                      <button
                        onClick={logoutHandler}
                        type="button"
                        className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Sign In
            </button>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
