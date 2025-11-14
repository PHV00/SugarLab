import './userRegister.css'
import Logo from "../assets/image/SugarLab.png"

export default function UserRegister() {
    return(
        <div className='register-container'>
            <main className='register-main'>
                <section className='register-intro'>
                    <h1>Conecte-se</h1>
                    <p>
                        E desbloqueie um mundo de sabores! Acesse os mais diversos cursos de culinária 
                        da atualidade e transfome sua paixão por conzinhar em habilidades extraordinárias.
                    </p>
                </section>

                <section className='register-card'>
                    <img 
                        src={Logo}
                        alt="Sugar Lab Logo"
                        className="register-logo"
                    />

                    <form className='register-form' onSubmit={(e) => e.preventDefault()}>
                        <div className='row'>
                            <input type='text' placeholder='Nome'/>
                            <input type='text' placeholder='Sobrenome'/>
                        </div>

                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='Senha'/>

                        <button type='submit'>Criar</button>

                    </form>
                </section>

            </main>
        </div>
    )
}