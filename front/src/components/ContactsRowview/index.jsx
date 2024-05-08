import React from "react";

export default function ContactsRowview({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center gap-5 flex-1`}>
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
    </div>
  );
}
