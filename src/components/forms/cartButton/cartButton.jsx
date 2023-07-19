import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { cartState } from '@/atoms/cart'

import { BsCart4 } from 'react-icons/bs'

import styles from './cartButton.module.css'

import CartMenu from '@/components/cartMenu/cartMenu'


export default function CartButton(){
    const cart = useRecoilValue(cartState)

    const [open, setOpen] = useState(false)

    return(
        <div className={styles.CartButton} onClick={() => {setOpen(!open)}}>
            <BsCart4 className={styles.icon} size={40} />
        <div className={styles.quantity}>{cart.length}</div>
        {open && <CartMenu /> }
        </div>
    )
}