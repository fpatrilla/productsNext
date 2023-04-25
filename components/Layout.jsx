import React from 'react'
import Head from 'next/head'
import styles from "../src/styles/layout.module.css"
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../src/styles/utils.module.css'

const name = "Fede App"


export default function Layout({children, title, description, home}) {
  console.log(home);
  return (
    
    <div className={styles.container}>
    <Head>
    <link rel='icon' href="/favicon.ico"></link>
        <title>{title}</title>
        <meta name='descpription' conten={description}></meta>
    </Head>  
    <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/patrilla.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/patrilla.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
           
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>


    <nav><Link href="/">
            Inicio |
          </Link>
          <Link href="/products">
            Products | 
          </Link>
          <Link href="/ordenes">
            ordenes
          </Link>
          </nav>
    <main>{children}</main>
    <footer>
    {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </footer>  
    
    </div>
  )
}

Layout.defaultProps = {
  title:"My App de administracion",
  description:"Admin app",
}
