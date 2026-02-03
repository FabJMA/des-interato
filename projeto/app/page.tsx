export default function Home() {

  return (
    
    <main>
      <div className="min-h-screen bg-gradient-to-br from-[#011739] via-[#00060f] to-[#011739]">
        <img
          src="logo.svg"
          alt="Logo"
          className="w-28 h-auto pt-8 ml-20"
        />

        <div className="flex items-start gap-10 mt-4">
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
            className="flex items-center gap-2 bg-gradient-to-br from-[#00a7f4] to-[#0058e2] text-white px-4 py-2 rounded-lg font-medium mr-20 hover:bg-blue-600">
            <img
              src="add_circle.svg"
              alt="Add"
              className="w-auto h-auto"
            />
            Cadastrar
          </button>
        </div>
      </div>
    </main>
  );
}



