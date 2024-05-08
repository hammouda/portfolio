import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeDots from "../../components/HomeDots";
import ProjectsMedia from "../../components/ProjectsMedia";

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Elias's Projects - Web Design and Development Portfolio</title>
        <meta
          name="description"
          content="Discover the diverse range of projects by Elias, including complete apps like ChertNodes and ProtectX, as well as small projects that showcase his expertise in web design and development."
        />
      </Helmet>

      {/* main content section */}
      <div className="w-full bg-blue_gray-900">
        {/* project list section */}
        <div className="flex flex-col gap-[187px] md:gap-[140px] sm:gap-[93px]">
          {/* navigation section */}
          <div className="flex items-start gap-[41px] overflow-auto md:flex-col">
            {/* media icons section */}
            <div className="flex w-[10%] flex-col items-start md:w-full md:p-5">
              {/* media line section */}
              <ProjectsMedia className="w-[29%] md:ml-0 md:w-full md:gap-2" />

              {/* quick links section */}
              <HomeDots className="mt-[90px] w-[84%] gap-[11px] md:w-full md:flex-row sm:flex-col" />

              {/* banner image section */}
              <Img
                src="images/img_rectangle_25_1.png"
                alt="featured image"
                className="mt-[771px] h-[155px] w-[60%] object-cover"
              />

              {/* features overview section */}
              <HomeDots
                dynamicprop8={true}
                dynamicprop9={true}
                dynamicprop10={true}
                dynamicprop18={true}
                dynamicprop19={true}
                dynamicprop20={true}
                className="mt-[425px] w-[80%] gap-5 md:w-full"
              />
            </div>

            {/* header section */}
            <div className="flex flex-1 flex-col items-start md:self-stretch md:p-5">
              <Header className="mx-auto w-full max-w-[1025px] md:p-5 sm:flex-col sm:pt-5" />

              {/* projects header section */}
              <div className="container-sm mt-[52px] flex flex-col items-center gap-[13px]">
                <div className="flex flex-wrap self-start">
                  <Heading as="h1" className="self-start !text-purple-200">
                    /
                  </Heading>
                  <Heading as="h2">projects</Heading>
                </div>
                <Text as="p" className="!text-white-A700">
                  List of my projects
                </Text>
              </div>

              {/* complete projects section */}
              <div className="mt-[63px] flex items-start justify-between gap-5 self-stretch md:flex-col">
                <div className="mx-auto flex w-full max-w-[1023px] flex-col gap-[45px] md:p-5">
                  <div className="flex flex-wrap">
                    <Text size="md" as="p" className="self-start !text-purple-200">
                      #
                    </Text>
                    <Text size="md" as="p" className="self-end !text-white-A700">
                      complete-apps
                    </Text>
                  </div>
                  <div className="grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
                    <div className="flex w-full flex-col border border-solid border-blue_gray-200">
                      <Img src="images/img_rectangle_22.png" alt="project image" className="h-[201px] object-cover" />
                      <div className="flex flex-wrap gap-2 self-start px-2 pb-1.5 pt-[7px]">
                        <Text as="p" className="self-start">
                          HTML
                        </Text>
                        <Text as="p" className="self-start">
                          SCSS
                        </Text>
                        <Text as="p" className="self-end">
                          Python
                        </Text>
                        <Text as="p" className="self-start">
                          Flask
                        </Text>
                      </div>
                      <div className="flex flex-col items-start gap-[15px] border-t border-solid border-blue_gray-200 px-4 pb-4 pt-[15px]">
                        <Text size="s" as="p" className="!text-white-A700">
                          ChertNodes
                        </Text>
                        <Text as="p">Minecraft servers hosting </Text>
                        <div className="flex gap-4">
                          <Button shape="square" className="min-w-[109px] font-medium">
                            Live &lt;~&gt;
                          </Button>
                          <Button color="blue_gray_200" shape="square" className="min-w-[119px] font-medium">
                            Cached &gt;=
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col border border-solid border-blue_gray-200">
                      <Img
                        src="images/img_rectangle_22_1.png"
                        alt="second project image"
                        className="h-[201px] object-cover"
                      />
                      <div className="flex flex-wrap gap-2 self-start px-2 pb-1.5 pt-2">
                        <Text as="p" className="self-start">
                          CSS
                        </Text>
                        <Text as="p" className="self-end">
                          Express
                        </Text>
                        <Text as="p">Node.js</Text>
                      </div>
                      <div className="flex flex-col items-start gap-[15px] border-t border-solid border-blue_gray-200 p-4">
                        <Text size="s" as="p" className="w-full leading-[31px] !text-white-A700">
                          Kahoot Answers Viewer
                        </Text>
                        <Text as="p">Get answers to your kahoot quiz</Text>
                        <Button shape="square" className="min-w-[109px] font-medium">
                          Live &lt;~&gt;
                        </Button>
                      </div>
                    </div>
                    <div className="flex w-full flex-col border border-solid border-blue_gray-200">
                      <Img src="images/img_rectangle_22_201x330.png" alt="image" className="h-[201px] object-cover" />
                      <div className="flex flex-wrap gap-2 px-2 pb-1.5 pt-2">
                        <Text as="p" className="self-start">
                          React
                        </Text>
                        <Text as="p" className="self-end">
                          Express
                        </Text>
                        <Text as="p">Discord.js</Text>
                        <Text as="p">Node.js</Text>
                      </div>
                      <div className="flex flex-col items-start gap-[15px] border-t border-solid border-blue_gray-200 px-4 pb-4 pt-[15px]">
                        <Text size="s" as="p" className="!text-white-A700">
                          ProtectX
                        </Text>
                        <Text as="p">Discord anti-crash bot</Text>
                        <Button color="blue_gray_200" shape="square" className="min-w-[119px] font-medium">
                          Cached &gt;=
                        </Button>
                      </div>
                    </div>
                    <div className="flex w-full flex-col border border-solid border-blue_gray-200">
                      <Img src="images/img_rectangle_22_2.png" alt="image" className="h-[201px] object-cover" />
                      <div className="flex flex-wrap gap-2 self-start px-2 pb-2 pt-[7px]">
                        <Text as="p">HTML</Text>
                        <Text as="p">CSS</Text>
                        <Text as="p" className="h-[21px] w-[20px]">
                          JS
                        </Text>
                      </div>
                      <div className="flex flex-col items-start gap-4 border-t border-solid border-blue_gray-200 px-4 pb-4 pt-3.5">
                        <Text size="s" as="p" className="!text-white-A700">
                          Kotik Bot
                        </Text>
                        <Text as="p">Multi-functional discord bot</Text>
                        <Button shape="square" className="min-w-[109px] font-medium">
                          Live &lt;~&gt;
                        </Button>
                      </div>
                    </div>
                    <div className="flex w-full flex-col border border-solid border-blue_gray-200">
                      <Img src="images/img_rectangle_22_3.png" alt="image" className="h-[201px] object-cover" />
                      <div className="flex flex-wrap gap-2 self-start px-2 pb-[7px] pt-2">
                        <Text as="p">Vue</Text>
                        <Text as="p" className="h-[21px] w-[20px]">
                          TS
                        </Text>
                        <Text as="p">Less</Text>
                      </div>
                      <div className="flex flex-col items-start gap-4 border-t border-solid border-blue_gray-200 px-4 pb-4 pt-3.5">
                        <Text size="s" as="p" className="!text-white-A700">
                          Portfolio
                        </Text>
                        <Text as="p">You’re using it rn</Text>
                        <Button shape="square" className="min-w-[128px] font-medium">
                          Github &lt;~&gt;
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_rectangle_25_155x68.png"
                  alt="footer image"
                  className="h-[155px] w-[6%] object-cover md:w-full"
                />
              </div>

              {/* small projects section */}
              <div className="container-sm mt-20 flex flex-col items-center">
                <div className="flex flex-wrap self-start">
                  <Text size="md" as="p" className="self-start !text-purple-200">
                    #
                  </Text>
                  <Text size="md" as="p" className="!text-white-A700">
                    small-projects
                  </Text>
                </div>
              </div>

              {/* additional projects section */}
              <div className="mt-[46px] flex items-start justify-between gap-5 self-stretch md:flex-col">
                <div className="container-sm grid grid-cols-3 gap-4 md:grid-cols-2 md:p-5 sm:grid-cols-1">
                  <div className="flex w-full flex-col border border-solid border-blue_gray-200">
                    <div className="flex flex-wrap gap-2 self-start px-2 pb-1.5 pt-2">
                      <Text as="p">Discord.js</Text>
                      <Text as="p" className="h-[21px] w-[20px] self-start">
                        TS
                      </Text>
                      <Text as="p" className="h-[21px] w-[20px] self-start">
                        JS
                      </Text>
                    </div>
                    <div className="flex flex-col items-start gap-3.5 border-t border-solid border-blue_gray-200 px-4 pb-4 pt-[17px]">
                      <Text size="s" as="p" className="!text-white-A700">
                        Bot boilerplate
                      </Text>
                      <Text as="p" className="w-full leading-5">
                        Start creating scalable discord.js bot with typescript in seconds
                      </Text>
                      <Button shape="square" className="min-w-[128px] font-medium">
                        Github &lt;~&gt;
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-full flex-col border border-solid border-blue_gray-200">
                    <div className="flex flex-wrap gap-2 self-start px-2 pb-[7px] pt-2">
                      <Text as="p">VUE</Text>
                      <Text as="p">CSS</Text>
                      <Text as="p" className="h-[21px] w-[20px]">
                        JS
                      </Text>
                    </div>
                    <div className="flex flex-col items-start gap-3.5 border-t border-solid border-blue_gray-200 px-4 pb-4 pt-[17px]">
                      <Text size="s" as="p" className="!text-white-A700">
                        My blog
                      </Text>
                      <Text as="p" className="w-full leading-5">
                        Front-end of my future blog website written in vue
                      </Text>
                      <Button shape="square" className="min-w-[128px] font-medium">
                        Github &lt;~&gt;
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-1.5 border border-solid border-blue_gray-200 pt-[9px]">
                    <Text as="p" className="ml-[9px] md:ml-0">
                      Figma
                    </Text>
                    <div className="flex flex-col items-start gap-3.5 self-stretch border-t border-solid border-blue_gray-200 px-4 pb-4 pt-[17px]">
                      <Text size="s" as="p" className="!text-white-A700">
                        Chess pro
                      </Text>
                      <Text as="p" className="w-full leading-5">
                        Figma landing page about service for viewing chess tournaments
                      </Text>
                      <Button shape="square" className="min-w-[119px] font-medium">
                        Figma &lt;~&gt;
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-1.5 border border-solid border-blue_gray-200 pt-[9px]">
                    <Text as="p" className="ml-[9px] md:ml-0">
                      Figma
                    </Text>
                    <div className="flex flex-col items-start gap-[15px] self-stretch border-t border-solid border-blue_gray-200 p-4">
                      <Text size="s" as="p" className="w-full leading-[31px] !text-white-A700">
                        Crash protect website
                      </Text>
                      <Text as="p" className="w-full leading-5">
                        Figma template for website about anti-raid, anti-crash discord bot
                      </Text>
                      <Button shape="square" className="min-w-[119px] font-medium">
                        Figma &lt;~&gt;
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-full flex-col border border-solid border-blue_gray-200">
                    <div className="flex flex-wrap gap-2 self-start px-2 pb-2 pt-[7px]">
                      <Text as="p">HTML</Text>
                      <Text as="p">CSS</Text>
                    </div>
                    <div className="flex flex-col items-start gap-3.5 border-t border-solid border-blue_gray-200 px-4 pb-4 pt-[17px]">
                      <Text size="s" as="p" className="!text-white-A700">
                        CSS expirements
                      </Text>
                      <Text as="p" className="w-full leading-5">
                        Collection of my different little projects in css
                      </Text>
                      <Button shape="square" className="min-w-[109px] font-medium">
                        Live &lt;~&gt;
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-full flex-col border border-solid border-blue_gray-200">
                    <div className="flex flex-wrap gap-2 self-start px-[9px] py-[7px]">
                      <Text as="p">Lua</Text>
                      <Text as="p" className="self-start">
                        NeoVim
                      </Text>
                    </div>
                    <div className="flex flex-col items-start gap-3.5 border-t border-solid border-blue_gray-200 px-4 pb-4 pt-[17px]">
                      <Text size="s" as="p" className="!text-white-A700">
                        Web Dev nvim config
                      </Text>
                      <Text as="p" className="w-full leading-5">
                        Config for neovim perfect for web developer
                      </Text>
                      <Button shape="square" className="min-w-[128px] font-medium">
                        Github &lt;~&gt;
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-full flex-col border border-solid border-blue_gray-200">
                    <div className="flex flex-wrap gap-2 self-start px-2 pb-1.5 pt-[7px]">
                      <Text as="p" className="self-end">
                        Python
                      </Text>
                      <Text as="p" className="self-end">
                        Quart
                      </Text>
                      <Text as="p" className="self-start">
                        HTML
                      </Text>
                    </div>
                    <div className="flex flex-col items-start gap-[15px] border-t border-solid border-blue_gray-200 px-4 pb-4 pt-[15px]">
                      <Text size="s" as="p" className="!text-white-A700">
                        Ooku
                      </Text>
                      <Text as="p">Simple link shortener with auth</Text>
                      <Button shape="square" className="min-w-[109px] font-medium">
                        Live &lt;~&gt;
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-1.5 border border-solid border-blue_gray-200 pt-[9px]">
                    <Text as="p" className="ml-[9px] md:ml-0">
                      Figma
                    </Text>
                    <div className="flex flex-col items-start gap-4 self-stretch border-t border-solid border-blue_gray-200 px-4 pb-4 pt-3.5">
                      <Text size="s" as="p" className="!text-white-A700">
                        School website
                      </Text>
                      <Text as="p" className="w-full leading-5">
                        Figma template website for my school
                      </Text>
                      <Button shape="square" className="min-w-[119px] font-medium">
                        Figma &lt;~&gt;
                      </Button>
                    </div>
                  </div>
                </div>

                {/* pagination section */}
                <HomeDots className="mt-[41px] w-[8%] gap-5 md:w-full md:flex-row sm:flex-col" />
              </div>
            </div>
          </div>

          {/* footer section */}
          <Footer className="pb-[30px] sm:pb-5" />
        </div>
      </div>
    </>
  );
}
