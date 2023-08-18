import{AiOutlineMail ,AiOutlineGithub} from "react-icons/ai/"
import{FaInstagram,FaPhone,FaLinkedinIn} from "react-icons/fa"
export const Contact = () => {
  return (
    <div className="sm:w-[100vw] w-full flex justify-center p-2 ">
      <div
        id="contact"
        className=" w-[360px] text-[20px] md:w-[820px] lg:w-[1280px]    text-black pt-[78px] pb-10 md:pb-[170px] flex flex-col  items-center  overflow-hidden"
      ><h1 className="font-semibold" data-aos="fade-up">Keep  in Touch</h1>
        <div className="card flex gap-[10px] mt-[42px] relative z-20 " data-aos="fade-up">
          <div className=" card-item shadow-md overflow-hidden group box-border relative w-[60px] md:w-[80px] h-[350px]  md:hover:w-[275px] hover:duration-300 hover:transition-all  hover:bg-blue-costum hover:text-white flex justify-center items-center text-black text-[24px]" data-aos="fade-up">
            <AiOutlineMail/>
            <div className="w-[275px] h-[350px] absolute z-3 pt-[20px] translate-y-[350px] md:group-hover:translate-y-[240px] group-hover:duration-300 text-center">
              <p>Mail</p>
              <a className="text-[14px] hover:cursor-pointer">Double Click Send Direct Mail</a>
            </div>
          </div>
          <div className=" card-item shadow-md overflow-hidden group box-border relative w-[60px] md:w-[80px] h-[350px]  md:hover:w-[275px] hover:duration-300 hover:transition-all hover:bg-blue-costum hover:text-white flex justify-center items-center text-black text-[24px]" data-aos="fade-up">
            <FaInstagram/>
            <div className="w-[275px] h-[350px] absolute z-0 pt-[20px] translate-y-[350px] md:group-hover:translate-y-[240px] group-hover:duration-300 text-center">
              <p>Instagram</p>
              <a className="text-[14px] hover:cursor-pointer">Double Click to Visit my instagram</a>
            </div>
          </div>
          <div className=" card-item shadow-md overflow-hidden group box-border relative w-[60px] md:w-[80px] h-[350px]  md:hover:w-[275px] hover:duration-300 hover:transition-all hover:bg-blue-costum hover:text-white flex justify-center items-center text-black text-[24px]" data-aos="fade-up">
            <AiOutlineGithub/>
            <div className="w-[275px] h-[350px] absolute z-3 pt-[20px] translate-y-[350px] md:group-hover:translate-y-[240px] group-hover:duration-300 text-center">
              <p>Github</p>
              <a className="text-[14px] hover:cursor-pointer">Double Click to Visit my Github</a>
            </div>
          </div>
          <div className=" card-item shadow-md overflow-hidden group box-border relative w-[60px] md:w-[80px] h-[350px]  md:hover:w-[275px] hover:duration-300 hover:transition-all hover:bg-blue-costum hover:text-white flex justify-center items-center text-black text-[24px]" data-aos="fade-up">
            <FaPhone/>
            <div className="w-[275px] h-[350px] absolute z-3 pt-[20px] translate-y-[350px] md:group-hover:translate-y-[240px] group-hover:duration-300 text-center">
              <p>Telephone</p>
              <a className="text-[14px] hover:cursor-pointer">Double Click to Request Call</a>
            </div>
          </div>
          <div className=" card-item shadow-md overflow-hidden group box-border relative w-[60px] md:w-[80px] h-[350px]  md:hover:w-[275px] hover:duration-300 hover:transition-all hover:bg-blue-costum hover:text-white flex justify-center items-center text-black text-[24px]" data-aos="fade-up">
            <FaLinkedinIn/>
            <div className="w-[275px] h-[350px] absolute z-3 pt-[20px] translate-y-[350px] md:group-hover:translate-y-[240px] group-hover:duration-300 text-center">
              <p>Linked In</p>
              <a className="text-[14px] hover:cursor-pointer">Double Click to Visit my LinkedIn</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
