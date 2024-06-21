import React from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[auto] mt-32 border-2 border-solid border-yellow-400 rounded-lg px-[10em] py-[5em] bg-black-60 my-3 md:mt-16 lg:px-10 xl:px-20 sm:w-[40%] md:w-[50%] w-[70%] ">
      <h1 className="font-audiowide text-[#fffc00] text-[2em] md:text-[3em] uppercase mb-7 text-center">
        contacto
      </h1>
      <form className="flex flex-col items-center justify-center gap-9 w-[70%] " action="/submit-form">
        <Input label="Subject" color="white" className="h-[60px] text-[1.3em] " />
        <Input label="Full Name" color="white" className="h-[60px] text-[1.3em]" />
        <Input label="Email Address" color="white" className="h-[60px] text-[1.3em]" />
        <Input label="Message" color="white" className="h-[60px] " />
      </form>
      <div className="mt-24">
        <Button className="w-64  font-audiowide text-[#fffc00] text-[0.9em] sm:text-[1.2em] relative overflow-hidden bg-gradient-to-l from-purple-600 to-pink-600">
          <span className="relative z-10">Enviar</span>
          <span className="absolute inset-0 bg-gradient-to-l from-pink-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-1000"></span>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
