import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

const navLinks = [
  {
    item: "Introduction",
    link: "introduction",
  },
  {
    item: "Profile Summary",
    link: "summary",
  },
  {
    item: "Technical Expertise",
    link: "expertise",
  },
  {
    item: "Work Experience",
    link: "experience",
  },
  {
    item: "Projects",
    link: "projects",
  },
  {
    item: "Links",
    link: "links"
  }
];


const Navbar = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const handleClick = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block:"start"
    });
    setDropdownOpen(false)
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center h-16 bg-black/10 backdrop-blur-md z-10 text-white">
      <nav className="max-w-screen-xl w-full flex justify-between items-center mx-auto px-4 font-semibold">
        <h2 className="text-2xl uppercase">Portfolio</h2>
        <ul className="flex gap-4 max-lg:hidden">
          {navLinks.map((item) => (
            <li
              key={item.link}
              className="cursor-pointer"
              onClick={() => handleClick(item.link)}
            >
              {item.item}
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <MdOutlineMenu className="relative text-2xl cursor-pointer" onClick={()=>setDropdownOpen(prev=>!prev)}/>
          <ul className={`bg-black p-8 flex flex-col gap-4 ${dropdownOpen?"absolute right-0 z-[1000] top-full":"hidden"}`}>
            {navLinks.map((item) => (
              <li
                key={item.link}
                className="cursor-pointer"
                onClick={() => handleClick(item.link)}
              >
                {item.item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
