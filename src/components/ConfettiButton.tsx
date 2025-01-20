import { useState } from "react";
import { Button } from "@/components/ui/button";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export function ConfettiButton() {
  const { width, height } = useWindowSize();
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleClick = () => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000);
  };

  return (
    <>
      {isConfettiActive && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
        />
      )}
      <Button
        onClick={handleClick}
        className="relative overflow-hidden bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        Celebrate!
      </Button>
    </>
  );
}