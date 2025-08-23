function Button10() {
  return (
    <button className="relative font-semibold border-2 px-6 py-2 border-black overflow-hidden group rounded-full cursor-pointer">
      <span className="absolute inset-0 bg-black translate-x-[100%] rounded-full transition-transform duration-400 group-hover:translate-x-0"></span>
      <span className="relative z-10 transition-colors duration-400 text-black group-hover:text-white">
        Hover me
      </span>
    </button>
  );
}

export default Button10;
