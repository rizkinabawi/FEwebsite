import { AiFillRead, AiFillSafetyCertificate, AiOutlineCluster, AiOutlineGlobal } from "react-icons/ai";
export const TechBox = () => {
  return (
    <div>
      <div className="flex gap-3" data-aos="fade-up">
        <div className="hover:animate-pulse text-black font-semibold w-[230px] h-[200px] bg-white md:rounded-tl-[45px] box-border pl-[23px] pt-[30px] text-[20px]">
          <div className="w-[70px] h-[70px] rounded-full bg-black mb-[16px] flex items-center justify-center text-[40px] text-blue-costum ">
            <AiOutlineCluster />
          </div>
          <p className="md:text-xl text-[16px]">Component-Based Architecture</p>
        </div>
        <div className="hover:animate-pulse text-white font-semibold w-[230px] h-[200px] bg-blue-costum md:rounded-tl-[45px] box-border pl-[23px] pt-[30px] text-[20px] " data-aos="fade-up">
          <div className="w-[70px] h-[70px] rounded-full bg-white mb-[16px] flex items-center justify-center text-[40px] text-blue-costum ">
            <AiFillRead />
          </div>
          <p className="md:text-xl text-[16px]">Declarative Syntax</p>
        </div>
      </div>
     
      <div className="flex gap-3 mt-3" data-aos="fade-up">
        <div className="hover:animate-pulse text-white font-semibold w-[230px] h-[200px] bg-blue-costum md:rounded-tl-[45px] box-border pl-[23px] pt-[30px] text-[20px]">
          <div className="w-[70px] h-[70px] rounded-full bg-white mb-[16px] flex items-center justify-center text-[40px] text-blue-costum ">
            <AiFillSafetyCertificate />
          </div>
          <p className="md:text-xl text-[16px]">Efficient Updates</p>
        </div>
        <div className="hover:animate-pulse text-black font-semibold w-[230px] h-[200px] bg-white md:rounded-tl-[45px] box-border pl-[23px] pt-[30px] text-[20px]" data-aos="fade-up">
          <div className="w-[70px] h-[70px] rounded-full bg-black mb-[16px] flex items-center justify-center text-[40px] text-blue-costum ">
            <AiOutlineGlobal />
          </div>
          <p className="md:text-xl text-[16px]">Community and Resources</p>
        </div>
      </div>
    </div>
  );
};
