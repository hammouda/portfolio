import React from "react";

export default function HomeColumnview({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col`}>
      <div className="flex gap-4 self-stretch">
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      </div>
      <div className="flex gap-4 self-stretch">
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      </div>
      <div className="flex gap-4 self-stretch">
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      </div>
      <div className="flex gap-4 self-stretch">
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      </div>
      <div className="flex gap-4 self-stretch">
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      </div>
    </div>
  );
}
