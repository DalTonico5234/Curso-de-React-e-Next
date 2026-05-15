import React from "react";
import { HomeIcon } from "../svg/HomeIcon";

export default function HomeButton() {
  return (
    <a
      className="fixed top-[90%] left-[85%] sm:left-[90%] md:left-[95%] z-50 p-2 bg-orange-600 text-white rounded-full hover:scale-110 transition shadow-md"
      href="/"
    >
      <HomeIcon
        size="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
        iconColor="text-white"
        bgColor="fill-orange-600"
        className="cursor-pointer hover:scale-105 transition-transform"
      ></HomeIcon>
    </a>
  );
}
