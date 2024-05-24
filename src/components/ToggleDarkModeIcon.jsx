import { useState } from "react";
import Icon from "@mdi/react";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";

const ToggleDarkModeIcon = () => {
  const [darkMode, setDarkMode] = useState(false);
  console.log("Dark mode:", darkMode);

  const toggleDarkMode = () => {
    console.log("Toggling dark mode");
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const iconSize = 1.2;

  return (
    <li className="flex min-w-[80px]">
      <button
        key="toggle-dark-mode"
        onClick={toggleDarkMode}
        className="w-12 h-12 flex justify-center items-center rounded-xl bg-slate-300 hover:bg-slate-400 active:scale-95 transition
        dark:bg-slate-900 hover:dark:bg-slate-600"
      >
        {darkMode ? (
          <Icon path={mdiWeatherNight} size={iconSize} />
        ) : (
          <Icon path={mdiWhiteBalanceSunny} size={iconSize} />
        )}
      </button>
    </li>
  );
};

export default ToggleDarkModeIcon;
