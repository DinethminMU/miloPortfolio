import Particles from "./Particles";
function Contact(){
    return(<div className="relative w-full overflow-x-hidden py-4">

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

        
        <div id = "contact" className="text-white flex flex-col justify-between max-w-full md:max-w-[1240px] mx-auto font-serif pt-8">
            
        <h2 className="text-white text-3xl mb-8 pl-4 md:pl-0">Contact Meow!!!</h2>
        

        <form className="flex flex-col items-start max-w-[500px] gap-y-4 bg-black">
            <div className="flex justify-between w-full">
                <label className="pl-4 md:pl-0">Name: </label> 
                <input type="text" placeholder="Your Name" className="border mx-4 pb-4 pr-4 pl-4"></input>
            </div>
            <div className="flex justify-between  w-full">
                <label className="pl-4 md:pl-0">Email: </label> 
                <input type="email" placeholder="Your Email" className="border mx-4 pb-4 pr-4 pl-4"></input>
            </div>
            
            <div className="flex justify-between  w-full">
                <label className="pl-4 md:pl-0">Message: </label> 
                <textarea placeholder="Your Message" className="border mx-4 pb-4 pr-4 pl-4 "></textarea>
            </div>
            
            <button type="submit" className="border mt-4 mb-4 p-4 hover:scale-120 duration-75 hover:bg-white/30 rounded-xl hover:cursor-pointer ml-4 md:ml-0">Send Message</button>
            
        </form>
        <p class="text-center mt-4 mb-8">
        © 2025 Milo the Cat. All rights reserved.
        </p>
        </div>


    </div>);
}
export default Contact;