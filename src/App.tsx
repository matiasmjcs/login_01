import "./App.css";

function App() {
  return (
    <main className="w-full h-[100vh] bg-slate-800 flex justify-center items-center">
      <div className="w-[500px] h-[500px] bg-slate-700 flex flex-col justify-center items-center gap-4 rounded-lg">
        <h2>Login</h2>
        <form className="w-full flex flex-col max-w-[300px]">
          <label>username</label>
          <input type="text" name="username" className="w-full" />
          <label>password</label>
          <input type="password" name="password" className="w-full" />
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}

export default App;
