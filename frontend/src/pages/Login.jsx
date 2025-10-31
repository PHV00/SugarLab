// import './userLogin.css';
import Logo from "../assets/image/SugarLab.png";
import { useState } from "react";

export default function UserLogin() {
  const [formData, setFormData] = useState({
    email: "",
    senha: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const data = await res.json();
        // Supondo que o backend retorne { token: "JWT..." }
        localStorage.setItem("token", data.token);
        alert("Login realizado com sucesso!");
        // Redirecionar ou atualizar estado do usuário
      } else {
        alert("Email ou senha incorretos");
      }
    } catch (err) {
      console.error("Erro:", err);
      alert("Erro de conexão com o servidor");
    }
  };

  return (
    <div className="login-container">
      <main className="login-main">
        <section className="login-card">
          <img 
            src={Logo} 
            alt="Sugar Lab Logo" 
            className="login-logo"
          />
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />

            <button type="submit">Entrar</button>
          </form>
        </section>
      </main>
    </div>
  );
}
