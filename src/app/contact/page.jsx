import Image from 'next/image'

import styles from './styles.module.css'
import contact_img from '@/../public/contact.png'

const Contact = () => {
    return(
        <main className={styles.container}>
            <div className={styles.inner_container}>
                <Image src={contact_img} height={500} width={500}/>
            </div>
            <div className={styles.inner_container}>
                <form action="">
                    <input type="text" name='name' placeholder='Name'/>
                    <input type="email" name='email' placeholder='Email'/>
                    <input type="tel" name='phone_no' placeholder='Phone Number (Optional)'/>
                    <textarea name="message" placeholder='Message'/>
                    <button type="submit">Send</button>
                </form>
            </div>
        </main>
    )
}

export default Contact