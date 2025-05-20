import React, { useRef } from "react";

const ScrollView = () => {
   
    return (
        <div>
            <div className="w-full h-[30vh] flex justify-center items-center">
                Scroll To View 
            </div>
            <div className="w-full h-[50px] flex flex-row list-none justify-around gap-5 pr-[20px] sticky">
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Technical Skills</li>
            </div>
            <div className="w-[80%] h-[600px] flex justify-center items-center">
                <div className="w-full h-full bg-pink-400 "> 

                </div>
            </div>
        </div>
    );
};

export default ScrollView;
