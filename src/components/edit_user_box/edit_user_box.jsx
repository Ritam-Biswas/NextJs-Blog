import Image from 'next/image'

import styles from './styles.module.css'
import no_avatar_img from '@/../public/noavatar.png'

const EditUserBox = () => {
    return(
        <div className={styles.user_box_container}>
            <div className={styles.user_detail}>
                <Image src={no_avatar_img} alt='profile' width={40} height={40}/>
                <h4>User Title</h4>
            </div>
            <div className={styles.btn_container}>
                <button className={styles.delete_btn}>Delete</button>
            </div>
        </div>
    )
}

export default EditUserBox;