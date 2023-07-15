import Image from 'next/image'
import styles from './saleCard.module.css'
import Button from '@/components/forms/button/button'

export default function SaleCard({ image, discount, fullPrice, descontPrice, onAdd }) { 

    return(
        <div className={styles.salecard}> 
            <Image src={`/products/${image}`} alt={`Produto ${image}`} height={300} width={250}/>
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta Exclusiva</h3>
                <div className={styles.plicecard}>
                    <div className={styles.percent}>-{discount}</div>
                    <div className={styles.price}>
                        <p className={styles.fullprice}>{fullPrice}</p>
                        <h4 className={styles.discountprice}>{descontPrice}</h4>
                    </div>
                </div>
                <Button fullWidth onClick={onAdd}>Adicionar ao carrinho</Button>
            </div>     
        </div>
    )
}


SaleCard.defaultProps = {
    
    image:'league-of-legends.jpg',
    discount:'20%',
    fullPrice:'199,90',
    descontPrice: '120,00',
    descontValue: '10%'  
}