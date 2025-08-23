function Button16() {
  return (
    <button className="relative px-8 py-2 overflow-hidden font-semibold bg-white group border-2 border-black rounded-md cursor-pointer">
      <span className="absolute inset-0 rounded-full bg-black scale-0 group-hover:scale-150 transition-transform duration-500"></span>
      <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
        Login
      </span>
    </button>
  );
}

export default Button16;
