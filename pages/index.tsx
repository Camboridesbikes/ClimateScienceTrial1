import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import QuizBox from '../src/components/quizBox'
import { useRouter } from 'next/router'


//translations for i18n
const quizQuestions = {
  "en-US": {
    prompt: " Which of the following statements about electricity is not true?",
    q1: 'Electricity is measured in units called Watts',
    q2: 'Electricity flows at the speed of light',
    q3: 'Electricity is a primary energy source',
  },
  "en-UK": {
    prompt: " Which of the following statements about electricity is not true?",
    q1: 'Electricity is measured in units called Watts',
    q2: 'Electricity flows at the speed of light',
    q3: 'Electricity is a primary energy source',
  },
}

export default function Home() {
  const {locale} = useRouter(); //get locale

  /**
   * I ran into a challenge in this code using i18n with typescript. While destructuring the data for the quizBox component from 
   * the QuizQuestions object, I was running into a type problem. As locale could be undefined, typescript was throwing an 
   * error - as I usually work in sctrict mode. The code works with strict mode turned off, but the issue has guided me to a place 
   * where I need to improve my typescript skills.
   */
  const {prompt, q1, q2, q3} = quizQuestions[locale];//destructure data from quizQuestions object

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="ClimateScienceTrialTask" content="A sweet little .sass animation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        
      <main className={styles.main}>
       <QuizBox
        prompt={prompt}
        q1= {q1}
        q2= {q2}
        q3={q3}
      />
      </main>
    </div>
  )
}
