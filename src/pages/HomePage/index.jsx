import React,{useState,useEffect} from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const HomePagePage = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [accountants, setAccountants] = useState([]);
  // const navigate = useNavigate();

  // const handleSearch = () => {
  //   fetch(`http://localhost:3001/accountants?name_like=${searchTerm}`)
  //     .then((response) => response.json())
  //     .then((data) => setAccountants(data));
  // };
  const [noDataFound, setNoDataFound] = useState(false); 

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
     
      setNoDataFound(true);
    } else {
     
      fetch(`http://localhost:3001/accountants?name_like=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setAccountants(data);
          setNoDataFound(data.length === 0);
        });
    }
  };

  return (
    <>
     <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />

    
          <div className="font-inter md:h-[1213px] sm:h-[335px] h-[592px] md:px-5 relative w-full">
            <div className="flex flex-col gap-4 h-full items-center justify-start ml-32 mt-11">
              <Text
                className="leading-[80.00px] md:text-5xl text-[65px] text-black-900 w-full"
                size="txtOpenSansRomanBold65"
              >
                <span className="text-black-900 font-poppins text-left font-bold">
                  Find{" "}
                </span>
                <span className="text-light_blue-800 font-poppins text-left font-bold">
                  Partners
                </span>
                <span className="text-black-900 font-poppins text-left font-bold">
                  {" "}
                  (CAs) available online
                </span>
              </Text>
              <Text
                className="leading-[30.00px] text-gray-700 text-xl w-full"
                size="txtPoppinsRegular20"
              >
                <span className="text-gray-700 font-opensans text-left font-bold">
                  CONNECT{" "}
                </span>
                <span className="text-gray-700 font-opensans text-left font-normal">
                  with us where your services are listed and visible to a myriad
                  of businesses seeking CA’s for compliance support
                </span>
              </Text>
            </div>
            <div className="absolute h-[592px] inset-[0] justify-center m-auto w-full">
              <div className="flex md:flex-col flex-row gap-[16.79px] items-start justify-center max-w-[629px] mb-[-152px] ml-auto mr-10 w-full z-[1]">
                <div className="flex flex-1 flex-col items-start justify-start pt-[83.97px] w-full">
                  <Img
                    className="h-[403px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[198px]"
                    src="images/img_picture.png"
                    alt="picture"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Img
                    className="h-[403px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[198px]"
                    src="images/img_picture_403x198.png"
                    alt="picture_One"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-start pt-[41.98px] w-full">
                  <Img
                    className="h-[403px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[198px]"
                    src="images/img_picture_1.png"
                    alt="picture_Two"
                  />
                </div>
              </div>
              <div className="md:h-[210px] h-[257px] mt-auto mx-auto w-full">
                

                <div className="absolute bg-white-A700 border border-gray-400 border-solid flex flex-row sm:gap-10 items-center justify-between left-[8%] sm:pl-5 pl-[30px] rounded-[10px] top-[0] w-[44%]">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-gray-400_01 text-lg"
          style={{border:'none'}}
        />
        {/* <button onClick={handleSearch}>Search</button> */}
        <Button
                    className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[186px] text-base text-center"
                    onClick={handleSearch}
                    shape="round"
                    color="light_blue_800"
                    size="lg"
                    variant="fill"
                  >
                    Search
                  </Button>
                  
      </div>

      <div>
        {noDataFound ? ( 
          <div style={{cursor:'pointer',marginLeft:'100px',marginTop:'-410px',fontSize:'22px'}}>No data found</div>
        ) : (
          accountants.map((accountant) => (
            <div key={accountant.id}>
              <p  onClick={() => navigate(`/accountant/${accountant.id}`)} style={{cursor:'pointer',marginLeft:'100px',marginTop:'-410px',fontSize:'22px'}}>{accountant.name}</p>
              {/* <p>{accountant.rating}</p> */}
              {/* <button onClick={() => navigate(`/accountant/${accountant.id}`)}>
                View Details
              </button> */}
            </div>
          ))
        )}
      </div>
      
                {/* <Img
                  className="absolute bottom-[0] h-[210px] inset-x-[0] mx-auto"
                  src="images/img_vector1.svg"
                  alt="vectorOne"
                /> */}
              </div>
            </div>
          </div>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[133px] items-center justify-start mx-auto w-full">
        <div className="backdrop-opacity-[1] bg-gradient  blur-[500.00px] flex flex-col md:gap-10 gap-[126px] items-center justify-start w-full">
         
        </div>
        <div className="md:h-[864px] h-[895px] md:px-5 relative w-full">
          <div className="absolute bottom-[3%] sm:h-[584px] h-[781px] md:h-[864px] inset-x-[0] mx-auto w-full">
            <Text
              className="mt-[30px] mx-auto text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
              size="txtPoppinsRegular24"
            >
              To remain with us, it is essential that you diligently follow the
              steps provided
            </Text>
            <div
              className="absolute bg-cover bg-no-repeat flex font-opensans sm:h-[584px] h-[781px] md:h-[864px] inset-[0] justify-end m-auto p-[55px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group26.png')" }}
            >
              <div className="sm:h-[584px] h-[589px] md:h-[864px] mt-auto mx-auto w-[84%] md:w-full">
                <div className="sm:h-[584px] h-[589px] md:h-[864px] m-auto w-full">
                  <div className="sm:h-[584px] h-[589px] md:h-[864px] m-auto w-full">
                    <div className="flex flex-col gap-[45px] h-full justify-start m-auto w-full">
                      <div className="sm:h-[277px] h-[278px] md:h-[557px] mr-[438px] relative w-[66%] md:w-full">
                        <div className="absolute flex md:flex-col flex-row gap-8 h-max inset-[0] items-end justify-between m-auto w-full">
                          <div className="md:h-[262px] h-[277px] relative w-[49%] md:w-full">
                            <div className="absolute md:h-[262px] h-[277px] inset-[0] justify-center m-auto w-[99%] sm:w-full">
                              <Text
                                className="absolute left-[4%] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 top-[0]"
                                size="txtOpenSansRomanBold35"
                              >
                                1
                              </Text>
                              <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-center justify-start mx-auto p-6 sm:px-5 rounded-[20px] shadow-bs w-full">
                                <Text
                                  className="text-black-900 text-center text-xl"
                                  size="txtOpenSansRomanBold20"
                                >
                                  <span className="text-black-900 font-poppins font-bold">
                                    Commencement of business
                                  </span>
                                  <span className="text-black-900 font-poppins font-bold italic">
                                    {" "}
                                  </span>
                                </Text>
                                <div className="flex flex-col font-poppins gap-4 items-center justify-start w-[96%] md:w-full">
                                  <Text
                                    className="leading-[26.00px] text-base text-black-900 text-center w-full"
                                    size="txtPoppinsRegular16"
                                  >
                                    Invested shareholders must confirm payment
                                    and office address{" "}
                                  </Text>
                                  <div className="bg-gray-100 flex flex-col font-opensans items-center justify-end p-2.5 rounded-[10px] w-full">
                                    <div className="flex flex-row gap-2 items-start justify-start mt-0.5 w-[97%] md:w-full">
                                      <div className="flex flex-col gap-[5px] items-start justify-start">
                                        <Text
                                          className="text-lg text-light_blue-800"
                                          size="txtOpenSansRomanBold18"
                                        >
                                          Due date
                                        </Text>
                                        <Text
                                          className="leading-[26.00px] text-base text-black-900 w-full"
                                          size="txtOpenSansRomanRegular16"
                                        >
                                          <>
                                            Within 180 <br />
                                            days{" "}
                                          </>
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-start mt-0.5">
                                        <Text
                                          className="text-lg text-red-A200"
                                          size="txtOpenSansRomanBold18RedA200"
                                        >
                                          Penalty fees
                                        </Text>
                                        <Text
                                          className="mt-2.5 text-base text-black-900"
                                          size="txtOpenSansRomanRegular16"
                                        >
                                          <span className="text-black-900 font-opensans text-left font-bold">
                                            ₹
                                          </span>
                                          <a
                                            href="javascript:"
                                            className="text-black-900 font-opensans text-left font-bold underline"
                                          >
                                            50,000
                                          </a>
                                          <span className="text-black-900 font-opensans text-left font-normal">
                                            {" "}
                                            for
                                          </span>
                                          <span className="text-black-900 font-opensans text-left font-normal">
                                            {" "}
                                            the
                                          </span>
                                          <span className="text-black-900 font-opensans text-left font-normal">
                                            {" "}
                                            compan
                                          </span>
                                          <span className="text-black-900 font-opensans text-left font-normal">
                                            y
                                          </span>
                                        </Text>
                                        <Text
                                          className="mt-2 text-base text-black-900"
                                          size="txtOpenSansRomanRegular16"
                                        >
                                          <span className="text-black-900 font-opensans text-left font-bold">
                                            ₹
                                          </span>
                                          <a
                                            href="javascript:"
                                            className="text-black-900 font-opensans text-left font-bold underline"
                                          >
                                            1,000
                                          </a>
                                          <span className="text-black-900 font-opensans text-left font-normal">
                                            {" "}
                                            /day for directors
                                          </span>
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="absolute bg-gradient1  h-[46px] left-[0] pb-2 pl-2 pr-3.5 pt-1 rounded-[10px] text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[0] w-[46px]"
                              size="txtOpenSansRomanBold24"
                            >
                              <span className="text-white-A700 font-poppins text-left font-bold">
                                1
                              </span>
                              <span className="text-white-A700 font-poppins text-left font-bold">
                                st
                              </span>
                            </Text>
                          </div>
                          <div className="bg-white-A700 flex md:flex-1 flex-col font-poppins items-center justify-start md:mt-0 mt-[11px] p-[25px] sm:px-5 rounded-[20px] shadow-bs w-[48%] md:w-full">
                            <Text
                              className="text-black-900 text-center text-xl"
                              size="txtPoppinsBold20"
                            >
                              Auditor Appointment
                            </Text>
                            <div className="flex flex-col gap-4 items-center justify-start my-0.5 w-[97%] md:w-full">
                              <Text
                                className="leading-[26.00px] text-base text-black-900 text-center w-full"
                                size="txtPoppinsRegular16"
                              >
                                Company informs new auditor and submits ADT.1
                                form to ROC.
                              </Text>
                              <div className="bg-gray-100 flex flex-col font-opensans items-start justify-start p-3 rounded-[10px] w-full">
                                <div className="flex flex-row gap-2 items-start justify-start mb-[5px] md:ml-[0] ml-[3px] w-[78%] md:w-full">
                                  <div className="flex flex-col gap-[5px] items-start justify-start">
                                    <Text
                                      className="text-lg text-light_blue-800"
                                      size="txtOpenSansRomanBold18"
                                    >
                                      Due date
                                    </Text>
                                    <Text
                                      className="leading-[26.00px] text-base text-black-900 w-full"
                                      size="txtOpenSansRomanRegular16"
                                    >
                                      <>
                                        Within 30 <br />
                                        days{" "}
                                      </>
                                    </Text>
                                  </div>
                                  <div className="flex flex-col gap-[11px] items-start justify-start mt-0.5">
                                    <Text
                                      className="text-lg text-red-A200"
                                      size="txtOpenSansRomanBold18RedA200"
                                    >
                                      Penalty fees
                                    </Text>
                                    <Text
                                      className="text-base text-black-900"
                                      size="txtOpenSansRomanRegular16"
                                    >
                                      <span className="text-black-900 font-opensans text-left font-bold">
                                        ₹
                                      </span>
                                      <a
                                        href="javascript:"
                                        className="text-black-900 font-opensans text-left font-bold underline"
                                      >
                                        300
                                      </a>
                                      <span className="text-black-900 font-opensans text-left font-normal">
                                        {" "}
                                        per month.
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="absolute bg-gradient1  flex h-[46px] items-center justify-center right-[43%] rounded-[10px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl top-[0] w-[46px]"
                          size="txtOpenSansRomanBold24"
                        >
                          <span className="text-white-A700 font-poppins text-left font-bold">
                            2
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-bold">
                            nd
                          </span>
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-col font-poppins gap-[5px] items-center justify-start md:ml-[0] ml-[882px] p-[23px] sm:px-5 rounded-[20px] shadow-bs w-[32%] md:w-full">
                        <Text
                          className="text-black-900 text-center text-xl"
                          size="txtPoppinsBold20"
                        >
                          MCA Form MGT-7
                        </Text>
                        <div className="flex flex-col gap-4 items-center justify-start mb-0.5 w-[95%] md:w-full">
                          <Text
                            className="leading-[26.00px] text-base text-black-900 text-center w-full"
                            size="txtPoppinsRegular16"
                          >
                            Companies must annually report activities and
                            finances to the registrar.
                          </Text>
                          <div className="bg-gray-100 flex flex-col font-opensans items-center justify-end p-[11px] rounded-[10px] w-full">
                            <div className="flex flex-row gap-8 items-start justify-between w-[97%] md:w-full">
                              <div className="flex flex-col gap-[5px] items-start justify-start">
                                <Text
                                  className="text-lg text-light_blue-800"
                                  size="txtOpenSansRomanBold18"
                                >
                                  Due date
                                </Text>
                                <Text
                                  className="leading-[26.00px] text-base text-black-900 w-full"
                                  size="txtOpenSansRomanRegular16"
                                >
                                  On or Before 31st December
                                </Text>
                              </div>
                              <div className="flex flex-col gap-1.5 items-start justify-start mt-0.5">
                                <Text
                                  className="text-lg text-red-A200"
                                  size="txtOpenSansRomanBold18RedA200"
                                >
                                  Penalty fees
                                </Text>
                                <Text
                                  className="leading-[26.00px] text-base text-black-900 w-full"
                                  size="txtOpenSansRomanRegular16"
                                >
                                  <span className="text-black-900 font-opensans text-left font-bold">
                                    ₹
                                  </span>
                                  <a
                                    href="javascript:"
                                    className="text-black-900 font-opensans text-left font-bold underline"
                                  >
                                    200
                                  </a>
                                  <span className="text-black-900 font-opensans text-left font-normal">
                                    <>
                                      {" "}
                                      per day
                                      <br />
                                    </>
                                  </span>
                                  <span className="text-black-900 font-opensans text-left font-normal">
                                    (No upper limit)*
                                  </span>
                                  <span className="text-black-900 font-opensans text-left font-normal">
                                    {" "}
                                  </span>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="absolute bg-gradient1  bottom-[39%] flex h-[46px] items-center justify-center right-[28%] rounded-[10px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-[46px]"
                      size="txtOpenSansRomanBold24"
                    >
                      <span className="text-white-A700 font-poppins text-left font-bold">
                        6
                      </span>
                      <span className="text-white-A700 font-poppins text-left font-bold">
                        th
                      </span>
                    </Text>
                    <div className="absolute bg-white-A700 bottom-[0] flex flex-col font-poppins gap-[5px] inset-x-[0] items-center justify-end mx-auto p-[18px] rounded-[20px] shadow-bs w-[32%]">
                      <Text
                        className="mt-[5px] text-black-900 text-center text-xl"
                        size="txtPoppinsBold20"
                      >
                        MCA Form AOC-4
                      </Text>
                      <div className="flex flex-col gap-4 items-center justify-start w-[93%] md:w-full">
                        <Text
                          className="leading-[26.00px] text-base text-black-900 text-center w-full"
                          size="txtPoppinsRegular16"
                        >
                          <>
                            It&#39;s like an official report card for a <br />
                            company&#39;s documents
                          </>
                        </Text>
                        <div className="md:h-[111px] h-[121px] relative w-full">
                          <div className="absolute bg-gray-100 flex flex-col inset-x-[0] items-center justify-start mx-auto p-2.5 rounded-[10px] top-[0] w-full">
                            <div className="flex flex-col gap-[7px] justify-start mb-1 w-[97%] md:w-full">
                              <div className="flex flex-row font-poppins gap-[69px] items-start justify-start mr-[43px] w-[86%] md:w-full">
                                <Text
                                  className="text-lg text-light_blue-800"
                                  size="txtPoppinsBold18"
                                >
                                  Due date
                                </Text>
                                <Text
                                  className="text-lg text-red-A200"
                                  size="txtPoppinsBold18RedA200"
                                >
                                  Penalty fees
                                </Text>
                              </div>
                              <Text
                                className="leading-[28.00px] md:ml-[0] ml-[152px] text-base text-black-900 w-[51%] sm:w-full"
                                size="txtOpenSansRomanRegular16"
                              >
                                <span className="text-black-900 font-poppins text-left font-bold">
                                  ₹
                                </span>
                                <a
                                  href="javascript:"
                                  className="text-black-900 font-poppins text-left font-bold underline"
                                >
                                  200
                                </a>
                                <span className="text-black-900 font-poppins text-left font-normal">
                                  <>
                                    {" "}
                                    per day <br />
                                    (No upper limit)*
                                  </>
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="absolute bottom-[0] leading-[26.00px] left-[5%] text-base text-black-900 w-[37%] sm:w-full"
                            size="txtPoppinsRegular16"
                          >
                            On or Before 30th November{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="absolute bg-gradient1  bottom-[39%] flex h-[46px] items-center justify-center left-[34%] rounded-[10px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-[46px]"
                    size="txtOpenSansRomanBold24"
                  >
                    <span className="text-white-A700 font-poppins text-left font-bold">
                      5
                    </span>
                    <span className="text-white-A700 font-poppins text-left font-bold">
                      th
                    </span>
                  </Text>
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col font-poppins gap-[5px] items-center justify-start left-[1%] p-[23px] sm:px-5 rounded-[20px] shadow-bs w-[32%]">
                    <Text
                      className="text-black-900 text-center text-xl"
                      size="txtPoppinsBold20"
                    >
                      DPT-3
                    </Text>
                    <div className="flex flex-col gap-4 items-center justify-start mb-0.5 w-[95%] md:w-full">
                      <Text
                        className="leading-[26.00px] text-base text-black-900 text-center w-full"
                        size="txtPoppinsRegular16"
                      >
                        Companies report money taken from people to ROC;
                        auditors confirm details.
                      </Text>
                      <div className="bg-gray-100 flex flex-col font-opensans items-start justify-start p-3 rounded-[10px] w-full">
                        <div className="flex flex-row gap-8 items-start justify-start mb-[5px] md:ml-[0] ml-[3px] w-[86%] md:w-full">
                          <div className="flex flex-col gap-[5px] items-start justify-start">
                            <Text
                              className="text-lg text-light_blue-800"
                              size="txtOpenSansRomanBold18"
                            >
                              Due date
                            </Text>
                            <Text
                              className="leading-[26.00px] text-base text-black-900 w-full"
                              size="txtOpenSansRomanRegular16"
                            >
                              <>
                                Within 30 <br />
                                days{" "}
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[11px] items-start justify-start mt-0.5">
                            <Text
                              className="text-lg text-red-A200"
                              size="txtOpenSansRomanBold18RedA200"
                            >
                              Penalty fees
                            </Text>
                            <Text
                              className="text-base text-black-900"
                              size="txtOpenSansRomanRegular16"
                            >
                              <span className="text-black-900 font-opensans text-left font-bold">
                                ₹
                              </span>
                              <a
                                href="javascript:"
                                className="text-black-900 font-opensans text-left font-bold underline"
                              >
                                300
                              </a>
                              <span className="text-black-900 font-opensans text-left font-normal">
                                {" "}
                                per month.
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute bg-gradient1  bottom-[39%] flex h-[46px] items-center justify-center left-[0] rounded-[10px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-[46px]"
                  size="txtOpenSansRomanBold24"
                >
                  <span className="text-white-A700 font-poppins text-left font-bold">
                    4
                  </span>
                  <span className="text-white-A700 font-poppins text-left font-bold">
                    th
                  </span>
                </Text>
                <div className="absolute bg-white-A700 flex flex-col font-poppins gap-[5px] items-center justify-start p-[23px] sm:px-5 right-[0] rounded-[20px] shadow-bs top-[2%] w-[32%]">
                  <Text
                    className="text-black-900 text-center text-xl"
                    size="txtPoppinsBold20"
                  >
                    DIN eKYC
                  </Text>
                  <div className="flex flex-col gap-4 items-center justify-start mb-0.5 w-[95%] md:w-full">
                    <Text
                      className="leading-[26.00px] text-base text-black-900 text-center w-full"
                      size="txtPoppinsRegular16"
                    >
                      Directors share personal information for identification &
                      verification{" "}
                    </Text>
                    <div className="bg-gray-100 flex flex-col font-opensans items-start justify-start p-3 rounded-[10px] w-full">
                      <div className="flex flex-row gap-[71px] items-center justify-start mb-[29px] md:ml-[0] ml-[3px] w-[85%] md:w-full">
                        <div className="flex flex-col gap-[9px] items-center justify-start">
                          <Text
                            className="text-lg text-light_blue-800"
                            size="txtOpenSansRomanBold18"
                          >
                            Due date
                          </Text>
                          <Text
                            className="text-base text-black-900"
                            size="txtOpenSansRomanRegular16"
                          >
                            Every Year
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                          <Text
                            className="text-lg text-red-A200"
                            size="txtOpenSansRomanBold18RedA200"
                          >
                            Penalty fees
                          </Text>
                          <Text
                            className="text-base text-black-900"
                            size="txtOpenSansRomanRegular16"
                          >
                            <span className="text-black-900 font-opensans text-left font-bold">
                              ₹
                            </span>
                            <a
                              href="javascript:"
                              className="text-black-900 font-opensans text-left font-bold underline"
                            >
                              5000
                            </a>
                            <span className="text-black-900 font-opensans text-left font-bold">
                              {" "}
                            </span>
                            <span className="text-black-900 font-opensans text-left font-normal">
                              one time
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="absolute bg-gradient1  flex h-[46px] items-center justify-center right-[32%] rounded-[10px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl top-[18%] w-[46px]"
                size="txtOpenSansRomanBold24"
              >
                <span className="text-white-A700 font-poppins text-left font-bold">
                  3
                </span>
                <span className="text-white-A700 font-poppins text-left font-bold">
                  rd
                </span>
              </Text>
            </div>
          </div>
          <div className="absolute flex flex-col font-opensans md:gap-10 gap-[754px] h-full inset-[0] items-center justify-center m-auto">
            <Text
              className="md:text-5xl text-[65px] text-black-900 text-center"
              size="txtOpenSansRomanBold65"
            >
              <span className="text-black-900 font-poppins font-bold">
                Want to{" "}
              </span>
              <span className="text-light_blue-800 font-poppins font-bold">
                Join
              </span>
              <span className="text-black-900 font-poppins font-bold">
                {" "}
                Us?
              </span>
            </Text>
            <Text
              className="leading-[26.00px] text-[17px] text-black-900 w-full"
              size="txtOpenSans17"
            >
              <span className="text-black-900 font-poppins text-left font-normal">
                * For forms AOC-4 and MGT-7, you will be charged a penalty of
                ₹200{" "}
              </span>
              <span className="text-black-900 font-poppins text-left font-bold">
                every day
              </span>
              <span className="text-black-900 font-poppins text-left font-normal">
                <>
                  {" "}
                  until you file the form . There is no maximum penalty amount.
                  So, if you don&#39;t file the form for a year, you will owe
                  ₹73,000 per form
                </>
              </span>
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-opensans items-center justify-start max-w-[1279px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[53%] md:w-full">
              <Text
                className="md:text-5xl text-[65px] text-black-900 w-full"
                size="txtOpenSansRomanBold65"
              >
                <span className="text-light_blue-800 font-poppins text-left font-bold">
                  All-in-One
                </span>
                <span className="text-black-900 font-poppins text-left font-bold">
                  <>
                    {" "}
                    platform
                    <br />
                    that Makes Easier
                  </>
                </span>
              </Text>
              <Text
                className="leading-[38.00px] mt-3.5 text-2xl md:text-[22px] text-black-900 sm:text-xl w-[91%] sm:w-full"
                size="txtPoppinsRegular24"
              >
                We are more than a platform; We are your success partner.
                Discover our services to achieve your business and educational
                goals
              </Text>
              <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-start justify-start mt-8 w-[91%] md:w-full">
                <Img
                  className="h-[65px] w-[65px]"
                  src="images/img_iconparktwotonesearch.svg"
                  alt="iconparktwotone"
                />
                <Text
                  className="leading-[32.00px] ml-4 md:ml-[0] text-black-900 text-xl w-[34%] sm:w-full"
                  size="txtOpenSansRomanRegular20"
                >
                  <span className="text-black-900 font-poppins text-left font-bold">
                    SEARCH
                  </span>
                  <span className="text-black-900 font-poppins text-left font-normal">
                    {" "}
                    for vital company information{" "}
                  </span>
                </Text>
                <Img
                  className="h-[65px] ml-8 md:ml-[0] w-[65px]"
                  src="images/img_iconparktwotoneenquire.svg"
                  alt="iconparktwotone_One"
                />
                <Text
                  className="leading-[32.00px] ml-4 md:ml-[0] text-black-900 text-xl w-[34%] sm:w-full"
                  size="txtOpenSansRomanRegular20"
                >
                  <span className="text-black-900 font-poppins text-left font-bold">
                    CONNECT
                  </span>
                  <span className="text-black-900 font-poppins text-left font-normal">
                    {" "}
                    with the resources to meet your business needs
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-start justify-start mt-16 w-[91%] md:w-full">
                <Img
                  className="h-[65px] w-[65px]"
                  src="images/img_iconparktwoto.svg"
                  alt="iconparktwoto"
                />
                <Text
                  className="leading-[32.00px] ml-4 md:ml-[0] text-black-900 text-xl w-[34%] sm:w-full"
                  size="txtOpenSansRomanRegular20"
                >
                  <span className="text-black-900 font-poppins text-left font-bold">
                    RESEARCH
                  </span>
                  <span className="text-black-900 font-poppins text-left font-normal">
                    <>
                      {" "}
                      and generate reports <br />
                      that drive growth{" "}
                    </>
                  </span>
                </Text>
                <Img
                  className="h-[65px] ml-8 md:ml-[0] w-[65px]"
                  src="images/img_iconparktwotonedegreehat.svg"
                  alt="iconparktwotone_Two"
                />
                <div className="flex flex-col items-center justify-start ml-4 md:ml-[0]">
                  <Text
                    className="leading-[32.00px] text-black-900 text-xl w-full"
                    size="txtOpenSansRomanRegular20"
                  >
                    <span className="text-black-900 font-opensans text-left font-bold">
                      ACADEMY
                    </span>
                    <span className="text-black-900 font-opensans text-left font-normal">
                      {" "}
                      to give you the skills for success in your career
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="md:h-[340px] h-[614px] relative w-[48%] md:w-full">
              <div className="md:h-[340px] h-[614px] m-auto w-full">
                <div className="absolute md:h-[340px] h-[347px] right-[0] top-[0] w-[45%]">
                  <Img
                    className="absolute bottom-[0] h-[308px] right-[1%]"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                  <div className="absolute h-[340px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[340px] m-auto object-cover w-full"
                      src="images/img_maskgroup.png"
                      alt="maskgroup"
                    />
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[88%]">
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Img
                          className="h-4 mt-[227px] w-4"
                          src="images/img_iconjamicons.svg"
                          alt="iconjamicons"
                        />
                        <div className="flex flex-col gap-[35px] justify-start mt-[57px] w-[12%]">
                          <Img
                            className="h-4 md:ml-[0] ml-[11px] w-4"
                            src="images/img_arrowright.svg"
                            alt="arrowright"
                          />
                          <div className="flex flex-col items-start justify-start mr-[11px] w-3/5 md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_iconjamicons_purple_50_01.svg"
                              alt="iconjamicons_One"
                            />
                            <Img
                              className="h-2.5 ml-1.5 md:ml-[0] mt-[126px] w-2.5"
                              src="images/img_arrowright.svg"
                              alt="iconjamicons_Two"
                            />
                            <Img
                              className="h-1 md:ml-[0] ml-[3px] mt-[25px] w-1"
                              src="images/img_iconjamicons_purple_50_01.svg"
                              alt="iconjamicons_Three"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-start mb-[17px] w-[81%]">
                          <Img
                            className="h-1 md:ml-[0] ml-[134px] w-1"
                            src="images/img_iconjamicons_purple_50_01.svg"
                            alt="iconjamicons_Four"
                          />
                          <Img
                            className="h-1.5 md:ml-[0] ml-[166px] mt-[11px] w-1.5"
                            src="images/img_iconjamicons_purple_50_01.svg"
                            alt="iconjamicons_Five"
                          />
                          <div className="flex flex-row items-start justify-end md:ml-[0] ml-[11px] mt-[22px] w-[95%] md:w-full">
                            <Img
                              className="h-2.5 mt-[3px] w-2.5"
                              src="images/img_iconjamicons_purple_50_01.svg"
                              alt="iconjamicons_Six"
                            />
                            <Img
                              className="h-4 ml-[102px] mt-[7px] w-4"
                              src="images/img_iconjamicons.svg"
                              alt="iconjamicons_Seven"
                            />
                            <Img
                              className="h-3 ml-2.5 w-3"
                              src="images/img_iconjamicons_purple_50_01_12x12.svg"
                              alt="iconjamicons_Eight"
                            />
                            <Img
                              className="h-3 ml-4 mt-[11px] w-3"
                              src="images/img_iconjamicons.svg"
                              alt="iconjamicons_Nine"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start mt-1.5 w-[94%] md:w-full">
                            <div className="flex flex-row items-end justify-start w-full">
                              <Img
                                className="h-3 mb-0.5 mt-3 w-3"
                                src="images/img_iconjamicons_purple_50_01_12x12.svg"
                                alt="iconjamicons_Ten"
                              />
                              <Img
                                className="h-1.5 ml-4 mt-5 w-1.5"
                                src="images/img_iconjamicons_purple_50_01.svg"
                                alt="iconjamicons_Eleven"
                              />
                              <Img
                                className="h-1.5 mb-5 ml-[105px] w-1.5"
                                src="images/img_iconjamicons_purple_50_01.svg"
                                alt="iconjamicons_Twelve"
                              />
                              <Img
                                className="h-4 ml-4 my-[5px] w-4"
                                src="images/img_arrowright.svg"
                                alt="arrowright_One"
                              />
                            </div>
                            <Img
                              className="h-3 mt-[37px] w-3"
                              src="images/img_iconjamicons.svg"
                              alt="iconjamicons_Thirteen"
                            />
                            <Img
                              className="h-2.5 mt-[115px] w-2.5"
                              src="images/img_iconjamicons_purple_50_01.svg"
                              alt="iconjamicons_Fourteen"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[38px] left-[12%] top-[9%] w-[278px]">
                  <div className="bg-white-A700 h-[38px] ml-auto my-auto w-[91%]"></div>
                  <Button
                    className="absolute cursor-pointer h-full inset-[0] m-auto min-w-[278px] rounded-bl-[15px] rounded-br-[3px] rounded-tl-[15px] rounded-tr-[15px] text-center text-sm"
                    color="purple_50_01"
                    size="sm"
                    variant="fill"
                  >
                    Hey, check out loreumipsum services.{" "}
                  </Button>
                </div>
                <div className="absolute flex flex-col items-end justify-center left-[6%] top-[16%] w-[315px]">
                  <Button
                    className="cursor-pointer min-w-[315px] rounded-bl-[15px] rounded-br-[3px] rounded-tl-[15px] rounded-tr-[15px] text-center text-sm"
                    color="purple_50_01"
                    size="sm"
                    variant="fill"
                  >
                    I learned from their videos, got my first job.
                  </Button>
                </div>
                <div className="absolute flex flex-col items-end justify-center left-[3%] top-[24%] w-[332px]">
                  <Button
                    className="cursor-pointer min-w-[332px] rounded-bl-[15px] rounded-br-[3px] rounded-tl-[15px] rounded-tr-[15px] text-center text-sm"
                    color="purple_50_01"
                    size="sm"
                    variant="fill"
                  >
                    <>You won&#39;t be disappointed with their services.</>
                  </Button>
                </div>
                <div className="absolute bottom-[0] md:h-[340px] h-[345px] left-[0] rotate-[180deg] w-[51%]">
                  <div className="absolute md:h-[340px] h-[345px] inset-y-[0] left-[0] my-auto w-[89%]">
                    <Img
                      className="absolute h-[339px] inset-[0] justify-center m-auto"
                      src="images/img_vector_light_blue_50.svg"
                      alt="vector_One"
                    />
                    <Img
                      className="absolute h-[340px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_maskgroup_340x271.png"
                      alt="maskgroup_One"
                    />
                  </div>
                  <div className="absolute flex flex-col items-center justify-start right-[0] rotate-[180deg] top-[10%] w-[55%]">
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex flex-row items-start justify-start ml-1.5 md:ml-[0] w-[74%] md:w-full">
                        <Img
                          className="h-1 w-1"
                          src="images/img_iconjamicons_light_blue_50.svg"
                          alt="iconjamicons_Fifteen"
                        />
                        <Img
                          className="h-3 ml-3.5 mt-1 w-3"
                          src="images/img_iconjamicons_light_blue_50_12x12.svg"
                          alt="iconjamicons_Sixteen"
                        />
                        <Img
                          className="h-1 ml-[89px] mt-[11px] w-1"
                          src="images/img_iconjamicons_light_blue_50.svg"
                          alt="iconjamicons_Seventeen"
                        />
                      </div>
                      <Img
                        className="h-2.5 md:ml-[0] ml-[53px] mt-1.5 w-2.5"
                        src="images/img_iconjamicons_light_blue_50.svg"
                        alt="iconjamicons_Eighteen"
                      />
                      <Img
                        className="h-4 md:ml-[0] ml-[17px] mt-1.5 w-4"
                        src="images/img_iconjamicons_light_blue_50.svg"
                        alt="iconjamicons_Nineteen"
                      />
                      <div className="flex flex-row items-start justify-end md:ml-[0] ml-[60px] mt-0.5 w-[51%] md:w-full">
                        <Img
                          className="h-1.5 mt-1.5 w-1.5"
                          src="images/img_iconjamicons_light_blue_50.svg"
                          alt="iconjamicons_Twenty"
                        />
                        <Img
                          className="h-3 ml-[43px] w-3"
                          src="images/img_iconjamicons_12x12.svg"
                          alt="iconjamicons_TwentyOne"
                        />
                        <Img
                          className="h-1.5 ml-[18px] mt-[7px] w-1.5"
                          src="images/img_iconjamicons_light_blue_50.svg"
                          alt="iconjamicons_TwentyTwo"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start mr-10 mt-[3px] w-[77%] md:w-full">
                        <Img
                          className="h-4 mb-[15px] w-4"
                          src="images/img_arrowright_light_blue_50.svg"
                          alt="arrowright_Two"
                        />
                        <Img
                          className="h-3 ml-[21px] mt-[19px] w-3"
                          src="images/img_iconjamicons_12x12.svg"
                          alt="iconjamicons_TwentyThree"
                        />
                        <Img
                          className="h-2.5 ml-[68px] mt-3 w-2.5"
                          src="images/img_arrowright_light_blue_50.svg"
                          alt="iconjamicons_TwentyFour"
                        />
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-end md:ml-[0] ml-[104px] mt-[39px] w-[38%] md:w-full">
                        <div className="flex flex-col md:gap-10 gap-[77px] items-end justify-start w-[31%]">
                          <Img
                            className="h-4 mr-[3px] w-4"
                            src="images/img_iconjamicons_12x12.svg"
                            alt="iconjamicons_TwentyFive"
                          />
                          <Img
                            className="h-3 w-3"
                            src="images/img_iconjamicons_light_blue_50_12x12.svg"
                            alt="iconjamicons_TwentySix"
                          />
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-start w-[61%]">
                          <div className="flex flex-row gap-4 items-start justify-between w-full">
                            <Img
                              className="h-1.5 w-1.5"
                              src="images/img_iconjamicons_light_blue_50.svg"
                              alt="iconjamicons_TwentySeven"
                            />
                            <Img
                              className="h-4 w-4"
                              src="images/img_iconjamicons_12x12.svg"
                              alt="iconjamicons_TwentyEight"
                            />
                          </div>
                          <Img
                            className="h-2.5 w-2.5"
                            src="images/img_iconjamicons_light_blue_50.svg"
                            alt="iconjamicons_TwentyNine"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col font-poppins gap-2 justify-start left-[5%] top-[36%] w-[57%]">
                <Button
                  className="cursor-pointer min-w-[342px] rounded-bl-[3px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[15px] text-center text-sm"
                  color="light_blue_50"
                  size="xs"
                  variant="fill"
                >
                  I got a perfect analysis report from them too
                </Button>
                <Button
                  className="cursor-pointer min-w-[142px] md:ml-[0] ml-[185px] mr-[15px] rounded-bl-[3px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[15px] text-center text-sm"
                  color="light_blue_50"
                  size="xs"
                  variant="fill"
                >
                  <>Oh, that&#39;s great.</>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex font-opensans items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-gradient2  flex flex-col items-center justify-start p-[31px] sm:px-5 w-full">
              <div className="flex flex-col gap-8 items-center justify-start mb-[9px] w-[87%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start mb-[76px] w-[22%] md:w-full">
                    <Img
                      className="h-[45px] md:h-auto object-cover w-[51%]"
                      src="images/img_image1_45x138.png"
                      alt="imageOne_One"
                    />
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
              Registered trademark of India Private Limited © 2023 loerumipsum
              Inc. All Rights Reserved
            </Button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePagePage;
