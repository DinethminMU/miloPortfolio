import Milo1 from "../assets/pic1.jpeg";
import Milo2 from "../assets/pic2.jpeg";
import Milo3 from "../assets/pic3.jpeg";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { useState  } from "react";


function Hero(){
const images = [Milo1,Milo2,Milo3];
const [index,setIndex] = useState(0);

const handlePicNext = (e) => {
    if(index < images.length -1){
    setIndex(index+1);
    }
}
const handlePicBack = () => {
    
    if(index > 0){
    setIndex(index-1);
    }
}

    return(<div className="flex w-full mx-auto  justify-center bg-white gap-4 py-8">
        <div className="flex items-center gap-8">

            <SlArrowLeft onClick = {handlePicBack} className={`rounded-full my-auto size-10 hover:scale-125 duration-75 cursor-pointer ${
            index === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}/>
            <img id= "pic1" src={images[index]} alt={`pic${index+1}`} className="md:h-[500px] md:w-[500px] h-[300px] w-[300px] shadow-black rounded-2xl hover:scale-105 duration-75 cursor-pointer border-4"></img>
            <SlArrowRight onClick = {handlePicNext} className={` rounded-full my-auto size-10 hover:scale-125 duration-75 cursor-pointer ${
            index === images.length-1 ? "opacity-0 pointer-events-none" : "opacity-100"}`}/>
        </div>
    
    </div>);
}
export default Hero;