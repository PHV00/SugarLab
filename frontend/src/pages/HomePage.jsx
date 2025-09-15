import principal from "../assets/image/Principal.jpg"

export default function HomePage() {
    return(
        <div className="min-h-screen bg-neutral-900 text-white">
            <section className="w-full">
                <img
                    src={principal} 
                    alt="Imagem receita home page" 
                    className="w-full object cover h-64 sm:h-80 md:h-[420px] lg:h-[520px] xl:h-[640px]"
                />
            </section>

            <main className="mx-auto max-w-6xl p-6 space-y-8">
                
            </main>
        </div>
    )
}