import React from 'react';
import { useContext } from 'react';
import {Container, Boxx} from '../PageThree/StyleQues'
import UserConsumer from '../PageThree/Ques'
import { UserContext } from './Style';

const Index = ({Style}) => {
    console.log(Style)


    const [score, setScore] = useContext(UserContext).data


    return (
            <Container> 
            <Boxx>
                Siz <span>{score}</span> ta savolga to'g'ri javob berdingiz
            </Boxx>
            </Container>
    )
}

export default Index
