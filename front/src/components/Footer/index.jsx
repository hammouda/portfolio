import React from "react";
import { Text, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex w-full flex-col items-center gap-[29px]">
        <div className="h-px w-full self-stretch bg-blue_gray-200" />
        <div className="container-sm flex flex-col items-center gap-[49px] md:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch sm:flex-col">
            <div className="flex w-[34%] flex-col gap-4 sm:w-full">
              <div className="flex gap-6 self-start">
                <div className="flex items-center gap-[9px] self-start">
                  <Img src="images/img_thumbs_up.svg" alt="thumbs up image" className="h-[16px] w-[16px] self-end" />
                  <Text as="p" className="!font-medium !text-white-A700">
                    Elias
                  </Text>
                </div>
                <a href="mailto:elias@elias-dev.ml" target="_blank" rel="noreferrer">
                  <Text as="p">elias@elias-dev.ml</Text>
                </a>
              </div>
              <Text as="p" className="!text-white-A700">
                Web designer and front-end developer
              </Text>
            </div>
            <div className="flex flex-col items-start gap-3">
              <Text size="s" as="p" className="!text-white-A700">
                Media
              </Text>
              <div className="flex gap-2">
                <Img src="images/img_user.svg" alt="user icon" className="h-[32px] w-[32px]" />
                <Img src="images/img_settings.svg" alt="settings icon" className="h-[32px] w-[32px]" />
                <Img src="images/img_user_32x32.svg" alt="user icon large" className="h-[32px] w-[32px]" />
              </div>
            </div>
          </div>
          <Text as="p">© Copyright 2022. Made by Elias</Text>
        </div>
      </div>
    </footer>
  );
}
