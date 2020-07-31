import Layout from '../components/Layout'

const EnglishIndex = () => (
    <Layout title="The Legal Agile">
      <div id="home" style={{backgroundColor: "rgb(140, 172, 204)", minHeight: "800px"}} className="h-screen flex z-0 pt-7 flex-col overflow-hidden">
        <div style={{height: "90%"}} className="flex">
          <div className="w-full flex flex-col items-center justify-center lg:w-1/2">
            <img src='/assets/TLALogoBlanco.webp' className="w-11/12 xs:w-auto m-4 sm:m-8 lg:m-16"></img>
            <span className="text-3xl xs:text-4xl md:text-5xl text-white font-bold">
              Agility. <br/>
              Transparency. <br/>
              Results.
            </span>
          </div>
          <div className="hidden items-center justify-end lg:flex lg:w-1/2">
            <img src='/assets/notebook.webp' className="h-full object-cover lg:px-12 xl:px-16" style={{backgroundColor: "rgb(36, 52, 84)"}}></img>
          </div>
        </div>
        <div style={{height: "10%", backgroundColor: "rgb(36, 52, 84)"}} className="w-full">

        </div>
      </div>

      <div id="about" style={{backgroundColor: "rgb(36, 52, 84)", boxShadow: "-2px 0px 10px rgba(50, 50, 50, 1)", minHeight: "800px"}} className="min-h-screen flex z-0 flex-col lg:flex-row p-8 -mt-20 overflowhidden">
        <div className="min-h-full lg:min-h-screen w-full flex items-center justify-center lg:w-1/2 p-8 pb-12">
          <div>
            <div className="bg-white w-1/3 ml-8 h-2"></div>
            <br/>
            <span className="text-white">
              The Legal Agile is a legal consultancy office for private companies and public institutions that integrates technologies in their businesses and projects.
            </span>
            <br/><br/>
            <span className="text-white">
              Our goal is to deliver agile and tailor-made legal services to address and satisfy the diverse needs of our clients.
            </span>
            <br/><br/>
            <span className="text-white">
              We work under a strict code of excellence and confidentiality, designing structures that comply with national and international legislation and attending their teams under a permanent monitoring of its implementation.
            </span>
            <br/><br/>
            <span className="text-white font-bold text-2xl">
              OUR SERVICE PROMISE
            </span>
            <br/><br/>
            <span className="text-white text-2xl">
              LEGAL COUNSEL WITH THE HIGHEST STANDARDS IN QUALITY AND DILIGENCE
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
            Founder  | The Legal Agile
          </span>
          <br/>
          <span className="text-white">
            Master of Laws, Loyola University Chicago. Lawyer, Universidad Alberto Hurtado. Diploma in Intellectual and Industrial Property Law, Pontificia Universidad Católica de Chile.
          </span>
          <br/>
          <span className="text-white">
            Experience as Head of Digital Government in the Chilean Ministry General Secretariat of the Presidency, as Counselor at CORFO's Strategic Industries Program and as Member of the Board at the Latin America and the Caribbean Electronic Government Network.
          </span>
          <br/>
          <br/>
          <span className="text-white underline">
            <a href="mailto:jcpalma@thelegalagile.com" target="_blank" className="text-white">jcpalma@thelegalagile.com</a>
            <br/>
            <a href="https://www.linkedin.com/in/juancristobalpalma/" target="_blank" className="text-white">https://www.linkedin.com/in/juancristobalpalma/</a>
          </span>
        </div>
      </div>

      <div id="services" className="bg-white min-h-full lg:h-screen flex z-0 flex-col p-4 pt-8 lg:p-8 overflowhidden" style={{boxShadow: "-2px 0px 10px rgba(50, 50, 50, 1)", minHeight: "800px"}}>
      <div className="w-full mb-8 md:mb-0 p-0 xs:p-4 md:p-8 lg:p-16">
          <span className="font-semibold text-left text-lg md:text-2xl lg:text-3xl">
            AGILE AND TAILORED <br/>
            LEGAL SERVICES
          </span>
        </div>
        <div className="h-full flex z-0 flex-col lg:flex-row">
        <div className="h-full w-ful flex flex-col items-center lg:flex lg:w-1/2 p-0 xs:p-4 md:p-8 lg:p-16">
          <img src='/assets/legalcompliance2.webp' className=""></img>
            <a href="https://f6a8b3ba-531b-490b-991f-49e67bed964d.filesusr.com/ugd/704d50_d7a810c4af1e4636b88bc8abccd776f5.pdf" target="_blank" className="w-full">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full my-8">
                <span className="text-xs xs:text-base lg:text-lg">
                  Download brochure (ES)
                </span> 
              </button>
            </a>  
            <span className="text-black">
              CORPORATE LEGAL COMPLIANCE is the group's legal area that provides personalized counsel to private companies and public institutions on corporate, corporate, commercial, intellectual property, labor compliance and the implementation of corporate criminal liability compliance models.
            </span>
          </div>
          <div className="h-full w-ful flex flex-col items-center lg:flex lg:w-1/2 p-0 xs:p-4 md:p-8 lg:p-16">
            <img src='/assets/datacompliance2.webp' style={{maxHeight: "142px"}}></img>
            <a href="https://f6a8b3ba-531b-490b-991f-49e67bed964d.filesusr.com/ugd/704d50_d7f9f643eefe430a88a5d6e20b96e0d3.pdf" target="_blank" className="w-full">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full my-8">
                <span className="text-xs xs:text-base lg:text-lg">
                  Download brochure (ES)
                </span> 
              </button>
            </a>  
            <span className="text-black">
              DATA COMPLIANCE is the associated legal office that provides personalized counsel to companies and public institutions on compliance models for privacy and the processing of personal, the regulatory aspects for cybersecurity and transparency and probity standards.
            </span>
            <a href="https://www.datacompliance.legal" target="_blank" className="w-full">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full my-8">
                <span className="text-xs xs:text-base lg:text-lg">
                  https://www.datacompliance.legal
                </span> 
              </button>
            </a>  
          </div>
        </div>
      </div>

      <div id="methodology" className="bg-white lg:h-screen flex z-0 flex-col pt-8 lg:pt-12 overflowhidden" style={{minHeight: "700px"}}>
        <div className="w-full h-12 flex items-center justify-center" style={{backgroundColor: "rgb(140, 172, 204)"}}>
        <span className="text-white text-lg md:text-2xl lg:text-3xl font-semibold">
            OUR METHODOLOGY
          </span>
        </div>
        <div className="h-full w-full flex z-0 flex-col">
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center" style={{height: "33.33%",}}>
            <div style={{backgroundColor: "rgb(36, 52, 84)", backgroundImage: "url(/assets/img1.jpg)", backgroundSize: "cover", backgroundPosition: "center", minHeight: "15vh"}}
            className="w-full lg:w-1/2 h-full"></div>
            <div className="w-full lg:w-1/2 p-6">
              <span className="text-xl">
                ANALYSIS
              </span>
              <br/>
              <br/>
              <span className="text-black">
                We study and analyze the challenges for your business. Our experience enable us to develop direct approaches for innovative and effective solutions.
              </span>  
            </div>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center" style={{height: "33.33%"}}>
            <div style={{backgroundColor: "rgb(36, 52, 84)", backgroundImage: "url(/assets/img2.jpg)", backgroundSize: "cover", backgroundPosition: "center", minHeight: "15vh"}}
            className="w-full lg:w-1/2 h-full"></div>
            <div className="w-full lg:w-1/2 p-6">
            <span className="text-xl">
              STRATEGY
            </span>
              <br/>
              <br/>
              <span className="text-black">
                We work directly with your team to develop an optimal legal strategy that overcomes your challenges in a long-term sustainable manner.
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center" style={{height: "33.34%"}}>
            <div style={{backgroundColor: "rgb(36, 52, 84)", backgroundImage: "url(/assets/img3.jpg)", backgroundSize: "cover", backgroundPosition: "center", minHeight: "15vh"}}
            className="w-full lg:w-1/2 h-full"></div>
            <div className="w-full lg:w-1/2 p-6">
            <span className="text-xl">
              EXECUTION AND MONITORING
            </span>
              <br/>
              <br/>
              <span className="text-black">
                We execute and monitor the strategy with our clients under a permanent communication with its Management or Board and always giving transparent information of our work and results.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="min-h-screen flex z-0 flex-col pt-6 lg:h-screen overflowhidden" style={{backgroundColor: "rgb(36, 52, 84)", backgroundImage: "url(/assets/keyboard.webp)", boxShadow: "-2px 0px 10px rgba(50, 50, 50, 1)"}}>
        <div className="w-full h-12 mt-16 flex items-center justify-center bg-white py-2">
          <span className="text-2xl font-semibold">
            LET´S WORK TOGETHER
          </span>
        </div>
        <div className="h-full flex z-0 flex-col lg:flex-row pb-16">
          <div className="h-full w-full flex flex-col items-center justify-center lg:w-2/5 mt-8 lg:mt-16 lg:justify-start">
            <img src='/assets/TLALogoBlanco.webp' className="w-5/6 xs:w-auto"></img>
          </div>
          <div className="h-full w-full flex flex-col items-center justify-center lg:w-3/5 p-4 lg:items-start mt-8 lg:mt-0">
            <span className="text-white">
            ADDRESS <br/>
            <a href="https://goo.gl/maps/XE3DyoWyxU7icoDUA" target="_blank" className="underline text-white">Carlos Antúnez 2025 Of. 802, Providencia</a>
            <br/>
            <br/>
            EMAIL <br/>
            <a href="mailto:info@thelegalagile.com" target="_blank" className="underline text-white">info@thelegalagile.com</a>
            <br/>
            <br/>
            LINKEDIN <br/>
            <a href="https://www.linkedin.com/in/juancristobalpalma/" target="_blank" className="underline text-white">https://www.linkedin.com/in/juancristobalpalma/</a>
            </span>
            <br/>
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

export default EnglishIndex
