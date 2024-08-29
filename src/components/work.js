import React, { useState, useEffect, useMemo } from 'react';
import { X } from 'lucide-react';

const Work = () => {
  const reelItems = useMemo(() => [
    { id: 1, text: 'DENIS SULTA', video: `${process.env.PUBLIC_URL}/assets/work/compressed/reel1.mp4` },
    { id: 2, text: 'PEGGY GOU', video: `${process.env.PUBLIC_URL}/assets/work/compressed/reel2.mp4` },
    { id: 3, text: 'DJ BORING', video: `${process.env.PUBLIC_URL}/assets/work/compressed/reel3.mp4` },
    { id: 4, text: 'HER', video: `${process.env.PUBLIC_URL}/assets/work/compressed/reel4.mp4` },
  ], []);

  const ReelItem = React.memo(({ item }) => {
    const [isVisible, setIsVisible] = useState(false);
    const videoRef = React.useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      if (videoRef.current) {
        observer.observe(videoRef.current);
      }

      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }, []);

    useEffect(() => {
      if (isVisible && videoRef.current) {
        videoRef.current.play();
      } else if (!isVisible && videoRef.current) {
        videoRef.current.pause();
      }
    }, [isVisible]);

    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            loop 
            muted 
            playsInline
          >
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-center p-4">
            <p className="text-xl font-semibold">{item.text}</p>
          </div>
          <div className="absolute inset-0 rounded-lg glow-effect"></div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 text-center pt-8">Work</h2>
      <div className="flex flex-wrap justify-center">
        {reelItems.map((item) => (
          <ReelItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const PricingRow = ({ title, features, videoSrc, isReversed }) => (
  <div className={`flex flex-col md:flex-row items-stretch mb-12 overflow-hidden rounded-lg shadow-lg ${isReversed ? 'md:flex-row-reverse' : ''}`}>
    <div className="w-full md:w-1/2 order-2 md:order-none bg-black p-8 relative">
      <div className="relative z-10 flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-white text-center">{title}</h3>
        </div>
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-white transform -skew-x-12"></div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <ul className="text-gray-300 list-none p-0">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                <X 
                  className={`mr-2 ${
                    index % 3 === 0 ? 'text-red-500' :
                    index % 3 === 1 ? 'text-green-500' :
                    'text-blue-500'
                  } animate-pulse`} 
                  size={16} 
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 order-1 md:order-none relative overflow-hidden">
      <video 
        src={`${process.env.PUBLIC_URL}${videoSrc}`} 
        className="w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>
  </div>
);

const SquigglyLine = () => (
  <svg width="100%" height="20" viewBox="0 0 100 20" preserveAspectRatio="none">
    <path
      d="M0 10 Q12.5 20, 25 10 T50 10 T75 10 T100 10"
      fill="none"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

const WorkAndPricingSection = () => (
  <section className="min-h-screen bg-black flex flex-col items-center justify-center py-16">
    <Work />
    <div className="w-1/2 my-16 mx-auto">
      <SquigglyLine />
    </div>
    <div className="container mx-auto px-4">
      <PricingRow
        title="SHOWREEL"
        features={['1 User', '10GB Storage', 'Basic Support']}
        videoSrc="/assets/reels/demoReel.mp4"
        isReversed={false}
      />
      <PricingRow
        title="LIVE SET"
        features={['5 Users', '50GB Storage', 'Priority Support', 'Advanced Features']}
        videoSrc="/assets/reels/demoReel.mp4"
        isReversed={true}
      />
      <PricingRow
        title="TOUR"
        features={['Unlimited Users', '500GB Storage', '24/7 Support', 'Custom Solutions']}
        videoSrc="/assets/reels/demoReel.mp4"
        isReversed={false}
      />
    </div>
    <div className="w-1/2 my-16 mx-auto">
      <SquigglyLine />
    </div>
  </section>
);

export default WorkAndPricingSection;