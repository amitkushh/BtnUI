import { type ReactElement, ReactNode } from "react";

interface ButtonProps {
  varient: "primary" | "secondary";
  text: ReactNode;
  icon: ReactElement;
}

const varientClasses = {
  primary: "",
  secondary: " ",
};

const defaultStyle =
  "rounded-2xl flex justify-center items-center gap-2 text-sm bg-white hover:bg-black/5 py-2 px-4 text-black cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out";

function Button({ varient, text, icon }: ButtonProps) {
  return (
    <button className={`${varientClasses[varient]} ${defaultStyle}`}>
      {icon}
      {text}
    </button>
  );
}

export default Button;

{
  /* <Button varient="primary" text="Add Content" startIcon={<PlusIcon />}></Button> */
}
