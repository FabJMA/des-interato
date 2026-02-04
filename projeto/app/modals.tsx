"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function RegisterModal({ open, close, onAddPet }) {
    if (!open) return null;

    const [type, setType] = useState("Cachorro");
    const [birth, setBirth] = useState(null);

    const [nome, setNome] = useState("");
    const [dono, setDono] = useState("");
    const [telefone, setTelefone] = useState("");
    const [raca, setRaca] = useState("");

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-gradient-to-br from-[#011739] to-[#00060f] rounded-xl w-130 h-120 p-6 border-3 border-blue-400">
        <div className="flex gap-4 mt-7">
            <img 
                src="add_circle.svg" 
                alt="Add"
                className="bg-gradient-to-br from-[#00a7f4] to-[#0058e2] rounded-full p-2 w-14 ml-7"
            />
            <p className="text-[22px] mt-3">
                <strong>Cadastrar</strong>
            </p>
        </div>
        
        <div className="flex ml-8 mt-10">
            <div className="flex flex-col mr-4">
            <p className="flex text-[14px] mb-1 mt-0.5">
                <img 
                    src="pet.svg" 
                    alt="Pet" 
                    className="mr-1 "
                />
                Nome
            </p>
            <input 
                type="text" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder=" Nome Sobrenome"
                className="border-2 rounded-md text-[14px] mb-3"
            />
            <p className="flex text-[14px] mb-1">
                <img 
                    src="user.svg" 
                    alt="User" 
                    className="mr-1"
                />
                Dono
            </p>
            <input 
                type="text" 
                value={dono}
                onChange={(e) => setDono(e.target.value)}
                placeholder=" Nome Sobrenome"
                className="border-2 rounded-md text-[14px] mb-3"
            />
            <p className="flex text-[14px] mb-1">
                <img 
                    src="phone.svg" 
                    alt="Phone" 
                    className="mr-1 "
                />
                Telefone
            </p>
            <input 
                type="number" 
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder=" (00) 0 0000-0000"
                className="border-2 rounded-md text-[14px] mb-3"
            />
            </div>
            <div className="flex flex-col ml-4">
            <p className="flex text-[14px] mb-1">
                <img 
                    src="dna.svg" 
                    alt="Genetics" 
                    className="mr-1"
                />
                Animal
            </p>
            <div className="flex gap-3 mb-3">
                <button
                    onClick={() => setType("Cachorro")}
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className={`text-[14px] rounded-md border-2 h-6.5 w-21
                    ${
                        type === "Cachorro"
                        ? " text-white border-white font-semibold"
                        : "text-gray-400"
                    }`}
                >
                    Cachorro
                </button>

                <button
                    onClick={() => setType("Gato")}
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className={`text-[14px] rounded-md border-2 h-6.5 w-21
                    ${
                        type === "Gato"
                        ? " text-white border-white font-semibold"
                        : "text-gray-400"
                    }`}
                >
                    Gato
                </button>
            </div>
            
            <p className="flex text-[14px] mb-1">
                <img 
                    src="dna.svg" 
                    alt="Genetics" 
                    className="mr-1"
                />
                Raça
            </p>
            <input 
                type="text" 
                value={raca}
                onChange={(e) => setRaca(e.target.value)}
                placeholder=" Raça"
                className="border-2 rounded-md text-[14px] mb-3"
            />
            <p className="flex text-[14px] mb-1">
                <img 
                    src="calendar.svg" 
                    alt="Calendar" 
                    className="mr-1"
                />
                Nascimento <strong className="text-gray-400 ml-1 text-[13px]"> (Aproximado)</strong> 
            </p>
                <div className="border-2 rounded-md text-[14px] mb-3">
                    <DatePicker
                        selected={birth}
                        onChange={(birth) => setBirth(birth)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText=" 22/08/2020"
                    />
                </div>
            </div>
        </div>

        <div className="flex items-center mt-13 ml-8">
            <button 
                onClick={close}
                className=" bg-white text-blue-500 rounded-lg flex items-center px-16 h-10 mr-3">
                <img 
                    src="arrow_back.svg" 
                    alt="Back" 
                    className="mr-1"
                />
                Voltar
            </button>
            <button 
                onClick={handleSubmit}
                className="bg-gradient-to-br from-[#00a7f4] to-[#0058e2] text-white rounded-lg flex items-center px-12 h-10 ml-3">
                <img 
                    src="add_circle.svg" 
                    alt="Add" 
                    className="mr-1"
                />
                Cadastrar
            </button>
        </div>
        

      </div>
    </div>
  );

  function handleSubmit() {
    const pet = {
        nome,
        dono,
        telefone,
        type,
        raca,
        birth: birth?.toLocaleDateString("pt-BR") ?? null,

    };

    onAddPet(pet);
    close();
}
}



