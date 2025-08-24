function Button7() {
  return (
    <button className="relative py-3 px-6 border-2 border-black text-black font-semibold group overflow-hidden rounded-lg cursor-pointer">
      <span className="absolute bottom-0 left-0 w-0 h-0 bg-black group-hover:w-full group-hover:h-full group-focus:w-full group-focus:h-full rounded-tr-md transition-all duration-400 ease-in-out"></span>
      <span className="relative z-10 group-hover:text-white group-focus:text-white transition-colors duration-400">
        Hover me
      </span>
    </button>
  );
}

export default Button7;
