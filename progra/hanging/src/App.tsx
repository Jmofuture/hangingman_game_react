import { useState } from 'react'
import { useEffect } from 'react'
import { letters } from './helpers/letters.ts'
import { HangImage } from './components/HangImage';
import { getRandomWord } from './helpers/getRandom';
import './App.css'



function App() {
  const [ attemps, setAttemps ] = useState(0)
  const [ word, setWord ] = useState( getRandomWord );
  const [ hiddenWord, setHiddenWord ] = useState( '_ '.repeat( word.length ));
  const [lose, setLose] = useState( false );
  const [won, setWon] = useState( false );


  useEffect( () => {
    if (attemps >= 9) {
      setLose( true )
    }
  }, [ attemps ]);


  useEffect( () => {
    const currentHiddenWord = hiddenWord.split(' ').join('')

    if (currentHiddenWord === word) {
      setWon ( true )
    }
  }, [ hiddenWord ]);


  const checkLetter = ( letter: string) => {

    if ( lose ) return;

    if ( !word.includes(letter) ) {
        setAttemps( Math.min( attemps + 1, 9 ))
        return;
    }
    const hiddenWordArray = hiddenWord.split(' ')

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord( hiddenWordArray.join(' ') );
  };


  const newGame = () => {
    const newWord: string = getRandomWord()



    setWord( newWord );
    setHiddenWord(( '_ '.repeat( newWord.length )));
    setAttemps( 0 );
    setLose( false );
    setWon( false );


  }

  return (
    <div className="App">
      

       {/* imagenes */} 
       <HangImage imageNumber={ attemps }/>

       {/* Palabra Oculta */} 
       <h3>{ hiddenWord }</h3>

       {/* Contador */} 
       <h3>Intentos: { attemps }</h3>
       {/*Mensaje*/}

        {
          ( lose )
           ? <h2>Perdiste { word }</h2>
           : ''
        }

        {
          ( won )
           ? <h2>Ganaste!!!</h2>
           : ''
        }


       {/* Botones */} 

       {
        letters.map( (letter) => (
            <button 
            onClick={ () => checkLetter(letter) }
            key={ letter }>{ letter }</button>
        ) )
       }

       
       <br />
       <br />

       <button onClick={ newGame }>Reiniciar</button>



    </div>
  )
}

export default App
