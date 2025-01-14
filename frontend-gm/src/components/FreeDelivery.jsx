import { useState, useEffect } from "react";

const FreeDeliveryBanner = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    "Get free delivery for orders above 25,000!",
    "Sign up for exclusive deals and offers!",
    "We offer customization on select products!"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000); // Change message every 5 seconds (5000ms)

    // Cleanup the interval when component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full text-center py-2 bg-black text-white">
      <p>{messages[currentMessageIndex]}</p>
    </div>
  );
};

export default FreeDeliveryBanner;
