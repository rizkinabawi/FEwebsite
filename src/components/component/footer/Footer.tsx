export const Footer = () => {
  return (
    <div className="sm:w-[100vw] w-full bg-black flex justify-center p-2 ">
      <div
        id="stack"
        className=" w-[360px] md:w-[820px] lg:w-[1280px]  bg-black text-white pt-[78px] pb-10 md:pb-[100px] flex  text-[20px] overflow-hidden flex-col " data-aos="fade-up"
      >
        <div className="  flex border-b border-white w-full flex-wrap pb-2 md:pb-[56px] justify-between items-end">
          <div className="flex" data-aos="fade-up">
            <div className="w-[45px] h-[45px] bg-slate-50 rounded-full mr-2"></div>
            <div className="w-[250px]">
              <h1>FEwebsite.</h1>
              <p className="text-[14px] text-slate-300">
                update User interface or feature and content for your website or
                landing pages.{" "}
              </p>
            </div>
          </div>
          
            <p className="text-[16px] mr-4 mt-5 ">Jakarta, Indonesia</p>
          
        </div>
        <p className=" md:translate-x-[480px] lg:translate-x-[940px] text-[14px] mt-3 font-semibold" data-aos="fade-up">©FEwebsite by Rizkinabawi, All Right Reserved</p>
      </div>
    </div>
  );
};
