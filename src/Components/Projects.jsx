function Projects(){
    return(
        <>
        <div id= "projects" className="flex flex-col items-center  bg-white hover:cursor-default overflow-x-hidden">
        <h1 className=" text-black md:text-5xl text-4xl mb-4 pt-8 font-serif">Projects</h1><br/>
        <div className="text-black flex justify-between max-w-full md:max-w-[1240px] mx-auto mt-4 gap-x-2 gap-y-20 flex-wrap ">
        
        <div className="font-serif border rounded-md p-4 lg:w-1/4 md:w-1/2 bg-white/20 backdrop-blur-md border-white/30 shadow-lg hover:scale-105 duration-75 hover:shadow-black cursor-pointer">
            <h1 className="text-2xl text-center">Advanced Nap Scheduling System</h1><br/>
            <p>I created a dynamic nap algorithm that adapts to household activity levels. It factors in noise, human presence, and food availability to schedule naps at ideal times. Implementation of this system improved alertness during play and observation periods by over 50%.</p>
        </div>

        <div className="font-serif border rounded-md p-4 lg:w-1/4 md:w-1/2 bg-white/20 backdrop-blur-md border-white/30 shadow-lg hover:scale-105 duration-75 hover:shadow-black cursor-pointer">
            <h1 className="text-2xl text-center">Sunbeam Optimization</h1><br/>
            <p>I conducted an extensive study on sunlight patterns throughout the home. By mapping the intensity, angle, and duration of sunbeams in each room, I’ve developed an optimal lounging schedule that maximizes warmth and comfort. This project increased daily nap efficiency and reduced energy expenditure, resulting in peak relaxation levels.</p>

        </div>

        <div className="font-serif border rounded-md p-4 lg:w-1/4 sm:w-1/2 bg-white/20 backdrop-blur-md border-white/30 shadow-lg hover:scale-105 duration-75 hover:shadow-black cursor-pointer">
            <h1 className="text-2xl text-center">Stealth Operations and Reconnaissance</h1><br/>
            <p>I executed multiple high-precision stealth missions, including retrieving socks, silently exploring closets, and monitoring pantry activity. Using advanced crouch-and-pounce techniques, I successfully remained undetected while gathering critical information for strategic lounging and play planning.</p>

        </div>

        <div className="font-serif border rounded-md p-4 lg:w-1/4 sm:w-1/2 bg-white/20 backdrop-blur-md border-white/30 shadow-lg hover:scale-105 duration-75 hover:shadow-black mb-16 cursor-pointer">
            <h1 className="text-2xl text-center">Social Engagement Optimization</h1><br/>
            <p>I designed a human interaction framework that maximizes affection and treats. By analyzing patterns in petting behavior, vocal responses, and proximity, I determined the most effective purr timings, head nudges, and gaze techniques. Result: increased human engagement by 80% with minimal effort.</p>

        </div>
        </div>
        </div>
        </>
    );

}
export default Projects;