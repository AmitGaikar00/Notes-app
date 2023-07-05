import React from "react";
import { BsPen } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";

function Home() {
  return (
    <section className="bg-white dark:bg-dark ">
      <div className="container w-full h-screen mx-auto px-5 py-5 flex flex-col items-center">
        <h1 className="font-roboto text-3xl  sm:text-4xl md:text-5xl font-bold text-center  text-gray-900 dark:text-white mt-10 lg:max-w-[49rem] mx-auto">
          Tame your work, organize your life Best{" "}
          <span className="text-blue-500">Note Taking App</span>
        </h1>

        <p className="text-dark2-light mt-6 text-sm text-center md:text-xl mx-auto">
          Capture your notes, files, and life's work all in one secure place.
        </p>

        <button className="max-w-md bg-primary text-white font-semibold rounded-lg px-5 py-3 mt-10 hover:bg-transparent hover:text-blue-500 hover:border-2 hover:border-blue-500  transition-all duration-250">
          Get Started for free
        </button>

        <BsPen
          size={200}
          className="text-primary absolute left-10 bottom-20 opacity-50  hidden lg:block"
        />
        <SlNotebook
          size={200}
          className="text-primary absolute right-10 bottom-20 opacity-50 hidden lg:block"
        />

        <BsPen
          size={150}
          className="text-primary absolute left-10 bottom-20 opacity-50hidden hidden md:block lg:hidden"
        />
        <SlNotebook
          size={150}
          className="text-primary absolute right-10 bottom-20 opacity-50hidden hidden md:block lg:hidden"
        />
        <BsPen
          size={140}
          className="text-primary absolute left-[2.5rem] bottom-[5rem]  opacity-50 md:hidden"
        />
        <SlNotebook
          size={120}
          className="text-primary absolute right-[6rem] bottom-[2.4rem] opacity-50 md:hidden"
        />
      </div>
    </section>
  );
}

export default Home;
