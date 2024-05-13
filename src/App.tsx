import "./App.css";

function App() {
  return (
    <main className="img w-full h-[100vh] flex justify-center items-center">
      <div className="w-[500px] h-[500px] inset-0 backdrop-blur bg-opacity-75 flex flex-col justify-center items-center gap-4 rounded-xl">
        <h2 className="text-2xl font-semibold text-slate-300">Login</h2>
        <form className="w-full flex flex-col max-w-[300px] gap-2">
          <input
            id="username"
            type="text"
            placeholder="username"
            name="username"
            className="w-full p-2 rounded-md bg-white text-gray-400"
          />
          <input
            id="password"
            placeholder="password"
            type="password"
            className="w-full p-2 rounded-md bg-white text-gray-400"
            name="password"
          />
          <div className="w-full flex gap-2 justify-start items-center">
          <input type="checkbox"/>
          <label className="text-slate-300">Remember me</label>
          </div>
          <button className="w-full p-2 rounded-md bg-sl bg-white text-gray-400" type="submit">Login</button>
        </form>
        <p className="text-slate-300">Don't have an account? <a className="text-slate-400" href="#">Register</a></p>
      </div>
    </main>
  );
}

export default App;
