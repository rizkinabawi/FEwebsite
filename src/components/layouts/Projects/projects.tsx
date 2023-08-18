import { ProjectCards } from "./projectCards";

export const Projects = () => {
  return (
    <div className="hero w-full flex justify-center">
      <div
        id="projects"
        className="    lg:w-[1280px] md:w-[820px] w-full box-border font-inter flex flex-col  items-center  lg:px-[158px] md:px-[100px]  px-[15px]   pb-4"
      >
        <h1
          className=",md:text-[24px] font-semibold text-blue-costum"
          data-aos="fade-up"
        >
          Developed Website
        </h1>
        <h1
          className="md:text-[36px] text-[18px] font-semibold text-grey-costum text-center md:text-start"
          data-aos="fade-up"
        >
          Lets see my Best projects
        </h1>
        <div
          className="lg:w-[1280px] px-[139px] flex justify-center mt-7"
          data-aos="fade-up"
        >
          <ProjectCards
            img="src\assets\Web capture_29-7-2023_22593_localhost.jpeg"
            title="Landing Page"
            description="A selling website, also known as an online store or e-commerce platform, is a digital platform where businesses and individuals can showcase and offer their products or services for purchase over the internet"
          />
        </div>
        <div
          className="lg:w-[1280px] px-[139px] flex justify-center mt-2
            "
          data-aos="fade-up"
        >
          <ProjectCards
            img="src\assets\Web capture_11-7-2023_212152_.jpeg"
            title="Company website"
            description="A selling website, also known as an online store or e-commerce platform, is a digital platform where businesses and individuals can showcase and offer their products or services for purchase over the internet"
          />
        </div>
        <p
          className="lg:w-[900px]  md:w-[800px] w-[320px] md:text-[20px] font-medium text-grey-costum md:text-center text-justify md:mt-[30px] lg:mt-[54px] ml-3 mt-4  md:pb-10"
          data-aos="fade-up"
        >
          All of my websites are built using the{" "}
          <a className="text-blue-costum" href="">
            React JS framework
          </a>{" "}
          and utilize a component-based system, making them highly{" "}
          <a className="text-blue-costum" href="">
            reusable
          </a>
          .
        </p>
      </div>
    </div>
  );
};
