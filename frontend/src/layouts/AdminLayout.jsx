/**
 * Layout: AdminLayout
 * Moldura com Header/Footer, fundo verde-escuro e container branco arredondado.
 */
import PropTypes from "prop-types";
import Header from "../components/header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function AdminLayout({ sidebar, children }) {
  return (
    <>
      {/* <Header /> */}
      <main className="min-h-screen bg-[#142825] pt-10 pb-20 px-4">
        <div className="mx-auto w-full max-w-7xl">
          <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[260px_1fr]">
              {/* sidebar */}
              <aside className="rounded-xl border border-gray-100 bg-white">
                {sidebar}
              </aside>
              {/* conteúdo */}
              <section>{children}</section>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
AdminLayout.propTypes = { sidebar: PropTypes.node, children: PropTypes.node };
