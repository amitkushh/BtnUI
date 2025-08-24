import { type ReactElement, ReactNode } from "react";

interface ButtonProps {
  varient: "primary" | "secondary" | "tertiary";
  text: ReactNode;
  icon: ReactElement;
}

const varientClasses = {
  primary: "hover:scale-110 focus:scale-110 transition-all duration-300 ease-in-out",
  secondary: "hover:scale-110 focus:scale-110 transition-all duration-300 ease-in-out",
  tertiary: "transition-all focus:scale-110 duration-300 ease-in-out",
};

const defaultStyle =
  "rounded-2xl flex justify-center items-center gap-2 text-sm bg-white hover:bg-black/5 focus:bg-black/5 py-2 px-4 text-black cursor-pointer";

function Button({ varient, text, icon }: ButtonProps) {
  return (
    <button className={`${varientClasses[varient]} ${defaultStyle}`}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
