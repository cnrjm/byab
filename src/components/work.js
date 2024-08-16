import React, { useState, useEffect } from 'react';

const Work = () => {
  const [position, setPosition] = useState(0);
  
  const bannerItems = [
    { id: 1, text: 'DJ BALLANTINE', video: '/assets/work/reel1.mp4' },
    { id: 2, text: 'MC MCCUMMERY', video: '/assets/work/reel2.mp4' },
    { id: 3, text: 'FAG JONNY', video: '/assets/work/reel3.mp4' },
    { id: 4, text: 'CON ON THE MIX', video: '/assets/work/reel4.mp4' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => (prevPosition - 1) % (bannerItems.length * 350));
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 text-center pt-8">Work</h2>
      <div className="relative h-[480px] whitespace-nowrap mb-8">
        {bannerItems.concat(bannerItems).map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="inline-block w-[270px] h-[480px] relative mx-10"
            style={{ transform: `translateX(${position}px)` }}
          >
            <video 
              className="w-full h-full object-cover rounded-lg"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-center p-4 rounded-lg">
              <p className="text-xl font-semibold">{item.text}</p>
            </div>
            <div className="absolute inset-0 rounded-lg glow-effect"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;