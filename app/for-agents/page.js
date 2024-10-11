"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Script from "next/script";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

export default function page() {
  const projects = [
    {
      title: "Sweet Berkeley Cottage",
      text: "Realtor Kelley Solberg quickly saw the potential in this stunning $3MM+ property. But for her senior client in his 90s, she knew the process would need to be super smooth. Freemodel’s work helped the home start a bidding war and sell for far above asking.",
      src: "https://www.youtube.com/embed/a0EO5ObDrc8?rel=0&si=HQQpbaPzo5UGW0wP",
    },
    {
      title: "Sweet Berkeley Cottage",
      text: "Realtor Kelley Solberg quickly saw the potential in this stunning $3MM+ property. But for her senior client in his 90s, she knew the process would need to be super smooth. Freemodel’s work helped the home start a bidding war and sell for far above asking.",
      src: "https://www.youtube.com/embed/a0EO5ObDrc8?rel=0&si=HQQpbaPzo5UGW0wP",
    },
    {
      title: "Sweet Berkeley Cottage",
      text: "Realtor Kelley Solberg quickly saw the potential in this stunning $3MM+ property. But for her senior client in his 90s, she knew the process would need to be super smooth. Freemodel’s work helped the home start a bidding war and sell for far above asking.",
      src: "https://www.youtube.com/embed/a0EO5ObDrc8?rel=0&si=HQQpbaPzo5UGW0wP",
    },
    {
      title: "Sweet Berkeley Cottage",
      text: "Realtor Kelley Solberg quickly saw the potential in this stunning $3MM+ property. But for her senior client in his 90s, she knew the process would need to be super smooth. Freemodel’s work helped the home start a bidding war and sell for far above asking.",
      src: "https://www.youtube.com/embed/a0EO5ObDrc8?rel=0&si=HQQpbaPzo5UGW0wP",
    },
    {
      title: "Sweet Berkeley Cottage",
      text: "Realtor Kelley Solberg quickly saw the potential in this stunning $3MM+ property. But for her senior client in his 90s, she knew the process would need to be super smooth. Freemodel’s work helped the home start a bidding war and sell for far above asking.",
      src: "https://www.youtube.com/embed/a0EO5ObDrc8?rel=0&si=HQQpbaPzo5UGW0wP",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      // Slaytların ortalanması
      perView: 3, // Varsayılan değer mobil için
      spacing: 15,
    },
  });

  useEffect(() => {
    const updateSliderPerView = () => {
      const isMobile = window.innerWidth <= 768; // 768px altında mobil olarak kabul edilir
      instanceRef.current?.update({
        slides: {
          perView: isMobile ? 2 : 3, // Mobilde 1, masaüstünde 3 slayt göster
        },
      });

      const isMobile2 = window.innerWidth < 426; // 768px altında mobil olarak kabul edilir
      instanceRef.current?.update({
        slides: {
          perView: isMobile2 ? 1 : 3, // Mobilde 1, masaüstünde 3 slayt göster
        },
      });
    };

    window.addEventListener("resize", updateSliderPerView);
    updateSliderPerView(); // Sayfa yüklendiğinde de çalıştır

    return () => {
      window.removeEventListener("resize", updateSliderPerView);
    };
  }, [instanceRef]);

  const [isSubtextVisible, setIsSubtextVisible] = useState(false);
  const [isSubtextVisible2, setIsSubtextVisible2] = useState(false);
  const [isSubtextVisible3, setIsSubtextVisible3] = useState(false);
  const [isSubtextVisible4, setIsSubtextVisible4] = useState(false);
  const [isSubtextVisible5, setIsSubtextVisible5] = useState(false);
  const [isSubtextVisible6, setIsSubtextVisible6] = useState(false);
  const [isSubtextVisible7, setIsSubtextVisible7] = useState(false);
  const [isSubtextVisible8, setIsSubtextVisible8] = useState(false);

  const handleText = () => {
    setIsSubtextVisible((prev) => !prev);
  };

  const handleText2 = () => {
    setIsSubtextVisible2((prev) => !prev);
  };

  const handleText3 = () => {
    setIsSubtextVisible3((prev) => !prev);
  };

  const handleText4 = () => {
    setIsSubtextVisible4((prev) => !prev);
  };

  const handleText5 = () => {
    setIsSubtextVisible5((prev) => !prev);
  };

  const handleText6 = () => {
    setIsSubtextVisible6((prev) => !prev);
  };

  const handleText7 = () => {
    setIsSubtextVisible7((prev) => !prev);
  };

  const handleText8 = () => {
    setIsSubtextVisible8((prev) => !prev);
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta
        name="facebook-domain-verification"
        content="5pc9nltxw34updxgju5hx3etg0917m"
      />

      <title>For Agents | Freemodel</title>
      <meta
        name="description"
        content="Freemodel specializes in home renovations, helping agents increase the home sales price for sellers. In-person project directors are assigned to each project and work with agents directly. No upfront payments, Freemodel is paid when the home sells."
      />
      <link rel="icon" href="favicon.ico" />
      <meta property="og:title" content="Renovate to sell your home." />
      <meta
        property="og:description"
        content="Pre-sales home renovations helping agents sell homes faster and for more. Pay at closing, local experts, custom designs. Get a free estimate."
      />

      <meta property="og:url" content="https://freemodel.com/for-agents" />
      <meta property="og:type" content="website" />

      <meta name="next-head-count" content={20} />

      <link
        rel="preload"
        href="/_next/static/media/86464c679ae0b717-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        data-next-font="size-adjust"
      />
      <link
        rel="preload"
        href="/_next/static/media/894c14f8b013fa65-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        data-next-font="size-adjust"
      />
      <link
        rel="preload"
        href="/_next/static/css/8e627451e5f1507d.css"
        as="style"
      />
      <link rel="stylesheet" href="css/8e627451e5f1507d.css" data-n-g />
      <link
        rel="preload"
        href="/_next/static/css/b8e302d41b271438.css"
        as="style"
      />
      <link rel="stylesheet" href="css/b8e302d41b271438.css" data-n-p />

      <style
        id="__jsx-4264762549"
        dangerouslySetInnerHTML={{
          __html:
            "\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      font-family: \"Adonis\", serif;\n      font-weight: 700;\n      font-style: normal\n    }\n\n    p,\n    a,\n    li {\n      font-family: '__Pontano_Sans_4ac859', '__Pontano_Sans_Fallback_4ac859'\n    }\n  ",
        }}
      />
      <style
        id="__jsx-6c374164f6fcfa75"
        dangerouslySetInnerHTML={{
          __html:
            "\n    .responsive-iframe.jsx-6c374164f6fcfa75 {\n      width: 90%;\n      max-width: 500px;\n      height: 170px\n    }\n\n    @media(min-width:768px) {\n      .responsive-iframe.jsx-6c374164f6fcfa75 {\n        width: 500px;\n        height: 300px\n      }\n    }\n  ",
        }}
      />

      <div id="__next">
        <main className="jsx-4264762549 __variable_957fb8 __variable_4ac859">
          <div>
            <nav className="bg-white border-b w-full sticky top-0 lg:sticky z-50 lg:text-sm lg:border-none">
              <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
                <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                  <a href="/">
                    <img
                      alt="logo"
                      loading="lazy"
                      width={180}
                      height={80}
                      decoding="async"
                      data-nimg={1}
                      style={{
                        color: "transparent",
                        width: "auto",
                        height: "auto",
                      }}
                      srcSet="/for-agents/images/image_6 1x, /for-agents/images/image 2x"
                      src="/for-agents/images/image"
                    />
                  </a>
                  <div className="lg:hidden">
                    <button className="text-gray-500 hover:text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex-1 pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 hidden">
                  <ul className="justify-end items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
                    <li className="text-black hover:text-FM-orange lg:text-base">
                      <a href="/how-it-works" className>
                        How It Works
                      </a>
                    </li>
                    <li className="text-black hover:text-FM-orange lg:text-base">
                      <a href="/for-agents" className="text-FM-orange">
                        For Agents
                      </a>
                    </li>
                    <li className="text-black hover:text-FM-orange lg:text-base">
                      <a href="/for-homeowners" className>
                        For Homeowners
                      </a>
                    </li>
                    <li className="text-black hover:text-FM-orange lg:text-base">
                      <a href="/projects" className>
                        Projects
                      </a>
                    </li>
                    <li className="text-black hover:text-FM-orange lg:text-base">
                      <a href="/locations" className>
                        Locations
                      </a>
                    </li>
                    <li className="text-black hover:text-FM-orange lg:text-base">
                      <a href="/team" className>
                        Your Team
                      </a>
                    </li>
                    <div className="space-y-3 items-center gap-x-6 lg:flex lg:space-y-0">
                      <li>
                        <a
                          href="/lets-talk"
                          className="block py-3 px-4 w-32 mx-auto font-medium text-center text-white bg-FM-orange hover:bg-orange-600 active:bg-indigo-700 active:shadow-none rounded-lg shadow lg:inline"
                        >
                          Let's Talk
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </nav>
            <main className="mb-20">
              <div className="relative">
                <img
                  alt="hero"
                  fetchpriority="high"
                  loading="eager"
                  decoding="async"
                  data-nimg="fill"
                  className="absolute inset-0 object-cover w-full h-full"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    color: "transparent",
                  }}
                  sizes="100vw"
                  srcSet="/for-agents/images/image_8 640w, /for-agents/images/image_10 750w, /for-agents/images/image_7 828w, /for-agents/images/image_20 1080w, /for-agents/images/image_23 1200w, /for-agents/images/image_27 1920w, /for-agents/images/image_28 2048w, /for-agents/images/image_5 3840w"
                  src="/for-agents/images/image_5"
                />
                <div
                  className="relative bg-gray-900 bg-opacity-50"
                  style={{ opacity: "1" }}
                >
                  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl max md:px-24 lg:px-8 lg:py-28 2xl:py-36">
                    <div
                      className="text-center m-auto"
                      style={{ opacity: "1" }}
                    >
                      <h2
                        className="text-center m-auto
            my-6
            text-6xl font-bold tracking-tight text-white sm:text-8xl sm:leading-none"
                        style={{ opacity: "1" }}
                      >
                        We’re your trusted partner.
                      </h2>
                      <div style={{ opacity: "1" }}>
                        <div className="inline-block cursor-pointer py-3 px-6 bg-FM-orange hover:bg-orange-600 active:bg-gray-500 active:shadow-none rounded-lg shadow ">
                          <a
                            href="/lets-talk"
                            id="cta_contact_button"
                            className="text-lg text-center text-white "
                          >
                            Let's Talk
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="bg-FM-blue py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                  <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="relative mx-auto w-80 h-48">
                      <img
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: "0",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="/for-agents/images/image_11 640w, /for-agents/images/image_45 750w, /for-agents/images/image_12 828w, /for-agents/images/image_9 1080w, /for-agents/images/image_30 1200w, /for-agents/images/image_15 1920w, /for-agents/images/image_29 2048w, /for-agents/images/image_3 3840w"
                        src="/for-agents/images/image_3"
                      />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                      <p className="mt-3 text-2xl text-white">
                        Our approach relies on your knowledge and guidance. And
                        when homeowners win, so do you. Freemodel markets
                        exclusively through individual agents and brokerages.
                        When homeowners come to us directly, we refer them to
                        our top agents without any fees.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 px-10 sm:px-0 md:mx-auto text-center lg:max-w-5xl md:mb-12">
                  <h2 className="mb-10 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    How Freemodel Benefits Agents
                  </h2>
                </div>
                <h3 className="max-w-xl mb-10 text-xl text-gray-900 sm:mx-auto" />
                <div
                  className="grid gap-12 row-gap-8 lg:grid-cols-3"
                  style={{ opacity: "1" }}
                >
                  <div className="text-center px-14" style={{ opacity: "1" }}>
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                      <div className="relative w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                        <img
                          alt="Sell faster"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: "0",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            color: "transparent",
                          }}
                          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 25vw"
                          srcSet="/for-agents/images/image_13 256w, /for-agents/images/image_43 384w, /for-agents/images/image_14 640w, /for-agents/images/image_17 750w, /for-agents/images/image_16 828w, /for-agents/images/image_31 1080w, /for-agents/images/image_21 1200w, /for-agents/images/image_22 1920w, /for-agents/images/image_18 2048w, /for-agents/images/image_2 3840w"
                          src="/for-agents/images/image_2"
                        />
                      </div>
                    </div>
                    <h6 className="text-2xl mb-2 font-semibold leading-5">
                      Sell faster
                    </h6>
                    <p className="max-w-md mb-3 text-base text-gray-900 sm:mx-auto">
                      Renovated homes spend less time on the market. That means
                      you’ll spend less effort and energy ushering your listing
                      through to close.
                    </p>
                  </div>
                  <div className="text-center px-14" style={{ opacity: "1" }}>
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                      <div className="relative w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                        <img
                          alt="Win more listings"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: "0",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            color: "transparent",
                          }}
                          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 25vw"
                          srcSet="/for-agents/images/image_19 256w, /for-agents/images/image_34 384w, /for-agents/images/image_24 640w, /for-agents/images/image_46 750w, /for-agents/images/image_26 828w, /for-agents/images/image_44 1080w, /for-agents/images/image_40 1200w, /for-agents/images/image_25 1920w, /for-agents/images/image_37 2048w, /for-agents/images/image_4 3840w"
                          src="/for-agents/images/image_4"
                        />
                      </div>
                    </div>
                    <h6 className="text-2xl mb-2 font-semibold leading-5">
                      Win more listings
                    </h6>
                    <p className="max-w-md mb-3 text-base text-gray-900 sm:mx-auto">
                      Freemodel's pre-sale home renovations help you stand out
                      by offering clients a variety of options tailored to their
                      home-selling needs.
                    </p>
                  </div>
                  <div className="text-center px-14" style={{ opacity: "1" }}>
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                      <div className="relative w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                        <img
                          alt="Sell for more"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: "0",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            color: "transparent",
                          }}
                          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 25vw"
                          srcSet="/for-agents/images/image_38 256w, /for-agents/images/image_39 384w, /for-agents/images/image_36 640w, /for-agents/images/image_42 750w, /for-agents/images/image_41 828w, /for-agents/images/image_33 1080w, /for-agents/images/image_47 1200w, /for-agents/images/image_35 1920w, /for-agents/images/image_32 2048w, /for-agents/images/image_1 3840w"
                          src="/for-agents/images/image_1"
                        />
                      </div>
                    </div>
                    <h6 className="text-2xl mb-2 font-semibold leading-5">
                      Sell for more
                    </h6>
                    <p className="max-w-md mb-3 text-base text-gray-900 sm:mx-auto">
                      Getting your clients a higher-than-expected return on
                      their investment ensures satisfaction, and satisfied
                      clients are the lifeblood of the real estate world!
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h1 className="mb-1 text-4xl font-semibold tracking-wide text-center sm:text-5xl md:mb-20 ">
                  Our Process
                </h1>
                <div className="grid gap-12 row-gap-8 content-start lg:grid-cols-2">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-56 mt-6 mb-6 rounded-md sm:h-96"
                      src="/for-agents/images/14c4113f7aecef82ec2f9716ac487e6bb7ec2404-1500x1000.png"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <section className="leading-relaxed max-w-screen-xl mx-auto px-4 md:px-8">
                      <div className="max-w-2xl mx-auto">
                        <div className="space-y-3 mt-5 overflow-hidden border-b ">
                          <h4
                            onClick={handleText}
                            className="cursor-pointer pb-5 flex items-center justify-between text-lg 
  text-black font-bold hover:text-FM-orange"
                          >
                            Agent provides information
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-500 ml-2 hover:text-FM-orange"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              ></path>
                            </svg>
                          </h4>

                          {isSubtextVisible && (
                            <div
                              className="duration-300 text-black"
                              style={{ height: "auto" }}
                            >
                              <div
                                style={{
                                  width: "500px",
                                  padding: "0px 0px 20px 0px",
                                }}
                              >
                                <p className="ddd">
                                  It all starts by simply reaching out.
                                </p>
                                <br />
                                <p className="ddd">
                                  Our team will immediately schedule a call with
                                  you to collect key information about the
                                  property and explore our renovation options.
                                </p>
                                <br />
                                <p className="ddd">
                                  On this call, we’ll discuss the following
                                  items:
                                </p>
                                <br />
                                <p className="ddd">
                                  Scope — Your recommended renovations to
                                  maximize sales price{" "}
                                </p>
                                <br />
                                <p className="ddd">
                                  Profit — The property’s as-is value and
                                  after-remodel value{" "}
                                </p>
                                <br />
                                <p className="ddd">
                                  Timing — How quickly can we start?
                                </p>
                              </div>
                            </div>
                          )}

                          {/* <div
                            className="duration-300 text-black"
                            style={{ height: "0px" }}
                          >
                            <div>
                              <p className="ddd">
                                It all starts by simply reaching out.
                              </p>
                              <br />
                              <p className="ddd">
                                Our team will immediately schedule a call with
                                you to collect key information about the
                                property and explore our renovation options.
                              </p>
                              <br />
                              <p className="ddd">
                                On this call, we’ll discuss the following items:
                              </p>
                              <br />
                              <p className="ddd">
                                Scope — Your recommended renovations to maximize
                                sales price{" "}
                              </p>
                              <br />
                              <p className="ddd">
                                Profit — The property’s as-is value and
                                after-remodel value{" "}
                              </p>
                              <br />
                              <p className="ddd">
                                Timing — How quickly can we start?
                              </p>
                            </div>
                          </div> */}
                        </div>
                        <div className="space-y-3 mt-5 overflow-hidden border-b ">
                          <h4
                            onClick={handleText2}
                            className="cursor-pointer pb-5 flex items-center justify-between text-lg 
  text-black font-bold hover:text-FM-orange"
                          >
                            Freemodel captures detailed project scope
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-500 ml-2 hover:text-FM-orange"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              ></path>
                            </svg>
                          </h4>

                          {isSubtextVisible2 && (
                            <div
                              className="duration-300 text-black"
                              style={{ height: "auto" }}
                            >
                              <div
                                style={{
                                  width: "500px",
                                  padding: "0px 0px 20px 0px",
                                }}
                              >
                                <p className="ddd">
                                  Next, we’ll dig a bit deeper with you to
                                  assemble a detailed scope of work that will
                                  maximize the value of the home. We’ll send a
                                  local project managers on-site to walk the
                                  property, take photographs, and capture any
                                  critical measurements. From this, we’ll
                                  provide you and the homeowner with a detailed
                                  project scope for you to review and approve.
                                </p>
                              </div>
                            </div>
                          )}

                          {/* <div
                            className="duration-300 text-black"
                            style={{ height: "0px" }}
                          >
                            <div>
                              <p className="ddd">
                                Next, we’ll dig a bit deeper with you to
                                assemble a detailed scope of work that will
                                maximize the value of the home. We’ll send a
                                local project managers on-site to walk the
                                property, take photographs, and capture any
                                critical measurements. From this, we’ll provide
                                you and the homeowner with a detailed project
                                scope for you to review and approve.
                              </p>
                            </div>
                          </div> */}
                        </div>
                        <div className="space-y-3 mt-5 overflow-hidden border-b ">
                          <h4
                            onClick={handleText3}
                            className="cursor-pointer pb-5 flex items-center justify-between text-lg 
  text-black font-bold hover:text-FM-orange"
                          >
                            Our contractor partners visit the site
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-500 ml-2 hover:text-FM-orange"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              ></path>
                            </svg>
                          </h4>

                          {isSubtextVisible3 && (
                            <div
                              className="duration-300 text-black"
                              style={{ height: "auto" }}
                            >
                              <div style={{ width: "500px" }}>
                                <p className="ddd">
                                  To ensure we minimize surprises during the
                                  renovation phase, we’ll bring our select
                                  contractor partners to visit the property to
                                  review the planned project scope and to
                                  confirm they’re able to meet the project cost
                                  and timeline requirements.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="space-y-3 mt-5 overflow-hidden border-b ">
                          <h4
                            onClick={handleText4}
                            className="cursor-pointer pb-5 flex items-center justify-between text-lg 
  text-black font-bold hover:text-FM-orange"
                          >
                            Freemodel provides a fixed bid proposal
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-500 ml-2 hover:text-FM-orange"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              ></path>
                            </svg>
                          </h4>

                          {isSubtextVisible4 && (
                            <div
                              className="duration-300 text-black"
                              style={{ height: "auto" }}
                            >
                              <div
                                style={{
                                  width: "500px",
                                  padding: "0px 0px 20px 0px",
                                }}
                              >
                                <p className="ddd">
                                  Freemodel will provide a fixed bid proposal to
                                  the homeowner (also shared with the agent),
                                  including an estimate of the potential profit
                                  of the project. The bid will include a
                                  detailed scope of work broken out by project
                                  phase as well as approximate project start and
                                  completion dates. The homeowner and the agent
                                  are welcomed to provide input on project scope
                                  and its impact to home value throughout this
                                  process.
                                </p>
                              </div>
                            </div>
                          )}
                          {/* <div
                            className="duration-300 text-black"
                            style={{ height: "0px" }}
                          >
                            <div>
                              <p className="ddd">
                                Freemodel will provide a fixed bid proposal to
                                the homeowner (also shared with the agent),
                                including an estimate of the potential profit of
                                the project. The bid will include a detailed
                                scope of work broken out by project phase as
                                well as approximate project start and completion
                                dates. The homeowner and the agent are welcomed
                                to provide input on project scope and its impact
                                to home value throughout this process.
                              </p>
                            </div>
                          </div> */}
                        </div>
                        <div className="space-y-3 mt-5 overflow-hidden border-b ">
                          <h4
                            onClick={handleText5}
                            className="cursor-pointer pb-5 flex items-center justify-between text-lg 
  text-black font-bold hover:text-FM-orange"
                          >
                            Homeowner signs the contract
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-500 ml-2 hover:text-FM-orange"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              ></path>
                            </svg>
                          </h4>

                          {isSubtextVisible5 && (
                            <div
                              className="duration-300 text-black"
                              style={{ height: "auto" }}
                            >
                              <div
                                style={{
                                  width: "500px",
                                  padding: "0px 0px 20px 0px",
                                }}
                              >
                                <p className="ddd">
                                  Once we agree on the scope of work and the
                                  fixed bid, the homeowner will sign a contract
                                  with Freemodel. The contract will include the
                                  exact same scope of work we provide to our
                                  contractor partners, so we’ll all be working
                                  with the same project expectations.{" "}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="space-y-3 mt-5 overflow-hidden border-b ">
                          <h4
                            onClick={handleText6}
                            className="cursor-pointer pb-5 flex items-center justify-between text-lg 
  text-black font-bold hover:text-FM-orange"
                          >
                            Freemodel renovates the house
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-500 ml-2 hover:text-FM-orange"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              ></path>
                            </svg>
                          </h4>

                          {isSubtextVisible6 && (
                            <div
                              className="duration-300 text-black"
                              style={{ height: "auto" }}
                            >
                              <div
                                style={{
                                  width: "500px",
                                  padding: "0px 0px 20px 0px",
                                }}
                              >
                                <p className="ddd">
                                  Next, our contractor partners will begin the
                                  project on the agreed-upon start date. A
                                  dedicated project manager will oversee the job
                                  and provide you and your seller with a digital
                                  project log with regular updates and photos of
                                  the completed work.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="space-y-3 mt-5 overflow-hidden border-b ">
                          <h4
                            onClick={handleText7}
                            className="cursor-pointer pb-5 flex items-center justify-between text-lg 
  text-black font-bold hover:text-FM-orange"
                          >
                            Agent markets the property
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-500 ml-2 hover:text-FM-orange"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              ></path>
                            </svg>
                          </h4>

                          {isSubtextVisible7 && (
                            <div
                              className="duration-300 text-black"
                              style={{ height: "auto" }}
                            >
                              <div
                                style={{
                                  width: "500px",
                                  padding: "0px 0px 20px 0px",
                                }}
                              >
                                <p className="ddd">
                                  When the renovation is complete, you’ll market
                                  the property at the price you and the
                                  homeowner determine. We allow 1 year for the
                                  home to sell and close, the renovation costs
                                  are then due and payable by the homeowner at
                                  escrow.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="space-y-3 mt-5 overflow-hidden border-b ">
                          <h4
                            onClick={handleText8}
                            className="cursor-pointer pb-5 flex items-center justify-between text-lg 
  text-black font-bold hover:text-FM-orange"
                          >
                            Agent closes the sale
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-500 ml-2 hover:text-FM-orange"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              ></path>
                            </svg>
                          </h4>

                          {isSubtextVisible8 && (
                            <div
                              className="duration-300 text-black"
                              style={{ height: "auto", width: "346px" }}
                            >
                              <div
                                style={{
                                  width: "500px",
                                  padding: "0px 0px 20px 0px",
                                }}
                              >
                                <p className="ddd">
                                  Congratulations — this is the part we’re all
                                  working toward! Once the home sells, Freemodel
                                  is paid directly out of escrow for the
                                  contract amount — no interest of any kind, no
                                  more paperwork, and no additional hassle.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <div className="inline-block cursor-pointer py-3 px-6 bg-FM-orange hover:bg-orange-600 active:bg-gray-500 active:shadow-none rounded-lg shadow ">
                    <a
                      href="/lets-talk"
                      id="cta_contact_button"
                      className="text-lg text-center text-white "
                    >
                      Let's Talk
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-5xl text-center text-black font-bold mt-14 mb-10">
                  Videos
                </h2>

                {/* Slider */}
                <div className="relative mx-auto w-3/4">
                  <div ref={sliderRef} className="keen-slider">
                    {projects.map((project, index) => (
                      <div
                        className="keen-slider__slide h-[350px] md:h-[500px] rounded-lg border-2 bg-white border-stone-100"
                        style={{ "max-width": "500px", "min-width": "500px" }}
                      >
                        <div className="jsx-6c374164f6fcfa75 relative w-full mx-auto object-cover mt-3">
                          <iframe
                            src={project.src}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="jsx-6c374164f6fcfa75 mx-auto rounded-lg responsive-iframe !max-w-[90%]"
                          />
                        </div>
                        <div className="mt-2">
                          <dl>
                            <div className="projectcardtitle px-8 !max-w-[90%] md:px-0 md:w-[500px] md:mx-auto">
                              <h2 className="font-bold text-left text-xl min-h-[65px] line-clamp-2">
                                {project.title}
                              </h2>
                              <p className="text-sm text-left mb-6">
                                {project.text}
                              </p>
                            </div>
                          </dl>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Kaydırma çubuğu */}
                  <div className="keen-slider__controls flex justify-center mt-4">
                    <button
                      className="keen-slider__control keen-slider__control--prev"
                      onClick={() => instanceRef.current?.prev()}
                    >
                      <span className="text-gray-700">&lt;</span>{" "}
                      {/* Önceki düğmesi */}
                    </button>
                    <button
                      className="keen-slider__control keen-slider__control--next"
                      onClick={() => instanceRef.current?.next()}
                    >
                      <span className="text-gray-700">&gt;</span>{" "}
                      {/* Sonraki düğmesi */}
                    </button>
                  </div>
                </div>
                {/* Slider */}

                {/* <div className="navigation-wrapper relative mx-auto  w-full  sm:w-[65%] md:w-[65%] lg:w-[75%] xl:w-[95%] 2xl:w-[65%] 3xl:w-[75%] 4xl:w-[75%]">
                  <div className="slider-container w-[85%] mx-auto">
                    <div className="keen-slider">
                      <div
                        className="keen-slider__slide h-[350px] md:h-[500px] rounded-lg border-2 bg-white border-stone-100"
                        style={{ "max-width": "500px", "min-width": "500px" }}
                      >
                        <div className="jsx-6c374164f6fcfa75 relative w-full mx-auto object-cover mt-3">
                          <iframe
                            src="https://www.youtube.com/embed/a0EO5ObDrc8?rel=0&si=HQQpbaPzo5UGW0wP"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="jsx-6c374164f6fcfa75 mx-auto rounded-lg responsive-iframe !max-w-[90%]"
                          />
                        </div>
                        <div className="mt-2">
                          <dl>
                            <div className="projectcardtitle px-8 !max-w-[90%] md:px-0 md:w-[500px] md:mx-auto">
                              <h2 className="font-bold text-left text-xl min-h-[65px] line-clamp-2">
                                Above and Beyond
                              </h2>
                              <p className="text-sm text-left mb-6">
                                Realtor Kelley Solberg quickly saw the potential
                                in this stunning $3MM+ property. But for her
                                senior client in his 90s, she knew the process
                                would need to be super smooth. Freemodel’s work
                                helped the home start a bidding war and sell for
                                far above asking.{" "}
                              </p>
                            </div>
                          </dl>
                        </div>
                      </div>
                      <div
                        className="keen-slider__slide h-[350px] md:h-[500px] rounded-lg border-2 bg-white border-stone-100"
                        style={{ "max-width": "500px", "min-width": "500px" }}
                      >
                        <div className="jsx-6c374164f6fcfa75 relative w-full mx-auto object-cover mt-3">
                          <iframe
                            src="https://www.youtube.com/embed/-lmQ2HEhCQQ?rel=0&si=bsHQkeK8e8sEa1rK"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="jsx-6c374164f6fcfa75 mx-auto rounded-lg responsive-iframe !max-w-[90%]"
                          />
                        </div>
                        <div className="mt-2">
                          <dl>
                            <div className="projectcardtitle px-8 !max-w-[90%] md:px-0 md:w-[500px] md:mx-auto">
                              <h2 className="font-bold text-left text-xl min-h-[65px] line-clamp-2">
                                From Family Home to Home Run
                              </h2>
                              <p className="text-sm text-left mb-6">
                                A 400% ROI! It was finally time for a seller’s
                                childhood home to change hands. Hear how
                                Freemodel made a once-beautiful property
                                gorgeous again with tasteful renovations.
                              </p>
                            </div>
                          </dl>
                        </div>
                      </div>
                      <div
                        className="keen-slider__slide h-[350px] md:h-[500px] rounded-lg border-2 bg-white border-stone-100"
                        style={{ "max-width": "500px", "min-width": "500px" }}
                      >
                        <div className="jsx-6c374164f6fcfa75 relative w-full mx-auto object-cover mt-3">
                          <iframe
                            src="https://www.youtube.com/embed/-lmQ2HEhCQQ?rel=0&si=bsHQkeK8e8sEa1rK"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="jsx-6c374164f6fcfa75 mx-auto rounded-lg responsive-iframe !max-w-[90%]"
                          />
                        </div>
                        <div className="mt-2">
                          <dl>
                            <div className="projectcardtitle px-8 !max-w-[90%] md:px-0 md:w-[500px] md:mx-auto">
                              <h2 className="font-bold text-left text-xl min-h-[65px] line-clamp-2">
                                Payback Time
                              </h2>
                              <p className="text-sm text-left mb-6">
                                If you could get $2 for every $1 you spend,
                                wouldn’t you be eager to spend that money? Agent
                                Eddie O’Sullivan encouraged a client to have
                                Freemodel renovate their home, knowing the
                                expenditure would pay off. It did—to the tune of
                                nearly 300% ROI!{" "}
                              </p>
                            </div>
                          </dl>
                        </div>
                      </div>
                      <div
                        className="keen-slider__slide h-[350px] md:h-[500px] rounded-lg border-2 bg-white border-stone-100"
                        style={{ "max-width": "500px", "min-width": "500px" }}
                      >
                        <div className="jsx-6c374164f6fcfa75 relative w-full mx-auto object-cover mt-3">
                          <iframe
                            src="https://www.youtube.com/embed/_Lpn0qma7xs?rel=0&si=Dh2x51yjM5_RGqWh"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="jsx-6c374164f6fcfa75 mx-auto rounded-lg responsive-iframe !max-w-[90%]"
                          />
                        </div>

                        <div className="mt-2">
                          <dl>
                            <div className="projectcardtitle px-8 !max-w-[90%] md:px-0 md:w-[500px] md:mx-auto">
                              <h2 className="font-bold text-left text-xl min-h-[65px] line-clamp-2">
                                Getting Emotional
                              </h2>
                              <p className="text-sm text-left mb-6">
                                Whether it’s tile work, a lighting fixture, or a
                                unique objet d’art, a powerful feature can start
                                a conversation and help buyers connect
                                emotionally with your property. Freemodel’s Dee
                                Wise explains how to use a “statement” piece to
                                dramatize and focus each space within a home.
                              </p>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </main>
            <footer aria-label="Site Footer" className="bg-FM-orange">
              <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="sm:col-span-2">
                    <a
                      href="/"
                      aria-label="Go home"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        <img
                          src="/for-agents/images/153835bd18da2abd5208f200698a8de5006f9c3c-500x92.png"
                          alt="Company Logo"
                          className="w-48"
                        />
                      </span>
                    </a>
                    <div className="pt-8 flex gap-6 max-w-xs items-center lg:max-w-sm">
                      <a
                        href="https://www.instagram.com/getfreemodel/"
                        target="_blank"
                        className="text-2xl text-white"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="text-2xl text-white"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.facebook.com/getfreemodel"
                        target="_blank"
                        className="text-2xl text-white"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="text-2xl text-white"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/freemodel"
                        target="_blank"
                        className="text-2xl text-white"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="text-2xl text-white"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-base text-white font-bold tracking-wide">
                      <a href="https://www.freemodel.com/renovation-services">
                        Renovation Services
                      </a>
                    </p>
                    <p className="text-base text-white font-bold tracking-wide">
                      <a href="https://www.freemodel.com/for-contractors">
                        For Contractors
                      </a>
                    </p>
                    <p className="text-base text-white font-bold tracking-wide">
                      <a href="https://www.freemodel.com/media">Media</a>
                    </p>
                    <p className="text-base text-white font-bold tracking-wide">
                      <a href="https://www.freemodel.com/faq">FAQ</a>
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-base text-white font-bold tracking-wide">
                      <a href="https://www.freemodel.com/blog">Blog</a>
                    </p>
                    <p className="text-base text-white font-bold tracking-wide">
                      <a href="/about-us">About Us</a>
                    </p>
                    <p className="text-base text-white font-bold tracking-wide">
                      <a href="/careers">Careers</a>
                    </p>
                    <p className="text-base text-white font-bold tracking-wide">
                      <a href="/privacy-policy">Privacy Policy</a>
                    </p>
                  </div>
                </div>
                <div className="border-t pt-5 pb-10 lg:flex lg:flex-row lg:justify-between flex-col-reverse">
                  <p className="text-sm text-white">
                    <a
                      href="https://www.nickcancode.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline"
                    >
                      © {/* */}2024{/* */} Freemodel Inc. All rights reserved.
                    </a>
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
