import React, { ReactNode } from 'react'
// import Link from 'next/link'
import Head from 'next/head'
import { Link } from 'react-scroll'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="z-10 fixed w-full" style={{backgroundColor: "rgb(36, 52, 84)"}}>
      <nav className="text-white flex items-center justify-start md:text-xl">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        // offset={50}
        duration={800}
        className="mx-1 md:mx-2 lg:mx-4 cursor-pointer"
      >
        Inicio
      </Link>
      |
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        // offset={50}
        duration={800}
        className="mx-1 md:mx-2 lg:mx-4 cursor-pointer"
      >
        Nosotros
      </Link>
      |
      <Link
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        // offset={50}
        duration={800}
        className="mx-1 md:mx-2 lg:mx-4 cursor-pointer"
      >
        Servicios
      </Link>
      |
      <Link
        activeClass="active"
        to="methodology"
        spy={true}
        smooth={true}
        // offset={50}
        duration={800}
        className="mx-1 md:mx-2 lg:mx-4 cursor-pointer"
      >
        Metodología
      </Link>
      |
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        // offset={50}
        duration={800}
        className="mx-1 md:mx-2 lg:mx-4 cursor-pointer"
      >
        Contáctanos
      </Link>
      </nav>
    </header>
    {children}
    {/* <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer> */}
  </div>
)

export default Layout
