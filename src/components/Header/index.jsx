import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[45px] sm:h-auto md:ml-[0] ml-[127px] md:mt-0 my-5 object-cover w-[9%] md:w-full"
          src="images/img_image1.png"
          alt="imageOne"
        />
        
        <div className="flex flex-row gap-0.5 h-[62px] md:h-auto items-center justify-start ml-8 md:ml-[0] md:mt-0 my-[11px] p-4 w-auto">
          <Text
            className="text-black-900 text-lg w-auto"
            size="txtPoppinsBold18Black900"
          >
            Solutions
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowdown.svg"
            alt="arrowdown"
          />
        </div>
        <div className="flex flex-row gap-0.5 h-[62px] md:h-auto items-center justify-start ml-2 md:ml-[0] md:mt-0 my-[11px] p-4 w-auto">
          <Text
            className="text-black-900 text-lg w-auto"
            size="txtPoppinsBold18Black900"
          >
            Features
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowdown.svg"
            alt="arrowdown_One"
          />
        </div>
        <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] md:mt-0 my-[11px] p-4 w-auto">
          <Text
            className="text-black-900 text-lg w-auto"
            size="txtPoppinsBold18Black900"
          >
            Blogs
          </Text>
        </div>
        <div className="flex flex-row gap-0.5 h-[62px] md:h-auto items-center justify-start ml-2 md:ml-[0] md:mt-0 my-[11px] p-4 w-auto">
          <Text
            className="text-black-900 text-lg w-auto"
            size="txtPoppinsBold18Black900"
          >
            About
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowdown.svg"
            alt="arrowdown_Two"
          />
        </div>
        <Button
          className="cursor-pointer font-bold font-poppins md:ml-[0] ml-[388px] md:mt-0 my-[19px] text-base text-center w-[100px]"
          shape="round"
          color="light_blue_800"
          size="sm"
          variant="outline"
        >
          Login
        </Button>
        <Button
          className="cursor-pointer font-bold font-poppins ml-4 md:ml-[0] mr-32 md:mt-0 my-[19px] text-base text-center w-[100px]"
          shape="round"
          color="light_blue_800"
          size="sm"
          variant="fill"
        >
          Register
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
