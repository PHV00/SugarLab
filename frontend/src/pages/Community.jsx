import Comunidade from "../assets/image/Comunidade.jpg";
import Cliente1 from "../assets/image/daniel.jpg"
import Cliente2 from "../assets/image/pedro.jpg"
import Cliente3 from "../assets/image/paulo.jpg"
import "./Community.css"

export default function Community() {
  return (
    <main className="min-h-screen bg-[#0d1c18] text-white font-sans overflow-x-hidden">

      {/* Imagem principal */}
      <section className="w-screen flex justify-center">
        <img
          src={Comunidade}
          alt="Communidade"
          className="w-screen h-auto object-cover rounded-none shadow-lg"
        /> 
      </section>

      {/* Feedbacks */}
      <section>
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
            <p>
              <strong>Daniel Douglas dos Santos</strong> <br />
            </p>
              <div className="feedback-text-1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab assumenda ut perspiciatis tempora doloribus accusamus fugiat veniam laborum! Reiciendis illo quod, a numquam quidem qui molestiae veniam consequatur totam.
                </p>
              </div>
            <p className="mt-6 text-gray-600 italic"></p>
          </div>
          <div className="feedback-name-2">
            <p>
              <strong>Pedro Henrique Vitoreti</strong> <br />
            </p>
              <div className="feedback-text-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab assumenda ut perspiciatis tempora doloribus accusamus fugiat veniam laborum! Reiciendis illo quod, a numquam quidem qui molestiae veniam consequatur totam.
                </p>
              </div>
            <p className="mt-6 text-gray-600 italic"></p>
          </div>
          <div className="feedback-name-3">
            <p>
              <strong>Paulo Guilherme Winchester</strong> <br />
            </p>
              <div className="feedback-text-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab assumenda ut perspiciatis tempora doloribus accusamus fugiat veniam laborum! Reiciendis illo quod, a numquam quidem qui molestiae veniam consequatur totam.
                </p>
              </div>
            <p className="mt-6 text-gray-600 italic"></p>
          </div>
        </div>
      </section>
    </main>
  );
}
