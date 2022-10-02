import { QuestionElement } from "./questionElement"
import { QuestionElement2 } from "./questionElement2"
import { QuestionElement3 } from "./questionElement3"
import styles from "./question.module.css"
import {QUESTIONS} from "../questionList"



type Props = {
    setStart: (value: boolean) => void
    isStart?: boolean
}

    var random =  Math.floor(Math.random() * 10)
    let question_text = QUESTIONS[random].question
    let answer = QUESTIONS[random].answer
    let value = QUESTIONS[random].points

    var random2 =  Math.floor(Math.random() * 10)
    let question_text2 = QUESTIONS[random2].question
    let answer2 = QUESTIONS[random2].answer
    let value2 = QUESTIONS[random2].points

    var random3 =  Math.floor(Math.random() * 10)
    let question_text3 = QUESTIONS[random3].question
    let answer3 = QUESTIONS[random3].answer
    let value3 = QUESTIONS[random3].points

  export const Question = ({
    setStart,
    isStart
  }: Props) => {
    return (
    isStart? 
    <div>
        <p>Answer the questions</p>
        <div className={styles.question}>       
            <p>{question_text}</p>
        
            <select name="answer" className={styles.selectbox}>
                <option value={value[0]}>{answer[0]}</option>
                <option value={value[1]}>{answer[1]}</option>
                <option value={value[2]}>{answer[2]}</option>
                <option value={value[3]}>{answer[3]}</option>
            </select>
        </div>
        <div className={styles.question}>       
            <p>{question_text2}</p>
        
            <select name="answer" className={styles.selectbox}>
                <option value={value2[0]}>{answer2[0]}</option>
                <option value={value2[1]}>{answer2[1]}</option>
                <option value={value2[2]}>{answer2[2]}</option>
                <option value={value2[3]}>{answer2[3]}</option>
            </select>
        </div>
        <div className={styles.question}>       
            <p>{question_text3}</p>
        
            <select name="answer" className={styles.selectbox}>
                <option value={value3[0]}>{answer3[0]}</option>
                <option value={value3[1]}>{answer3[1]}</option>
                <option value={value3[2]}>{answer3[2]}</option>
                <option value={value3[3]}>{answer3[3]}</option>
            </select>
        </div>
        
        <button className={styles.button} onClick={()=> {
            alert("You did 100 points")
        }}>SUBMIT</button>
    </div> 
    : <></>
    )
  }
  