import React from "react";
import { Img } from "./..";

export default function ProjectsMedia({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center ml-[17px] gap-2 bg-blue_gray-900`}>
      <div className="h-[191px] w-px bg-blue_gray-200" />
      <div className="flex flex-col gap-2">
        <Img src="images/img_user.svg" alt="profile image" className="h-[32px]" />
        <Img src="images/img_globe.svg" alt="global image" className="h-[32px]" />
        <Img src="images/img_settings.svg" alt="settings image" className="h-[32px]" />
      </div>
    </div>
  );
}
