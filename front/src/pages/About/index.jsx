import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeDots from "../../components/HomeDots";
import HomeRowlanguages from "../../components/HomeRowlanguages";
import ProjectsMedia from "../../components/ProjectsMedia";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Elias - Front-End Developer and Designer</title>
        <meta
          name="description"
          content="Learn more about Elias, a self-taught front-end developer from Kyiv, Ukraine. His passion for web development and design is evident in his work and the modern web experiences he creates."
        />
      </Helmet>

      {/* about page section */}
      <div className="w-full bg-blue_gray-900">
        {/* main content section */}
        <div className="flex flex-col gap-[86px] md:gap-16 sm:gap-[43px]">
          {/* header section */}
          <div className="relative h-[1493px] md:h-auto">
            {/* navigation section */}
            <div className="flex w-full flex-col items-center">
              {/* title section */}
              <div className="container-sm relative z-[2] flex flex-col gap-[52px] md:p-5 sm:gap-[26px]">
                <Header className="sm:flex-col sm:pt-5" />
                <div className="flex flex-col items-start gap-[13px]">
                  <div className="flex flex-wrap">
                    <Heading as="h1" className="!text-purple-200">
                      /
                    </Heading>
                    <Heading as="h2">about-me</Heading>
                  </div>
                  <Text as="p" className="!text-white-A700">
                    Who am i?
                  </Text>
                </div>
              </div>

              {/* profile section */}
              <div className="relative mt-[-190px] flex flex-col items-start self-stretch overflow-auto">
                <ProjectsMedia className="relative z-[1] w-[2%] md:ml-0 md:w-full md:gap-2 md:p-5" />

                {/* skills section */}
                <div className="relative mt-[-55px] w-full pl-[31px] pr-[50px] md:pr-5 sm:px-5">
                  <div className="flex flex-col items-end">
                    <div className="flex items-start justify-between gap-5 self-stretch">
                      <HomeDots className="w-[8%] gap-[11px] md:flex-row sm:flex-col" />
                      <Img
                        src="images/img_rectangle_25_2.png"
                        alt="primary image"
                        className="mb-[39px] h-[155px] w-[5%] object-cover"
                      />
                    </div>

                    {/* fun facts section */}
                    <div className="mt-[317px] flex w-[91%] items-start justify-between gap-5 md:w-full md:flex-col">
                      <div className="container-xs mt-[50px] flex flex-col gap-12 md:p-5">
                        <div className="flex flex-wrap">
                          <Text size="md" as="p" className="!text-purple-200">
                            #
                          </Text>
                          <Text size="md" as="p" className="self-start !text-white-A700">
                            skills
                          </Text>
                        </div>
                        <div className="flex items-start gap-4 md:flex-col">
                          <HomeRowlanguages
                            vscode="TypeScript"
                            neovim="Lua"
                            figma="Python"
                            xfce="JavaScript"
                            className="w-full flex-col items-start gap-[7px] pb-[7px] pt-2"
                          />
                          <HomeRowlanguages
                            vscode="HTML"
                            neovim="CSS"
                            linux="SCSS"
                            figma="REST"
                            xfce="Jinja"
                            className="w-full flex-col items-start gap-1.5 pb-1.5 pt-[7px]"
                          />
                          <HomeRowlanguages
                            tools="Tools"
                            linux="Linux"
                            xfce="XFCE"
                            arch="Arch"
                            git="Git"
                            fontawesome="Font Awesome"
                            kde="KDE"
                            fish="fish"
                            className="items-center px-[7px] pb-2 pt-[7px]"
                          />
                          <HomeRowlanguages
                            tools="Databases"
                            vscode="SQLite"
                            neovim="PostgreSQL"
                            figma="Mongo"
                            className="w-full flex-col items-start gap-[7px] pb-2 pt-[7px]"
                          />
                          <HomeRowlanguages
                            vscode="React"
                            neovim="Vue"
                            figma="Disnake"
                            xfce="Discord.js"
                            git="Flask"
                            fontawesome="Express.js"
                            className="w-full flex-col gap-[7px] pb-1.5 pt-[7px]"
                          />
                        </div>
                      </div>
                      <HomeDots className="w-[8%] gap-5 md:w-full md:flex-row sm:flex-col" />
                    </div>

                    {/* portfolio section */}
                    <div className="mt-[82px] flex items-start justify-between gap-5 self-stretch md:flex-col">
                      <div className="mb-[76px] flex w-[81%] items-center justify-between gap-5 md:w-full md:flex-col">
                        <Img
                          src="images/img_rectangle_25_3.png"
                          alt="secondary image"
                          className="mb-[41px] h-[155px] w-[7%] self-end object-cover md:w-full"
                        />
                        <div className="flex w-[85%] flex-col gap-[23px] md:w-full">
                          <div className="flex flex-wrap">
                            <Text size="md" as="p" className="self-start !text-purple-200">
                              #
                            </Text>
                            <Text size="md" as="p" className="self-end !text-white-A700">
                              my-fun-facts
                            </Text>
                          </div>
                          <div className="flex items-start justify-between gap-5 md:flex-col">
                            <div className="flex w-[64%] flex-col items-start gap-4 md:w-full">
                              <div className="flex gap-4 self-stretch">
                                <Button color="blue_gray_200" shape="square" className="w-full">
                                  I like winter more than summer
                                </Button>
                                <Button color="blue_gray_200" shape="square" className="w-full">
                                  I often bike with my friends
                                </Button>
                              </div>
                              <div className="flex flex-wrap gap-4">
                                <Text as="p" className="border border-solid border-blue_gray-200 p-2">
                                  <span className="text-blue_gray-200">I like&nbsp;</span>
                                  <span className="text-white-A700">pizza</span>
                                  <span className="text-blue_gray-200">&nbsp;and&nbsp;</span>
                                  <span className="text-white-A700">pasta</span>
                                </Text>
                                <Text as="p" className="border border-solid border-blue_gray-200 p-2">
                                  <span className="text-blue_gray-200">I was in&nbsp;</span>
                                  <span className="text-white-A700">Egypt</span>
                                  <span className="text-blue_gray-200">,&nbsp;</span>
                                  <span className="text-white-A700">Poland</span>
                                  <span className="text-blue_gray-200">&nbsp;and&nbsp;</span>
                                  <span className="text-white-A700">Turkey</span>
                                </Text>
                              </div>
                              <div className="flex gap-[17px]">
                                <Text as="p" className="border border-solid border-blue_gray-200 p-2">
                                  <span className="text-blue_gray-200">My favorite movie is&nbsp;</span>
                                  <span className="text-white-A700">The Green Mile</span>
                                </Text>
                                <Button color="blue_gray_200" shape="square" className="min-w-[208px]">
                                  I am still in school
                                </Button>
                              </div>
                              <Button color="blue_gray_200" shape="square" className="min-w-[256px]">
                                I don’t have any siblings
                              </Button>
                            </div>
                            <div className="flex w-[19%] flex-col items-start gap-10 md:w-full">
                              <Img src="images/img_grid.svg" alt="grid image" className="h-[16px] w-[16px]" />
                              <Img
                                src="images/img_logo.svg"
                                alt="logo image"
                                className="h-[113px] w-[113px] self-end"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <HomeDots className="w-[8%] gap-5 md:w-full md:flex-row sm:flex-col" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* introduction section */}
            <div className="absolute left-0 right-0 top-[13%] m-auto flex w-full max-w-[1028px] items-center justify-between gap-5 pl-1.5 md:relative md:flex-col md:p-5">
              <Text as="p" className="w-[50%] leading-[25px] md:w-full">
                <>
                  Hello, i’m Elias!
                  <br />
                  <br />
                  I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                  scratch and raise them into modern user-friendly web experiences. <br />
                  <br />
                  Transforming my creativity and knowledge into a websites has been my passion for over a year. I have
                  been helping various clients to establish their presence online. I always strive to learn about the
                  newest technologies and frameworks.
                </>
              </Text>
              <div className="relative h-[508px] w-[34%] md:w-full">
                <Img
                  src="images/img_image_507x339.png"
                  alt="profile image"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[507px] w-full object-cover"
                />
                <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-[95%] flex-col gap-[68px] pb-[173px] md:flex-row md:pb-5">
                  <div className="flex w-[26%] flex-col gap-4 md:w-full">
                    <div className="flex gap-4">
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                    </div>
                    <div className="flex gap-4">
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                    </div>
                    <div className="flex gap-4">
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                    </div>
                    <div className="flex gap-4">
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                    </div>
                    <div className="flex gap-4">
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                    </div>
                  </div>
                  <div className="h-px w-[271px] bg-purple-200" />
                  <div className="flex w-[32%] flex-col gap-[13px] md:w-full">
                    <div className="flex justify-between gap-5">
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                    </div>
                    <div className="flex justify-between gap-5">
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                    </div>
                    <div className="flex justify-between gap-5">
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                    </div>
                    <div className="flex justify-between gap-5">
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
                    </div>
                  </div>
                </div>
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
