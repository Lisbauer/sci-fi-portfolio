import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/send', formData);

      if (response.status === 200) {
        setTimeout(() => {
          navigate('/messagesent');
        }, 500); 
      } else {
        setStatusMessage("Error al enviar el email");
      }
    } catch (error) {
      setStatusMessage("Ocurrió un error al enviar el email: " + error.message);
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center h-[auto] mt-32 border-2 border-solid border-yellow-400 rounded-lg px-[13em] py-[5em] bg-black-60 my-3 md:mt-16 2xl:mt-42 desktop:mt-36 lg:px-10 xl:px-20 sm:w-[40%] md:w-[50%] w-[70%]" data-aos="fade-down">
      <h1 className="font-audiowide text-[#fffc00] text-[2em] md:text-[2em] lg:text-[3em] w-[300px] lg:w-[400px] uppercase mb-7 text-center">
        Contact me
      </h1>
      <form className="flex flex-col items-center justify-center gap-6" onSubmit={handleSubmit}>
        <Input label="Asunto" name="subject" color="white" className="h-[3em] text-[1.1em] w-[300px] md:w-[400px] lg:w-[450px]" value={formData.subject} onChange={handleChange} />
        <Input label="Nombre Completo" name="name" color="white" className="h-[3em] text-[1.1em] w-[300px] md:w-[400px] lg:w-[450px]" value={formData.name} onChange={handleChange} />
        <Input label="Correo Electrónico" name="email" color="white" className="h-[3em] text-[1.1em] w-[300px] md:w-[400px] lg:w-[450px]" value={formData.email} onChange={handleChange} />
        <Input label="Mensaje" name="message" color="white" className="h-[3em] text-[1.1em] w-[300px] md:w-[400px] lg:w-[450px]" value={formData.message} onChange={handleChange} />
        <Button type="submit" className="w-64 font-audiowide text-[#fffc00] text-[0.9em] sm:text-[1.2em] relative overflow-hidden bg-gradient-to-l from-purple-600 to-pink-600">
          <span className="relative z-10">Enviar</span>
          <span className="absolute inset-0 bg-gradient-to-l from-pink-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-1000"></span>
        </Button>
      </form>
      {statusMessage && <p className="text-white mt-4">{statusMessage}</p>}
    </div>
  );
};

export default Contact;
