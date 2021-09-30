
import Head from 'next/head'
export default function Home() {
  return (
      <body>
        <nav className="flex justify-center">
          <div data-aos="zoom-y-out" className="navbar static mb-2 shadow-2xl bg-base-100 text-neutral-content rounded-box fixed top-5 z-50">
            <div className="flex-1">
              <div className="items-stretch hidden lg:flex">
                <a className="btn btn-ghost btn-sm rounded-btn" href="#home">
                        Home
                      </a> 
                <a className="btn btn-ghost btn-sm rounded-btn" href="#about">
                        About
                      </a> 
                <a className="btn btn-ghost btn-sm rounded-btn"href="#projects">
                        Projects
                      </a> 
                <a className="btn btn-ghost btn-sm rounded-btn"href="#contact">
                        Contact
                      </a>
              </div>
            </div> 
            <div className="flex-none">
              <a href="https://github.com/imedra" target="_blank" rel="noopener noreferrer" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -0.6 24 26" className="inline-block w-6 h-6 stroke-current">              
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>            
                </svg>
              </a>
            </div> 
            <div className="flex-none">
                <div className="dropdown dropdown-hover">
                <div className="btn btn-square btn-ghost lg:hidden">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">           
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> 
                </svg>       
                </div>                
               <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a>Home</a>
                  </li> 
                  <li>
                    <a>Portfolio</a>
                  </li> 
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
                </div>
            </div>
          </div>
        </nav>
        <div id="home" className="hero relative min-h-screen bg-base-200">
          <svg data-aos="zoom-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230" className="absolute bottom-0">
            <path fill="#f3f4f5" fillOpacity="1" d="M0,32L60,74.7C120,117,240,203,360,202.7C480,203,600,117,720,106.7C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
          <svg data-aos="zoom-out" data-aos-delay="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
            <path fill="#f3f4f5" fillOpacity="0.1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          <svg data-aos="zoom-out" data-aos-delay="800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280" className="absolute bottom-0">
            <path fill="#f3f4f5" fillOpacity="0.2" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,101.3C672,128,768,224,864,250.7C960,277,1056,235,1152,197.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <div className="hero-content z-40">
            <div className="flex-col hero-content lg:flex-row">
              <img data-aos="fade-right" data-aos-delay="300" src="https://media.discordapp.net/attachments/789282395949367326/883105623414304799/waving-hand-emoji.png" className="object-contain h-32 md:h-64 mb-5 max-w-sm rounded-lg"></img>
            <div>
             <div data-aos="fade-left" data-aos-delay="450">
              <h2 className="mb-0 ml-1 text-4xl font-light">
                Hi! My <span className="font-medium">name</span> is
              </h2> 
              <h1 className="mb-3 font-bold text-8xl text-transparent bg-clip-text bg-gradient-to-bl from-blue-400 to-red-400 via-purple-400 animate-gradient-x">
                Marc
              </h1> 
              <h3 className="mb-5 ml-1 text-3xl font-extralight">
                Freelance <span className="font-medium">Developer</span>
              </h3> 
              </div>
            </div>
            </div>
          </div>
        </div>
        <section id="about" className="hero relative bg-gray-100 h-auto">
          <div data-aos="fade-right" data-aos-delay="100" className="hero-content flex-col lg:flex-row-reverse z-40">
            <img src="https://media.discordapp.net/attachments/789282395949367326/883176205602394112/PHO000000XoZec-11100000010100.png" className="rounded-full shadow-2xl"></img>
          <div data-aos="fade-left" data-aos-delay="200" className="text-base-300 text-center md:text-left">
            <h1 className="mb-5 text-5xl font-light">
              About <span className="font-medium">Me</span>
            </h1> 
            <p className="mb-5 text-lg md:pr-24">
            My name is <span className="font-medium">Marc Bernardino</span>. I am a freelance programmer (with a little bit of UX/graphic design experience). I currently work on various projects from time to time ranging from Web development to C# applications in order to further my knowledge on Computer Science. I also open-source a majority of my projects so anyone can learn and use my work as a framework. I hope you enjoy my work!
            </p> 
          </div>
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 90 1440 144" className="relative top-0">
           <path fill="#f3f4f5" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,170.7C672,171,768,181,864,192C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        <section id="projects"  className="hero relative bg-grey-700 h-auto pb-48">
        <svg data-aos="zoom-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" className="absolute bottom-0">
           <path fill="#2a2e37" fillOpacity="1" d="M0,96L80,96C160,96,320,96,480,112C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
          <div className="hero-content flex-col">          
            <h1 data-aos="zoom-out" className="mt-5 mb-8 text-5xl font-medium text-center">
              Released Projects
            </h1>    
          <div className="lg:flex flex-row w-full lg:space-x-4">
          <div data-aos="fade-right" data-aos-delay="300" className="card lg:card-side bordered">
          <div className="card-body bg-neutral">
            <h2 className="card-title">notmarc.me
          <div className="badge badge-success mx-2">NEW</div>
          <div className="badge badge-info mx-2">Open-source</div>
            </h2> 
          <p>Hey, you&apos;re on this site! This is my personal website fully self-developed using Node.js, Tailwind, and DaisyUI. Feel free to use it as a template for your own websites.</p> 
          <div className="card-actions">
            <a href="http://shrtn.ninja" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">View Source Code</a>            
          </div>
          </div>
          </div>
          <div data-aos="fade-right"className="card lg:card-side bordered">
          <div className="card-body bg-neutral">
            <h2 className="card-title">Headphones
          <div className="badge badge-success mx-2">NEW</div>
          <div className="badge badge-error mx-2">Closed-source</div>
            </h2> 
          <p>A free-to-use (yet highly expirimental!) Discord Music Bot! Supports YouTube search and URL finding. RIP Rhythm, Groovy and Hydra (kinda), you will be missed!</p> 
          <div className="card-actions">
            <a href="https://discord.com/api/oauth2/authorize?client_id=887867522588753980&permissions=515462425664&scope=bot" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Invite to Discord</a> 
          </div>
          </div>
          </div>
          <div data-aos="fade-left" className="card lg:card-side bordered">
          <div className="card-body bg-neutral">
            <h2 className="card-title">ChiVaxTrack
            <div className="badge badge-warning mx-2">Depreciated</div>
            <div className="badge badge-info mx-2">Open-source</div>
            </h2> 
          <p>An open source website that tracks ongoing vaccinations for the City of Chicago. Data is derived from the City of Chicago and updates in real time.</p> 
          <div className="card-actions">
            <a href="https://chivaxtrack.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Live Demo</a> 
            <a href="https://github.com/imedra/ChiVaxTrack" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">View Source Code</a>
          </div>
          </div> 
          </div>
          <div data-aos="fade-left" data-aos-delay="300" className="card lg:card-side bordered">
          <div className="card-body bg-neutral">
            <h2 className="card-title">shrtn.ninja
            <div className="badge badge-warning mx-2">Depreciated</div>
            <div className="badge badge-info mx-2">Open-source</div>
            </h2> 
          <p>A simple URL (and open source) link shortener utilizing MongoDB. Supports all links and will shorten them down to something much shorter.</p> 
          <div className="card-actions">
            <a href="http://shrtn.ninja" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Live Demo</a> 
            <a href="https://github.com/imedra/shrtn.ninja" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">View Source Code</a>
          </div>
          </div>
          </div>
          </div>
          </div>
        </section>
        <section id="contact">
          <footer className="p-10 footer bg-neutral text-neutral-content">
            <div>
            </div>
            <h1 className="mb-5 text-5xl font-light justify-center">
              Contact <span className="font-medium">Me</span>
            </h1> 
            <div>
              <span className="footer-title">Socials</span> 
              <a href="https://github.com/imedra" target="_blank" rel="noopener noreferrer" className="link link-hover">GitHub</a> 
              <a href="https://twitter.com/notMarc_" target="_blank" rel="noopener noreferrer" className="link link-hover">Twitter</a> 
              <a href="https://www.linkedin.com/in/marc-reniel-bernardino-50ab8a220/" target="_blank" rel="noopener noreferrer" className="link link-hover">LinkedIn</a> 
            </div> 
           <div>
            <span className="footer-title">Email</span> 
            <a href="mailto:marcbernardino2005@gmail.com"className="link link-hover">marcbernardino2005@gmail.com</a> 
          </div>
      </footer>
      </section>
      </body>
  )
}
