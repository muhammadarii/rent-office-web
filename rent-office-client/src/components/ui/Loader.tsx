const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-[#8DD3BB] rounded-full";

  return (
    <div className="flex my-52">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
};

export default Loader;
