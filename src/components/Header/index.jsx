import LinkItem from "./LinkItem";
import ToggleDarkModeIcon from "../ToggleDarkModeIcon";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const Header = ({ showHeaderItems, setShowHeaderItems, setShowSearchBox }) => {
  const navigate = useNavigate();
  const { scrollY, scrollYProgress } = useScroll();
  const [showHeader, setShowHeader] = useState(0);
  const headerHeightInPixels = showHeaderItems ? 120 : 72;
  const headerBuffer = 5;
  const headerScrollAmount = 10;

  useMotionValueEvent(scrollY, "change", () => {
    console.log("Show header:", showHeader);
    console.log("Scroll Y:", scrollY.current);
    console.log("Scroll Y progress:", scrollYProgress.current.toFixed(2));

    if (scrollY.current <= 60) {
      console.log("Page at near top");
      setShowHeader(0);
    } else if (scrollYProgress.current.toFixed(2) >= 0.95) {
      console.log("Page at near bottom");
      setShowHeader(-headerHeightInPixels);
    } else if (
      scrollY.current > scrollY.prev &&
      showHeader > -headerHeightInPixels - headerBuffer // Make sure that header is totally hidden by using -5 pixels as buffer
    ) {
      console.log("Page scrolling down");
      setShowHeader((prevState) => prevState - headerScrollAmount);
    } else if (showHeader < 0) {
      console.log("Page scrolling up");
      setShowHeader((prevState) => prevState + headerScrollAmount);
    }
  });

  const handleClickHeader = () => {
    navigate("/");
    setShowHeaderItems(true);
  };

  return (
    <motion.header
      className="z-10 fixed w-full flex flex-col justify-center items-center shadow-lg bg-white dark:bg-slate-800 dark:text-slate-200 transition"
      style={{
        height: headerHeightInPixels,
        translateY: showHeader,
      }}
    >
      <div className="w-full flex-grow basis-3/5 flex justify-around items-center border-b border-b-slate-300">
        <div className="w-[160px]">
          <div
            className="ml-8 w-12 h-12 bg-slate-300 rounded-xl"
            style={{
              backgroundImage: "url(images/page-banner.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <button className="flex-grow" onClick={handleClickHeader}>
          <h1 className="text-center font-title text-2xl font-bold">
            Tech Visionary
          </h1>
        </button>
        <ul className="w-[160px] flex">
          <ToggleDarkModeIcon />
          <li>
            <button
              className="mr-8 w-12 h-12 flex justify-center items-center rounded-xl bg-slate-300 transition hover:bg-slate-400 active:scale-95
              dark:bg-slate-900 hover:dark:bg-slate-600"
              onClick={() => setShowSearchBox(true)}
            >
              <Icon path={mdiMagnify} size={1.2} className="fill-current" />
            </button>
          </li>
        </ul>
      </div>

      {showHeaderItems && (
        <div className="w-full flex-grow basis-2/5 flex justify-center items-center border-b border-b-slate-300">
          <nav className="max-w-[260px] flex-grow h-full flex justify-center items-center">
            <ul className="flex-grow h-full flex justify-around items-center text-lg">
              <LinkItem to={"/"} itemName={"Home"} />
              <LinkItem to={"/archive"} itemName={"Archive"} />
              <LinkItem to={"/about"} itemName={"About"} />
            </ul>
          </nav>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
