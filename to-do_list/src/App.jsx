import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <>
    <main className="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-indigo-900 to-red-100 font-display">
      <section className="flex-col w-3/5 h-3/5 p-3 border-2 bg-zinc-300 rounded-md shadow-2xl">

        <div className="flex justify-center border-b border-black text-2xl font-bold p-2">
          <h1>To Do List</h1>
        </div>


        <div className="flex justify-between items-center space-x-2 my-2 border-b border-black">
          
          <div className="flex w-full">
            <input className="m-1 p-2 w-full  rounded-lg text-lg bg-transparent hover:bg-gray-200 active:border-hidden" type="text" placeholder="Add note" />
          </div>
          <div className="flex-col justify-center text-2xl rounded-md bg-red-100 active:bg-white">
            <button className="w-8 h-4 ">
             <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          
        </div>
      </section>
    </main>
    </>
  )
}

export default App
