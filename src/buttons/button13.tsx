function Button13() {
  return (
    <button className="relative px-6 py-3 text-lg text-white group cursor-pointer font-semibold bg-black">
      Click me
      <span className="absolute left-0 top-0 w-[4px] h-0 transition-all duration-400 bg-white group-hover:h-full group-focus:h-full rounded-full"></span>
      <span className="absolute right-0 bottom-0 w-[4px] h-0 transition-all duration-400 bg-white group-hover:h-full group-focus:h-full rounded-full"></span>
    </button>
  );
}

export default Button13;
