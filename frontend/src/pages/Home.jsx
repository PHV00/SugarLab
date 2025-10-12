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
    <main className="min-h-screen bg-[#0d1c18] text-white font-sans">
      {/* Imagem principal (banner superior) */}
      <section className="flex justify-center w-full">
        <img
          src={Principal}
          alt="Bolo de banana"
          className="w-full max-w-[1400px] object-cover"
        />
      </section>

      {/* Imagem Patisserie dentro de container branco */}
      <section className="flex justify-center w-full bg-[#0d1c18] py-16">
        <div className="bg-white rounded-3xl p-6 w-[90%] max-w-[1200px] flex justify-center shadow-2xl">
          <img
            src={Patisserie}
            alt="Torta verde"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </section>

      {/* Certificação dentro de container branco */}
      <section className="flex justify-center w-full bg-[#0d1c18] py-16">
        <div className="bg-white rounded-3xl w-[90%] max-w-[1200px] p-10 flex flex-col lg:flex-row items-center justify-center gap-10 shadow-2xl text-black">
          <img
            src={Certificado}
            alt="Certificado SugarLab"
            className="rounded-2xl shadow-lg max-w-[480px] w-250"
          />
          <div className="max-w-[500px] text-left">
            <h2 className="text-3xl font-semibold mb-4 text-[#0d1c18]">
              Certificações e Reconhecimento
            </h2>
            <ul className="text-gray-700 list-disc pl-5 space-y-2 leading-relaxed">
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

      {/* Depoimento dentro de container branco */}
      <section className="flex justify-center w-full bg-[#0d1c18] py-16">
        <div className="bg-white rounded-3xl w-[90%] max-w-[1200px] p-10 flex flex-col md:flex-row items-center gap-10 shadow-2xl text-black">
          <img
            src="https://via.placeholder.com/150"
            alt="Chef"
            className="w-40 h-40 rounded-full object-cover shadow-md"
          />
          <div className="flex flex-col gap-4">
            <p className="text-lg leading-relaxed">
              <strong>Nome:</strong> {nome} <br />
              <strong>Formação:</strong> {formacao} <br />
              <strong>Tempo de carreira:</strong> {tempoCarreira}
            </p>
            <p className="text-gray-600 italic">{depoimento}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
