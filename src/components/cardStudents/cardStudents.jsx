import { useEffect, useState } from "react";
import axios from 'axios';
import './cardStudent.css'


export default function CardStudents() {
    const [students, setStudents] = useState([])
    const [buttonAllStudents, setButtonAllStudents] = useState(false)


    async function getAllStudents() {
        const { data } = await axios.get('http://localhost:4000/aluno')
        setStudents(data.listStudent)
    };


    async function buttonGetAllStudents() {
        setButtonAllStudents(true)
    }


    useEffect(() => {
        if (buttonAllStudents == true) {
            getAllStudents();
        }
    }, [buttonAllStudents])


    return (
        <>
            <button onClick={buttonGetAllStudents} className={'button'}>listar estudantes</button>
            <div className={'containerCardStudent'}>
            {students && students.map(user => (
                <div key={user.id} className={'cardStudent'}>
                    <div>
                        <p className={'data'}>Nome: {user.name}</p> <br />
                        <p>E-mail: {user.email}</p> <br />
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

