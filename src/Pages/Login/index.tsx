import { Header } from "../../Components/Header"

const Login = () => {
  return (
  <>
    <Header/>
    <form action="">
      <input type="text" placeholder="e-mail" name="email"/>
      <input type="password" placeholder="Senha" name="password" />
      <button type="submit">Entrar</button>
    </form>
  </>
  )
}
export {Login}