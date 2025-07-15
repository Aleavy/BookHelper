



function App(){
  

  return(
    <main className="h-[100vh]
     bg-linear-to-r from-gray-950 to-indigo-950 text-white ">
      <header className="flex flex-row justify-around">
          <div>
            <a className="" href="#">
              <img className="max-h-12 w-full h-full object-cover"
              src="./book-svgrepo-com.svg" alt="book" />
            </a>
          </div>
        <nav className="flex justify-between py-3">

          <div class="container"
          onclick="ShowHide(this)">
            <div id="bar1" className="w-[35px] h-[5px] bg-white my-[6px] transition-[0.3s]"></div>
            <div id="bar2" className="w-[35px] h-[5px] bg-white my-[6px] transition-[0.3s]"></div>
            <div id='bar3' className="w-[35px] h-[5px] bg-white my-[6px] transition-[0.3s]"></div>
          </div>
          <div id="Menu" className="hidden">
            <a href="">Login</a>
            <a href="">Register</a>
            <a href="">Feature</a>
          </div>
        </nav>
      </header>
      <section className="p-3 flex flex-col justify-center ">
        <div className="p-4 bg-neutral-950 rounded-xl shadow-xl/30 inset-shadow-sm">
          <h1 className="font-bold text-xl text-center text-blue-800">Reanuda tu lectura</h1>
          <p className="text-m">Encuentras dificil seguir el paso de tus lecturas?</p>
          <p className="text-m">Cansado de olvidarte en que <span className="text-blue-700 font-bold">pagina</span> te quedaste?</p>
          <p className="mt-4">Con <span className="text-blue-700 font-bold">BookHelper</span>, seras capaz de no perderte nunca mas en un libro. 
            Recordaras cada momento, cada libro, cada pagina. Y lo mas importante, podras dar seguimiento a tus lecturas.</p>
          <p className="mt-2">Seguir leyendo, nunca fue tan <span className="text-blue-700 font-bold">facil</span>.</p>
          
        </div>
        <button className="mt-4 hover:bg-blue-200 border-2 rounded-full p-1 w-full font-bold">Empieza ahora.</button>
      </section>
    </main>
  )
}

export default App
