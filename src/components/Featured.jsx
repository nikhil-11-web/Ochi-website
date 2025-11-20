import React, { useState } from 'react';
import { motion } from "framer-motion";

const Featured = () => {

    const [hoveredCard, setHoveredCard] = useState(null);

    
    const charVariants = {
        hidden: { y: "100%", opacity: 0 }, 
        visible: i => ({ 
            y: 0, 
            opacity: 1,
            transition: { 
                delay: i * 0.03, // Stagger the animation
                ease: [0.22, 1, 0.36, 1], 
                duration: 0.6 
            } 
        }),
    };
    
   
    const renderSpans = (text) => {
        return text.split('').map((item, index) => (
            <motion.span 
                key={index}               
                variants={charVariants}
                custom={index}
                initial="hidden" 
                animate={hoveredCard === text ? "visible" : "hidden"} >
                {item}
            </motion.span>
        ));
    };

    const projects = [
        {
            title: "SalienceLabs",
            imgUrl: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png",
            text: "SalienceLabs",
            leftAligned: true,
        },
        {
            title: "MedalliaExperience",
            imgUrl: "https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png",
            text: "MedalliaExperience",
            leftAligned: false,
        },
        {
            title: "AH2 & Matt Horn",
            imgUrl: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
            text: "AH2 & Matt Horn",
            leftAligned: true,
        },
        {
            title: "Vise",
            imgUrl: "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png",
            text: "Vise",
            leftAligned: false,
        },
        {
            title: "Soft Start",
            imgUrl: "https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg",
            text: "SoftStart",
            leftAligned: true,
        },
        {
            title: "Fyde",
            imgUrl: "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png",
            text: "Fyde",
            leftAligned: false,
        },
        {
            title: "All Things Go",
            imgUrl: "https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png",
            text: "All Things Go",
            leftAligned: true,
        },
        {
            title: "Trawa",
            imgUrl: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
            text: "Trawa",
            leftAligned: false,
        },
        {
            title: "CradBoard Spacship",
            imgUrl: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png",
            text: "CardBoard SpaceShip",
            leftAligned: true,
        },
        {
            title: "premiumBlend",
            imgUrl: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
            text: "PremiumBlend",
            leftAligned: false,
        },
    ];

  
    const renderCard = (card) => {
        return (
            <div 
                key={card.title} 
                className={`cardcontainer relative w-1/2 h-[75vh]`}
               
                onMouseEnter={() => setHoveredCard(card.text)} 
               
                onMouseLeave={() => setHoveredCard(null)} >
                <motion.h1 
                    className={`absolute font-sans leading-none tracking-tight ${card.leftAligned ? 'left-full -translate-x-1/2' : 'right-full translate-x-1/2'} top-1/2 -translate-y-1/2 text-8xl text-[#CDEA68] z-[9] overflow-hidden`}>
                   
                    {renderSpans(card.text)}
                </motion.h1>

                <div className="card w-full h-full rounded-xl overflow-hidden">
                    <img 
                        className='w-full h-full bg-cover object-cover' 
                        src={card.imgUrl} 
                        alt={card.title} 
                    />
                </div>
            </div>
        );
    };

    //
    const renderCardPair = (card1, card2) => (
        <div key={card1.title + card2.title} className="cards w-full flex gap-10 mt-20"> 
            {renderCard(card1)}
            {renderCard(card2)}
        </div>
    );

  
    const cardPairs = [];
    for (let i = 0; i < projects.length; i += 2) {
        if (projects[i+1]) {
            cardPairs.push(renderCardPair(projects[i], projects[i+1]));
        } else {
             cardPairs.push(
                <div key={projects[i].title} className="cards w-full flex gap-10 mt-20">
                    {renderCard(projects[i])}
                    <div className='w-1/2'></div>
                </div>
            )
        }
    }


    return (
        <div className='w-full py-20 bg-white'>
            <div className='w-full px-20 border-b-[1px] border-zinc-300 pb-10'>
                <h1 className='text-6xl text-zinc-900 font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
            </div>
            
            <div className='px-20'>
                {cardPairs}
            </div>

            <div className='w-full flex justify-center mt-20'>
                <button className='px-8 py-4 bg-zinc-900 text-white rounded-full text-lg font-medium'>
                    View All CaseStudies
                </button>
            </div>
        </div>
    )
}

export default Featured;