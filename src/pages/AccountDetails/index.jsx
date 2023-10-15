import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { Button, Img, Line, List, PagerIndicator, Text } from "components";
import { useParams } from "react-router-dom";
import img from '../../assets/images/Group.png'
import img1 from '../../assets/images/image.png'
import img2 from '../../assets/images/star-fill.png'
import img3 from '../../assets/images/vector.png'

const AccountantDetails = () => {
  const { id } = useParams();
  const [accountant, setAccountant] = useState(null);

 
  useEffect(() => {
    fetch(`http://localhost:3001/accountants/${id}`)
      .then((response) => response.json())
      .then((data) => setAccountant(data));
  }, [id]);

  if (!accountant) {
   
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" /> */}
    <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
      <div className="flex flex-col items-center justify-start w-full">
      
        <div className="flex md:flex-col flex-row gap-[33px] items-start justify-start max-w-[1281px] mt-20 mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start pt-[7px] w-[41%] md:w-full">
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
              size="txtPoppinsBold35"
            >
             {accountant?.name}
            </Text>
            <Text
              className="leading-[32.00px] mt-[17px] text-black-900 text-xl w-full"
              size="txtPoppinsRegular20Black900"
            >
              <>
              {accountant?.intro}
              </>
            </Text>
            <div className="flex flex-row font-opensans gap-2 items-center justify-start mt-8 w-[22%] md:w-full">
              <Img
                className="h-6 w-6"
                src={img2}
                alt="starfill"
              />
              <Text
                className="text-light_blue-800 text-xl"
                size="txtOpenSansRomanBold20Lightblue800"
              >
                <span className="text-light_blue-800 font-poppins text-left font-bold">
                  {accountant?.rating}{" "}
                </span>
                <span className="text-black-900 font-poppins text-left font-normal">
                  ({accountant?.reviewCount})
                </span>
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mt-[33px] p-[23px] sm:px-5 rounded-[20px] shadow-bs w-full">
              <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="mt-1 text-black-900 text-xl"
                    size="txtPoppinsRegular20Black900"
                  >
                    {accountant?.taskComplexity}
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    {accountant?.price}
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-start justify-start mt-8 w-[70%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src={img3}
                    alt="calendar2line"
                  />
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsRegular20Black900"
                  >
                    {accountant?.deliveryTime}
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between mt-[22px] w-full">
                  <Button
                    className="cursor-pointer font-bold text-base text-center w-[220px]"
                    shape="round"
                    color="light_blue_800"
                    size="sm"
                    variant="fill"
                  >
                    Request Proposal
                  </Button>
                  <Button
                    className="cursor-pointer font-bold text-base text-center w-[220px]"
                    shape="round"
                    color="light_blue_800"
                    size="sm"
                    variant="outline"
                  >
                    Chat with me
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col font-poppins items-start justify-end mt-8 p-[22px] sm:px-5 rounded-[20px] shadow-bs w-full">
              <Text
                className="md:ml-[0] ml-[7px] mt-2.5 sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                size="txtPoppinsBold35"
              >
                What people say?
              </Text>
              <Text
                className="leading-[32.00px] md:ml-[0] ml-[7px] mt-[11px] text-black-900 text-xl w-[99%] sm:w-full"
                size="txtPoppinsRegular20Black900"
              >
               {accountant?.testimonial?.text}
              </Text>
              <PagerIndicator
                className="flex h-2.5 justify-center md:ml-[0] ml-[193px] mt-[59px] w-[86px]"
                count={4}
                activeCss="inline-block cursor-pointer h-2.5 bg-light_blue-800 w-8 rounded-[5px]"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray-400_02 w-2.5"
                selectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start w-[58%] md:w-full">
            <div className="h-[412px] relative w-full">
              <Img
                className="h-[412px] m-auto object-cover rounded-[20px] w-full"
                src={img}
                alt="rectangle376"
              />
              <PagerIndicator
                className="absolute bottom-[5%] flex h-2.5 inset-x-[0] justify-center mx-auto w-[86px]"
                count={4}
                activeCss="inline-block cursor-pointer h-2.5 bg-light_blue-800 w-8 relative rounded-[5px]"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray-600 w-2.5 relative"
                selectedWrapperCss="inline-block mx-[4.00px]"
                unselectedWrapperCss="inline-block mx-[4.00px]"
              />
            </div>
            <Text
              className="mt-[30px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
              size="txtPoppinsBold35"
            >
              About {accountant?.name}
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-7 w-[88%] md:w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start">
                <Text
                  className="text-base text-gray-500"
                  size="txtPoppinsBold16"
                >
                  FROM
                </Text>
                <Text
                  className="text-black-900 text-xl"
                  size="txtPoppinsRegular20Black900"
                >
                  {accountant?.about?.from}
                </Text>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[165px]">
                <Text
                  className="text-base text-gray-500"
                  size="txtPoppinsBold16"
                >
                  PARTNER SINCE
                </Text>
                <Text
                  className="text-black-900 text-xl"
                  size="txtPoppinsRegular20Black900"
                >
                   {accountant?.about?.partnerSince}
                </Text>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[95px]">
                <Text
                  className="text-base text-gray-500"
                  size="txtPoppinsBold16"
                >
                  AVERAGE RESPONSE TIME
                </Text>
                <Text
                  className="text-black-900 text-xl"
                  size="txtPoppinsRegular20Black900"
                >
                   {accountant?.about?.averageResponseTime}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start mt-[38px] w-full">
              <Text
                className="text-base text-gray-500"
                size="txtPoppinsBold16"
              >
                ABOUT
              </Text>
              <Text
                className="leading-[34.00px] text-black-900 text-xl w-full"
                size="txtPoppinsRegular20Black900"
              >
               {accountant?.about?.description}
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-8 items-start justify-between mt-9 w-full">
              <div className="flex flex-col gap-3 items-start justify-start">
                <Text
                  className="text-base text-gray-500"
                  size="txtPoppinsBold16"
                >
                  SERVICES I OFFER
                </Text>
                <Text
  className="leading-[36.00px] text-black-900 text-xl"
  size="txtPoppinsRegular20Black900"
>
  {accountant?.about?.services?.map((service) => (
    <React.Fragment key={service}>
      {service}
      <br />
    </React.Fragment>
  ))}
</Text>

              </div>
              <div className="flex flex-col gap-3 items-start justify-start">
                <Text
                  className="text-base text-gray-500"
                  size="txtPoppinsBold16"
                >
                  WHY ME?
                </Text>
                <Text
  className="leading-[36.00px] text-black-900 text-xl"
  size="txtPoppinsRegular20Black900"
>
  {accountant?.about?.benefits?.map((service) => (
    <React.Fragment key={service}>
      {service}
      <br />
    </React.Fragment>
  ))}
</Text>

              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-start justify-start max-w-[1279px] mt-[135px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
            size="txtPoppinsBold35"
          >
            Recommended for you
          </Text>
          <List
            className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-5 rounded-[20px] shadow-bs w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                <Img
                  className="h-[244px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                 src={img}
                  alt="rectangle376"
                />
                <div className="flex flex-col items-start justify-start w-[91%] md:w-full">
                  <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Michael Jackson
                    </Text>
                    <Text
                      className="text-black-900 text-right text-xl"
                      size="txtPoppinsBold20"
                    >
                      ₹4,370
                    </Text>
                  </div>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-1 text-base text-black-900 w-full"
                    size="txtPoppinsRegular16"
                  >
                    I will do business evaluation and corporate services
                  </Text>
                  <div className="flex flex-row font-opensans items-start justify-start mt-3 w-[26%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src={img2}
                      alt="starfill"
                    />
                    <Text
                      className="ml-[5px] mt-0.5 text-base text-light_blue-800"
                      size="txtOpenSansRomanBold16"
                    >
                      <span className="text-light_blue-800 font-poppins text-left font-bold">
                        4.8{" "}
                      </span>
                      <span className="text-black-900 font-poppins text-left font-normal">
                        (89)
                      </span>
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold mt-[31px] text-base text-center w-[365px]"
                    shape="round"
                    color="light_blue_800"
                    size="sm"
                    variant="fill"
                  >
                    View services
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-5 rounded-[20px] shadow-bs w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                <Img
                  className="h-[244px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                  src={img}
                  alt="rectangle376"
                />
                <div className="flex flex-col items-start justify-start w-[91%] md:w-full">
                  <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Stevie Wonder
                    </Text>
                    <Text
                      className="text-black-900 text-right text-xl"
                      size="txtPoppinsBold20"
                    >
                      ₹4,263
                    </Text>
                  </div>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-1 text-base text-black-900 w-full"
                    size="txtPoppinsRegular16"
                  >
                    I will do business evaluation and corporate services
                  </Text>
                  <div className="flex flex-row font-opensans items-start justify-start mt-3 w-1/4 md:w-full">
                    <Img
                      className="h-6 w-6"
                      src={img2}
                      alt="starfill"
                    />
                    <Text
                      className="ml-[5px] mt-0.5 text-base text-light_blue-800"
                      size="txtOpenSansRomanBold16"
                    >
                      <span className="text-light_blue-800 font-poppins text-left font-bold">
                        5.0{" "}
                      </span>
                      <span className="text-black-900 font-poppins text-left font-normal">
                        (62)
                      </span>
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold mt-[31px] text-base text-center w-[365px]"
                    shape="round"
                    color="light_blue_800"
                    size="sm"
                    variant="fill"
                  >
                    View services
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-5 rounded-[20px] shadow-bs w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[244px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                  src={img}
                  alt="rectangle376"
                />
                <div className="flex flex-col items-start justify-start w-[91%] md:w-full">
                  <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Ray Charles
                    </Text>
                    <Text
                      className="text-black-900 text-right text-xl"
                      size="txtPoppinsBold20"
                    >
                      ₹2,586
                    </Text>
                  </div>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-0.5 text-base text-black-900 w-full"
                    size="txtPoppinsRegular16"
                  >
                    I will do business evaluation and corporate services
                  </Text>
                  <div className="flex flex-row font-opensans items-start justify-start mt-3 w-[27%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src={img2}
                      alt="starfill"
                    />
                    <Text
                      className="ml-[5px] mt-0.5 text-base text-light_blue-800"
                      size="txtOpenSansRomanBold16"
                    >
                      <span className="text-light_blue-800 font-poppins text-left font-bold">
                        4.3{" "}
                      </span>
                      <span className="text-black-900 font-poppins text-left font-normal">
                        (189)
                      </span>
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold mt-[31px] text-base text-center w-[365px]"
                    shape="round"
                    color="light_blue_800"
                    size="sm"
                    variant="fill"
                  >
                    View services
                  </Button>
                </div>
              </div>
            </div>
          </List>
        </div>
        <footer className="flex font-opensans items-center justify-center mt-[132px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-gradient2  flex flex-col items-center justify-start p-[31px] sm:px-5 w-full">
              <div className="flex flex-col gap-8 items-center justify-start mb-[9px] w-[87%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start mb-[76px] w-[22%] md:w-full">
                    {/* <Img
                      className="h-[45px] md:h-auto object-cover w-[51%]"
                      src={img3}
                      alt="imageOne_One"
                    /> */}
                    <Text
                      className="leading-[22.00px] text-sm text-white-A700 w-full"
                      size="txtOpenSansRomanRegular14"
                    >
                      <>
                        India&#39;s first platform dedicated to simplifying
                        partner search
                      </>
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start mb-[38px] md:ml-[0] ml-[102px] md:mt-0 mt-[9px] w-[11%] md:w-full">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtOpenSansRomanBold14"
                    >
                      COMPANY
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSansRomanRegular16WhiteA700"
                      >
                        About{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5 w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSansRomanRegular16WhiteA700"
                      >
                        Pricing
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtOpenSansRomanRegular16WhiteA700">
                          Careers
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start ml-16 md:ml-[0] md:mt-0 mt-[9px] w-[11%] md:w-full">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtOpenSansRomanBold14"
                    >
                      SOLUTIONS
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSansRomanRegular16WhiteA700"
                      >
                        Search
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSansRomanRegular16WhiteA700"
                      >
                        Connect
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSansRomanRegular16WhiteA700"
                      >
                        Research
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSansRomanRegular16WhiteA700"
                      >
                        Academy
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start mb-[76px] ml-16 md:ml-[0] md:mt-0 mt-[9px] w-[11%] md:w-full">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtOpenSansRomanBold14"
                    >
                      RESOURCES
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSansRomanRegular16WhiteA700"
                      >
                        Blogs
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSansRomanRegular16WhiteA700"
                      >
                        Forms
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start mb-[76px] ml-16 md:ml-[0] md:mt-0 mt-[9px] w-[11%] md:w-full">
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtOpenSansRomanBold14">SUPPORT</Text>
                    </a>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSansRomanRegular16WhiteA700"
                      >
                        Help
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtOpenSansRomanRegular16WhiteA700">
                          Contact Us
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start mb-[38px] ml-16 md:ml-[0] md:mt-0 mt-[9px] w-[11%] md:w-full">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtOpenSansRomanBold14"
                    >
                      LEGAL
                    </Text>
                    <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5 w-full">
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtOpenSansRomanRegular16WhiteA700">
                          Privacy
                        </Text>
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSansRomanRegular16WhiteA700"
                      >
                        Terms
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSansRomanRegular16WhiteA700"
                      >
                        Accessibility
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-white-A700 h-px w-full" />
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtOpenSans14"
                  >
                    Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai -
                    400071, Maharashtra
                  </Text>
                  <div className="flex md:flex-1 flex-row gap-6 items-center justify-between w-[14%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_footerssocialicon.svg"
                      alt="footerssocialic"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_footerssocialicon_white_a700.svg"
                      alt="footerssocialic_One"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_linkedinlogo.svg"
                      alt="linkedinlogo"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_footerssocialicon_white_a700_24x24.svg"
                      alt="footerssocialic_Two"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer leading-[normal] min-w-[1536px] md:min-w-full text-center text-xs"
              shape="square"
              color="black_900"
              size="md"
              variant="fill"
            >
              Registered trademark of India Private Limited © 2023
              loerumipsum Inc. All Rights Reserved
            </Button>
          </div>
        </footer>
      </div>
    </div>
  </>


  );
};

export default AccountantDetails;
