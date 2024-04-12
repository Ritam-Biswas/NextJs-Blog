import Image from 'next/image'

import styles from "./page.module.css";
import brands from '@/../public/brands.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inner_container}> 
          <h1>Creative<br/>Thoughts<br/>Agency</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, veritatis vitae laborum, animi minus natus atque consequuntur tempora qui necessitatibus veniam molestias ullam ipsam, incidunt omnis recusandae at. Maiores, aliquid.
          </h4>
          <div className={styles.btn_container}>
            <button><a>Learn More</a></button>
            <button><a>Contact Us</a></button>
          </div>
          <Image src={brands}  height={60} alt='brands' className={styles.brands_img}/>
        </div>
        <div className={styles.inner_container}>
          <Image src='/hero.gif' height={500} width={500} alt='idea'/>
        </div>
      </div>
    </main>
  );
}
