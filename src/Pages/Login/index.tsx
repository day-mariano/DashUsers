import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { useState, useContext } from "react";
import { TokenContext } from "../../main";

const Login = () => {
  const [token, setToken] = useContext(TokenContext);
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log({email, password});

    const response = await fetch("https://teste.reobote.tec.br/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        persistent: true,
      }),
    });
    const dados = await response.json();
    console.log(dados);
    console.log(dados.access_token)
    // Validação dos dados
    if(dados.access_token){
      setToken(dados.token);
    }
    
    return dados;
  }

  return (
    <main className="bg-slate-200 w-screen h-screen flex flex-col text-zinc-800 items-center justify-between">
      <Header/>
      <form onSubmit={handleSubmit} className="flex flex-col items-center p-3 rounded-md bg-teal-800 text-white shadow-sm">
      <h2 className="font-bold mb-2">Login</h2>
      <label htmlFor="email" className="m-2">E-mail</label>
        <input type="text" placeholder="Insira seu e-mail" name="email" className="w-80 p-1 rounded-sm text-zinc-600" onChange={(e) => SetEmail(e.target.value)} />
        <label htmlFor="password" className="m-2">Senha</label>
        <input type="password" placeholder="Senha de no mínimo 8 digitos" name="password" className=" w-80 p-1 rounded-sm text-zinc-600" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className="m-3 p-1 px-2 rounded-md bg-teal-400 text-zinc-800">Entrar</button>
      </form>
      <Footer/>
    </main>
  )
}
export {Login}