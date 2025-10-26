import "./subscription.css"

export default function Subscription() {
    return (
        <div className="subscription">
            <main className="subscription-container">
                <section className=" subscription-card">
                    <div className="subscription-left">
                        <h1>Junte-se a nós</h1>
                        <p>
                            Faça a sua assinatura e tenha acesso aos mais diversos 
                            tipos de cursos de gastronomia presentes no nosso catálogo! 
                        </p>
                    </div>

                    <div className="subscription-right">
                        <div className="subscription-price">
                            <span className="subscription-price-amount">R$129,90</span>
                            <span className="subscription-price-split">/ AO MÊS</span>
                        </div>

                        <div className="subscription-period">1 ano de <span className="subscription-logo">SUGARLAB</span></div>

                        <button type="button" className="subscription-button">ASSINAR AGORA!</button>
                    </div>

                </section>
            </main>
        </div>
    )
}