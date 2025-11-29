import Comunidade from "../assets/image/Comunidade.jpg";
import Cliente1 from "../assets/image/daniel.jpg"
import Cliente2 from "../assets/image/pedro.jpg"
import Cliente3 from "../assets/image/paulo.jpg"
import WhatsAppLogo from "../assets/image/WhatsAppLogo.png"
import "./Community.css"

export default function Community() {
  return (
    <main className="min-h-screen bg-[#0d1c18] text-white font-sans overflow-x-hidden">

      {/* Imagem principal */}
      <section className="hero">
        <img
          src={Comunidade}
          alt="Communidade"
          className="comunidade-image"
        /> 

        {/* Whatsapp */}
        <div className="whatsapp-section">
          <div className="whatsapp-components">
            <h1><b>Junte-se à nossa comunidade no WhatsApp!</b></h1>
            <p>Participe do nosso grupo exclusivo para trocar dicas, receitas e experiências com outros entusiastas da confeitaria. Clique no link abaixo para entrar:</p>
            <button className="group-whatsapp-button">
              <a href="https://chat.whatsapp.com/L8lUEbLbcXtIkl9kQiBJVC" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                <img src={WhatsAppLogo} alt="WhatsApp Logo" width={40} />
                Entrar no Grupo do WhatsApp
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* Feedbacks */}
      <section>
        <div className="feedbacks-title">
          <h1>Relatos da comunidade</h1>
        </div>
        <div className="clients-photos">
            <img
            src={Cliente1}
            alt=""
            className="client1-img"
            />

            <img
            src={Cliente2}
            alt=""
            className="client2-img"
            />
            
            <img
            src={Cliente3}
            alt=""
            className="client3-img"
            />
        </div>
        
        <div className="main-feedback-part">
            <div className="feedback-name-1">
              <h1><b>Daniel Douglas dos Santos</b></h1> <br />
              <div className="feedback-text-1">
                <p>
                  "Participar do curso foi transformador! Aprendi técnicas que antes pareciam impossíveis e hoje cozinho com muito mais confiança. Recomendo para todos que amam gastronomia!"
                </p>
              </div>
            <p className="mt-6 text-gray-600 italic"></p>
          </div>

          <div className="feedback-name-2">
              <h1><b>Pedro Henrique Vitoreti</b></h1> <br />
              <div className="feedback-text-2">
                <p>
                  "O curso superou minhas expectativas! Além das receitas incríveis, os professores foram muito atenciosos e ajudaram em cada detalhe. Uma experiência que levarei para a vida!"
                </p>
              </div>
            <p className="mt-6 text-gray-600 italic"></p>
          </div>
          
          <div className="feedback-name-3">
              <h1><b>Paulo Guilherme Winchester</b></h1> <br />
              <div className="feedback-text-3">
                <p>
                  "Eu sempre gostei de cozinhar, mas com o curso aprendi a fazer pratos profissionais. O ambiente foi acolhedor e me senti parte de uma verdadeira família culinária."
                </p>
              </div>
            <p className="mt-6 text-gray-600 italic"></p>
          </div>
        </div>
      </section>
    </main>
  );
}
