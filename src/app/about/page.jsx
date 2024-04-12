import Image from 'next/image'

import styles from './styles.module.css'
import about_image from '@/../public/about.png'

const About = () => {
    return(
        <main className={styles.container}>
            <div className={styles.inner_container_1}> 
                <h3>About Agency</h3>
                <h1>We create digital ideas that are bigger, bolder, braver and better.</h1>
                <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae autem quis dolor, necessitatibus inventore illum illo reprehenderit blanditiis doloribus excepturi impedit ut temporibus, debitis ducimus incidunt provident delectus nulla dolorum!
                </h4>
                <div className={styles.stats_container}>
                    <div className={styles.stats_box}>
                        <h3>10 K+</h3>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.stats_box}>
                        <h3>234 K+</h3>
                        <p>People reached</p>
                    </div>
                    <div className={styles.stats_box}>
                        <h3>5 K+</h3>
                        <p>Services and plugins</p>
                    </div>
                </div>
            </div>
            <div className={styles.inner_container_2}>
                <Image src={about_image} height={450} width={450}/>
            </div>
        </main>
    )
}

export default About;