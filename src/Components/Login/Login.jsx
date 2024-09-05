import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // alert ("Enviando os dados: " + username + " - " + password);  // Se fosse enviar os dados para o backend
    console.log(username, password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Bem vindo ao Hope</h1>

        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(event) => setUsername(event.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(event) => setPassword(event.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembrar acesso
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Ainda não tem uma conta? <a href="#">Cadastre-se</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
