import React from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[auto] mt-32 border-2 border-solid border-yellow-400 rounded-lg px-[13em] py-[5em] bg-black-60 my-3 md:mt-16 2xl:mt-42 desktop:mt-36 lg:px-10 xl:px-20 sm:w-[40%] md:w-[50%] w-[70%] ">
      <h1 className="font-audiowide text-[#fffc00] text-[2em] md:text-[2em] lg:text-[3em] w-[300px] lg:w-[400px] uppercase mb-7 text-center">
        contact me
      </h1>
      <form className="flex flex-col items-center justify-center gap-6" action="/submit-form">
        <Input label="Subject" color="white" className="h-[3em] text-[1.1em] w-[300px] md:w-[400px] lg:w-[450px]"/>
        <Input label="Full Name" color="white" className="h-[3em] text-[1.1em] w-[300px] md:w-[400px] lg:w-[450px]"/>
        <Input label="Email Address" color="white" className="h-[3em] text-[1.1em]  w-[300px] md:w-[400px] lg:w-[450px]"/>
        <Input label="Message" color="white" className="h-[3em] text-[1.1em] w-[300px] md:w-[400px] lg:w-[450px]"/>
      </form>
      <div className="mt-14 lg:mt-22">
        <Button className="w-64 font-audiowide text-[#fffc00] text-[0.9em] sm:text-[1.2em] relative overflow-hidden bg-gradient-to-l from-purple-600 to-pink-600">
          <span className="relative z-10">Enviar</span>
          <span className="absolute inset-0 bg-gradient-to-l from-pink-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-1000"></span>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
