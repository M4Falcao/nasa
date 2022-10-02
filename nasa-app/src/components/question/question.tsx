import { QuestionElement } from "./questionElement"
import styles from "./question.module.css"

type Props = {
    setStart: (value: boolean) => void
    isStart?: boolean
}
  
  export const Question = ({
    setStart,
    isStart
  }: Props) => {
    return (
    isStart? 
    <div>
        <p>Responda as perguntas</p>
        <QuestionElement/>
        <QuestionElement/>
        <QuestionElement/>

        <button className={styles.button}>SUBMIT</button>
    </div> 
    : <></>
    )
  }
  