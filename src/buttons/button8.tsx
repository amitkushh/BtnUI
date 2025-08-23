function Button8() {
  return (
    <button className="relative py-3 px-6 border-2 border-black text-black font-semibold group overflow-hidden rounded-lg cursor-pointer">
      <span className="absolute top-0 right-0 w-0 h-0 bg-black group-hover:w-full group-hover:h-full rounded-bl-md transition-all duration-400 ease-in-out"></span>
      <span className="relative z-10 group-hover:text-white transition-colors duration-400">
        Click me
      </span>
    </button>
  );
}

export default Button8;
