import React from "react";

function Header() {
  return (
    <header>
      <nav className="container bg-dark mx-auto h-fit w-full px-5 py-4 flex justify-between items-center">
        <h1 className="font-bold text-transparent  bg-clip-text bg-gradient-to-tl from-gradient-left to-gradient-right text-2xl">
          Notes<span className="text-white">App</span>
        </h1>

        <button className="px-6 py-2 rounded-full font-semibold text-sm text-black bg-gradient-to-tl from-gradient-left to-gradient-right ">
          sign in
        </button>
      </nav>
    </header>
  );
}

export default Header;
