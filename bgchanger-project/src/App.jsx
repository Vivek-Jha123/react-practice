import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className=" w-full h-[100vh] relative"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-12 inset-x-24 w-[500px] mx-auto">
          <div className="bg-white rounded-2xl py-2 px-5 flex items-center justify-between">
            <button
              className="bg-[red] rounded-full py-2 px-3 text-white outline-none"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="bg-[blue] rounded-full py-2 px-3 text-white outline-none"
              onClick={() => setColor("Blue")}
            >
              Blue
            </button>
            <button
              className="bg-[Green] rounded-full py-2 px-3 text-white outline-none"
              onClick={() => setColor("Green")}
            >
              Green
            </button>
            <button
              className="bg-[Pink] rounded-full py-2 px-3 text-white outline-none"
              onClick={() => setColor("Pink")}
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
