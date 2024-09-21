import './style.css'

export default function Header() {
    return (
        <>
            <header className={'header'}>
                <h1>Cursos Gratuitos</h1>
                <nav>
                    <button className={'buttonHeader'}>
                        <a href="https://www.linkedin.com/in/marques-sabrina/">LinkedIn</a>
                    </button>
                    <button className={'buttonHeader'}>
                        <a href="https://github.com/Sabrina-Marks">GitHub</a>
                    </button>
                </nav>
            </header>
        </>
    )
}


