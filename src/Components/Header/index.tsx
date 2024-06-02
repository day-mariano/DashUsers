const Header = () => {
  return (
    <>
      <header className="bg-white flex flex-row items-center justify-around w-screen shadow-sm">
        <div className="flex flex-row m-2">
           <img src="usuarios.png" className="w-11 m-1"/>
          <h1 className="text-xl font-bold my-auto font-mono text-zinc-800">DashUsers</h1>
        </div>
        <p>Uma aplicação web de lista de usuários</p>
      </header>
    </>
  );
};
export { Header };
