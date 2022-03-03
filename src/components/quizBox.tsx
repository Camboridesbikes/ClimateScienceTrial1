/**
 * This coomponent contains a stylized and animated 'quiz box' with a prompt and three questions. 
 */

import React from "react";
import styles from '../../styles/QuizBox.module.scss';


type quizBoxProps = {
    prompt: string,
    q1: string,
    q2: string,
    q3: string
}


const Quizbox= ({prompt, q1, q2, q3} : quizBoxProps) => {

    return (
        <div className={styles.quizBox}>
        <span className={styles.prompt}>
            {prompt}
        </span>
        {/* choices */}
        <div className={styles.choices}>
          <span className={styles.dot}></span>
          <p className={styles.choiceText}>
              {q1}
          </p>
        </div>
        
        <div className={styles.choices}>
          <span className={styles.dot}></span>
          <p className={styles.choiceText}>
              {q2}
          </p>
        </div>
        
        <div className={styles.choices}>
          <span className={`${styles.dot} , ${styles.correct}`}></span>
          <p className={styles.choiceText}>
              {q3}
          </p>
        </div>
        
        </div> 
    )

}

export default Quizbox;






