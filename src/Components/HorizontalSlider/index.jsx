import { useRef, useState, useEffect } from "react";
import axios from "axios";

import HomeEventCard from "../HomeEventCard";

const BACKEND_URL = process.env.REACT_APP_API_URL;

function Slider(props){
  const elementRef = useRef(null);
  const innerRef = useRef(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/getEvents`)
    .then(response => {
      setEvents(response.data.message);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  const scrollStep = window.innerWidth >= 768 ? 512 : 282;

  return (
    <div className="flex items-center">
      <button
        className="w-[20px] h-[70px] rounded-xl bg-[#D9D9D9] font-poppins mr-[10px] ml-[-5px] text-2xl font-bold"
        onClick={() => {handleHorizantalScroll(elementRef.current, 10, 50, -scrollStep);}}
      >
        &lt;
      </button>
      <div className="flex items-center overflow-x-auto scroll-smooth w-[100%]" ref={elementRef}>
        <div className="gap-x-8 flex" ref={innerRef}>
          {events.map((placement, i) => (
            <HomeEventCard key={i} event={events[i]} index={i}/>
          ))}
        </div>
      </div>
      <button
        className="w-[20px] h-[70px] rounded-xl bg-[#D9D9D9] font-poppins text-black ml-[10px] mr-[-5px] text-2xl font-bold"
        onClick={() => {handleHorizantalScroll(elementRef.current, 10, 50, scrollStep);}}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
