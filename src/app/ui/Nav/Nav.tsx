"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HeaderOne } from "@/app/common/Font";
import { usePathname } from "next/navigation";

const menu = [
  {
    home: "Home",
    category: "Category",
    about: "About",
    contact: "Contact",
  },
];

const Nav = () => {
  const pathName = usePathname();
  const url = pathName.split("/").pop();
  return (
    <div className={`${url === "category" ? "bg-white" : "bg-[#FCEED5]"}`}>
      <div className="flex items-center gap-10 p-8 justify-center">
        <Link href={"/"}>
          <Image src={"./frame.svg"} alt="logo" width={115} height={40} />
        </Link>
        <div className="inline-flex space-x-6 items-center cursor-pointer gap-6 font-bold text-base leading-6 font-sans text-[#003459]">
          {menu.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <>
              <Link href={"/"}>
                <span className="transition duration-300 ease-in-out hover:scale-110 hover:underline">
                  {item.home}
                </span>
              </Link>
              <Link href={"/category"}>
                <span className="transition duration-300 ease-in-out hover:scale-110 hover:underline">
                  {item.category}
                </span>
              </Link>
              <span className="transition duration-300 ease-in-out hover:scale-110 hover:underline">
                {item.about}
              </span>
              <span className="transition duration-300 ease-in-out hover:scale-110 hover:underline">
                {item.contact}
              </span>
            </>
          ))}
        </div>
        <div
          className="w-[280px] bg-white rounded-full"
          style={{ padding: "12px 20px 12px 16px" }}
        >
          <div className="flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.0916 16.9083L15 13.8417C16.2001 12.3454 16.7812 10.4461 16.624 8.53443C16.4667 6.62276 15.583 4.844 14.1546 3.56388C12.7261 2.28377 10.8615 1.5996 8.94408 1.65207C7.02668 1.70454 5.20225 2.48965 3.84593 3.84596C2.48962 5.20228 1.70451 7.02671 1.65204 8.94411C1.59957 10.8615 2.28374 12.7262 3.56385 14.1546C4.84397 15.5831 6.62273 16.4668 8.5344 16.624C10.4461 16.7813 12.3453 16.2001 13.8416 15L16.9083 18.0667C16.9858 18.1448 17.078 18.2068 17.1795 18.2491C17.281 18.2914 17.39 18.3132 17.5 18.3132C17.61 18.3132 17.7189 18.2914 17.8205 18.2491C17.922 18.2068 18.0142 18.1448 18.0916 18.0667C18.2418 17.9113 18.3258 17.7036 18.3258 17.4875C18.3258 17.2714 18.2418 17.0637 18.0916 16.9083ZM9.16665 15C8.01292 15 6.88511 14.6579 5.92582 14.0169C4.96653 13.3759 4.21886 12.4649 3.77735 11.399C3.33584 10.3331 3.22032 9.16021 3.4454 8.02865C3.67048 6.8971 4.22605 5.8577 5.04186 5.04189C5.85766 4.22608 6.89707 3.67051 8.02862 3.44543C9.16018 3.22035 10.3331 3.33587 11.399 3.77738C12.4649 4.21889 13.3759 4.96657 14.0169 5.92585C14.6579 6.88514 15 8.01295 15 9.16668C15 10.7138 14.3854 12.1975 13.2914 13.2915C12.1975 14.3854 10.7137 15 9.16665 15Z"
                fill="#667479"
              />
            </svg>
            <input
              type="text"
              placeholder="Search something here!"
              className="outline-none"
            />
          </div>
        </div>
        <div className="bg-[#003459] w-[280px] h-[55px] rounded-full flex justify-center items-center cursor-pointer">
          <HeaderOne textColor="text-white" title="Join the community" />
        </div>
        <div className="flex gap-1 items-center">
          <Image src={"./frame2.svg"} alt="logo" width={16} height={16} />
          <select
            id="cars"
            className="bg-transparent border-none outline-none cursor-pointer"
          >
            <option value="volvo">VND</option>
            <option value="saab">Saab</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Nav;
