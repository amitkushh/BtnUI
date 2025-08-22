"use client";
import Button from "./Button";
import GithubIcon from "@/icons/GithubIcon";
import XIcon from "@/icons/XIcon";

function Navbar() {
  return (
    <header>
      <div className="flex justify-between items-center mx-5 sm:px-15 md:mx-24 lg:mx-32 bg-[#f6f6f6] mt-4 py-5 px-8 rounded-full">
        <div>
          <span className="text-xl font-semibold">BtnUi</span>
        </div>
        <div className="flex justify-center items-center gap-3">
          <a href="https://github.com/amitkushh/BtnUI" target="_blank">
            <Button
              varient="primary"
              text={<span className="hidden md:inline">Give us a star</span>}
              icon={<GithubIcon />}
            ></Button>
          </a>
          <a href="https://x.com/amitkushh" target="_blank">
            <Button
              varient="secondary"
              text={<span className="hidden md:inline">Follow me</span>}
              icon={<XIcon />}
            ></Button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
