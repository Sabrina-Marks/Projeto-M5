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
                    <h2>
                        Seja bem-vindo ao site de cursos gratuitos de tecnologia, uma plataforma criada para democratizar o acesso ao conhecimento em tecnologia e programação. Nosso objetivo é capacitar pessoas de todas as origens e formações, oferecendo cursos gratuitos e de qualidade que possibilitem a transformação de vidas através da educação tecnológica.
                    </h2><br />
                    <h2>Confira abaixo alguns cursos disponíveis:</h2>
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
