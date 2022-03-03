import { Component, FunctionComponent } from "react";
import styles from '../../styles/QuizBox.module.scss';


const Quizbox= ({}) => {

    return (
        <div className={styles.quizBox}>
        <span className={styles.prompt}>
          Which of the following statements about electricity is not true?
        </span>
        {/* choices */}
        <div className={styles.choices}>
          <span className={styles.dot}></span>
          <p className={styles.choiceText}>
            Electricity is measured in units called Watts
          </p>
        </div>
        
        <div className={styles.choices}>
          <span className={styles.dot}></span>
          <p className={styles.choiceText}>
            Electricity flows at the speed of light
          </p>
        </div>
        
        <div className={styles.choices}>
          <span className={`${styles.dot} , ${styles.correct}`}></span>
          <p className={styles.choiceText}>
            Electricity is a primary energy source
          </p>
        </div>
        
        </div> 
    )

}

export default Quizbox;






