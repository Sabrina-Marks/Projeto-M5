import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import './style.css'
import IconDelete from '../../assets/delete.svg'
import iconCouse from '../../assets/couser.png'


export default function CardInfor() {
  const [couser, setCouser] = useState([]);
  const [buttonAllCousers, setButtonAllCousers] = useState(false);


  const [languagem, setLanguagem] = useState('');
  const [buttonCouserLanguagem, setButtonCouserLanguagem] = useState([]);


  const titleRef = useRef()
  const descriptionRef = useRef()
  const languagemRef = useRef()


  async function getCouser() {
    const { data } = await axios.get('https://api-m4.onrender.com/cursos')
    setCouser(data.listCousers)
  }


  async function findCouserLanguagem() {
    const { data } = await axios.get(`https://api-m4.onrender.com/cursos?languagem=${languagem}`)
    setButtonCouserLanguagem(data.listCousers)
  }


  async function postCouser() {
    await axios.post('https://api-m4.onrender.com/cursos', {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      languagem: languagemRef.current.value
    })
    titleRef.current.value = ''
    descriptionRef.current.value = ''
    languagemRef.current.value = ''
    getCouser()

  }


  async function deleteCouser(id) {
    const { data } = await axios.delete(`https://api-m4.onrender.com/cursos/${id}`)
    setCouser(data.cousers)
    console.log(data)
    getCouser()
  }


  async function buttonGetAllCousers() {
    setButtonAllCousers(true)
  }


  useEffect(() => {
    if (buttonAllCousers == true) {
      getCouser()
    }
  }, [buttonAllCousers])


  useEffect(() => {
    if (languagem != "") {
      findCouserLanguagem()
    }
  }, [languagem])


  return (
    <>
      <div className={'containerBtn'}>
        <div className={'info'}>
          <h4>Veja todos os cursos disponível</h4>
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
        {couser.map(couse => {
          return (
            <div key={couse.id} className={'cardAllCousers'}>
              <div>
                <div className={'containerIcon'}>
                  <img src={iconCouse} className={'imgIcon'} />
                </div>
                <p className={'dataCouser'}>Titulo do Curso: {couse.title}</p> <br />
                <p className={'dataCouser'}>Descrição do Curso: {couse.description}</p> <br />
                <p className={'dataCouser'}>Idioma do Curso: {couse.languagem}</p> <br />
              </div>
              <button onClick={() => deleteCouser(couse.id)} className={'buttonDelete'}>
                <img src={IconDelete} />
              </button>
            </div>
          )
        })}
      </div >
      <div className={'container'}>
        {buttonCouserLanguagem.map(language => (
          <div key={language.id} className={'cardAllCousers'}>
            <div>
              <div className={'containerIcon'}>
                <img src={iconCouse} />
              </div>
              <p className={'dataCouser'}>Titulo do curso: {language.title}</p> <br />
              <p className={'dataCouser'}>Descrição do curso: {language.description}</p> <br />
              <p className={'dataCouser'}>Idioma do curso: {language.languagem}</p> <br />
            </div>
          </div>
        ))}
      </div>
      <section>
        <div className={'requisition'}>
          <h1>Cadastre um Curso</h1>
          <input type='text' placeholder='Título' ref={titleRef} className={'inputData'} /> <br />
          <input type='text' placeholder='Descrição' ref={descriptionRef} className={'inputData'} /> <br />
          <input type='text' placeholder='Idioma' ref={languagemRef} className={'inputData'} /> <br />
          <button className={'button'} onClick={postCouser}>Cadastrar</button>
        </div>
      </section>
    </>
  )
}