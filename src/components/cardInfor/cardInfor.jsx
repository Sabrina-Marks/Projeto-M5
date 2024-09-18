import { useEffect, useState } from 'react';
import axios from 'axios'
import './style.css'



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
      <button onClick={buttonGetAllCousers} className={'button'}>Todos os cursos</button>
      <div className={'container'}>
      {couser.map(couse => (
        <div key={couse.id} className={'cardAllCousers'}>
          <div>
            <p className={'dataCouser'}>Titulo do curso: {couse.title}</p> <br />
            <p className={'dataCouser'}>Descrição do curso: {couse.description}</p> <br />
            <p className={'dataCouser'}>Idioma do curso: {couse.languagem}</p> <br />
          </div>
          <button>deletar</button>
        </div>
      ))}
      </div>

      <button onClick={() => setLanguagem('Português')} className={'button'}>Portugues</button>
      <button onClick={() => setLanguagem('Inglês')} className={'button'}>Ingles</button>

      <div className={'container'}>
      {couserLanguagem.map(language => (
        <div key={language.id} className={'cardAllCousers'}>
          <div>
            <div>
              <p className={'dataCouser'}>Titulo do curso: {language.title}</p> <br />
              <p className={'dataCouser'}>Descrição do curso: {language.description}</p> <br />
              <p className={'dataCouser'}>Idioma do curso: {language.languagem}</p> <br />
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  )
}