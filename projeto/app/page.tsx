"use client";

import { useState } from "react";
import CadastrarModal from "./modals";

export default function Home() {

  const [openModal, setOpenModal] = useState(false);
  const [pets, setPets] = useState([]);

  return (
    
    <main>
      <div className="min-h-screen bg-gradient-to-br from-[#011739] via-[#00060f] to-[#011739]">
        <img
          src="logo.svg"
          alt="Logo"
          className="w-28 h-auto pt-10 ml-20"
        />

        <div className="flex items-start gap-10 mt-10">
          <div className="relative w-290 ml-20 border-2 rounded-xl h-11 py-2">
            <img 
              src="search.svg" 
              alt="Search"
              className="absolute left-1 bottom-1 bg-gray-500 rounded-tl-lg rounded-bl-lg w-8"
            />
            
            <input
              type="text"
              placeholder=""
              className="w-260 items-center-safe"
            />
            <button className="absolute right-1 bottom-1 flex items-center bg-gray-500 px-4 py-1 rounded-lg font-medium hover:bg-gray-700">
              <strong>Pesquisar</strong>
            </button>
          </div>
          

          <button 
            onClick={() => setOpenModal(true)}
            className="flex items-center gap-2 bg-gradient-to-br from-[#00a7f4] to-[#0058e2] text-white px-4 py-2 rounded-lg font-medium mr-20 hover:bg-blue-600">
            <img
              src="add_circle.svg"
              alt="Add"
              className="w-auto h-auto"
            />
            Cadastrar
          </button>
          <CadastrarModal
            open={openModal}
            close={() => setOpenModal(false)}
            onAddPet={(pet) => setPets([...pets, pet])}
          />
        </div>
        <div className="mt-10 ml-20 mr-20 grid grid-cols-4 gap-6">
          {pets.map((pet, index) => (
            <div
              key={index}
              className="flex bg-gradient-to-br from-[#001e4d] to-[#0d0014] border-blue-400 rounded-xl p-4 text-white items-center"
            >
              <img
                src={pet.type === "Cachorro" ? "/dog_bone.svg" : "/cat_rat.svg"}
                alt={pet.type}
                className="w-20 h-20 bg-gradient-to-br from-[#00a7f4] to-[#0058e2] rounded-full p-2"
              />
              
              <div className="flex flex-col ml-5 ">
                <div className="flex">
                  <p className="flex text-[16px] mb-1 mt-0.5  leading-none">
                    <img 
                        src="pet.svg" 
                        alt="Pet" 
                        className="mr-1 "
                    />
                  {pet.nome}
                  </p>
                </div>
                
                <div className="flex">
                  <p className="flex text-[16px] mb-1 mt-0.5  leading-none">
                    <img 
                        src="user.svg" 
                        alt="User" 
                        className="mr-1 "
                    />
                  {pet.dono}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>

      </div>
    </main>
  );
}



