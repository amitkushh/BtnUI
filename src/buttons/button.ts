import Button1 from "./button1";
import Button2 from "./button2";
import Button3 from "./button3";
import Button4 from "./button4";
import Button5 from "./button5";
import Button6 from "./button6";
import Button7 from "./button7";
import Button8 from "./button8";
import Button9 from "./button9";
import Button10 from "./button10";
import Button11 from "./button11";
import Button12 from "./button12";
import Button13 from "./button13";
import Button14 from "./button14";
import Button15 from "./button15";
import Button16 from "./button16";
import Button17 from "./button17";

export const Btn = {
  Button1,
  Button2,
  Button3,
  Button4,
  Button5,
  Button6,
  Button7,
  Button8,
  Button9,
  Button10,
  Button11,
  Button12,
  Button13,
  Button14,
  Button15,
  Button16,
  Button17,
};

//Copy Button Code Here
export const buttonCode: Record<string, string> = {
  Button1: `<button className="font-semibold text-sm py-3 px-8 text-white rounded-md cursor-pointer shadow-lg shadow-black/50 inset-shadow-sm inset-shadow-[#85868b] bg-gradient-to-t from-[#444546] to-[#232526] transition-colors duration-500 ease-in-out hover:bg-gradient-to-t hover:from-[#232526] hover:to-[#232526] focus:bg-gradient-to-t focus:from-[#232526] focus:to-[#232526]">
      Get Started
    </button>`,
  Button2: `<button className="border border-slate-700 rounded-3xl py-3 px-1.5 bg-transparent cursor-pointer">
      <span className="bg-[#565657] text-white py-2 px-7 rounded-full font-semibold text-md hover:bg-[#565657]/90 focus:bg-[#565657]/90 transition-colors duration-500 ease-in-out inset-shadow-sm inset-shadow-[#363638]">
        Get Started
      </span>
    </button>`,
  Button3: `<button className="rounded-2xl flex justify-center items-center text-sm bg-black py-3 px-6 text-slate-200 cursor-pointer hover:scale-110 focus:scale-110 transition-all duration-300 ease-in-out">
      Hover me
    </button>`,
  Button4: `<button
      className="py-2 px-7 rounded-md cursor-pointer text-slate-200 bg-radial-[at_25%_25%] from-white to-zinc-900 to-30% font-medium 
         hover:bg-radial-[at_25%_25%] hover:from-white hover:to-zinc-900 hover:to-40% focus:bg-radial-[at_25%_25%] focus:from-white focus:to-zinc-900 focus:to-40%"
    >
      Click me
    </button>`,
  Button5: `<button className="relative py-3 px-6 border-2 border-black text-black font-semibold group overflow-hidden rounded-lg cursor-pointer">
      <span className="absolute top-0 left-0 w-0 h-0 bg-black group-hover:w-full group-hover:h-full group-focus:w-full group-focus:h-full rounded-br-md transition-all duration-400 ease-in-out"></span>
      <span className="relative z-10 group-hover:text-white group-focus:text-white transition-colors duration-400">
        Hover me
      </span>
    </button>`,
  Button6: `<button className="relative py-3 px-6 border-2 border-black text-black font-semibold group overflow-hidden rounded-lg cursor-pointer">
      <span className="absolute bottom-0 right-0 w-0 h-0 bg-black group-hover:w-full group-hover:h-full group-focus:w-full group-focus:h-full rounded-tl-md transition-all duration-400 ease-in-out"></span>
      <span className="relative z-10 group-hover:text-white group-focus:text-white transition-colors duration-400">
        Hover me
      </span>
    </button>`,
  Button7: `<button className="relative py-3 px-6 border-2 border-black text-black font-semibold group overflow-hidden rounded-lg cursor-pointer">
      <span className="absolute bottom-0 left-0 w-0 h-0 bg-black group-hover:w-full group-hover:h-full group-focus:w-full group-focus:h-full rounded-tr-md transition-all duration-400 ease-in-out"></span>
      <span className="relative z-10 group-hover:text-white group-focus:text-white transition-colors duration-400">
        Hover me
      </span>
    </button>`,
  Button8: `<button className="relative py-3 px-6 border-2 border-black text-black font-semibold group overflow-hidden rounded-lg cursor-pointer">
      <span className="absolute top-0 right-0 w-0 h-0 bg-black group-hover:w-full group-hover:h-full group-focus:w-full group-focus:h-full rounded-bl-md transition-all duration-400 ease-in-out"></span>
      <span className="relative z-10 group-hover:text-white group-focus:text-white transition-colors duration-400">
        Hover me
      </span>
    </button>`,
  Button9: `<button className="relative font-semibold border-2 px-6 py-2 border-black overflow-hidden group rounded-full cursor-pointer">
      <span className="absolute inset-0 bg-black translate-x-[-100%] rounded-full transition-transform duration-400 group-hover:translate-x-0 group-focus:translate-x-0"></span>
      <span className="relative z-10 transition-colors duration-400 text-black group-hover:text-white group-focus:text-white">
        Hover me
      </span>
    </button>`,
  Button10: `<button className="relative font-semibold border-2 px-6 py-2 border-black overflow-hidden group rounded-full cursor-pointer">
      <span className="absolute inset-0 bg-black translate-x-[100%] rounded-full transition-transform duration-400 group-hover:translate-x-0 group-focus:translate-x-0"></span>
      <span className="relative z-10 transition-colors duration-400 text-black group-hover:text-white group-focus:text-white">
        Hover me
      </span>
    </button>`,
  Button11: `<button className="relative px-6 py-3 text-lg text-white group cursor-pointer font-semibold bg-black">
      Click me
      <span className="absolute left-0 bottom-0 w-0 h-[4px] transition-all duration-400 bg-white group-hover:w-full group-focus:w-full rounded-full"></span>
    </button>`,
  Button12: `<button className="relative px-6 py-3 text-lg text-white group cursor-pointer font-semibold bg-black">
      Click me
      <span className="absolute left-0 top-0 w-0 h-[4px] transition-all duration-400 bg-white group-hover:w-full group-focus:w-full rounded-full"></span>
    </button>`,
  Button13: `<button className="relative px-6 py-3 text-lg text-white group cursor-pointer font-semibold bg-black">
      Click me
      <span className="absolute left-0 top-0 w-[4px] h-0 transition-all duration-400 bg-white group-hover:h-full group-focus:h-full rounded-full"></span>
      <span className="absolute right-0 bottom-0 w-[4px] h-0 transition-all duration-400 bg-white group-hover:h-full group-focus:h-full rounded-full"></span>
    </button>`,
  Button14: `<button className="relative px-6 py-3 text-lg  text-white group cursor-pointer font-semibold bg-black">
      Click me
      <span className="absolute right-0 top-0 w-[4px] h-0 transition-all duration-400 bg-white group-hover:h-full group-focus:h-full rounded-full"></span>
      <span className="absolute left-0 bottom-0 w-[4px] h-0 transition-all duration-400 bg-white group-hover:h-full group-focus:h-full rounded-full"></span>
    </button>`,
  Button15: `<button className="relative px-6 py-3 bg-white border-2 border-black text-black font-semibold rounded-md overflow-hidden group cursor-pointer">
      <span className="absolute inset-0 bg-black group-hover:translate-y-0 group-focus:translate-y-0 translate-y-[-100%] transition-transform duration-400 z-0"></span>
      <span className="duration-400 relative z-10 group-hover:text-white group-focus:text-white transition-colors">
        Get Started
      </span>
    </button>`,
  Button16: `<button className="relative px-8 py-2 overflow-hidden font-semibold bg-white group border-2 border-black rounded-md cursor-pointer">
      <span className="absolute inset-0 rounded-full bg-black scale-0 group-hover:scale-150 group-focus:scale-150 transition-transform duration-500"></span>
      <span className="relative z-10 text-black group-hover:text-white group-focus:text-white transition-colors duration-500">
        Login
      </span>
    </button>`,
  Button17: `<button className="relative px-8 py-3 overflow-hidden font-semibold bg-black group border-2 border-black rounded-xl cursor-pointer text-white">
      <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
      <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-right rounded-tl-full group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
      <span className="relative z-10 text-white transition-colors duration-800">
        Login
      </span>
    </button>`,
};
