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

  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta
        name="facebook-domain-verification"
        content="5pc9nltxw34updxgju5hx3etg0917m"
      />

      <title>For Homeowners | Freemodel</title>
      <meta
        name="description"
        content="Freemodel specializes in home renovations, helping agents increase the home sales price for sellers. In-person project directors are assigned to each project and work with agents directly. No upfront payments, Freemodel is paid when the home sells."
      />
      <link rel="icon" href="favicon.ico" />
      <meta property="og:title" />
      <meta
        property="og:description"
        content="Maximize your home’s sale price with expert renovations tailored to your needs. Our dedicated in-person project directors handle everything—from custom designs and staging to full interior and exterior makeovers. Best of all, there are no upfront costs, as you only pay at closing."
      />
      <meta
        property="og:/for-homeowners/images/image"
        content="/for-homeowners//for-homeowners/images/images/74696090ca84342beca88f406f9d523af6d7eedd-592x492.png"
      />
      <meta property="og:url" content="https://freemodel.com/for-homeowners" />
      <meta property="og:type" content="website" />

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
        href="../../static/css/8e627451e5f1507d.css"
        as="style"
      />
      <link rel="stylesheet" href="css/8e627451e5f1507d.css" data-n-g />
      <link
        rel="preload"
        href="/_next/static/css/b8e302d41b271438.css"
        as="style"
      />
      <link rel="stylesheet" href="css/b8e302d41b271438.css" data-n-p /> */}

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
      <style
        id="__jsx-6fc2217cb9f2a240"
        dangerouslySetInnerHTML={{
          __html:
            "\n    .pgh1custom {\n      font-size: 2.5rem;\n      line-height: 1.2;\n      font-weight: 700\n    }\n  ",
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
                      srcSet="/for-homeowners/images/image_10 1x, /for-homeowners/images/image 2x"
                      src="/for-homeowners/images/image"
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
                      <a href="/for-agents" className>
                        For Agents
                      </a>
                    </li>
                    <li className="text-black hover:text-FM-orange lg:text-base">
                      <a href="/for-homeowners" className="text-FM-orange">
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
            <main>
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
                  srcSet="/for-homeowners/images/image_20 640w, /for-homeowners/images/image_14 750w, /for-homeowners/images/image_37 828w, /for-homeowners/images/image_26 1080w, /for-homeowners/images/image_27 1200w, /for-homeowners/images/image_15 1920w, /for-homeowners/images/image_16 2048w, /for-homeowners/images/image_7 3840w"
                  src="/for-homeowners/images/image_7"
                />
                <div
                  className="relative bg-gray-900 bg-opacity-50"
                  style={{ opacity: "0" }}
                >
                  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl max md:px-24 lg:px-8 lg:py-28 2xl:py-36">
                    <div
                      className="text-center m-auto"
                      style={{ opacity: "0" }}
                    >
                      <h2
                        className="text-center m-auto
            my-6
            text-6xl font-bold tracking-tight text-white sm:text-8xl sm:leading-none"
                        style={{ opacity: "0" }}
                      >
                        Beautiful homes sell for more.
                      </h2>
                      <div style={{ opacity: "0" }}>
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
              <div className="bg-gray-800">
                <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                  <h2 className="text-3xl leading-[3rem] font-extrabold text-white mx-auto sm:text-[38px] sm:max-w-5xl">
                    Are you looking to renovate your home and maximize value?
                    Freemodel can help you get top dollar.{" "}
                  </h2>
                </div>
              </div>
              <div className="md:max-w-6xl px-8 md:mx-auto pb-16 pt-8">
                <div className="text-lg">
                  <p className="text-lg break-words my-4 min-h-[6px] font-light custom-styling-broker">
                    We are a comprehensive home renovation service that designs,
                    manages, and pays upfront for remodels and pre-sale
                    preparation. All of our clients get matched with a dedicated
                    local{" "}
                    <a
                      href="https://www.freemodel.com/meet-the-team"
                      className="text-FM-orange"
                    >
                      project director
                    </a>{" "}
                    who will be on-site throughout the project to make the
                    process easy for you.
                  </p>
                  <p className="text-lg break-words my-4 min-h-[6px] font-light custom-styling-broker">
                    After collaborating with you to decide which renovations
                    will yield the most value, your project director will
                    develop custom designs and manage all work and
                    subcontractors until your house is ready to show. After your
                    home sells, Freemodel is reimbursed out of escrow and you
                    pocket the remainder of the profit. It’s that simple!
                  </p>
                </div>
              </div>
              <h1 className="text-4xl text-center max-w-4xl mx-auto font-bold mb-20 px-8">
                If you are not selling your home but still interested in a fully
                managed, custom renovation, check out our Renovation Services
                page:
              </h1>
              <div className="mb-24 text-center">
                <div className="inline-block cursor-pointer py-3 px-6 bg-FM-orange hover:bg-orange-600 active:bg-gray-500 active:shadow-none rounded-lg shadow ">
                  <a
                    href="/renovation-services"
                    id="cta_contact_button"
                    className="text-lg text-center text-white "
                  >
                    Renovation Services
                  </a>
                </div>
              </div>
              <div className="bg-FM-blue px-4 py-16 mx-auto lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
                  <h2 className="mb-10 text-5xl font-bold leading-none tracking-tight mx-auto text-center text-white sm:text-5xl">
                    How Freemodel Benefits Homeowners
                  </h2>
                </div>
                <div className="relative mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8">
                  <div className="flex gap-x-10 flex-row">
                    <div className=" inset-0 object-contain">
                      <img
                        alt=" The Best Price for Your Home"
                        loading="lazy"
                        width={392}
                        height={448}
                        decoding="async"
                        data-nimg={1}
                        className="w-16 h-full object-contain"
                        style={{ color: "transparent" }}
                        srcSet="/for-homeowners/images/image_9 1x, /for-homeowners/images/image_1 2x"
                        src="/for-homeowners/images/image_1"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <h2 className="text-3xl font-bold text-white underline underline-offset-4 decoration-1">
                        {" "}
                        The Best Price for Your Home
                      </h2>
                    </div>
                  </div>
                  <p className="mt-4 text-white font-light text-3xl">
                    Move-in-ready homes command top dollar, and strategic
                    renovations will show your home in its best light! Our
                    dedicated remodel team is ready to fully design, manage, and
                    fund your renovation. They’ll show you how much more you
                    could make via high-quality (yet affordable) upgrades proven
                    to attract buyers.
                  </p>
                </div>
                <div className="relative mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8">
                  <div className="flex gap-x-10 flex-row-reverse">
                    <div className=" inset-0 object-contain">
                      <img
                        alt="Hassle-Free, One-Stop Shop"
                        loading="lazy"
                        width={392}
                        height={448}
                        decoding="async"
                        data-nimg={1}
                        className="w-16 h-full object-contain"
                        style={{ color: "transparent" }}
                        srcSet="/for-homeowners/images/image_11 1x, /for-homeowners/images/image_2 2x"
                        src="/for-homeowners/images/image_2"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <h2 className="text-3xl font-bold text-white underline underline-offset-4 decoration-1">
                        Hassle-Free, One-Stop Shop
                      </h2>
                    </div>
                  </div>
                  <p className="mt-4 text-white font-light text-3xl">
                    Our remodel team can deliver everything from cosmetic
                    upgrades—such as painting, flooring and landscaping—to full
                    remodels, including a new kitchen, new bathrooms, and new
                    outdoor spaces. They’ll manage the entire process from
                    design to execution, because you have other things to think
                    about during this busy time.
                  </p>
                </div>
                <div className="relative mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8">
                  <div className="flex gap-x-10 flex-row">
                    <div className=" inset-0 object-contain">
                      <img
                        alt="No Out-of-Pocket Costs"
                        loading="lazy"
                        width={392}
                        height={448}
                        decoding="async"
                        data-nimg={1}
                        className="w-16 h-full object-contain"
                        style={{ color: "transparent" }}
                        srcSet="/for-homeowners/images/image_19 1x, /for-homeowners/images/image_3 2x"
                        src="/for-homeowners/images/image_3"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <h2 className="text-3xl font-bold text-white underline underline-offset-4 decoration-1">
                        No Out-of-Pocket Costs
                      </h2>
                    </div>
                  </div>
                  <p className="mt-4 text-white font-light text-3xl">
                    You’ll receive a detailed, fixed bid proposal from the team
                    so you will know exactly what’s included in the project and
                    at what price. Best of all, our remodel team handles all
                    contractor payments up front, so you don’t pay a penny for
                    renovations until the close of escrow. To qualify, you only
                    need to have sufficient home equity. Freemodel does not
                    conduct credit or background checks.
                  </p>
                </div>
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
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-6">
                  <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    Freemodel can help you with:
                  </h2>
                </div>
                <div className="grid gap-16 row-gap-10 lg:grid-cols-2">
                  <div>
                    <img
                      alt="Freemodel can help you with:"
                      loading="lazy"
                      width={800}
                      height={800}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-64 rounded shadow-lg sm:h-96"
                      style={{ color: "transparent" }}
                      srcSet="/for-homeowners/images/image_12 1x, /for-homeowners/images/image_6 2x"
                      src="/for-homeowners/images/image_6"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                      <ul className="list-disc space-y-3 pl-6">
                        <li className="text-2xl">Custom designs</li>
                        <li className="text-2xl">Layout changes</li>
                        <li className="text-2xl">Painting</li>
                        <li className="text-2xl">Flooring</li>
                        <li className="text-2xl">Electrical</li>
                        <li className="text-2xl">Plumbing</li>
                        <li className="text-2xl">Landscaping</li>
                      </ul>
                      <ul className="list-disc space-y-3 pl-6">
                        <li className="text-2xl">Staging</li>
                        <li className="text-2xl">Permits</li>
                        <li className="text-2xl">Junk removal</li>
                        <li className="text-2xl">HVAC</li>
                        <li className="text-2xl">Roofing</li>
                        <li className="text-2xl">Cleaning</li>
                        <li className="text-2xl">and more....</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="py-16 mx-auto sm:max-w-xl relative md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:bg-[url('/windy3.png')]"
                style={{
                  "background-size": "117% 86%",
                  "background-position": "center",
                  "background-repeat": "no-repeat",
                }}
              >
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <h2 className="max-w-lg mb-10 pb-10 px-4 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    Here's how it works:
                  </h2>
                </div>
                <div className="grid gap-4 row-gap-5 pr-4 sm:grid-cols-2 lg:grid-cols-4" />
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
                            src="https://www.youtube-nocookie.com/embed/tT7FmuxiNqg?rel=0&si=cpPdCD0Fi9SApZ2S&controls=0"
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
                                A Thank You Letter From Homeowner Paul Weick
                              </h2>
                              <p className="text-sm text-left mb-6">
                                This is why we do what we do, transforming
                                childhood homes beyond imagination.
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
                            src="https://www.youtube.com/embed/iQpg2lPbPBs?rel=0&si=xdn7Rn2iNe4rvsJG"
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
                                A Helping Hand
                              </h2>
                              <p className="text-sm text-left mb-6">
                                After trying to manage a presale remodel
                                yourself, you really appreciate everything
                                Freemodel brings to the table. Seller Chris
                                Petersen expresses his relief at getting our
                                help with renovations on his San Rafael luxury
                                property.{" "}
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
                            src="https://www.youtube.com/embed/cC0BXzNaNdQ?rel=0&si=LwjudBcLpzArmQ5m"
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
                                Million-Dollar Magic
                              </h2>
                              <p className="text-sm text-left mb-6">
                                Sell my home for $1MM! Agent partner Derrick
                                Gardner got a bold challenge from his client and
                                reached out to Freemodel to give the property a
                                top-to-bottom remodel. From flooring to lighting
                                to landscaping to the kitchen, the remodel
                                helped the home achieve its million-dollar goal.
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
                            src="https://www.youtube.com/embed/yjiYQrEpZYk?rel=0&si=Z5JZ1vzRiPamc7Ux"
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
                                A Condo in Redondo
                              </h2>
                              <p className="text-sm text-left mb-6">
                                Mom’s move to a rest home left two daughters
                                with no clue as to how to proceed. Freemodel’s
                                Susan Lennon took over and managed a bunch of
                                simple fixes–lighting fixtures, paint,
                                carpets—that more than doubled the sellers’
                                investment in the remodel.{" "}
                              </p>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="text-center mt-20  py-20 bg-FM-blue">
                <h1 className="text-5xl text-center text-white font-bold mb-14">
                  Projects
                </h1>
                <div className="text-center">
                  <div className="navigation-wrapper relative sm:mx-10">
                    <div className="slider-container w-10/12 mx-auto">
                      <div className="keen-slider">
                        <div className="keen-slider__slide">
                          <a
                            className="block w-[74vw] md:w-[51vw] lg:w-[30vw] lg:max-w-[23rem] xl:max-w-[20rem] 2xl:max-w-[26rem] max-w-lg rounded-lg p-4 border-2 bg-white border-stone-100 mx-5  sm:mx-auto"
                            href="/projects/jacksonville-jewel"
                          >
                            <div className="relative h-72 w-full object-cover">
                              <img
                                alt="Jacksonville Jewel"
                                loading="lazy"
                                width={380}
                                height={288}
                                decoding="async"
                                data-nimg={1}
                                className="rounded-lg object-cover h-72"
                                style={{
                                  color: "transparent",
                                  backgroundSize: "cover",
                                  backgroundPosition: "50% 50%",
                                  backgroundRepeat: "no-repeat",
                                }}
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 30vw, 26rem"
                                srcSet="
      /for-homeowners/images/image_13 256w, 
      /for-homeowners/images/image_17 384w, 
      /for-homeowners/images/image_47 640w, 
      /for-homeowners/images/image_28 750w, 
      /for-homeowners/images/image_30 828w, 
      /for-homeowners/images/image_41 1080w, 
      /for-homeowners/images/image_42 1200w, 
      /for-homeowners/images/image_24 1920w, 
      /for-homeowners/images/image_31 2048w, 
      /for-homeowners/images/image_8 3840w
    "
                                src="/for-homeowners/images/image_8"
                              />
                            </div>
                            <div className="mt-2">
                              <dl>
                                <div className="projectcardtitle">
                                  <dt className="sr-only">
                                    Jacksonville Jewel
                                  </dt>
                                  <h2 className="font-bold text-left text-2xl min-h-[65px] line-clamp-2">
                                    Jacksonville Jewel
                                  </h2>
                                </div>
                              </dl>
                              <div className="mt-3 flex items-center gap-8 text-xs">
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
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
                                  <p className="text-black text-lg">3</p>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
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
                                  <p className="text-black text-lg">1</p>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
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
                                  <p className="text-black text-lg">
                                    {" "}
                                    {/* */}Weeks
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="keen-slider__slide">
                          <a
                            className="block w-[74vw] md:w-[51vw] lg:w-[30vw] lg:max-w-[23rem] xl:max-w-[20rem] 2xl:max-w-[26rem] max-w-lg rounded-lg p-4 border-2 bg-white border-stone-100 mx-5  sm:mx-auto"
                            href="/projects/harmony-in-hercules"
                          >
                            <div className="relative h-72 w-full object-cover">
                              <img
                                alt="Harmony in Hercules"
                                loading="lazy"
                                width={380}
                                height={288}
                                decoding="async"
                                data-nimg={1}
                                className="rounded-lg object-cover h-72"
                                style={{
                                  color: "transparent",
                                  backgroundSize: "cover",
                                  backgroundPosition: "50% 50%",
                                  backgroundRepeat: "no-repeat",
                                }}
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 30vw, 26rem"
                                srcSet="
      /for-homeowners/images/image_38 256w, 
      /for-homeowners/images/image_18 384w, 
      /for-homeowners/images/image_22 640w, 
      /for-homeowners/images/image_21 750w, 
      /for-homeowners/images/image_29 828w, 
      /for-homeowners/images/image_35 1080w, 
      /for-homeowners/images/image_36 1200w, 
      /for-homeowners/images/image_33 1920w, 
      /for-homeowners/images/image_43 2048w, 
      /for-homeowners/images/image_5 3840w
    "
                                src="/for-homeowners/images/image_5"
                              />
                            </div>

                            <div className="mt-2">
                              <dl>
                                <div className="projectcardtitle">
                                  <dt className="sr-only">
                                    Harmony in Hercules
                                  </dt>
                                  <h2 className="font-bold text-left text-2xl min-h-[65px] line-clamp-2">
                                    Harmony in Hercules
                                  </h2>
                                </div>
                              </dl>
                              <div className="mt-3 flex items-center gap-8 text-xs">
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
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
                                  <p className="text-black text-lg">2</p>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
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
                                  <p className="text-black text-lg">3</p>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
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
                                  <p className="text-black text-lg">
                                    {" "}
                                    {/* */}Weeks
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="keen-slider__slide">
                          <a
                            className="block w-[74vw] md:w-[51vw] lg:w-[30vw] lg:max-w-[23rem] xl:max-w-[20rem] 2xl:max-w-[26rem] max-w-lg rounded-lg p-4 border-2 bg-white border-stone-100 mx-5  sm:mx-auto"
                            href="/projects/san-diego-delight"
                          >
                            <div className="relative h-72 w-full object-cover">
                              <img
                                alt="San Diego Delight"
                                loading="lazy"
                                width={380}
                                height={288}
                                decoding="async"
                                data-nimg={1}
                                className="rounded-lg object-cover h-72"
                                style={{
                                  color: "transparent",
                                  backgroundSize: "cover",
                                  backgroundPosition: "50% 50%",
                                  backgroundRepeat: "no-repeat",
                                }}
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 30vw, 26rem"
                                srcSet="
      /for-homeowners/images/image_23 256w, 
      /for-homeowners/images/image_34 384w, 
      /for-homeowners/images/image_25 640w, 
      /for-homeowners/images/image_32 750w, 
      /for-homeowners/images/image_40 828w, 
      /for-homeowners/images/image_39 1080w, 
      /for-homeowners/images/image_44 1200w, 
      /for-homeowners/images/image_46 1920w, 
      /for-homeowners/images/image_45 2048w, 
      /for-homeowners/images/image_4 3840w
    "
                                src="/for-homeowners/images/image_4"
                              />
                            </div>

                            <div className="mt-2">
                              <dl>
                                <div className="projectcardtitle">
                                  <dt className="sr-only">San Diego Delight</dt>
                                  <h2 className="font-bold text-left text-2xl min-h-[65px] line-clamp-2">
                                    San Diego Delight
                                  </h2>
                                </div>
                              </dl>
                              <div className="mt-3 flex items-center gap-8 text-xs">
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
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
                                  <p className="text-black text-lg">6</p>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
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
                                  <p className="text-black text-lg">2</p>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
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
                                  <p className="text-black text-lg">
                                    {" "}
                                    {/* */}Weeks
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jsx-6fc2217cb9f2a240 text-center text-4xl mt-20">
                <div className="md:max-w-6xl px-8 md:mx-auto pb-16 pt-8">
                  <div className="text-lg">
                    <h1 className="text-2xl font-bold pgh1custom">
                      Interested in working with Freemodel? Check out where
                      we're{" "}
                      <a
                        href="https://www.freemodel.com/locations"
                        className="text-FM-orange"
                      >
                        located
                      </a>{" "}
                      and Let's Talk!
                    </h1>
                  </div>
                </div>
              </div>
              <div className="mb-8 text-center">
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
              <p className="text-center text-2xl max-w-4xl mx-auto px-4 mb-20">
                If not, sit tight—we’re growing rapidly and may be in your town
                soon! We’re looking forward to working with you and helping you
                get the best price for your beautiful home.{" "}
              </p>
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
                          src="/for-homeowners/images/153835bd18da2abd5208f200698a8de5006f9c3c-500x92.png"
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
