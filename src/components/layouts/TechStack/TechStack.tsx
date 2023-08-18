import { Desk } from "./Desc";
import { TechBox } from "./TechBox";
export const TechStack = () => {
  return (
    <div className="sm:w-[100vw] w-full bg-black flex justify-center p-2 ">
      <div
        id="stack"
        className=" w-[360px] md:w-[820px] lg:w-[1280px]  bg-black text-white pt-[78px] pb-10 md:pb-[170px] flex flex-col  items-center text-[36px] overflow-hidden"
      >
        <div>
          <h1
            className="font-semibold text-[24px] md:text-[36px] mb-[30px]"
            data-aos="fade-up"
          >
            Why Do I Use <a className="text-blue-costum">REACT?</a>
          </h1>
        </div>
        <div className="md:w-[953px] md:h-[422px] flex flex-col md:flex-row justify-center items-center gap-1 md:mt-[100px]">
          <div className="lg:w-[475px] w-[360px] md:w-[400px] h-[422px]pl-1">
            <Desk />
          </div>
          <div className="lg:w-[475px] w-[360px] md:w-[400px] h-[422px] p-2">
            <TechBox />
          </div>
        </div>
      </div>
    </div>
  );
};
