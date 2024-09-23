import { useEffect, useState } from "react"
import axios from 'axios'
import './cardStudent.css'
import iconStudent from '../../assets/students.svg'


export default function CardStudents() {
    const [students, setStudents] = useState([])
    const [buttonAllStudents, setButtonAllStudents] = useState(false)


    async function getAllStudents() {
        const { data } = await axios.get('https://api-m4.onrender.com/aluno')
        setStudents(data.listStudent)
    }


    async function buttonGetAllStudents() {
        setButtonAllStudents(true)
    }


    useEffect(() => {
        if (buttonAllStudents == true) {
            getAllStudents()
        }
    }, [buttonAllStudents])


    return (
        <>
            <div className={'containerBtnStudent'}>
                <h2>Entre em contato com estudantes</h2>
                <button onClick={buttonGetAllStudents} className={'button'}>Estudantes</button>
            </div>
            <div className={'containerCardStudent'}>
                {students && students.map(user => (
                    <div key={user.id} className={'cardStudent'}>
                        <div>
                            <div className={'containerIconStudent'}>
                                <img src={iconStudent} />
                            </div>
                            <p className={'data'}>Nome: {user.name}</p> <br />
                            <p className={'data'}>E-mail: {user.email}</p> <br />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

