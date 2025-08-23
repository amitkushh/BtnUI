function Button17() {
  return (
    <button className="relative px-8 py-3 overflow-hidden font-semibold bg-black group border-2 border-black rounded-xl cursor-pointer text-white">
      <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
      <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-right rounded-tl-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
      <span className="relative z-10 text-white transition-colors duration-800">
        Login
      </span>
    </button>
  );
}

export default Button17;
