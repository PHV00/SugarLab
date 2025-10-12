import React from "react";
import Principal from "../assets/image/Principal.jpg";
import Patisserie from "../assets/image/Patisserie.jpg"

export default function Home ({
  nome,
  formacao,
  tempoCarreira,
  depoimento,
}) {
    return (
        <main className="min-h-screen bg-[#0d1c18] text-white font-sans">
      {/* Imagem principal */}
      <div className="w-full flex justify-center pt-6">
        <img
          src={Principal}
          alt="Bolo principal"
          className="rounded-xl shadow-lg max-w-[90%]"
        />
      </div>

      {/* Outra imagem */}
      <div className="w-350 flex justify-center mt-6">
        <img
          src={Patisserie}
          alt="Outra receita"
          className="rounded-xl shadow-lg max-w-[90%]"
        />
      </div>

      {/* Certificação */}
      <section className="flex flex-col md:flex-row items-center gap-6 mt-10 px-6">
        <img
          src=""
          alt="Certificado"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Certificações e Reconhecimento
          </h2>
        </div>
      </section>

      {/* Depoimento */}
      <section className="bg-white text-black mt-10 mx-6 rounded-xl p-6 flex gap-4 items-start">
        <img
          src=""
          alt="Chef"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p>
            <strong>Nome:</strong> {nome} <br />
            <strong>Formação:</strong> {formacao} <br />
            <strong>Tempo de carreira:</strong> {tempoCarreira}
          </p>
          <p className="mt-4 text-gray-700 italic">{depoimento}</p>
        </div>
      </section>
    </main>
    )
}