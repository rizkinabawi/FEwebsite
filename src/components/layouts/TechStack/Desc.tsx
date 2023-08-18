export const Desk = () => {
  return (
    <div className="p-1">
      <h1 className="font-semibold text-blue-costum " data-aos="fade-up">Benefits</h1>
      <div className="text-[14px]">
        
        <p data-aos="fade-up">
          React follows a component-based architecture, which allows you to
          break down your user interface into smaller, reusable components. This
          modular approach simplifies development, maintenance, and updates,
          leading to more organized and efficient code.
        </p >
        <p className="text-slate-500" data-aos="fade-up">
          React uses a declarative syntax, meaning you describe how your UI
          should look based on the current state.
        </p>
        <p data-aos="fade-up">
          React employs a diffing algorithm to compare changes in the Virtual
          DOM, minimizing the number of actual DOM manipulations. This leads to
          faster rendering and a more responsive user experience.
        </p >
        <p className="text-slate-500" data-aos="fade-up">
          React is maintained by Facebook and has a strong developer community.
          This means you can find ample resources, tutorials, and solutions to
          common problems, making it easier to learn and troubleshoot.
        </p>
      </div >
      <a href="" className=" p-2 bg-blue-costum text-[16px] hover:bg-sky-400 hover:cursor-pointer" data-aos="fade-up">learn more</a>
    </div>
  );
};
