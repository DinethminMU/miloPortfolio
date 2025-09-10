
import Particles from './Particles.jsx';
function NavBar(){
    return(
       
        
        <div id= "home" className="flex justify-between px-4 max-w-full md:max-w-[1240px] mx-auto text-white items-center my-4 font-serif overflow-x-hidden">
            

             
 
            <h1  className="text-3xl md:text-5xl text-amber-600 font-bold italic" style={{fontFamily: "cursive"}}>MILO</h1>
            
            <ul className="flex w-[200px] justify-end gap-2 md:gap-0">
                <a href= "#home"><li  className="md:p-4 p-1 hover:scale-120 duration-75 hover:bg-white/30 rounded-xl hover:cursor-pointer">Home</li></a>
                <a href= "#about"><li  className="md:p-4 p-1 hover:scale-120 duration-75 hover:bg-white/30 rounded-xl hover:cursor-pointer">About</li></a>
                <a href= "#projects"><li  className="md:p-4 p-1 hover:scale-120 duration-75 hover:bg-white/30 rounded-xl hover:cursor-pointer">Projects</li></a>
                <a href= "#contact"><li  className="md:p-4 p-1 hover:scale-120 duration-75 hover:bg-white/30 rounded-xl hover:cursor-pointer">Contact</li></a>
            </ul>
           

                
            

              
        </div>
        
    );
}
export default NavBar;