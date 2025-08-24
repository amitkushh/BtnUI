function Button15() {
  return (
    <button className="relative px-6 py-3 bg-white border-2 border-black text-black font-semibold rounded-md overflow-hidden group cursor-pointer">
      <span className="absolute inset-0 bg-black group-hover:translate-y-0 group-focus:translate-y-0 translate-y-[-100%] transition-transform duration-400 z-0"></span>
      <span className="duration-400 relative z-10 group-hover:text-white group-focus:text-white transition-colors">
        Get Started
      </span>
    </button>
  );
}

export default Button15;
