import CardUser from "./CardUser.jsx";
import members from "./Menbers"

function obtenerClaseDesfase(index) {
  const desfaces = {
    1: "mt-12 md:mt-16",
    3: "mt-12 md:mt-0",
    4: "md:mt-16",
    5: "mt-12 md:mt-0"
  };
  return desfaces[index] || "";
}
function App() {
  return (
    <>
      <div className="min-h-screen bg-[#10141e] text-white font-sans px-4 py-8 sm:px-8 md:px-16 lg:px-24">
        
        <header className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12 md:mb-24">
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight w-full md:w-1/3">
            The creative crew
          </h1>
          
          <div className="w-full md:w-1/3 space-y-3">
            <button className="text-white hover:opacity-80 transition duration-300 block">
              <img 
                src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/light_mode/default/24px.svg" 
                alt="Sol" 
                className="w-8 h-8 invert" 
              />
            </button>
            <div className="space-y-1">
              <h2 className="text-sm font-bold tracking-wide text-white">
                Who we are
              </h2>
              <p className="text-sm md:text-base text-slate-400 font-normal leading-relaxed">
                We are team of creatively diverse, driven, innovative individuals working in various locations from the world.
              </p>
            </div>
          </div>
        </header>
        <main className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 sm:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {members.map((persona, index) => (
            <GridItemWrapper key={index}>
              <CardUser data={persona} clasedesfase={obtenerClaseDesfase(index)} />
            </GridItemWrapper>
          ))}
        </main>

        <footer className="text-center text-xs text-slate-500 mt-24 md:mt-32 font-mono">
          created by <span className="font-bold text-slate-400">joregesosa</span> - devChallenges.io
        </footer>
      </div>
    </>
  );
}

function GridItemWrapper({ children }) {
  return (
    <>
      {children}
    </>
  );
}

export default App;
