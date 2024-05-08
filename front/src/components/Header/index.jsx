import React from "react";
import MegaMenu1 from "../MegaMenu1";
import { Img, Heading, Text } from "./..";

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header
      {...props}
      className={`${props.className} flex justify-between items-center pt-[31px] pb-[7px] gap-5 bg-blue_gray-900 relative`}
    >
      <Img src="images/img_header_logo.png" alt="header logo" className="h-[21px] w-[72px] object-contain" />
      <div className="flex gap-8 sm:flex-col">
        <div className="flex flex-wrap">
          <Text as="p" className="!font-medium !text-purple-200">
            #
          </Text>
          <Text as="p" className="!font-medium !text-white-A700">
            home
          </Text>
        </div>
        <ul className="flex gap-8">
          <li>
            <a href="#">
              <div className="flex flex-wrap">
                <Text as="p" className="cursor-pointer !text-purple-200 hover:font-semibold">
                  #
                </Text>
                <Text as="p" className="cursor-pointer hover:font-semibold hover:text-purple-200">
                  works
                </Text>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex flex-wrap">
                <Text as="p" className="cursor-pointer !text-purple-200 hover:font-semibold">
                  #
                </Text>
                <Text as="p" className="cursor-pointer hover:font-semibold hover:text-purple-200">
                  about-me
                </Text>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex flex-wrap">
                <Text as="p" className="cursor-pointer !text-purple-200 hover:font-semibold">
                  #
                </Text>
                <Text as="p" className="cursor-pointer hover:font-semibold hover:text-purple-200">
                  contacts
                </Text>
              </div>
            </a>
          </li>
          <li
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
          >
            <div className="flex cursor-pointer items-center gap-1">
              <Heading
                size="xs"
                as="h6"
                className="h-[21px] w-[20px] cursor-pointer !text-blue_gray-200 hover:!text-purple-200"
              >
                EN
              </Heading>
              <Img src="images/img_group_58.svg" alt="language icon" className="h-[5px] w-[10px]" />
            </div>
            {menuOpen ? <MegaMenu1 /> : null}
          </li>
        </ul>
      </div>
    </header>
  );
}
