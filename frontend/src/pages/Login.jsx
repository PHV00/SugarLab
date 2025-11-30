import './login.css';
import Logo from "../assets/image/SugarLab.png";
import useFetch from "../hooks/useFetch";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from '../context/AuthContext.jsx';

export default function Login() {
    
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email: "",
        senha: ""
    });
    
    const { login } = useContext(AuthContext); 

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
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                const data = await res.json();
                login(data.token);
                alert("Usuário logado com sucesso!");
                setFormData({
                    email: "",
                    senha: ""
                });
                navigate("/");

            } else {
                alert("Erro ao realizar login!");
            }
        } catch (err) {
            console.error("Erro:", err);
            alert("Erro de conexão com o servidor");
        }
    };

    return (
        <div className='login-container'>
            <main className='login-main'>
                <section className='login-intro'>
                    <h1>Entre</h1>
                </section>

                <section className='login-card'>
                    <img 
                        src={Logo}
                        alt="Sugar Lab Logo"
                        className="login-logo"
                    />

                    <form className='login-form' onSubmit={handleSubmit}>

                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='password'
                            name='senha'
                            placeholder='Senha'
                            value={formData.senha}
                            onChange={handleChange}
                            required
                        />

                        <button className='btnLogin' type='submit'>Entrar</button>
                    </form>
                </section>
            </main>
        </div>
    )
}
//