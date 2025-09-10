import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { useState  } from "react";


function Hero(){
const images = ["/pic1.jpeg","/pic2.jpeg","/pic3.jpeg"];
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

    return(<div className="flex w-full mx-auto  justify-center bg-white gap-4 py-8 overflow-x-hidden">
        <div className="flex items-center md:gap-8 gap-4">

            <SlArrowLeft onClick = {handlePicBack} className={`rounded-full my-auto size-10 hover:scale-125 duration-75 cursor-pointer ${
            index === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}/>
            <img loading = "lazy" id= "pic1" src={images[index]} alt={`pic${index+1}`} className="md:h-[500px] md:w-[500px] h-[300px] w-[300px] shadow-black rounded-2xl hover:scale-105 duration-75 cursor-pointer border-4"></img>
            <SlArrowRight onClick = {handlePicNext} className={` rounded-full my-auto size-10 hover:scale-125 duration-75 cursor-pointer ${
            index === images.length-1 ? "opacity-0 pointer-events-none" : "opacity-100"}`}/>
        </div>
    
    </div>);
}
export default Hero;