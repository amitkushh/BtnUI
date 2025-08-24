function Button19() {
  return (
    <button className="relative px-6 py-3 text-black font-semibold border-2 border-black overflow-hidden group rounded-xl cursor-pointer">
      <span className="absolute inset-0 w-full h-full transform scale-x-0 bg-black origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
      <span className="absolute inset-0 h-full w-full bg-black transform scale-x-0 origin-right rounded-tl-full group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
      <span className="relative z-10 group-hover:text-white group-focus:text-white transition-colors duration-800">
        Hover me
      </span>
    </button>
  );
}

export default Button19;
