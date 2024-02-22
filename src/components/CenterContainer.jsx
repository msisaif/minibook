function CenterContainer({ children }) {
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-xs rounded-xl p-4 border shadow">
          {children}
        </div>
      </div>
    </>
  );
}

export default CenterContainer;
