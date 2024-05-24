import Icon from "@mdi/react";
import { mdiLinkVariant, mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faBook } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ShareDropDown = ({ setShowDropdown }) => {
  return (
    <motion.div
      key={"shareDropdownMenu"}
      className="z-10 absolute top-16 right-0 w-[250px] bg-white border border-slate-300 rounded-lg shadow-xl text-lg text-slate-700 font-subtitle
      dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, duration: 0.4 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ delay: 0.4, type: "tween" }}
    >
      <ul className="p-4 flex flex-col justify-center items-center">
        <li
          className="w-full p-2 flex justify-start items-center cursor-pointer rounded-xl hover:bg-slate-300 active:scale-95 transition
        dark:hover:bg-slate-700"
        >
          <Icon path={mdiLinkVariant} className="w-8" />
          <div className="ml-2">Copy link</div>
        </li>
        <li
          className="w-full p-2 flex justify-start items-center cursor-pointer rounded-xl hover:bg-slate-300 active:scale-95 transition
                dark:hover:bg-slate-700"
        >
          <FontAwesomeIcon icon={faPaperPlane} size={"xl"} className="w-8" />
          <div className="ml-2">Send as message</div>
        </li>
        <li
          className="w-full p-2 flex justify-start items-center cursor-pointer rounded-xl hover:bg-slate-300 active:scale-95 transition
        dark:hover:bg-slate-700"
        >
          <div className="flex items-center ml-[-6px]">
            <Icon path={mdiChevronLeft} className="w-8" />
            <Icon path={mdiChevronRight} className="w-8 ml-[-18px]" />
          </div>
          <div className="ml-2">Embed</div>
        </li>
        <li className="w-[95%] my-2 border-b border-b-slate-300"></li>
        <li
          className="w-full p-2 flex justify-start items-center cursor-pointer rounded-xl hover:bg-slate-300 active:scale-95 transition
                dark:hover:bg-slate-700"
        >
          <FontAwesomeIcon
            icon={faBook}
            size={"xl"}
            className="w-8 fill-current text-orange-600"
          />
          <div className="ml-2">Share to Notes</div>
        </li>
        <li
          className="w-full p-2 flex justify-start items-center cursor-pointer rounded-xl hover:bg-slate-300 active:scale-95 transition
                dark:hover:bg-slate-700"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            size={"xl"}
            className="w-8 fill-current text-blue-600"
          />
          <div className="ml-2">Share to Facebook</div>
        </li>
        <li
          className="w-full p-2 flex justify-start items-center cursor-pointer rounded-xl hover:bg-slate-300 active:scale-95 transition
                dark:hover:bg-slate-700"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size={"xl"}
            className="w-8 fill-current text-blue-700"
          />
          <div className="ml-2">Share to LinkedIn</div>
        </li>
        <li
          className="w-full p-2 flex justify-start items-center cursor-pointer rounded-xl hover:bg-slate-300 active:scale-95 transition
                dark:hover:bg-slate-700"
        >
          <FontAwesomeIcon icon={faXTwitter} size={"xl"} className="w-8" />
          <div className="ml-2">Share to X</div>
        </li>
      </ul>
    </motion.div>
  );
};

export default ShareDropDown;
