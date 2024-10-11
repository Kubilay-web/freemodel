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
      imgSrc: "/home/images/image_19",
      link: "/projects/sweet-berkeley-cottage",
      sleep: "2",
      shower: "2",
      weeks: "2",
    },
    {
      title: "Sweet Berkeley Cottage",
      imgSrc: "/home/images/image_20",
      link: "/projects/sweet-berkeley-cottage",
      sleep: "2",
      shower: "2",
      weeks: "2",
    },
    {
      title: "Sweet Berkeley Cottage",
      imgSrc: "/home/images/image_24",
      link: "/projects/sweet-berkeley-cottage",
      sleep: "2",
      shower: "2",
      weeks: "2",
    },
    {
      title: "Sweet Berkeley Cottage",
      imgSrc: "/home/images/image_23",
      link: "/projects/sweet-berkeley-cottage",
      sleep: "2",
      shower: "2",
      weeks: "2",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center", // Slaytların ortalanması
      perView: 1, // Varsayılan değer mobil için
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

  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="facebook-domain-verification"
          content="5pc9nltxw34updxgju5hx3etg0917m"
        />

        <title>Freemodel</title>

        <Script
          type="text/javascript"
          src="/home/scripts/_app-1a1ff5be0a1fa16a.js"
          strategy="lazyOnload"
        />

        <Script
          type="text/javascript"
          src="/home/scripts/_buildManifest.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/script-1.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/_ssgManifest.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/0c428ae2-31f9d1db5e228be3.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/1bfc9850-d5b4875931592ca1.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/89-dcd926757d61c20a.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/1071-a932ca81de113d8a.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/1664-ebebdc0ca07a7b83.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/3306-45351644f6c10403.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/6664059.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/framework-0995a3e8436ddc4f.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/index-b93989402c54ec1f.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/main-e1ec2601efcd9e94.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/polyfills-78c92fac7aa8fdd8.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/us-14b33be1-0fb5-4bdf-8f14-12e12f329861.js"
          strategy="lazyOnload"
        />
        <Script
          type="text/javascript"
          src="/home/scripts/v2.js"
          strategy="lazyOnload"
        />

        <meta
          name="description"
          content="Remodeling to maximize home sale prices. Dedicated in-person project directors handle everything, from personalized designs and staging to complete interior and exterior makeovers. Pay at closing, no upfront costs for sellers."
        />
        <link rel="icon" href="favicon.ico" />
        <meta
          property="og:title"
          content="Pre-sales home renovations. Remodel to sell your listings for more."
        />
        <meta
          property="og:description"
          content="Remodeling to maximize home sale prices. Dedicated in-person project directors handle everything, from personalized designs and staging to complete interior and exterior makeovers. Pay at closing, no upfront costs for sellers."
        />
        <meta
          property="og:image"
          content="images/3e921ffe6b5160cb3a3201fd1169003989f57f4e-600x300.jpg"
        />
        <meta property="og:url" content="https://freemodel.com/" />
        <meta property="og:type" content="website" />
        {/* <link
          rel="preload"
          as="image"
          imagesrcset="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5h1h7x9x%2Fproduction%2F0f71a5eef1a6d510f56a0070fa5a187c81418e66-1280x853.png%3Frect%3D147%2C222%2C1133%2C572&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5h1h7x9x%2Fproduction%2F0f71a5eef1a6d510f56a0070fa5a187c81418e66-1280x853.png%3Frect%3D147%2C222%2C1133%2C572&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5h1h7x9x%2Fproduction%2F0f71a5eef1a6d510f56a0070fa5a187c81418e66-1280x853.png%3Frect%3D147%2C222%2C1133%2C572&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5h1h7x9x%2Fproduction%2F0f71a5eef1a6d510f56a0070fa5a187c81418e66-1280x853.png%3Frect%3D147%2C222%2C1133%2C572&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5h1h7x9x%2Fproduction%2F0f71a5eef1a6d510f56a0070fa5a187c81418e66-1280x853.png%3Frect%3D147%2C222%2C1133%2C572&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5h1h7x9x%2Fproduction%2F0f71a5eef1a6d510f56a0070fa5a187c81418e66-1280x853.png%3Frect%3D147%2C222%2C1133%2C572&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5h1h7x9x%2Fproduction%2F0f71a5eef1a6d510f56a0070fa5a187c81418e66-1280x853.png%3Frect%3D147%2C222%2C1133%2C572&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5h1h7x9x%2Fproduction%2F0f71a5eef1a6d510f56a0070fa5a187c81418e66-1280x853.png%3Frect%3D147%2C222%2C1133%2C572&w=3840&q=75 3840w"
          imagesizes="100vw"
          fetchpriority="high"
        /> */}
        <meta name="next-head-count" content={20} />

        {/* <link
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
        /> */}
        {/* <link rel="stylesheet" href="css/b8e302d41b271438.css" data-n-p /> */}
        <noscript data-n-css />
        <style
          id="__jsx-4264762549"
          dangerouslySetInnerHTML={{
            __html:
              "\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      font-family: \"Adonis\", serif;\n      font-weight: 700;\n      font-style: normal\n    }\n\n    p,\n    a,\n    li {\n      font-family: '__Pontano_Sans_4ac859', '__Pontano_Sans_Fallback_4ac859'\n    }\n  ",
          }}
        />
      </div>

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
                      srcSet="/home/images/image_46 1x, /home/images/image 2x"
                      src="/home/images/image"
                    />
                  </a>
                  <div className="lg:hidden">
                    <button className="text-gray-500 hover:text-gray-800">
                      <svg
                        onClick={toggleMenu}
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
                      <a href="/for-agents" className>
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

            <div
              className={`${
                menuOpen ? "block" : "hidden"
              }  top-0 left-0 w-full bg-white z-50 transition-all duration-500 ease-in-out lg:hidden`}
            >
              <ul className="flex flex-col items-center space-y-6 py-6">
                <li className="text-black hover:text-FM-orange">
                  <a href="/how-it-works" className="text-lg">
                    How It Works
                  </a>
                </li>
                <li className="text-black hover:text-FM-orange">
                  <a href="/for-agents" className="text-lg">
                    For Agents
                  </a>
                </li>
                <li className="text-black hover:text-FM-orange">
                  <a href="/for-homeowners" className="text-lg">
                    For Homeowners
                  </a>
                </li>
                <li className="text-black hover:text-FM-orange">
                  <a href="/projects" className="text-lg">
                    Projects
                  </a>
                </li>
                <li className="text-black hover:text-FM-orange">
                  <a href="/locations" className="text-lg">
                    Locations
                  </a>
                </li>
                <li className="text-black hover:text-FM-orange">
                  <a href="/team" className="text-lg">
                    Your Team
                  </a>
                </li>
                <li>
                  <a
                    href="/lets-talk"
                    className="block py-3 px-4 w-32 mx-auto font-medium text-center text-white bg-FM-orange hover:bg-orange-600 active:bg-indigo-700 rounded-lg shadow"
                  >
                    Let's Talk
                  </a>
                </li>
              </ul>
            </div>

            <main>
              <div className="relative">
                <img
                  alt="hero"
                  fetchPriority="high"
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
                  srcSet="/home/images/image_81 640w, /home/images/image_88 750w, /home/images/image_63 828w, /home/images/image_86 1080w, /home/images/image_92 1200w, /home/images/image_83 1920w, /home/images/image_136 2048w, /home/images/image_7 3840w"
                  src="/home/images/image_7"
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
          my-10
          text-6xl font-bold tracking-tight text-white sm:text-8xl sm:leading-none"
                        style={{ opacity: "1" }}
                      >
                        Give clients the quick, top dollar sale they deserve.
                      </h2>
                      <div style={{ opacity: "1" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 px-10 sm:px-0 md:mx-auto text-center lg:max-w-5xl md:mb-12">
                  <h2 className="mb-10 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    We remove the barriers to pre-sale renovations. Your
                    clients’ homes sell faster—and for more.
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
                          alt="We do it all"
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
                          srcSet="/home/images/image_57 256w, /home/images/image_34 384w, /home/images/image_38 640w, /home/images/image_36 750w, /home/images/image_42 828w, /home/images/image_54 1080w, /home/images/image_49 1200w, /home/images/image_40 1920w, /home/images/image_39 2048w, /home/images/image_2 3840w"
                          src="/home/images/image_2"
                        />
                      </div>
                    </div>
                    <h6 className="text-2xl mb-2 font-semibold leading-5">
                      We do it all
                    </h6>
                    <p className="max-w-md mb-3 text-base text-gray-900 sm:mx-auto">
                      We design, manage, and pay for remodels and pre-sales prep
                    </p>
                  </div>
                  <div className="text-center px-14" style={{ opacity: "1" }}>
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                      <div className="relative w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                        <img
                          alt="Local management"
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
                          srcSet="/home/images/image_52 256w, /home/images/image_31 384w, /home/images/image_82 640w, /home/images/image_37 750w, /home/images/image_45 828w, /home/images/image_33 1080w, /home/images/image_69 1200w, /home/images/image_35 1920w, /home/images/image_53 2048w, /home/images/image_11 3840w"
                          src="/home/images/image_11"
                        />
                      </div>
                    </div>
                    <h6 className="text-2xl mb-2 font-semibold leading-5">
                      Local management
                    </h6>
                    <p className="max-w-md mb-3 text-base text-gray-900 sm:mx-auto">
                      Project directors live in the area and know local taste
                    </p>
                  </div>
                  <div className="text-center px-14" style={{ opacity: "1" }}>
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                      <div className="relative w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                        <img
                          alt="No work required"
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
                          srcSet="/home/images/image_41 256w, /home/images/image_50 384w, /home/images/image_32 640w, /home/images/image_30 750w, /home/images/image_77 828w, /home/images/image_99 1080w, /home/images/image_43 1200w, /home/images/image_128 1920w, /home/images/image_129 2048w, /home/images/image_1 3840w"
                          src="/home/images/image_1"
                        />
                      </div>
                    </div>
                    <h6 className="text-2xl mb-2 font-semibold leading-5">
                      No work required
                    </h6>
                    <p className="max-w-md mb-3 text-base text-gray-900 sm:mx-auto">
                      We handle the entire renovation process
                    </p>
                  </div>
                  <div className="text-center px-14" style={{ opacity: "1" }}>
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                      <div className="relative w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                        <img
                          alt="Sellers love us"
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
                          srcSet="/home/images/image_48 256w, /home/images/image_56 384w, /home/images/image_60 640w, /home/images/image_74 750w, /home/images/image_72 828w, /home/images/image_64 1080w, /home/images/image_122 1200w, /home/images/image_70 1920w, /home/images/image_58 2048w, /home/images/image_3 3840w"
                          src="/home/images/image_3"
                        />
                      </div>
                    </div>
                    <h6 className="text-2xl mb-2 font-semibold leading-5">
                      Sellers love us
                    </h6>
                    <p className="max-w-md mb-3 text-base text-gray-900 sm:mx-auto">
                      We help their properties sell faster and for more
                    </p>
                  </div>
                  <div className="text-center px-14" style={{ opacity: "1" }}>
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                      <div className="relative w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                        <img
                          alt="Agents love us, too"
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
                          srcSet="/home/images/image_47 256w, /home/images/image_66 384w, /home/images/image_59 640w, /home/images/image_44 750w, /home/images/image_62 828w, /home/images/image_85 1080w, /home/images/image_78 1200w, /home/images/image_51 1920w, /home/images/image_65 2048w, /home/images/image_5 3840w"
                          src="/home/images/image_5"
                        />
                      </div>
                    </div>
                    <h6 className="text-2xl mb-2 font-semibold leading-5">
                      Agents love us, too
                    </h6>
                    <p className="max-w-md mb-3 text-base text-gray-900 sm:mx-auto">
                      Your clients are happy, so you look like a hero
                    </p>
                  </div>
                  <div className="text-center px-14" style={{ opacity: "1" }}>
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                      <div className="relative w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                        <img
                          alt="No cash up front"
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
                          srcSet="/home/images/image_61 256w, /home/images/image_79 384w, /home/images/image_55 640w, /home/images/image_68 750w, /home/images/image_67 828w, /home/images/image_93 1080w, /home/images/image_75 1200w, /home/images/image_71 1920w, /home/images/image_73 2048w, /home/images/image_4 3840w"
                          src="/home/images/image_4"
                        />
                      </div>
                    </div>
                    <h6 className="text-2xl mb-2 font-semibold leading-5">
                      No cash up front
                    </h6>
                    <p className="max-w-md mb-3 text-base text-gray-900 sm:mx-auto">
                      Homeowners pay at closing when their home sells
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-FM-blue py-16 mx-auto lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
                  <h2 className="mb-10 text-5xl font-bold leading-none tracking-tight mx-auto text-center text-white sm:text-5xl">
                    Why Freemodel?
                  </h2>
                </div>
                <section>
                  <div
                    className="mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8"
                    style={{ opacity: "1" }}
                  >
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <div className="absolute inset-0 object-cover">
                          <img
                            alt="We’re local."
                            loading="lazy"
                            width={392}
                            height={448}
                            decoding="async"
                            data-nimg={1}
                            className="w-full h-full object-cover"
                            style={{ color: "transparent" }}
                            srcSet="/home/images/image_84 1x, /home/images/image_6 2x"
                            src="/home/images/image_6"
                          />
                        </div>
                      </div>
                      <div className="lg:py-24">
                        <a href="/locations" rel="noopener noreferrer">
                          <h2 className="text-3xl font-bold text-white underline underline-offset-4 decoration-1 sm:text-4xl hover:text-FM-orange">
                            We’re local.
                          </h2>
                        </a>
                        <p className="mt-4 text-white font-light text-3xl">
                          Local project directors are based in your region. They
                          visit your site often and remain the trusted point of
                          contact throughout the project.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div
                    className="mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8"
                    style={{ opacity: "1" }}
                  >
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <div className="absolute inset-0 object-cover">
                          <img
                            alt="We’re talented."
                            loading="lazy"
                            width={392}
                            height={448}
                            decoding="async"
                            data-nimg={1}
                            className="w-full h-full object-cover"
                            style={{ color: "transparent" }}
                            srcSet="/home/images/image_97 1x, /home/images/image_14 2x"
                            src="/home/images/image_14"
                          />
                        </div>
                      </div>
                      <div className="lg:py-24 sm:order-last">
                        <a href="/team" rel="noopener noreferrer">
                          <h2 className="text-3xl font-bold text-white underline underline-offset-4 decoration-1 sm:text-4xl hover:text-FM-orange">
                            We’re talented.
                          </h2>
                        </a>
                        <p className="mt-4 text-white font-light text-3xl">
                          Each project director is also a skilled designer. They
                          work closely with the agent and homeowner to establish
                          scope and design.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div
                    className="mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8"
                    style={{ opacity: "1" }}
                  >
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <div className="absolute inset-0 object-cover">
                          <img
                            alt="We’re flexible."
                            loading="lazy"
                            width={392}
                            height={448}
                            decoding="async"
                            data-nimg={1}
                            className="w-full h-full object-cover"
                            style={{ color: "transparent" }}
                            srcSet="/home/images/image_96 1x, /home/images/image_15 2x"
                            src="/home/images/image_15"
                          />
                        </div>
                      </div>
                      <div className="lg:py-24">
                        <a href="/how-it-works" rel="noopener noreferrer">
                          <h2 className="text-3xl font-bold text-white underline underline-offset-4 decoration-1 sm:text-4xl hover:text-FM-orange">
                            We’re flexible.
                          </h2>
                        </a>
                        <p className="mt-4 text-white font-light text-3xl">
                          We have no arbitrary caps on the scope or size of a
                          project. We’ll greenlight any renovation job that will
                          boost a home’s selling price.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="flex justify-center mt-10">
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
              <div className="text-center mt-20 mb-40">
                <h1 className="text-5xl text-center text-black font-bold mb-14">
                  Featured Projects
                </h1>

                <div className="relative mx-auto w-3/4">
                  <div ref={sliderRef} className="keen-slider">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="gap-8 keen-slider__slide relative"
                      >
                        <a
                          className="block w-full rounded-lg p-4 border-2 bg-white border-stone-100 mx-2"
                          href={project.link}
                        >
                          <div className="relative h-72 w-full">
                            <img
                              alt={project.title}
                              loading="lazy"
                              width={380}
                              height={288}
                              decoding="async"
                              data-nimg="1"
                              className="rounded-lg object-cover h-full"
                              src={project.imgSrc}
                            />
                          </div>
                          <div className="mt-2">
                            <h2 className="font-bold text-left text-2xl min-h-[65px] line-clamp-2">
                              {project.title}
                            </h2>
                            <div className="mt-3 flex items-center gap-8 text-xs">
                              {/* SLEEP */}
                              <div className="flex items-center gap-3">
                                <div className="flex items-center">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 640 512"
                                    className="h-5 w-5 text-FM-orange"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path>
                                  </svg>
                                </div>
                                <div className="flex items-center">
                                  <p className="text-black text-lg">
                                    {project.sleep}
                                  </p>
                                </div>
                              </div>

                              {/* SHOWER */}
                              <div className="flex items-center gap-3">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="h-5 w-5 text-FM-orange"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"></path>
                                </svg>
                                <p className="text-black text-lg">
                                  {project.shower}
                                </p>
                              </div>

                              {/* WEEKS */}
                              <div className="flex items-center gap-3">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="h-5 w-5 text-FM-orange"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                                </svg>
                                <p className="text-black text-lg">Weeks</p>
                              </div>
                            </div>
                          </div>
                        </a>
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
              </div>
              <div className="navigation-wrapper relative bg-FM-blue pt-20">
                <h1 className="text-4xl sm:text-5xl text-center text-white font-bold mb-4">
                  Why Agents Love Us
                </h1>
                <Carousel>
                  <div className="keen-slider__slide number-slide1">
                    <div className="flex items-center align-items-center justify-center px-5 py-5 ">
                      <div className="w-full max-w-4xl px-5 pt-5 pb-10 mx-auto text-gray-800">
                        <div className="w-full pt-1 pb-5 mx-auto  text-center">
                          <a href="#" className="relative block">
                            <img
                              alt="Lisa Garaventa"
                              loading="lazy"
                              width={144}
                              height={144}
                              decoding="async"
                              data-nimg={1}
                              className="mx-auto object-cover rounded-full h-36 w-36"
                              style={{ color: "transparent" }}
                              srcSet="/home/images/image_143 1x, /home/images/image_13 2x"
                              src="/home/images/image_13"
                            />
                          </a>
                        </div>
                        <div className="w-full mb-10">
                          <p className="px-10 text-lg  sm:max-w-none sm:text-2xl text-center text-white">
                            "I have been lucky enough to work with Louise
                            Valuer. She is absolutely amazing!! I worked with
                            her on another project and she filled in for the
                            Marin project manager when she was on vacation. I
                            will continue to request Louise for all of my future
                            projects in Marin. She is organized, is a good
                            listener and works tremendously well with me and my
                            clients. We all love her!"
                          </p>
                        </div>
                        <div className="w-full">
                          <p className="font-bold text-center text-white text-lg sm:text-xl">
                            Lisa Garaventa
                          </p>
                          <p className="text-center text-gray-500 text-lg">
                            Golden Gate Sotheby's International Realty
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="keen-slider__slide number-slide1">
                    <div className="flex items-center align-items-center justify-center px-5 py-5 ">
                      <div className="w-full max-w-4xl px-5 pt-5 pb-10 mx-auto text-gray-800">
                        <div className="w-1/2 pt-1 pb-5 mx-auto  text-center">
                          <a href="#" className="relative block">
                            <img
                              alt="Lisa Garaventa"
                              loading="lazy"
                              width={144}
                              height={144}
                              decoding="async"
                              data-nimg={1}
                              className="mx-auto object-cover rounded-full h-36 w-36"
                              style={{ color: "transparent" }}
                              srcSet="/home/images/image_143 1x, /home/images/image_13 2x"
                              src="/home/images/image_13"
                            />
                          </a>
                        </div>
                        <div className="w-full mb-10">
                          <p className="px-10 text-lg  sm:max-w-none sm:text-2xl text-center text-white">
                            "I have been lucky enough to work with Louise
                            Valuer. She is absolutely amazing!! I worked with
                            her on another project and she filled in for the
                            Marin project manager when she was on vacation. I
                            will continue to request Louise for all of my future
                            projects in Marin. She is organized, is a good
                            listener and works tremendously well with me and my
                            clients. We all love her!"
                          </p>
                        </div>
                        <div className="w-full">
                          <p className="font-bold text-center text-white text-lg sm:text-xl">
                            Lisa Garaventa
                          </p>
                          <p className="text-center text-gray-500 text-lg">
                            Golden Gate Sotheby's International Realty
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
              <div className="py-16 mx-auto lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
                  <h2 className="mb-10 text-5xl font-bold leading-none tracking-tight text-center text-black sm:text-5xl md:mx-auto">
                    Locations
                  </h2>
                </div>
                <div
                  className="items-center px-4 max-w-screen-xl mx-auto md:px-8 grid gap-11 sm:grid-cols-3 gap-4"
                  style={{ opacity: "1" }}
                >
                  <a href="/locations/florida">
                    <div className="group" style={{ opacity: "1" }}>
                      <div className="relative h-72 w-full">
                        <img
                          alt="Florida"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="h-72 w-full rounded-xl object-cover shadow-xl transition group-hover:opacity-80"
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
                          sizes="(max-width: 640px) 100vw, 640px"
                          srcSet="/home/images/image_134 640w, /home/images/image_133 750w, /home/images/image_145 828w, /home/images/image_141 1080w, /home/images/image_197 1200w, /home/images/image_180 1920w, /home/images/image_194 2048w, /home/images/image_20 3840w"
                          src="/home/images/image_20"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-3xl underline underline-offset-4 decoration-1 font-bold sm:text-3xl text-FM-orange group-hover:text-orange-600">
                          Florida
                        </h3>
                      </div>
                    </div>
                  </a>
                  <a href="/locations/norcal">
                    <div className="group" style={{ opacity: "1" }}>
                      <div className="relative h-72 w-full">
                        <img
                          alt="Northern California"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="h-72 w-full rounded-xl object-cover shadow-xl transition group-hover:opacity-80"
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
                          sizes="(max-width: 640px) 100vw, 640px"
                          srcSet="/home/images/image_163 640w, /home/images/image_151 750w, /home/images/image_168 828w, /home/images/image_147 1080w, /home/images/image_144 1200w, /home/images/image_193 1920w, /home/images/image_190 2048w, /home/images/image_18 3840w"
                          src="/home/images/image_18"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-3xl underline underline-offset-4 decoration-1 font-bold sm:text-3xl text-FM-orange group-hover:text-orange-600">
                          Northern California
                        </h3>
                      </div>
                    </div>
                  </a>
                  <a href="/locations/socal">
                    <div className="group" style={{ opacity: "1" }}>
                      <div className="relative h-72 w-full">
                        <img
                          alt="Southern California"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="h-72 w-full rounded-xl object-cover shadow-xl transition group-hover:opacity-80"
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
                          sizes="(max-width: 640px) 100vw, 640px"
                          srcSet="/home/images/image_158 640w, /home/images/image_161 750w, /home/images/image_156 828w, /home/images/image_162 1080w, /home/images/image_170 1200w, /home/images/image_201 1920w, /home/images/image_175 2048w, /home/images/image_29 3840w"
                          src="/home/images/image_29"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-3xl underline underline-offset-4 decoration-1 font-bold sm:text-3xl text-FM-orange group-hover:text-orange-600">
                          Southern California
                        </h3>
                      </div>
                    </div>
                  </a>
                  <a href="/locations/texas">
                    <div className="group" style={{ opacity: "1" }}>
                      <div className="relative h-72 w-full">
                        <img
                          alt="Texas"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="h-72 w-full rounded-xl object-cover shadow-xl transition group-hover:opacity-80"
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
                          sizes="(max-width: 640px) 100vw, 640px"
                          srcSet="/home/images/image_188 640w, /home/images/image_174 750w, /home/images/image_187 828w, /home/images/image_199 1080w, /home/images/image_167 1200w, /home/images/image_179 1920w, /home/images/image_192 2048w, /home/images/image_23 3840w"
                          src="/home/images/image_23"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-3xl underline underline-offset-4 decoration-1 font-bold sm:text-3xl text-FM-orange group-hover:text-orange-600">
                          Texas
                        </h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex justify-center mt-14">
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
              <div className="px-4 py-16 bg-FM-blue md:px-24 lg:px-8 lg:py-10">
                <div className="grid sm:gap-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:grid-cols-2">
                  <div className="lg:pr-10 md: my-auto">
                    <h5 className="mb-4 text-4xl text-white font-extrabold leading-none">
                      Not in your city?
                    </h5>
                    <p className="mb-6 text-white">
                      We will let you know when we are!
                    </p>
                  </div>
                  <div>
                    <div className="max-w-3xl mx-auto my-10">
                      <div></div>
                    </div>
                  </div>
                </div>
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
                          src="/home/images/153835bd18da2abd5208f200698a8de5006f9c3c-500x92.png"
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
