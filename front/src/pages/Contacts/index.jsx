import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading } from "../../components";
import ContactsRowview from "../../components/ContactsRowview";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeDots from "../../components/HomeDots";
import ProjectsMedia from "../../components/ProjectsMedia";

export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Contact Elias - Web Designer & Front-End Developer</title>
        <meta
          name="description"
          content="Get in touch with Elias, a professional web designer and front-end developer. Explore freelance opportunities or ask questions. Contact now for collaboration."
        />
      </Helmet>

      {/* contact info section */}
      <div className="relative h-[790px] w-full bg-blue_gray-900 md:h-auto">
        {/* header section */}
        <div className="flex w-full flex-col items-center">
          <div className="container-sm relative z-[2] flex flex-col gap-[52px] md:p-5 sm:gap-[26px]">
            <Header className="sm:flex-col sm:pt-5" />
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-wrap">
                <Heading as="h1" className="!text-purple-200">
                  /
                </Heading>
                <Heading as="h2">contacts</Heading>
              </div>
              <Text as="p" className="!text-white-A700">
                Who am i?
              </Text>
            </div>
          </div>

          {/* profile section */}
          <div className="relative mt-[-190px] flex flex-col items-start self-stretch overflow-auto">
            <ProjectsMedia className="relative z-[1] w-[2%] md:ml-0 md:w-full md:gap-2 md:p-5" />
            <div className="relative mt-[-55px] flex w-full flex-col items-end">
              {/* media links section */}
              <div className="self-stretch pl-[31px] pr-[50px] md:pr-5 sm:px-5">
                <div className="flex flex-col gap-[83px] md:gap-[62px] sm:gap-[41px]">
                  <div className="flex items-center justify-between gap-5 md:flex-col">
                    <HomeDots className="mb-[49px] w-[8%] gap-[11px] self-end md:w-full md:flex-row sm:flex-col" />
                    <div className="flex w-[87%] justify-center md:w-full">
                      <div className="flex w-full flex-col gap-[21px]">
                        <div className="flex items-start justify-between gap-5">
                          <div className="flex flex-wrap">
                            <Text size="md" as="p" className="!text-purple-200">
                              #
                            </Text>
                            <Text size="md" as="p" className="self-start !text-white-A700">
                              all-media
                            </Text>
                          </div>
                          <Img
                            src="images/img_rectangle_25_4.png"
                            alt="feature image"
                            className="mb-[33px] h-[155px] w-[6%] object-cover"
                          />
                        </div>
                        <div className="flex gap-[22px]">
                          <div className="flex items-center gap-[5px]">
                            <Img src="images/img_trash.svg" alt="trash icon" className="h-[32px] w-[32px]" />
                            <Text as="p">@elias</Text>
                          </div>
                          <div className="flex items-center gap-[5px] self-start">
                            <Img src="images/img_trash.svg" alt="trash icon alt" className="h-[32px] w-[32px]" />
                            <Text as="p">@elias</Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* footer section */}
                  <Footer />
                </div>
              </div>
              <div className="mt-5 flex w-[7%] flex-col gap-5 md:w-full md:flex-row md:p-5 sm:flex-col">
                {[...Array(4)].map((d, index) => (
                  <ContactsRowview key={"secondaryList" + index} />
                ))}
              </div>
              <Img
                src="images/img_rectangle_25_5.png"
                alt="secondary image"
                className="ml-[31px] mt-[351px] h-[155px] w-[6%] self-start object-cover md:ml-0"
              />
              <HomeDots className="mr-[27px] mt-3.5 w-[7%] gap-5 md:mr-0 md:w-full md:flex-row md:p-5 sm:flex-col" />
            </div>
          </div>
        </div>

        {/* freelance opportunities section */}
        <div className="absolute left-0 right-0 top-[30%] m-auto flex w-[78%] items-start justify-between gap-5 md:relative md:flex-col">
          <Text as="p" className="w-[48%] !font-medium leading-[26px] md:w-full md:p-5">
            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to
            contact me
          </Text>
          <div className="flex items-start gap-[11px] md:p-5 sm:flex-col">
            <div className="flex flex-col items-start gap-1.5 border border-solid border-blue_gray-200 px-4 pb-[15px] pt-[17px]">
              <Text as="p" className="!font-medium !text-white-A700">
                Support me here
              </Text>
              <Text as="p">4149500120690030</Text>
            </div>
            <div className="flex flex-col items-start gap-3.5 border border-solid border-blue_gray-200 px-4 pb-4 pt-[17px]">
              <Heading size="xs" as="h2">
                Message me here
              </Heading>
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-start gap-[5px]">
                  <Img src="images/img_user_blue_gray_200_32x32.svg" alt="user icon" className="h-[32px] w-[32px]" />
                  <Text as="p" className="mt-1">
                    Elias#1234
                  </Text>
                </div>
                <div className="flex items-center gap-[5px]">
                  <Img src="images/img_lock.svg" alt="email icon" className="h-[32px] w-[32px]" />
                  <Text as="p">elias@elias-dev.ml</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
