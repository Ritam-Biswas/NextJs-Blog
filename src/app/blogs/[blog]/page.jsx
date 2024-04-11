import Image from 'next/image'

import styles from './styles.module.css'
import noavatar_img from '../../../../public/noavatar.png'

const Blog = () => {
    return(
        <main className={styles.container}>
            <figure>
                <Image src='https://images.unsplash.com/photo-1534946405874-8915c3f62beb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' fill objectFit='cover' objectPosition='20% 50%'/>
            </figure>
            <article>
                <h1>Travel Blog</h1>
                <div className={styles.metadata_container}>
                    <Image src={noavatar_img} width={50} height={50}/>
                    <div>
                        <p>Author</p>
                        <h5>Ritam Biswas</h5>
                    </div>
                    <div>
                        <p>Published</p>
                        <h5>11.04.2024</h5>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum est natus eaque saepe? Suscipit necessitatibus sint culpa cum architecto ut, obcaecati officiis commodi perferendis fuga sapiente enim praesentium eius saepe.
                </p>
            </article>
        </main>
    )
}

export default Blog;