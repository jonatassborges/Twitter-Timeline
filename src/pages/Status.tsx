import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"


/**
* Fluxo de renderização
*
* Toda vez que  alteramos o estado de um componente, TODO o componente é renderizado novamente (recalculado)
e Todo o código antes do return é executado novamente
* Toda vez que seu componente pai é renderizado, todos os componentes filhos são renderizados novamente
* Tda vez que uma de suas props muda, o componente é renderizado novamente
*/
/**
* Algortimo de reconciliação
*
* 1. Criar em memória uma representação do DOM (Virtual DOM) do componente
* 2. Comparar o Virtual DOM com a versão antiga davDOM (a que está sendo exibida na tela)
* 3. Alterar SOMENTE o necessário na DOM real para que ela fique igual ao Virtual DOM (via javascript)
*/
export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    "I'm Happy about that!",
    "Cool!",
    "it's so amazing!",
  ])

  function createNewAnswer(event: FormEvent){
    event.preventDefault()
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
    console.log(answers)
  }

  function handleHotKeySubmit (event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className='status'>
    <Header title="Tweet"/>
    <Tweet content="Lorem ipsum dolor sit amet consectetur elit. Esse illum sequi recusandae sed qui molestias maiores, veniam consequatur ab. Expedita aut explicabo iure ab odit quos quas amet mollitia exercitationem?"/>
    <Separator />

    <form
    onSubmit={createNewAnswer}
    className='answer-tweet-form'>
      <label htmlFor="tweet">
        <img src="https://avatars.githubusercontent.com/u/139708582?v=4" alt="Jonatas" />
        <textarea
          id="tweet" 
          placeholder="Tweet your answer"
          value={newAnswer}
          onKeyDown={handleHotKeySubmit}
          onChange={(event) => {
            setNewAnswer(event.target.value)
          }}
        />
      </label>
      <button type='submit'>
        <PaperPlaneRight />
        <span>Answer</span>
      </button>
    </form>


    {answers.map(answer => {
      return <Tweet key={answer} content={answer} />
    })}
  </main>
  )
}