import React from "react";
import { Text, Heading } from "./..";

export default function HomeRowlanguages({
  tools,
  vscode = "VSCode",
  neovim = "Neovim",
  linux,
  figma = "Figma",
  xfce,
  arch,
  git,
  fontawesome,
  kde,
  fish,
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex border-blue_gray-200 border border-solid`}>
      <div className="flex flex-col items-start">
        {!!tools ? (
          <Heading size="xs" as="h6">
            {tools}
          </Heading>
        ) : null}
        <div className="mt-[15px] flex flex-wrap gap-2">
          <Text as="p">{vscode}</Text>
          <Text as="p">{neovim}</Text>
          {!!linux ? <Text as="p">{linux}</Text> : null}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <Text as="p" className="self-end">
            {figma}
          </Text>
          {!!xfce ? <Text as="p">{xfce}</Text> : null}
          {!!arch ? (
            <Text as="p" className="self-start">
              {arch}
            </Text>
          ) : null}
        </div>
        <div className="mt-1.5 flex flex-wrap gap-3">
          {!!git ? (
            <Text as="p" className="self-start">
              {git}
            </Text>
          ) : null}
          {!!fontawesome ? <Text as="p">{fontawesome}</Text> : null}
        </div>
        <div className="mt-[7px] flex flex-wrap gap-[11px]">
          {!!kde ? <Text as="p">{kde}</Text> : null}
          {!!fish ? <Text as="p">{fish}</Text> : null}
        </div>
      </div>
    </div>
  );
}
