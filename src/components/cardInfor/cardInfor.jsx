import { useEffect, useState } from 'react';
import axios from 'axios'
import './style.css'
import CardStudents from '../cardStudents/cardStudents';



export default function CardInfor() {
  const [couser, setCouser] = useState([]);
  const [buttonClickAllCousers, setButtonClickAllCousers] = useState(false);


  const [languagem, setLanguagem] = useState('');
  const [couserLanguagem, setCouserLanguagem] = useState([]);



  async function getCouser() {
    const { data } = await axios.get('http://localhost:4000/cursos')
    setCouser(data.listCousers)
  };


  async function buttonGetAllCousers() {
    setButtonClickAllCousers(true)
  };


  useEffect(() => {
    if (buttonClickAllCousers == true) {
      getCouser()
    }
  }, [buttonClickAllCousers])


  async function findCouserLanguagem() {
    const { data } = await axios.get(`http://localhost:4000/cursos?languagem=${languagem}`)
    setCouserLanguagem(data.listCousers)
  };


  useEffect(() => {
    if (languagem != "") {
      findCouserLanguagem()
    }
  }, [languagem])


  return (
    <>
      <div className={'containerBtn'}>
        <div className={'info'}>
          <h4>Veja todos os cursos disponiveis</h4>
        <button onClick={buttonGetAllCousers} className={'button'} >Todos os cursos</button>
        </div>
        <div className={'info'}>
          <h4>Cursos em Português</h4>
        <button onClick={() => setLanguagem('Português')} className={'button'}>Português</button>
        </div>
        <div className={'info'}>
        <h4>Cursos em Inglês</h4>
        <button onClick={() => setLanguagem('Inglês')} className={'button'}>Inglês</button>
        </div>
      </div>
      <div className={'container'}>
        {couser.map(couse => (
          <div key={couse.id} className={'cardAllCousers'}>
            <div>
              <p className={'dataCouser'}>Titulo do Curso: {couse.title}</p> <br />
              <p className={'dataCouser'}>Descrição do Curso: {couse.description}</p> <br />
              <p className={'dataCouser'}>Idioma do Curso: {couse.languagem}</p> <br />
            </div>
            <button>deletar</button>
          </div>
        ))}
      </div>


      <div className={'container'}>
        {couserLanguagem.map(language => (
          <div key={language.id} className={'cardAllCousers'}>
            <div>
              <p className={'dataCouser'}>Titulo do curso: {language.title}</p> <br />
              <p className={'dataCouser'}>Descrição do curso: {language.description}</p> <br />
              <p className={'dataCouser'}>Idioma do curso: {language.languagem}</p> <br />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}