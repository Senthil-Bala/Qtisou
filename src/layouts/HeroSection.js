function HeroSection() {
  return (
    <div className="w-full h-[270px] bg-black flex justify-center items-center">
      <div className="flex px-3 md:px-0 text-white text-xl poppins">
        <div className="flex flex-col justify-center items-center">
          <h3>100 Thousand Songs, ad-free</h3>
          <h3>Over thousands podcast episodes</h3>
        </div>
        <img
          src="./hero-logo.png"
          alt="hero-logo"
          className="h-[200px] w-[200px]"
        />
      </div>
    </div>
  );
}

export default HeroSection;
