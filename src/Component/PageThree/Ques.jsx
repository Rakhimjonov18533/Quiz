import React, {useState, useEffect, useContext} from 'react'
import {Answer, Boxx, Container, Next} from './StyleQues';
import { Data } from '../data/quizData';
import './Ques.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../Result/Style';


const Ques = () => {
    const [count, setCount] = useContext(UserContext).data
    const [currQues, setCurrQues] = useState(0)
    const [options, setOptions] = useState([])
    const [path, setPath] = useState("/quiz")
    const [selected, setSeelected] =  useState('');
    const handleSelected = (answer) =>{
        if(selected===answer && answer===Data[currQues]?.javob){
            return (
                'correct'
            )
        }else if (selected === answer && answer !== Data[currQues]?.javob)
        {
            return 'incorrect'
        }
    }

    useEffect(() => {
        options&&
        setOptions(
            handleShuffle([
                Data[currQues]?.javob, ...Data[currQues]?.w_answers
            ])
        )
    }, [currQues])

    const handleShuffle =(options) => {
        return options.sort(() => Math.random()-0.5)
    }
    
    const handleCheck = (value) => {
        setSeelected(value)
        if(value===Data[currQues].javob){
            setCount(count+1);
        }
    }
    
    
    return (
        <Container>
        <Boxx>
            {
                Data[currQues]?.quiz
                
            }
        </Boxx>
            {
                options.map((value, index) => (
                    <Answer 
                        onClick={() => handleCheck(value)}  
                        key={index}
                        className={`option ${selected && handleSelected(value)}`}
                        disabled={selected}
                     >
                        {value}
                    </Answer>
                ))
            }
            <Link to={currQues===3?"/result":path}>
                <Next  onClick={() =>{setCurrQues(currQues+1); setSeelected()}}>Next</Next>
            </Link>
    </Container>
    )
}

export default Ques
