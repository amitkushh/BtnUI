"use client";
import CopyIcon from "@/icons/CopyIcon";
import Button from "./Button";

function Card() {
  const cardOptions = {};

  return (
    <div className="flex flex-col items-center bg-[#f6f6f6] mt-4 py-15 rounded-2xl">
      <h2 className="text-3xl font-semibold">See All Buttons</h2>

      {/* Cards Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10">
        {/* Single Card Section */}
        <div className="bg-white h-64 w-64 flex flex-col items-center gap-13 p-5 rounded-2xl ">
          <div className="pl-40">
            <Button varient="tertiary" text="" icon={<CopyIcon />}></Button>
          </div>
          <div>
            <button className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition active:scale-110 ">
              Click me
            </button>
          </div>
        </div>
      </div>
      <span className="font-medium text-lg">There’s more to come.</span>
    </div>
  );
}

export default Card;
