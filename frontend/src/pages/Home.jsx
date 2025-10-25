import Principal from "../assets/image/Principal.jpg";
import Patisserie from "../assets/image/Patisserri_cut.png";
import Certificado from "../assets/image/Certificado.jpg";
import Confeiteira from "../assets/image/Confeiteira.jpg";
import "./Home.css";

export default function Home({
  nome,
  formacao,
  tempoCarreira,
  depoimento,
}) {
  return (
    <main className="min-h-screen bg-[#0d1c18] text-white font-sans overflow-x-hidden">

      {/* Imagem principal */}
      <section className="w-screen flex justify-center">
        <img
          src={Principal}
          alt="Bolo de banana"
          className="w-screen h-auto object-cover rounded-none shadow-lg"
        />
      </section>

      {/* Imagem Patisserie */}
      <section className="patisserie-section">
        <div className="patisserie-container">
          <img
            src={Patisserie}
            alt="Torta verde"
            className="patisserie-img"
          />
        </div>
      </section>

      {/* Certificações */}
      <section className="certificacao-section">
        <div className="certificacao-container">
          <img
            src={Certificado}
            alt="Certificado SugarLab"
            className="certificado-img"
          />

          <div className="certificacao-text">
            <h2>Certificações e Reconhecimento</h2>
            <ul>
              <li>
                Certificações Reconhecidas: Cursos que oferecem diplomas ou
                certificações valorizadas no mercado.
              </li>
              <li>
                Parcerias com Instituições Renomadas: Colaborações com escolas
                ou chefs de prestígio internacional.
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* Depoimento */}
      <section className="w-screen flex justify-center bg-[#0d1c18] py-12 px-4 sm:px-10 mb-16">
        <div className="bg-white rounded-3xl w-full sm:w-[95%] md:w-[92%] lg:w-[96%] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-start gap-8 text-black">
          <img
            src={Confeiteira}
            alt="Chef"
            className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover shadow-md"
          />
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-black">
              <strong>Nome:</strong> Suzana Mafra{nome || ""} <br />
              <strong>Formação:</strong> Gastronomia e confeitaria{formacao || ""} <br />
              <strong>Tempo de carreira:</strong> 25 anos{tempoCarreira || ""}
            </p>
            <p className="mt-6 text-gray-600 italic">{depoimento || ""}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
