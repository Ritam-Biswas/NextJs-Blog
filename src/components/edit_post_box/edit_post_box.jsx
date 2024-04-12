import Image from 'next/image'

import styles from './styles.module.css'
import no_avatar_img from '@/../public/noavatar.png'
 
const EditPostBox = () => {
    return(
        <div className={styles.post_box_container}>
            <div className={styles.post_detail}>
                <Image src={no_avatar_img} alt='profile' width={50} height={50}/>
                <h4>Post Title</h4>
            </div>
            <div className={styles.btn_container}>
                <button className={styles.view_btn}>View</button>
                <button className={styles.delete_btn}>Delete</button>
            </div>
        </div>
    )
}

export default EditPostBox