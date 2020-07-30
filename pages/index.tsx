import Layout from '../components/Layout'
import SpanishIndex from './es'
import EnglishIndex from './en'
import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll'
import { Menu, Dropdown } from 'antd';

const IndexPage = () => {

  // const [english, setEnglish] = useState(false);
  const [english, setEnglish] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    updateLang(lang === "en")
  });

  const updateLang = (isEnglish: boolean) => {
    localStorage.setItem("lang", isEnglish ? "en" : "es");  
    setEnglish(isEnglish);
  }

  const handleMenuClick = () => {
    setVisible(false);
  };

  const handleVisibleChange = (flag: boolean) => {
    setVisible(flag);
  };

  const changeLang = () => {
    console.log("changeLang")
    updateLang(!english)
    setVisible(false)
  }

  const menu = (
    <Menu>
        <Menu.Item>
          <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              // offset={50}
              duration={800}
            >
              <div className="w-full" onClick={handleMenuClick}>
                <span>
                  {english ? "Home" : "Inicio"}
                </span>
              </div>
            </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              // offset={50}
              duration={800}
              className="mx-1 md:mx-2 lg:mx-4 cursor-pointer"
            >
              <div className="w-full" onClick={handleMenuClick}>
                <span>
                  {english ? "About us" : "Nosotros"}
                </span> 
              </div>
            </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              // offset={50}
              duration={800}
              className="mx-1 md:mx-2 lg:mx-4 cursor-pointer"
            >
              <div className="w-full" onClick={handleMenuClick}>
                <span>
                  {english ? "Services" : "Servicios"}
                </span>
              </div>
            </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
              activeClass="active"
              to="methodology"
              spy={true}
              smooth={true}
              offset={4}
              duration={800}
              className="mx-1 md:mx-2 lg:mx-4 cursor-pointer"
            >
              <div className="w-full" onClick={handleMenuClick}>
                <span>
                  {english ? "Methodology" : "Metodología"}
                </span>
              </div>
            </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              // offset={50}
              duration={800}
              className="mx-1 md:mx-2 lg:mx-4 cursor-pointer"
            >
              <div className="w-full" onClick={handleMenuClick}>
                <span>
                  {english ? "Contact us" : "Contáctanos"}
                </span>
              </div>
            </Link>
        </Menu.Item>
        <Menu.Item>
          <div className="w-full" onClick={changeLang}>
            <span className="mx-1 md:mx-2 lg:mx-4 -mb-1 cursor-pointer">{english ? "ES" : "EN"}</span>
          </div>
          
        </Menu.Item>
    </Menu>
  );

  return (
      <Layout title="The Legal Agile">
      <div className="z-10 fixed overflow-hidden w-full" style={{backgroundColor: "rgb(36, 52, 84)"}}>
        <nav className="text-white flex items-center justify-start p-1 text-sm sm:text-base md:text-xl lg:p-2 hidden md:block">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            // offset={50}
            duration={800}
            className="mx-1 md:mx-2 lg:mx-4 cursor-pointer text-white"
          >
            <span>
              {english ? "Home" : "Inicio"}
            </span>
          </Link>
          |
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            // offset={50}
            duration={800}
            className="mx-1 md:mx-2 lg:mx-4 cursor-pointer text-white"
          >
            <span>
              {english ? "About us" : "Nosotros"}
            </span>  
          </Link>
          |
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            // offset={50}
            duration={800}
            className="mx-1 md:mx-2 lg:mx-4 cursor-pointer text-white"
          >
            <span>
              {english ? "Services" : "Servicios"}
            </span>
          </Link>
          |
          <Link
            activeClass="active"
            to="methodology"
            spy={true}
            smooth={true}
            duration={800}
            className="mx-1 md:mx-2 lg:mx-4 cursor-pointer text-white"
          >
            <span>
              {english ? "Methodology" : "Metodología"}
            </span>
          </Link>
          |
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            // offset={50}
            duration={800}
            className="mx-1 md:mx-2 lg:mx-4 cursor-pointer text-white"
          >
            <span>
              {english ? "Contact us" : "Contáctanos"}
            </span>
          </Link>
          |
          <span className="mx-1 md:mx-2 lg:mx-4 -mb-1 cursor-pointer" onClick={() => updateLang(!english)}>{english ? "ES" : "EN"}</span>
      </nav>
      <div className="block md:hidden h-7">
        <Dropdown overlay={menu} trigger={['click']} onVisibleChange={handleVisibleChange} visible={visible}>
          <a className="ant-dropdown-link p-2 mx-1 md:mx-2 lg:mx-4 cursor-pointer text-white overflow-hidden text-lg" onClick={e => e.preventDefault()}>
            <span className="text-white">
              {english ? "Menu" : "Menú"}
            </span> 
          </a>
        </Dropdown>
      </div>
    </div>

    {english ? <EnglishIndex/> : <SpanishIndex/> }

      </Layout>
  )

}

export default IndexPage
