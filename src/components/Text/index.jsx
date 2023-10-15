import React from "react";

const sizeClasses = {
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsBold18: "font-bold font-poppins",
  txtOpenSansRomanRegular16WhiteA700: "font-normal font-opensans",
  txtPoppinsRegular20Black900: "font-normal font-poppins",
  txtPoppinsBold18RedA200: "font-bold font-poppins",
  txtPoppinsBold35: "font-bold font-poppins",
  txtOpenSansRomanBold16: "font-bold font-opensans",
  txtOpenSansRomanBold14: "font-bold font-opensans",
  txtOpenSansRomanBold18: "font-bold font-opensans",
  txtOpenSansRomanRegular20: "font-normal font-opensans",
  txtOpenSansRomanBold35: "font-bold font-opensans",
  txtOpenSans14: "font-normal font-opensans",
  txtOpenSans17: "font-normal font-opensans",
  txtInterBold18: "font-bold font-inter",
  txtPoppinsBold20: "font-bold font-poppins",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtOpenSansRomanBold18RedA200: "font-bold font-opensans",
  txtOpenSansRomanBold20Lightblue800: "font-bold font-opensans",
  txtPoppinsBold24: "font-bold font-poppins",
  txtOpenSansRomanRegular14: "font-normal font-opensans",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsBold18Black900: "font-bold font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtOpenSansRomanBold20: "font-bold font-opensans",
  txtOpenSansRomanBold24: "font-bold font-opensans",
  txtOpenSansRomanBold65: "font-bold font-opensans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
