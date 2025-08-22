"use client";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col text-center items-center mx-5 sm:px-15 md:mx-24 lg:mx-32 bg-[#f6f6f6] mt-4 py-15 px-8 rounded-2xl gap-10">
      {/* Logo Image */}
      <div>
        <Image
          src="./logo.svg"
          alt="btnui"
          width={200}
          height={200}
          className="rotate-20 hover:rotate-0 transition ease-in-out duration-300"
        />
      </div>
      {/* Heading and Paragraph  */}
      <div>
        <h1 className="text-5xl font-medium text-center mb-3 mx-auto max-w-[500px]">
          Sleek Buttons for Modern UI
        </h1>
        <p className="max-w-[600px] text-gray-700">
          A minimal collection of Tailwind-powered buttons ready to use in your
          next project. Copy, customize, and use them instantly in your
          projects.
        </p>
      </div>
    </div>
  );
}

export default Hero;
