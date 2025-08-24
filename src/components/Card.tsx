"use client";
import CopyIcon from "@/icons/CopyIcon";
import { Btn } from "@/buttons/button";
import CheckIcon from "@/icons/CheckIcon";
import { useCopy } from "@/hooks/useCopy";
import { buttonCode } from "@/buttons/button";

function Card() {
  const { copy, isCopied } = useCopy();

  const buttons = Object.entries(Btn) as [keyof typeof Btn, React.FC][];

  return (
    <div className="flex flex-col items-center bg-[#f6f6f6] mt-4 py-15 rounded-2xl">
      <h2 className="text-3xl font-semibold">See All Buttons</h2>

      {/* Cards Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10">
        {/* Single Card Section */}
        {buttons.map(([name, ButtonComp]) => (
          <div
            className="bg-white h-64 w-64 flex flex-col items-center gap-13 p-5 rounded-2xl "
            key={name}
          >
            <div className="pl-40">
              {isCopied(name) ? (
                <button className="rounded-full flex justify-center items-center text-sm bg-white hover:bg-black/5 focus:bg-black/5 p-2 text-black cursor-pointer">
                  <CheckIcon />
                </button>
              ) : (
                <button
                  onClick={() => copy(buttonCode[name], name)}
                  className="rounded-full flex justify-center items-center text-sm bg-white hover:bg-black/5 focus:bg-black/5 p-2 text-black cursor-pointer"
                >
                  <CopyIcon />
                </button>
              )}
            </div>
            {/* Button Preview */}
            <div>
              <ButtonComp />
            </div>
          </div>
        ))}
      </div>
      <span className="font-medium text-lg">There&#8217;s more to come.</span>
    </div>
  );
}

export default Card;
