import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const Header = () => {
  const [view, setView] = useState(false);

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const handleToggle = () => {
    setView((prevView) => !prevView);
  };

  return (
    <>
      <nav className="w-full h-20 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="image-container cursor-pointer" // Add cursor pointer for better UX
              onClick={handleToggle}
            >
              <img src="./src/assets/logosaas.png" alt="saas-logo" />
            </div>
            {/* Show text based on the view state and only on small devices */}
            <div
              className={`${
                view ? "flex" : "hidden"
              } md:flex items-center gap-2 animate-slider`}
            >
              <p className="text-white">made by</p>
              <div className="flex items-center gap-1">
                <img src="./src/assets/Vector.png" alt="vector-logo" />
                <p className="text-white font-bold">Framer</p>
              </div>
            </div>
          </div>
          {isAboveSmallScreens ? (
            <div className="bg-white px-[15px] py-[10px] rounded-xl cursor-pointer hover:bg-white/95">
              <div className="text-black font-bold">Get for free</div>
            </div>
          ) : (
            <div className="w-5 sm:w-6">
              <img
                className="w-full"
                src="./src/assets/hamburger.png"
                alt="hamburger.logo"
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
