import Layout from '../components/Layout'

const IndexPage = () => (
    <Layout title="The Legal Agile">
      <div id="home" style={{backgroundColor: "rgb(140, 172, 204)", minHeight: "800px"}} className="h-screen flex z-0 pt-7 flex-col">
        <div style={{height: "90%"}} className="flex">
          <div className="w-full flex flex-col items-center justify-center lg:w-1/2">
            <img src='/assets/TLALogoBlanco.webp' className="mr-8 mb-8 md:mr-12 md:mb-12 lg:mr-16 lg:mb-16"></img>
            <span className="text-5xl text-white font-bold">
              Agilidad. <br/>
              Transparencia. <br/>
              Resultados.
            </span>
          </div>
          <div className="hidden items-center justify-end lg:flex lg:w-1/2">
            <img src='/assets/notebook.webp' className="h-full object-cover lg:px-12 xl:px-16" style={{backgroundColor: "rgb(36, 52, 84)"}}></img>
          </div>
        </div>
        <div style={{height: "10%", backgroundColor: "rgb(36, 52, 84)"}} className="w-full">

        </div>
      </div>

      <div id="about" style={{backgroundColor: "rgb(36, 52, 84)", boxShadow: "-2px 0px 10px rgba(50, 50, 50, 1)", minHeight: "800px"}} className="min-h-screen flex z-0 flex-col lg:flex-row p-8 -mt-20">
        <div className="min-h-full lg:min-h-screen w-full flex items-center justify-center lg:w-1/2 p-8 pb-12">
          <div>
            <div className="bg-white w-1/3 ml-8 h-2"></div>
            <br/>
            <span className="text-white">
              The Legal Agile es una consultora legal que entrega asesoría personalizada a empresas e instituciones públicas que incorporan tecnologías en el desarrollo de sus negocios y proyectos.
            </span>
            <br/><br/>
            <span className="text-white">
              Nuestro objetivo es entregar servicios ágiles y a medida para abordar y satisfacer las diversas necesidades de nuestros clientes.
            </span>
            <br/><br/>
            <span className="text-white">
              Trabajamos bajo un estricto código de excelencia y confidencialidad, diseñando estructuras que cumplen con la legislación nacional e internacional y acompañando sus equipos para la supervigilancia permanente de su implementación.
            </span>
            <br/><br/>
            <span className="text-white font-bold text-2xl">
              NUESTRA PROMESA DE SERVICIOS
            </span>
            <br/><br/>
            <span className="text-white text-2xl">
              ASESORÍA CON LOS MÁS ALTOS ESTÁNDARES EN CALIDAD Y DEDICACIÓN
            </span>
          </div>
        </div>
        <div className="min-h-full lg:min-h-screen w-ful flex flex-col items-center justify-center lg:flex lg:w-1/2 p-4 pt-6 lg:p-8 text-center">
          <img src='/assets/profile2.webp' className=""></img>
          <span className="text-white font-semibold text-xl">
          JUAN CRISTÓBAL PALMA ORELLANA
          </span>
          {/* <br/> */}
          <span className="text-white font-semibold text-lg">
          Fundador | The Legal Agile
          </span>
          <br/>
          <span className="text-white">
          Master en Derecho por Loyola University Chicago. Abogado de la Universidad Alberto Hurtado. Diplomado en Propiedad Intelectual e Industrial por la Pontificia Universidad Católica de Chile.
          </span>
          <br/>
          <span className="text-white">
          Fue Jefe de Gobierno Digital en el Ministerio Secretaría General de la Presidencia, Consejero en el Programa de Industrias Estratégicas de CORFO y Directivo de la Red de Gobierno Electrónico de América Latina y el Caribe.
          </span>
          <br/>
          <br/>
          <span className="text-white underline">
          <a href="mailto:jcpalma@thelegalagile.com" target="_blank">jcpalma@thelegalagile.com</a>
          </span>
        </div>
      </div>

      <div id="services" className="bg-white min-h-full lg:h-screen flex z-0 flex-col p-4 pt-6 lg:p-8 lg:pt-6" style={{boxShadow: "-2px 0px 10px rgba(50, 50, 50, 1)", minHeight: "800px"}}>
        <div className="w-full pt-4 text-2xl">
          <span className="font-semibold">
            SERVICIOS
            ÁGILES Y A MEDIDA
          </span>
        </div>
        <div className="h-full flex z-0 flex-col lg:flex-row">
          <div className="h-full w-ful mt-8 lg:mt-20 flex flex-col items-center lg:flex lg:w-1/2 p-8 lg:p-16">
          <img src='/assets/legalcompliance2.webp' className=""></img>
            <a href="https://f6a8b3ba-531b-490b-991f-49e67bed964d.filesusr.com/ugd/704d50_d7a810c4af1e4636b88bc8abccd776f5.pdf" target="_blank" className="w-full">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full my-8">
                Descargar brochure
              </button>
            </a>  
            <span className="text-black">
              CORPORATE LEGAL COMPLIANCE  es la consultora legal del grupo que entrega asesoría personalizada a empresas e instituciones públicas en compliance corporativo, societario, comercial, propiedad intelectual, laboral e implementación de modelos de cumplimiento de prevención del delito.
            </span>
          </div>
          <div className="h-full w-ful lg:mt-20 flex flex-col items-center lg:flex lg:w-1/2 p-8 lg:p-16">
            <img src='/assets/datacompliance2.webp' style={{maxHeight: "142px"}}></img>
            <a href="https://f6a8b3ba-531b-490b-991f-49e67bed964d.filesusr.com/ugd/704d50_d7f9f643eefe430a88a5d6e20b96e0d3.pdf" target="_blank" className="w-full">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full my-8">
                Descargar brochure
              </button>
            </a>  
            <span className="text-black">
              DATA COMPLIANCE es la consultora legal asociada que entrega asesoría personalizada a empresas e instituciones públicas en modelos de cumplimiento de procesamiento de datos personales y privacidad, aspectos normativos de la ciberseguridad y estándares de probidad y transparencia.
            </span>
            <a href="https://www.datacompliance.legal" target="_blank" className="w-full">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full my-8">
                https://www.datacompliance.legal
              </button>
            </a>  
          </div>
        </div>
      </div>

      <div id="methodology" className="bg-white lg:h-screen flex z-0 flex-col pt-6" style={{minHeight: "600px"}}>
        <div className="w-full h-10 flex items-center justify-center" style={{backgroundColor: "rgb(140, 172, 204)"}}>
          <span className="text-white text-2xl font-semibold">
            NUESTRA METODOLOGÍA
          </span>
        </div>
        <div className="h-full w-full flex z-0 flex-col">
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center" style={{height: "33.33%",}}>
            <div style={{backgroundColor: "rgb(36, 52, 84)", backgroundImage: "url(/assets/img1.jpg)", backgroundSize: "cover", backgroundPosition: "center", minHeight: "15vh"}}
            className="w-full lg:w-1/2 h-full"></div>
            <div className="w-full lg:w-1/2 p-6">
              <span className="text-xl">
                ANÁLISIS
              </span>
              
              <br/>
              <br/>
              <span className="text-black">
                Estudiamos y analizamos los desafíos para su negocio. Nuestra experiencia nos permite elaborar aproximaciones directas a soluciones innovadoras y efectivas.
              </span>  
            </div>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center" style={{height: "33.33%"}}>
            <div style={{backgroundColor: "rgb(36, 52, 84)", backgroundImage: "url(/assets/img2.jpg)", backgroundSize: "cover", backgroundPosition: "center", minHeight: "15vh"}}
            className="w-full lg:w-1/2 h-full"></div>
            <div className="w-full lg:w-1/2 p-6">
            <span className="text-xl">
              ESTRATEGIA
            </span>
              <br/>
              <br/>
              <span className="text-black">
                Trabajamos directamente con su equipo para desarrollar una estrategia jurídica óptima que supere desafíos de manera sostenible a largo plazo.
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center" style={{height: "33.34%"}}>
            <div style={{backgroundColor: "rgb(36, 52, 84)", backgroundImage: "url(/assets/img3.jpg)", backgroundSize: "cover", backgroundPosition: "center", minHeight: "15vh"}}
            className="w-full lg:w-1/2 h-full"></div>
            <div className="w-full lg:w-1/2 p-6">
            <span className="text-xl">
              EJECUCIÓN Y SEGUIMIENTO
            </span>
              <br/>
              <br/>
              <span className="text-black">
                Ejecutamos y monitoreamos permanentemente la estrategia con nuestros clientes a través de una comunicación fluida con su Directorio o Gerencia y siempre rindiendo cuenta de nuestro trabajo y resultados de manera transparente.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="min-h-screen flex z-0 flex-col pt-6 lg:h-screen" style={{backgroundColor: "rgb(36, 52, 84)", backgroundImage: "url(/assets/keyboard.webp)", boxShadow: "-2px 0px 10px rgba(50, 50, 50, 1)", minHeight: "800px"}}>
        <div className="w-full h-8 mt-16 flex items-center justify-center bg-white">
          <span className="text-2xl font-semibold">
            TRABAJEMOS JUNTOS
          </span>
        </div>
        <div className="h-full flex z-0 flex-col lg:flex-row pb-16">
          <div className="h-full w-full flex flex-col items-center justify-center lg:w-2/5 mt-8 lg:mt-16 lg:justify-start">
            <img src='/assets/TLALogoBlanco.webp' className=""></img>
          </div>
          <div className="h-full w-full flex flex-col items-center justify-center lg:w-3/5 p-4 lg:items-start mt-8 lg:mt-0">
            <span className="text-white">
            DIRECCIÓN <br/>
            <a href="https://goo.gl/maps/XE3DyoWyxU7icoDUA" target="_blank" className="underline">Carlos Antúnez 2025 Of. 802, Providencia</a>
            <br/>
            <br/>
            CORREO ELECTRÓNICO <br/>
            <a href="mailto:info@thelegalagile.com" target="_blank" className="underline">info@thelegalagile.com</a>
            </span>
            <br/>
            <br/>
            <br/>
            <br/>
            <span className="text-white">
              The Legal Agile | © 2020
            </span>
          </div>
        </div>
      </div>
  </Layout>
)

export default IndexPage
