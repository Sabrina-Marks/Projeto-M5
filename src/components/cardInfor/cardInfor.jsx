import { useEffect, useState } from 'react';
import axios from 'axios'

import './style.css'


export default function CardInfor() {
  const [couser, setCouser] = useState([])
  const [buttonClickAllCousers, setButtonClickAllCousers] = useState(false)

  const [languagem, setLanguagem] = useState('')
  const [couserLanguagem, setCouserLanguagem] = useState([])

  // const couser = [{title: 'pda', description: 'testee', languagem: 'portugues'},
  //   {title:'alura', description: 'cursos online', languagem: 'ingles'}
  // ]


  async function findCouserLanguagem() {
    const { data } = await axios.get(`http://localhost:4000/cursos?languagem=${languagem}`)
    setCouserLanguagem(data.listCousers)
    console.log(data)
  }



  useEffect(() => {
    if (languagem != "") {
      findCouserLanguagem()
    }
  }, [languagem])


  async function getCouser() {
    const { data } = await axios.get('http://localhost:4000/cursos')
    setCouser(data.listCousers)
  }

  async function buttonGetAllCousers() {
    setButtonClickAllCousers(true)

  }

  useEffect(() => {
    if (buttonClickAllCousers == true) {
      getCouser()
    }
  }, [buttonClickAllCousers])


  return (
    <>
      <button onClick={buttonGetAllCousers}>Todos os cursos</button>
      {couser.map(couse => (
        <div key={couse.id} className={'card'}>
          <div>
            <p className={'info'}>Titulo do curso: {couse.title}</p> <br />
            <p className={'info'}>Descrição do curso: {couse.description}</p> <br />
            <p className={'info'}>Idioma do curso: {couse.languagem}</p> <br />
          </div>
          <button>deletar</button>
        </div>
      ))}

      <button onClick={() => setLanguagem('Português')}>Portugues</button>
      <button onClick={() => setLanguagem('Inglês')}>Ingles</button>
      {couserLanguagem.map(language => (
        <div key={language.id}>
          <div>
            <div>
              <p className={'info'}>Titulo do curso: {language.title}</p> <br />
              <p className={'info'}>Descrição do curso: {language.description}</p> <br />
              <p className={'info'}>Idioma do curso: {language.languagem}</p> <br />
            </div>
          </div>

        </div>
      ))}

    </>
  )
}