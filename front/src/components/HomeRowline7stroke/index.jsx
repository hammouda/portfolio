import React from "react";
import { Text } from "./..";

export default function HomeRowline7stroke({ dynamictext = "#", dynamictext1 = "skills", ...props }) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col justify-between items-center gap-5`}>
      <div className="flex flex-wrap">
        <Text size="md" as="p" className="!text-purple-200">
          {dynamictext}
        </Text>
        <Text size="md" as="p" className="self-start !text-white-A700">
          {dynamictext1}
        </Text>
      </div>
      <div className="h-px flex-1 bg-purple-200 sm:self-stretch" />
    </div>
  );
}
