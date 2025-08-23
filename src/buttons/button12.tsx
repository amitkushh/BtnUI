function Button12() {
  return (
    <button className="relative px-6 py-3 text-lg  text-white group cursor-pointer font-semibold bg-black">
      Click me
      <span className="absolute left-0 top-0 w-0 h-[4px] transition-all duration-400 bg-white group-hover:w-full rounded-full"></span>
    </button>
  );
}

export default Button12;
