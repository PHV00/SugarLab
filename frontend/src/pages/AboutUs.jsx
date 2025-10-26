import "./AboutUs.css"
import CatolicaLogo from "../assets/image/LogoCatolica.png"

export default function AboutUs() {
    return (
        <div className="about">
            <main className="about-card">
                <h1>Bem-vindo ao SugarLab!</h1>
                <p>
                    Nossa missão é democratizar o acesso ao conhecimento, oferecendo cursos acessíveis, 
                    didáticos e de alta qualidade para todos que desejam explorar o mundo da confeitaria,
                    seja como hobbie ou profissão. 
                </p>

                <div className="about-info">
                    <div className="about-left">
                        <h2>Equipe de desenvolvedores:</h2>
                        <ul className="about-team">
                            <li>AMANDA KORCZAGIN</li>
                            <li>DANIEL DOUGLAS DOS SANTOS</li>
                            <li>FLAVIA ANTONIELI DE SOUZA</li>
                            <li>GUILHERME MAFRA PALUSKI</li>
                            <li>GUSTAVO MAFRA PALUSKI</li>
                            <li>PEDRO HENRIQUE VITORETI</li>
                        </ul>

                        <h3>Orientador do projeto:</h3>
                        <ul className="about-orientador">
                            <li>LUIZ CARLOS CAMARGO</li>
                            <li>CLAUDINEI DIAS</li>
                        </ul>
                    </div>

                    <div className="about-right">
                        <img
                            src={CatolicaLogo}
                            alt="Centro Universitário Católica de Santa Catarina"
                            className="about-logo"
                        />
                    </div>
                </div>
            </main>
        </div> 
    )
}