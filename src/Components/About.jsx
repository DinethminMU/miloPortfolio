import Milo from "../assets/milo.jpeg";
import { ReactTyped } from "react-typed";
import Particles from './Particles.jsx';

function About(){

    return(
        <>
        <div className="relative w-full h-full overflow-x-hidden">
        {/* Background Particles */}
        <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

        
        <div id = "about" className= "text-white flex-col px-4 mx-auto py-7 max-w-full md:max-w-[1240px] justify-between">
            
            <div className="text-center flex flex-col items-center" >
                
                <img src={Milo} alt="Photo" className="w-[200px] h-[200px] rounded-full border-4 hover:scale-110 duration-75 cursor-pointer"></img>
                <div className="flex items-center mb-4 mt-4 bg-black ">
                    <h1  className="md:text-5xl text-4xl font-serif py-4">About</h1>
                <ReactTyped className="md:text-5xl md:px-4 text-4xl font-serif py-4 px-3" strings={["Meow","Meow","Meow"]} typeSpeed={100} backSpeed={50} loop></ReactTyped>
                </div>
                
                <p className="text-left font-serif bg-black">Hello, my name is Milo, and I’m a cat with a personality as unique as my whiskers. My days are filled with a balance of exploration, naps, and the occasional chase after invisible prey. I take pride in my sleek appearance and graceful movements, but I’m equally known for my gentle purrs that bring comfort to those around me. While I value independence, I enjoy companionship and will happily share my warmth when you need it most. Whether I’m basking in the sunlight or watching the world with curious eyes, I live each day with elegance and quiet confidence.</p>
               
            </div>
        </div>
        </div>
        </>
    );
}
export default About;