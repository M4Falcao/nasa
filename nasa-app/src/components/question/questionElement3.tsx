import styles from "./question.module.css"
import {QUESTIONS} from "../questionList"

var random =  Math.floor(Math.random() * 10)

export const QuestionElement3 = () => {
    let question_text = QUESTIONS[random].question
    let answer = QUESTIONS[random].answer
    let value = QUESTIONS[random].points
    return (
    <div className={styles.question}>       
        <p>{question_text}</p>
        
        <select name="answer" className={styles.selectbox}>
            <option value={value[0]}>{answer[0]}</option>
            <option value={value[1]} selected>{answer[1]}</option>
            <option value={value[2]}>{answer[2]}</option>
            <option value={value[3]}>{answer[3]}</option>
        </select>
    </div>
    )
  }