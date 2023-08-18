import { FaInstagram  } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import{FaPaperPlane} from "react-icons/fa"

export const Herocard = () => {


  return (
    <div className="lg:w-[502px] md:w-[300px] w-[320px]   lg:mt-[150px] md:mt-[100px] flex flex-col justify-center items-center text-center mt-[20px] md:text-start md:items-start">
      <div className="flex">
        <p className="lg:text-[40px] md:text-[32px] text-[30px] font-bold text-blue-costum animate-pulse">
          Hi
        </p>
        <p className="lg:text-[40px] md:text-[30px] text-[30px] font-bold ">
          , I’m Rizki Nabawi
        </p>
      </div>
      <p className="text-[15px] text-gray-500" data-aos="fade-up">
        As a front-end web developer, I specialize in creating the visual and
        interactive elements of websites that users see and interact with
        directly.{" "}
      </p>
      <div className="flex mt-[15px] gap-2 ">
        <button className="w-[100px] h-[36px] flex text-center items-center text-white bg-blue-costum justify-center hover:bg-sky-400 " >
          Hire Me <FaPaperPlane className="ml-2"/>
        </button>
        <button className="hidden w-[120px] h-[32px]  text-center items-center bg-white text-blue-costum border-blue-costum justify-center  border">
          Download CV
        </button>
      </div>
      <div>
        <IconKu />
      </div>
    </div>
  );
};

function IconKu() {
  return (
    <div className="flex gap-3 mt-[25px] hover:animate-pulse" data-aos="fade-up">
      <div className="w-[30px] h-[30px]">
        <FaInstagram className="text-pink-600 w-[24px] h-[24px] " />
      </div>
      <div className="w-[30px] h-[30px]">
        <AiFillLinkedin className="text-blue-700 w-[24px] h-[24px] " />
      </div>
      <div className="w-[30px] h-[30px]">
        <AiFillGithub className="text-slate-900 w-[24px] h-[24px] " />
      </div>
      <div className="w-[30px] h-[30px]">
        <AiFillMail className="text-blue-700 w-[24px] h-[24px] " />
      </div>
    </div>
  );
}
