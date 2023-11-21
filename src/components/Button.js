function Button({ text }) {
  return (
    <div className=" flex justify-center items-center h-full text-sm md:text-base bg-slate-800 mx-2 md:mx-0 rounded-xl text-green cursor-pointer poppins">
      {text}
    </div>
  );
}

export default Button;
