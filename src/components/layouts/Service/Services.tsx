import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiCss3Full,
  DiGithubBadge,
  DiBootstrap,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { TbBrandRedux, TbBrandVscode } from "react-icons/tb";
import { SiPyup, SiTailwindcss } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaNodeJs, FaLaptopCode, FaUpload, FaUserCog } from "react-icons/fa";
import { AiOutlineLayout, AiTwotoneAppstore } from "react-icons/ai";
export default function Service() {
  return (
    <div className="flex justify-center">
      <div
        id="services"
        className="md:pt-[62px]   pb-[63px] overflow-hidden flex items-center flex-col  "
      >
        <h1
          className="text-[20px] font-semibold md:mb-[58px] my-6 md:mt-4"
          data-aos="fade-up"
        >
          Skill Overview
        </h1>

        <div className="" data-aos="fade-up">
          <div className="flex flex-col items-center gap-2 md:text-[40px] text-[25px]">
            <div className="flex gap-2">
              <DiJavascript1 className="text-yellow-500" />
              <SiTypescript className="text-blue-500" />
              <TbBrandRedux className="text-purple-500" />
              <SiPyup className="text-pink-500" />
              <DiReact className="text-blue-500" />
              <FaNodeJs className="text-green-500" />
              <DiHtml5 className="text-orange-500" />
              <DiCss3Full className="text-blue-500" />
            </div>
            <div className="flex gap-2">
              <DiBootstrap className="text-purple-500" />
              <SiTailwindcss className="text-blue-500" />
              <DiGithubBadge className="text-slate-700" />
              <FiFigma className="text-pink-500" />
              <TbBrandVscode className="text-sky-500" />
            </div>
          </div>
        </div>
        <h1
          className="text-[20px] font-semibold md:my-[58px] my-6"
          data-aos="fade-up"
        >
          Our Services
        </h1>
        <div
          className="md:w-[820px] lg:w-[1280px] sm:w-full flex flex-wrap justify-center"
          data-aos="fade-up "
        >
          <UpperCard data-aos="fade-up" />
        </div>
      </div>
    </div>
  );
}

function UpperCard() {
  return (
    <section className=" w-[360px] md:flex gap-3 md:w-[820px] justify-center flex-wrap flex lg:w-[1280px]">
      <div
        className="card hover:bg-black hover:text-white w-[320px] h-[170px] shadow-sm shadow-slate-500 text-[40px] px-3 pt-[35px] box-border flex"
        data-aos="fade-up"
      >
        <AiOutlineLayout className="text-blue-costum" />
        <Desc
          title="UI Designing"
          description="User interface design for any website with figma.with interactive
            design."
        />
      </div>
      <div
        className="card hover:bg-black hover:text-white w-[320px] h-[170px] shadow-sm shadow-slate-500 text-[40px] px-3 pt-[35px] box-border flex"
        data-aos="fade-up"
      >
        <FaLaptopCode className="text-blue-costum" />
        <Desc
          title="WEB Developing"
          description="develops a website from scratch untill finished.using HTML,CSS,Javascript.also It’s framework."
        />
      </div>
      <div
        className="card hover:bg-black hover:text-white w-[320px] h-[170px] shadow-sm shadow-slate-500 text-[40px] px-3 pt-[35px] box-border flex "
        data-aos="fade-up"
      >
        <AiTwotoneAppstore className="text-blue-costum" />
        <Desc
          title="Features Adding"
          description="Adding New Features to your excisting project.with related stack language used"
        />
      </div>
      <div
        className="card hover:bg-black hover:text-white w-[320px] h-[170px] shadow-sm shadow-slate-500 text-[40px] px-3 pt-[35px] box-border flex "
        data-aos="fade-up"
      >
        <FaUpload className="text-blue-costum" />
        <Desc
          title="WEB Update"
          description="update User interface or feature and content for your website or landing pages. "
        />
      </div>
      <div
        className="card hover:bg-black hover:text-white w-[320px] h-[170px] shadow-sm shadow-slate-500 text-[40px] px-3 pt-[35px] box-border flex"
        data-aos="fade-up"
      >
        <DiReact className="text-blue-costum" />
        <Desc
          title="REACT JS "
          description="Make your excisting website into React web aplications.aslo can build a new website from scratch."
        />
      </div>
      <div
        className="card hover:bg-black hover:text-white w-[320px] h-[170px] shadow-sm shadow-slate-500 text-[40px] px-3 pt-[35px] box-border flex"
        data-aos="fade-up"
      >
        <FaUserCog className="text-blue-costum" />
        <Desc
          title="Support"
          description="Consult any web problems ,UI design proble, solving.aslo error code catching."
        />
      </div>
    </section>
  );
}

interface Desc {
  title: string;
  description: string;
}

function Desc(props: Desc) {
  return (
    <div className="w-[232px] ml-3">
      <h1 className="text-[20px] font-semibold ">{props.title}</h1>
      <p className="text-[16px] text-grey-costum">{props.description}</p>
    </div>
  );
}
