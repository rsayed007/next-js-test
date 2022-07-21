
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div >
      <h1 className={styles.title} >Hello Roman</h1>
      <p className={styles.text} > Sit culpa dolor cupidatat aliqua adipisicing aute cupidatat consequat amet ipsum. Culpa est velit exercitation non. Tempor duis ut amet voluptate in. </p>
      <p className={styles.text}>Do do sunt incididunt nostrud nulla deserunt officia eiusmod ea laboris sit voluptate et irure. Mollit nisi dolore anim nostrud aliquip anim ullamco elit non occaecat pariatur minim magna. Reprehenderit sint anim excepteur ad sint est incididunt cupidatat tempor consectetur esse aute pariatur reprehenderit. Irure sunt elit quis aute tempor.</p>
      <Link href='/ninjas'> 
        <a className={styles.btn} >Ninja List</a>
        </Link>
    </div>
  )
}
