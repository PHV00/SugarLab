import Principal from "../assets/image/Principal.jpg";
import Patisserie from "../assets/image/Patisserie.jpg";
import Certificado from "../assets/image/Certificado.jpg";

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
      <section className="w-screen flex justify-center bg-[#0d1c18] py-12 px-4 sm:px-10">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full sm:w-[95%] md:w-[92%] lg:w-[90%]">
          <img
            src={Patisserie}
            alt="Torta verde"
            className="w-full h-auto object-cover block"
          />
        </div>
      </section>

      {/* Certificações */}
      <section className="w-screen flex justify-center bg-[#0d1c18] py-12 px-4 sm:px-10">
        <div className="bg-white rounded-3xl w-full sm:w-[95%] md:w-[92%] lg:w-[90%] p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-center gap-10 text-black">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={Certificado}
              alt="Certificado SugarLab"
              className="rounded-2xl w-full max-w-[520px] object-contain"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-[#0d1c18]">
              Certificações e Reconhecimento
            </h2>
            <ul
              className="list-disc list-outside pl-6 space-y-2 text-gray-700 marker:text-[#0d1c18]"
              style={{ listStyleType: "disc" }}
            >
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
        <div className="bg-white rounded-3xl w-full sm:w-[95%] md:w-[92%] lg:w-[90%] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-start gap-8 text-black">
          <img
            src=""
            alt="Chef"
            className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover shadow-md"
          />
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-black">
              <strong>Nome:</strong> {nome || ""} <br />
              <strong>Formação:</strong> {formacao || ""} <br />
              <strong>Tempo de carreira:</strong> {tempoCarreira || ""}
            </p>
            <p className="mt-6 text-gray-600 italic">{depoimento || ""}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
