import styles from './styles.module.css'
import BlogPreviewCard from '@/components/blog_preview_card/blog_preview_card'

const Blogs = () => {
    return(
        <main className={styles.container}>
            <div className={styles.blog_container}>
                <BlogPreviewCard/>
                <BlogPreviewCard/>
                <BlogPreviewCard/>
            </div>
        </main>
    )
}

export default Blogs
