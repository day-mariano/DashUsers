import { Header } from "../../Components/Header"
import { useEffect, useState } from "react";

interface Usuario {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  persistante: boolean;
}

const Dashboard = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  
  useEffect(() => {
    fetch("https://teste.reobote.tec.br/api/dashboard")
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setUsuarios(res);
      });
      console.log(usuarios)
  }, []);

  return (
  <>
    <Header/>
    <p>lista de usuários</p>
    <ul>
      {usuarios.map((usuario) => (
        <li>{usuario.name}</li>
      ))}
    </ul>
  </>
  )
}
export {Dashboard}