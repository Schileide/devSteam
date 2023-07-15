import styles from './cartOption.module.css'
import Image
 from 'next/image'
export default function CartOption() {
    return(
        <div className={styles.option} >
            <Image src={`/products/league-of-legends.jpg` } alt="" width={62} height={74}/>
            <div className={styles.info}>
                <h3 className={styles.title}>League of Legends</h3>
                <h3 className={styles.price}>99,90</h3>
                <p className={styles.remove}>Remover</p>
            </div>
        </div>
    )
}