import styles from "./question.module.css"
let question_text = "Voce sabia?"
let answer = ["a", "b", "c"]



export const QuestionElement = () => {
    return (
    <div className={styles.question}>       
        <p>{question_text}</p>
        
        <select name="answer">
            <option value={answer[0]}>{answer[0]}</option>
            <option value={answer[1]} selected>{answer[1]}</option>
            <option value={answer[2]}>{answer[2]}</option>
        </select>
    </div>
    )
  }