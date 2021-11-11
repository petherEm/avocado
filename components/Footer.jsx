import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardL}>
                <h1 className={styles.title}>AV0C4D0 CREATIVES</h1>
                <h1 className={styles.linkTitle}>
                    <a href="/contact">
                        <span className={styles.linkText}>WORK WITH US</span>
                        <Image 
                            src="/img/link.png" 
                            alt="" 
                            width="40px"
                            height="40px"
                        />
                    </a>
                </h1>
            </div>
            <div className={styles.cardS}>
                <div className={styles.CardItem}>
                    12 ADAM STREET NY <br /> USA
                </div>
                <div className={styles.CardItem}>
                    FOLLOW US: <br /> _FB _IN _BE _TW
                </div>
                
            </div>
            <div className={styles.cardS}>
                <div className={styles.CardItem}>
                    CONTACT@LAMA.DEV <br /> 213 1243 123 12
                </div>
                <div className={styles.CardItem}>
                    @ 2022 LAMA INTERACTIVE <br /> ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    )
}

export default Footer
