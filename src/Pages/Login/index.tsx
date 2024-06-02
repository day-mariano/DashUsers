import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"

const Login = () => {
  return (
    <main className="bg-slate-200 w-screen h-screen flex flex-col text-zinc-800 items-center justify-between">
      <Header/>
      <form action="https://teste.reobote.tec.br/api/login" method="post" target="_blank" className="flex flex-col items-center p-3 rounded-md bg-teal-800 text-white shadow-sm">
      <h2 className="font-bold mb-2">Login</h2>
      <label htmlFor="email" className="m-2">E-mail</label>
        <input type="text" placeholder="Insira seu e-mail" name="email" className="w-80 p-1 rounded-sm text-zinc-600" />
        <label htmlFor="password" className="m-2">Senha</label>
        <input type="password" placeholder="Senha de no mínimo 8 digitos" name="password" className=" w-80 p-1 rounded-sm text-zinc-600" />
        <button type="submit" className="m-3 p-1 px-2 rounded-md bg-teal-400 text-zinc-800">Entrar</button>
      </form>
      <Footer/>
    </main>
  )
}
export {Login}