import {Link, useNavigate} from 'react-router-dom'
import {ArrowLeft, QrCode, Barcode, CreditCard} from "lucide-react"
import "./PaymentOptions.css"

export default function PaymentOptions() {
    const navigate = useNavigate();

    return (
        <main className='payment-page'>
            <button className='back-button' aria-label='Voltar' onClick={() => navigate(-1)}>
                <ArrowLeft size={20}/>
            </button>

            <h1 className='payment-title'>Opções de Pagamento:</h1>

            <section className='payment-grid' role='list'>
                <Link to={"/payment/pix"} className='pay-card' role='listitem'>
                    <div className='pay-icon'>
                        <QrCode size={84} strokeWidth={1.6} />
                    </div>
                    <span className='pay-label'>Pix</span>
                </Link>

                <Link to={"/payment/boleto"} className='pay-card' role='listitem'>
                    <div className='pay-icon'>
                        <Barcode size={84} strokeWidth={1.6}/>
                    </div>
                    <span className='pay-label'>Boleto</span>
                </Link>

                <Link to={"/payment/cartao"} className='pay-card' role='listitem'>
                    <div className='pay-icon'>
                        <CreditCard size={84} strokeWidth={1.6}/>
                    </div>
                    <span className='pay-label'>Cartão</span>
                </Link>
            </section>
        </main>
    )
}