import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaCss3Alt, FaJsSquare} from "react-icons/fa";
import {DiReact} from "react-icons/di";
interface props {
  img: string;
  title: string;
  description: string;
}
export const ProjectCards = (props: props) => {
  return (
    <div className="lg:w-[920px] md:h-[200px] md:flex  items-center  overflow-hidden  pb-4">
      <div className="w-[300px] h-[200px] overflow-hidden border border-black md:ml-3 relative group">
        <div className="w-[300px] h-[200px] backdrop-blur-sm absolute background-blur flex justify-center items-center text-2xl translate-y-[-200px] group-hover:translate-y-[0px] group-hover:transition-all group-hover:duration-[0.5s] group-hover:ease-out">
          <AiFillGithub className="hover:cursor-pointer" />
        </div>
        <img src={props.img} alt="" className="w-[300px] h-[200px]  " />
      </div>
      <div className="md:w-[500px] md:h-[200px] md:ml-5 ">
        <div>
          <h1 className="md:text-[20px] text-[16px] font-bold">
            {props.title}
          </h1>
          <p className="text-[14px] font-medium md:inline hidden text-grey-costum">
            {props.description}
          </p>
        </div>
        <IconStack />
        <CardButton />
      </div>
    </div>
  );
};

function IconStack() {
  return (
    <div className="md:flex md:gap-[15px] gap-2 md:my-3 my-1 hidden">
      <div
        className={`text-orange-500 w-[38px] h-[38px] rounded-full text-[25px] flex justify-center items-center text-center`}
      >
        <AiFillHtml5 />
      </div>
      <div
        className={`text-yellow-500 w-[38px] h-[38px] rounded-full text-[25px] flex justify-center items-center text-center`}
      >
        <FaJsSquare />
      </div>
      <div
        className={`text-blue-500 w-[38px] h-[38px] rounded-full text-[25px] flex justify-center items-center text-center`}
      >
        <FaCss3Alt />
      </div>

      <div
        className={`-blue-400 w-[38px] h-[38px] rounded-full text-[25px] flex justify-center items-center text-center text-blue-costum`}
      >
        <DiReact />
      </div>
    </div>
  );
}

function CardButton() {
  return (
    <div className="flex md:gap-[20px] gap-1">
      <a
        className="w-[100px] h-[30px] bg-black text-white text-center flex items-center justify-center cursor-pointer hover:bg-slate-800"
        href=""
      >
        view
      </a>
      <a
        className="w-[100px] h-[30px] text-center flex items-center justify-center text-blue-costum border border-blue-costum bg-white hover:bg-blue-costum hover:text-white hover:transition-transform hover:duration-[2s]"
        href=""
      >
        source
      </a>
    </div>
  );
}
