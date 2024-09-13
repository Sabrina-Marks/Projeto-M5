import Header from '../../components/header/header.jsx'
import Footer from '../../components/Footer/footer.jsx'
import Button from '../../components/button/button.jsx'
import './style.css'

export default function Home() {


    return (
        <>
            <Header />
            <section>
                <div className={'description'}>
                    <h2>Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável.</h2>
                </div>
            </section>

            <section>
                <div className={'container'}>
                    <img src={"/cursoEmVideo-logo.png"} alt=""/>
                    <h1>Curso Em Video</h1>
                    
                    <img src={"/pda-logo.png"} alt="" />
                    <h1>Programadores do Amanhã</h1>
                    
                    <img src={"/alura.png"} alt="" />
                    <h1>Alura</h1>
                    
                </div>
            </section>

            <section>
                <div className={'requisition'}>
                    <h1>Requisição</h1>
                    <input type="text" placeholder='Digite aqui' /> <br />
                    <Button/>
                </div>
            </section>

            <Footer />
        </>
    )
}
