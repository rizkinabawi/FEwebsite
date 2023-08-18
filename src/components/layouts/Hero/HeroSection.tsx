import { Herocard } from "./HeroCard";


export default function Hero() {
  return (
    <div id="hero" className="w-full flex justify-center">
      <div className="lg:w-[1280px] md:w-[820px] w-full box-border font-inter flex md:justify-between justify-center lg:px-[158px] md:px-[100px]  px-[15px] flex-wrap ">
        <img
          src="src\assets\Group 2.svg"
          alt=""
          className="flex md:hidden pt-[100px] scale-75"
        />
        <Herocard />
        <div className="w-[320px] lg:w-[320px] md:w-[250px] mt-[106px] hidden md:flex hover:animate-pulse">
          <img src="src\assets\Group 2.svg" />
        </div>
        <div className="lg:w-[1280px]  md:w-[800px] w-[320px] p-2 box-border font-inter flex justify-center lg:px-[130px] md:mt-[62px] mt-10 text-center">
          <p className="text-[20px] font-semibold  text-grey-costum ">
            "Skills are cultivated over time, growing stronger with each
            investment of effort and practice."
          </p>
        </div>
      </div>
    </div>
  );
}
