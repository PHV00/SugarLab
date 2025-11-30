import Comunidade from "../assets/image/Comunidade.jpg";
import Cliente1 from "../assets/image/daniel.jpg"
import Cliente2 from "../assets/image/pedro.jpg"
import Cliente3 from "../assets/image/paulo.jpg"
import WhatsAppLogo from "../assets/image/WhatsAppLogo.png"
import Evento01 from "../assets/image/Evento01-Redimensioned.png"
import Evento02 from "../assets/image/Evento02.jpg"
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
      <section className="feedbacks-section">
        <div className="feedbacks-title">
          <h1>Relatos da comunidade</h1>
        </div>
        <div className="clients-feedbacks">
          <div className="client-01">
            <img
            src={Cliente1}
            alt=""
            className="client1-img"
            />
            
            <h1><b>Daniel Douglas dos Santos</b></h1> <br />
                <p>
                  "Participar do curso foi transformador! Aprendi técnicas que antes pareciam impossíveis e hoje cozinho com muito mais confiança. Recomendo para todos que amam gastronomia!"
                </p>
            <p className="mt-6 text-gray-600 italic"></p>
          </div>

          <div className="client-02">
            <img
            src={Cliente2}
            alt=""
            className="client2-img"
            />

            <h1><b>Pedro Henrique Vitoreti</b></h1> <br />
                <p>
                  "O curso superou minhas expectativas! Além das receitas incríveis, os professores foram muito atenciosos e ajudaram em cada detalhe. Uma experiência que levarei para a vida!"
                </p>
            <p className="mt-6 text-gray-600 italic"></p>
          </div>
            
          <div className="client-03">
            <img
            src={Cliente3}
            alt=""
            className="client3-img"
            />

            <h1><b>Paulo Guilherme Winchester</b></h1> <br />
                <p>
                  "Eu sempre gostei de cozinhar, mas com o curso aprendi a fazer pratos profissionais. O ambiente foi acolhedor e me senti parte de uma verdadeira família culinária."
                </p>
            <p className="mt-6 text-gray-600 italic"></p>
          </div>
        </div>
      </section>

      {/* Eventos */}
      <section className="events-section">
        <div className="events-title">
          <h1>Eventos</h1>
        </div>

        <div className="events-content">
          <div className="event-01">
            <img
              src={Evento01}
              alt=""
              width={750}
              />
            <h1>Sabores do Mundo: Festival Gastronômico</h1>
            <p>
              Centro de Convenções Gourmet, você poderá explorar a riqueza da culinária global em um único lugar. Com degustações de pratos típicos de diversos países, workshops e masterclasses com chefs renomados e muito mais...
            </p>
          </div>

          <div className="event-02">
            <img
              src={Evento02}
              alt=""
              width={750}
            />
            <h1>Mundo Açucarado: Festival de Doces</h1>
            <p>
              O festival também oferece oficinas práticas de confeitaria, competições emocionantes e a chance de explorar tendências como doces saudáveis e veganos. 
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
