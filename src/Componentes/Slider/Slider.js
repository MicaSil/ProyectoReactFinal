import React, { useState } from 'react';
import './Slider.css'
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';




const items = 
[{src: '/imagenes/tienda1.jpg', altText: '' , caption: 'WHEN WOMEN SUPPORT EACH OTHER, INCREDIBLE THINGS HAPPEN.',},
{src: '/imagenes/tienda.jpg', altText: '', caption: 'BLACK IS ALAWAYS A GOOD IDEA.'},
{src: '/imagenes/tienda3.jpg', altText: '', caption: 'LIFE IS NOT PERFECT, BUT YOUR OUTFIT CAN BE.'}];

const App = () => {
    const[activeIndex, setActiveIndex] = useState(0);
    const[animating, setAnimating] = useState(false)


    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous =() => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
        <CarouselItem 
        onExiting={() => setAnimating(true)} 
        onExited={() => setAnimating(false)} 
        key={item.src}>        
                <img src={item.src} alt={item.altText}  width="100%" height="900px" />
            <CarouselCaption  className="textoSlider" captionHeader={item.caption}  />
            
        </CarouselItem>
    );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>

    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        
        {slides}
    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    );
}

export default App;
