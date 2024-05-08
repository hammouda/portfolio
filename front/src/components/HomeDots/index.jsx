import React from "react";

export default function HomeDots({
  dynamicprop1,
  dynamicprop2,
  dynamicprop6,
  dynamicprop7,
  dynamicprop8,
  dynamicprop9,
  dynamicprop10,
  dynamicprop11,
  dynamicprop12,
  dynamicprop16,
  dynamicprop17,
  dynamicprop18,
  dynamicprop19,
  dynamicprop20,
  dynamicprop21,
  dynamicprop22,
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col`}>
      {[...Array(5)].map((d, index) => (
        <div key={"dynamicList" + index} className="flex flex-1 gap-4">
          {!!dynamicprop1 ? <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" /> : null}
          {!!dynamicprop2 ? <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" /> : null}
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        </div>
      ))}
    </div>
  );
}
