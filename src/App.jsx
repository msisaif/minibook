import MiniLogo from "./assets/mini.jpg";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center p-8">
        <img
          src={MiniLogo}
          className="w-full max-w-xs rounded-3xl aspect-video object-cover border"
        />
      </div>
    </>
  );
}

export default App;
