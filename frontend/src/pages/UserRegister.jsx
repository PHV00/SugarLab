import './UserRegister.css';
import Logo from "../assets/image/SugarLab.png";
import { useState } from "react";

export default function UserRegister() {
    
    const [formData, setFormData] = useState({
        nome: "",
        sobrenome: "",
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
            const res = await fetch("http://localhost:8080/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("Usuário registrado com sucesso!");
                setFormData({
                    nome: "",
                    sobrenome: "",
                    email: "",
                    senha: ""
                });
            } else {
                alert("Erro ao registrar usuário");
            }
        } catch (err) {
            console.error("Erro:", err);
            alert("Erro de conexão com o servidor");
        }
    };

    return (
        <div className='register-container'>
            <main className='register-main'>
                <section className='register-intro'>
                    <h1>Conecte-se</h1>
                    <p>
                        E desbloqueie um mundo de sabores! Acesse os mais diversos cursos de culinária 
                        da atualidade e transforme sua paixão por cozinhar em habilidades extraordinárias.
                    </p>
                </section>

                <section className='register-card'>
                    <img 
                        src={Logo}
                        alt="Sugar Lab Logo"
                        className="register-logo"
                    />

                    <form className='register-form' onSubmit={handleSubmit}>
                        <div className='row'>
                            <input
                                type='text'
                                name='nome'
                                placeholder='Nome'
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='text'
                                name='sobrenome'
                                placeholder='Sobrenome'
                                value={formData.sobrenome}
                                onChange={handleChange}
                                required
                            />
                        </div>

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

                        <button type='submit'>Criar</button>
                    </form>
                </section>
            </main>
        </div>
    )
}
//