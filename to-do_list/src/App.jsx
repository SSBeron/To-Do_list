function App() {

  return (
    <>
    <main className="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-indigo-900 to-red-100">
      <section className="flex-col w-3/5 h-3/5 p-3 border-2 bg-zinc-300">

        <div className="flex justify-center border">
          <h1>To Do List</h1>
        </div>


        <div className="flex space-x-2 border my-2">
          
          <div className="flex">
            <p className=""><input type="text" placeholder="Add note" /></p>
          </div>
          <button className="p-1 bg-rose-100">
            <p className="">+</p>
          </button>
          
        </div>
      </section>
    </main>
    </>
  )
}

export default App
