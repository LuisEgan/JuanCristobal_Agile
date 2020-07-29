import Layout from '../components/Layout'
import SpanishIndex from './es'
import EnglishIndex from './en'
import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll'

const IndexPage = () => {

  // const [english, setEnglish] = useState(false);
  const [english, setEnglish] = useState(false)

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    updateLang(lang === "en")
  });

  const updateLang = (isEnglish: boolean) => {
    localStorage.setItem("lang", isEnglish ? "en" : "es");  
    setEnglish(isEnglish);
  }

  return (
      <Layout title="The Legal Agile">
      <div className="z-10 fixed overflow-x-hidden w-full" style={{backgroundColor: "rgb(36, 52, 84)"}}>
      <nav className="text-white flex items-center justify-start p-1 text-sm sm:text-base md:text-xl lg:p-2">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        // offset={50}
        duration={800}
        className="mx-1 md:mx-2 lg:mx-4 cursor-pointer"
      >
        {english ? "Home" : "Inicio"}
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
        {english ? "About us" : "Nosotros"}
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
        {english ? "Services" : "Servicios"}
      </Link>
      |
      <Link
        activeClass="active"
        to="methodology"
        spy={true}
        smooth={true}
        offset={2}
        duration={800}
        className="mx-1 md:mx-2 lg:mx-4 cursor-pointer"
      >
        {english ? "Methodology" : "Metodología"}
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
        {english ? "Contact us" : "Contáctanos"}
      </Link>
      |
    <span className="mx-1 md:mx-2 lg:mx-4 -mb-1 cursor-pointer" onClick={() => updateLang(!english)}>{english ? "ES" : "EN"}</span>
      </nav>
    </div>

    {english ? <EnglishIndex/> : <SpanishIndex/> }

      </Layout>
  )

}

export default IndexPage
