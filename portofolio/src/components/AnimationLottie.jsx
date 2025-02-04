import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationFile, width = "100%", height = "100%" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return <Lottie animationData={animationFile} loop autoplay style={{ width, height }} />;
};

export default AnimationLottie;
