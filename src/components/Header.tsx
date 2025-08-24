import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark", !dark);
  };

  return (
    <header>
      <div>
        <button aria-label="Toggle Theme" onClick={toggleTheme}>
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
      <nav aria-label="Timeline Navigation">
        <ul>
          <li><a href="#year-1900">1900</a></li>
          <li><a href="#year-1910">1910</a></li>
          <li><a href="#year-1920">1920</a></li>
          <li><a href="#year-1930">1930</a></li>
          <li><a href="#year-1940">1940</a></li>
          <li><a href="#year-1977">1977</a></li>
          <li><a href="#year-1989">1989</a></li>
          <li><a href="#year-2007">2007</a></li>
        </ul>
      </nav>
    </header>
  );
}
