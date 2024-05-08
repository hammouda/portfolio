import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button, Input, CheckBox } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeColumnview from "../../components/HomeColumnview";
import HomeDots from "../../components/HomeDots";
import HomeRowlanguages from "../../components/HomeRowlanguages";
import HomeRowline7stroke from "../../components/HomeRowline7stroke";

export default function Home1Page() {
  return (
    <>
      <Helmet>
        <title>Elias - Web Design and Development Expert</title>
        <meta
          name="description"
          content="Elias is a Kyiv-based web designer and front-end developer specializing in crafting responsive websites that blend technology with creativity. Explore his portfolio and contact him for unique web solutions."
        />
      </Helmet>

      {/* main content section */}
      <div className="w-full bg-blue_gray-900">
        <div className="flex flex-col gap-[85px] md:gap-[63px] sm:gap-[42px]">
          {/* navigation bar section */}
          <div className="ml-[17px] flex w-[87%] items-start justify-between gap-5 md:ml-0 md:w-full md:flex-col md:p-5">
            {/* media icons section */}
            <div className="flex w-[3%] flex-col items-center gap-2 bg-blue_gray-900 md:w-full">
              <div className="h-[191px] w-px bg-blue_gray-200" />
              <div className="flex flex-col gap-2">
                <Img src="images/img_user.svg" alt="user icon" className="h-[32px]" />
                <Img src="images/img_globe.svg" alt="globe icon" className="h-[32px]" />
                <Img src="images/img_settings.svg" alt="settings icon" className="h-[32px]" />
              </div>
            </div>

            {/* header section */}
            <div className="container-sm flex flex-col gap-[62px] sm:gap-[31px]">
              <Header className="sm:flex-col sm:pt-5" />

              {/* hero section */}
              <div className="flex items-start gap-[18px] md:flex-col">
                <div className="mt-[74px] flex flex-1 flex-col items-start gap-7 md:self-stretch">
                  <Text size="md" as="p" className="w-full leading-[41px] !text-white-A700">
                    <span className="font-semibold text-white-A700">Elias is a&nbsp;</span>
                    <span className="font-semibold text-purple-200">web designer</span>
                    <span className="font-semibold text-white-A700">&nbsp;and&nbsp;</span>
                    <span className="font-semibold text-purple-200">front-end developer</span>
                  </Text>
                  <Text as="p" className="w-[86%] leading-[25px] md:w-full">
                    He crafts responsive websites where technologies meet creativity
                  </Text>
                  <Button shape="square" className="min-w-[148px] font-medium">
                    Contact me!!
                  </Button>
                </div>
                <div className="flex w-[47%] flex-col items-center md:w-full">
                  <div className="flex items-start self-stretch sm:flex-col">
                    <Img
                      src="images/img_logo.svg"
                      alt="company logo"
                      className="mt-[84px] h-[155px] w-[155px] sm:w-full"
                    />
                    <div className="relative ml-[-143px] h-[386px] flex-1 md:h-auto sm:ml-0 sm:w-full sm:flex-none sm:self-stretch">
                      <Img src="images/img_image.png" alt="profile image" className="h-[386px] w-full object-cover" />
                      <HomeDots className="absolute bottom-[15%] right-[16.00px] m-auto w-[18%] gap-4 md:flex-row sm:relative sm:flex-col" />
                    </div>
                  </div>
                  <CheckBox
                    name="Work Checkbox"
                    label="Currently working on Portfolio"
                    id="WorkCheckbox"
                    className="gap-2.5 border border-solid border-blue_gray-200 bg-blue_gray-900 py-2 pr-[35px] text-base text-blue_gray-200 sm:pr-5"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* testimonials section */}
          <div className="flex w-[76%] items-start justify-between gap-5 self-end md:w-full md:flex-col md:p-5">
            <div className="flex">
              <div className="flex flex-col items-end">
                <div className="flex flex-col items-start">
                  <div className="relative z-[1] ml-[11px] flex bg-blue_gray-900 p-1 md:ml-0">
                    <Img src="images/img_user_blue_gray_200.svg" alt="user avatar" className="h-[20px]" />
                  </div>
                  <div className="relative mt-[-14px] flex self-center border border-solid border-blue_gray-200 bg-blue_gray-900 px-8 pb-[29px] pt-[33px] sm:p-5">
                    <Text size="s" as="p" className="!text-white-A700">
                      With great power comes great electricity bill
                    </Text>
                  </div>
                </div>
                <div className="relative mt-[-15px] flex flex-col items-end">
                  <div className="relative z-[2] mr-[15px] flex bg-blue_gray-900 p-1 md:mr-0">
                    <Img src="images/img_user_blue_gray_200.svg" alt="secondary avatar" className="h-[20px]" />
                  </div>
                  <div className="relative mt-[-13px] flex self-center border border-solid border-blue_gray-200 p-[15px]">
                    <Text size="s" as="p" className="!font-normal !text-white-A700">
                      - Dr. Who
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_rectangle_26.png"
              alt="decorative image"
              className="mt-7 h-[91px] w-[8%] object-cover md:w-full"
            />
          </div>
          <div className="flex flex-col items-center">
            {/* projects section */}
            <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
              <HomeDots className="mt-[65px] w-[6%] gap-4 md:w-full md:flex-row md:p-5 sm:flex-col" />
              <div className="mx-auto flex w-full max-w-[1027px] flex-col gap-[46px] md:p-5">
                <div className="flex items-start justify-between gap-5 md:flex-col">
                  <div className="flex w-[68%] items-start justify-between gap-5 md:w-full md:flex-col">
                    <div className="flex flex-wrap">
                      <Text size="md" as="p" className="self-start !text-purple-200">
                        #
                      </Text>
                      <Text size="md" as="p" className="!text-white-A700">
                        projects
                      </Text>
                    </div>
                    <div className="mt-5 h-px flex-1 bg-purple-200 md:self-stretch" />
                  </div>
                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                    <Text as="p" className="mt-[9px] !font-medium !text-white-A700">
                      View all ~~&gt;
                    </Text>
                  </a>
                </div>
                <div className="flex gap-4 md:flex-col">
                  <div className="flex w-full flex-col border border-solid border-blue_gray-200">
                    <Img src="images/img_rectangle_22.png" alt="project image" className="h-[201px] object-cover" />
                    <div className="flex flex-col">
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
                  </div>
                  <div className="flex w-full flex-col border border-solid border-blue_gray-200">
                    <Img
                      src="images/img_rectangle_22_201x330.png"
                      alt="project thumbnail"
                      className="h-[201px] object-cover"
                    />
                    <div className="flex flex-col">
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
                    </div>
                    <div className="flex flex-col items-start gap-[15px] border-t border-solid border-blue_gray-200 px-4 pb-4 pt-[15px]">
                      <Text size="s" as="p" className="!text-white-A700">
                        ProtectX
                      </Text>
                      <Text as="p">Discord anti-crash bot</Text>
                      <Button shape="square" className="min-w-[109px] font-medium">
                        Live &lt;~&gt;
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-full flex-col border border-solid border-blue_gray-200">
                    <Img src="images/img_rectangle_22_1.png" alt="image" className="h-[201px] object-cover" />
                    <div className="flex flex-col">
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
                  </div>
                </div>
              </div>
              <Img
                src="images/img_rectangle_25.png"
                alt="image four"
                className="mb-[93px] h-[155px] w-[5%] object-cover md:w-full"
              />
            </div>

            {/* skills section */}
            <div className="container-xs mt-[104px] flex items-start gap-[49px] md:flex-col md:p-5">
              <div className="mb-[29px] flex w-[40%] flex-col items-end gap-3 md:w-full">
                <HomeRowline7stroke className="self-stretch" />
                <div className="mr-2.5 flex w-[92%] flex-col gap-[42px] md:mr-0 md:w-full">
                  <div className="flex w-[90%] items-start justify-between gap-5 md:w-full">
                    <HomeDots
                      dynamicprop1={true}
                      dynamicprop2={true}
                      dynamicprop6={true}
                      dynamicprop7={true}
                      dynamicprop8={true}
                      dynamicprop9={true}
                      dynamicprop10={true}
                      dynamicprop11={true}
                      dynamicprop12={true}
                      dynamicprop16={true}
                      dynamicprop17={true}
                      dynamicprop18={true}
                      dynamicprop19={true}
                      dynamicprop20={true}
                      dynamicprop21={true}
                      dynamicprop22={true}
                      className="w-[20%] gap-2.5"
                    />
                    <div className="mb-[15px] h-[86px] w-[27%] border border-solid border-blue_gray-200" />
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-5">
                    <div className="flex w-[67%] items-start justify-between gap-5">
                      <Img src="images/img_logo.svg" alt="company logo" className="mt-[26px] h-[113px] w-[113px]" />
                      <HomeDots
                        dynamicprop1={true}
                        dynamicprop2={true}
                        dynamicprop6={true}
                        dynamicprop7={true}
                        dynamicprop8={true}
                        dynamicprop9={true}
                        dynamicprop10={true}
                        dynamicprop11={true}
                        dynamicprop12={true}
                        dynamicprop16={true}
                        dynamicprop17={true}
                        dynamicprop18={true}
                        dynamicprop19={true}
                        dynamicprop20={true}
                        dynamicprop21={true}
                        dynamicprop22={true}
                        className="w-[28%] gap-2.5"
                      />
                    </div>
                    <div className="mb-[37px] h-[52px] w-[16%] self-end border border-solid border-blue_gray-200" />
                  </div>
                </div>
              </div>

              {/* contact section */}
              <div className="flex-1 md:self-stretch">
                <div className="flex items-start gap-4 sm:flex-col">
                  <div className="flex flex-1 flex-col items-end gap-4 sm:self-stretch">
                    <div className="flex gap-4 self-stretch sm:flex-col">
                      <div className="flex w-full flex-col gap-[7px] border border-solid border-blue_gray-200 pb-[7px] pt-2 sm:w-full">
                        <Input shape="square" name="Language Input" placeholder={`Languages`} />
                        <div className="flex flex-col items-start gap-[7px] px-2">
                          <div className="flex flex-wrap items-center gap-[9px]">
                            <Text as="p">TypeScript</Text>
                            <Text as="p" className="self-start">
                              Lua
                            </Text>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <Text as="p">Python</Text>
                            <Text as="p">JavaScript</Text>
                          </div>
                        </div>
                      </div>
                      <HomeRowlanguages
                        vscode="SQLite"
                        neovim="PostgreSQL"
                        figma="Mongo"
                        className="w-full flex-col gap-[7px] pb-2 pt-[7px] sm:w-full"
                      />
                    </div>
                    <HomeRowlanguages
                      tools="Other"
                      vscode="HTML"
                      neovim="CSS"
                      linux="SCSS"
                      figma="REST"
                      xfce="Jinja"
                      className="w-[48%] flex-col items-start gap-2 pb-1.5 pt-[7px] md:w-full"
                    />
                  </div>
                  <div className="flex w-[35%] flex-col gap-4 sm:w-full">
                    <HomeRowlanguages
                      linux="Linux"
                      xfce="XFCE"
                      arch="Arch"
                      git="Git"
                      fontawesome="Font Awesome"
                      className="flex-col gap-1.5 py-[7px]"
                    />
                    <HomeRowlanguages
                      vscode="React"
                      neovim="Vue"
                      figma="Disnake"
                      xfce="Discord.js"
                      git="Flask"
                      fontawesome="Express.js"
                      className="flex-col gap-[7px] pb-1.5 pt-[7px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[111px] flex items-start justify-between gap-5 self-stretch overflow-auto md:flex-col">
              <Img
                src="images/img_rectangle_25_155x78.png"
                alt="image five"
                className="mt-[134px] h-[155px] w-[6%] object-cover md:w-full"
              />

              {/* about me section */}
              <div className="container-sm flex items-start justify-between gap-5 md:flex-col md:p-5">
                <div className="flex w-[50%] flex-col gap-[23px] md:w-full">
                  <HomeRowline7stroke dynamictext1="about-me" />
                  <div className="flex flex-col items-start gap-[27px]">
                    <Text as="p" className="w-full leading-[26px]">
                      <>
                        Hello, i’m Elias!
                        <br />
                        <br />
                        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites
                        from scratch and raise them into modern user-friendly web experiences. <br />
                        <br />
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I
                        have been helping various clients to establish their presence online. I always strive to learn
                        about the newest technologies and frameworks.
                      </>
                    </Text>
                    <Button shape="square" className="min-w-[148px] font-medium">
                      Read more -&gt;
                    </Button>
                  </div>
                </div>
                <div className="relative h-[508px] w-[33%] md:w-full">
                  <Img
                    src="images/img_image_507x339.png"
                    alt="profile image"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[507px] w-full object-cover"
                  />
                  <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-[95%] flex-col gap-[68px] pb-[173px] md:flex-row md:pb-5">
                    {[...Array(2)].map((d, index) => (
                      <HomeColumnview key={"skillsList" + index} className="w-[26%] gap-4 md:w-full" />
                    ))}
                  </div>
                </div>
              </div>

              {/* footer links section */}
              <HomeDots className="relative z-[4] mb-[102px] w-[8%] gap-[45px] md:w-full md:flex-col md:p-5" />
            </div>
            <div className="container-sm mt-[111px] md:p-5">
              <HomeRowline7stroke dynamictext1="contacts" />
            </div>
            <div className="mt-11 flex w-[91%] items-start justify-center self-start pr-[51px] md:w-full md:flex-col md:p-5 md:pr-5">
              <HomeDots
                dynamicprop8={true}
                dynamicprop9={true}
                dynamicprop10={true}
                dynamicprop18={true}
                dynamicprop19={true}
                dynamicprop20={true}
                className="mt-[7px] w-[14%] gap-5 md:w-full"
              />
              <Text as="p" className="ml-[118px] w-[66%] !font-medium leading-5 md:ml-0 md:w-full">
                I’m interested in freelance opportunities. However, if you have other request or question, don’t
                hesitate to contact me
              </Text>
              <div className="ml-[314px] flex flex-col items-start gap-3.5 border border-solid border-blue_gray-200 px-4 pb-4 pt-[17px] md:ml-0">
                <Heading size="xs" as="h1">
                  Message me here
                </Heading>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-start gap-[7px]">
                    <Img src="images/img_user_blue_gray_200_32x32.svg" alt="user image" className="h-[32px] w-[32px]" />
                    <Text as="p" className="mt-1">
                      !Elias#3519
                    </Text>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <Img src="images/img_lock.svg" alt="lock image" className="h-[32px] w-[32px]" />
                    <Text as="p">elias@elias.me</Text>
                  </div>
                </div>
              </div>
            </div>

            {/* footer section */}
            <Footer className="mt-[145px] self-stretch pb-[30px] sm:pb-5" />
          </div>
        </div>
      </div>
    </>
  );
}
