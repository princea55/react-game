import React,{useState} from 'react';
import Box from './Box';
import './Box.css';
export default function Process() {
    const initialState = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L"];
    const [fruite, setfruite] = useState(initialState);
    const [randomWord, setrandomWord] = useState();
    const shuffle = () => {
        const array = fruite;
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return setfruite(array);
    }
    const findWord = () => {
        let randomIndex = Math.floor(Math.random() * fruite.length);
        setrandomWord(fruite[randomIndex]);
    }
    const setFindWord = (word) => {
        const array = fruite;
           for (let index = 0; index < array.length; index++) {
               array[index] = word;
           }
        return setfruite(array);
    }
    const start = ()=>{
        findWord();
        shuffle();
    }
    return (
        <div >
            <div>
                <h4>
                    You are given five attempts. Start the game and select the given box.
                </h4>
                <p>If you lose the game, That will be start in next 3 second.</p>
            </div>
            <div className="randomWord">
                <h1>{randomWord}</h1>
            </div>
            <div className="row cols-4">
            <Box
                fruite={fruite}
                randomWord={randomWord}
                setFindWord={setFindWord}
                start={start}

            />
            </div>
            
        </div>
    )
}
