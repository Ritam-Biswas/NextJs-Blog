import styles from './styles.module.css'
import Image from 'next/image'

const BlogPreviewCard = () => {
    return(
        <article className={styles.blog_card_container}>
            <figure>
                <Image src='https://images.unsplash.com/photo-1534946405874-8915c3f62beb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' fill objectFit='cover'/>
            </figure>
            <div className={styles.blog_content}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum perspiciatis rem consequuntur at, temporibus iste soluta ea minus.
                </p>
                <button>Read More</button>
            </div>
        </article>
    )
}

export default BlogPreviewCard