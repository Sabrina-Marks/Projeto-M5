import Header from '../../components/header/header.jsx'
import Footer from '../../components/Footer/footer.jsx'
import CardStudents from '../../components/cardStudents/cardStudents.jsx'
import CardInfor from '../../components/cardInfor/cardInfor.jsx'
import alura from '../../assets/alura.png'
import CursoEmVideo from '../../assets/cursoEmVideo-logo.png'
import pda from '../../assets/pda-logo.png'
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
                    <div className={'containerImg'}>
                        <img src={CursoEmVideo} />
                        <h1>Curso Em Video</h1>
                    </div>
                    <div className={'containerImg'}>
                        <img src={pda} />
                        <h1>Programadores do Amanhã</h1>
                    </div>
                    <div className={'containerImg'}>
                        <img src={alura} />
                        <h1>Alura</h1>
                    </div>
                </div>
            </section>
            <CardInfor />
            <CardStudents />
            <Footer />
        </>
    )
}
