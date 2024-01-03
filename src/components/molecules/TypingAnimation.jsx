import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingAnimation = () => {
  const [text] = useTypewriter({
    words: ["Read.", "Quran.", "Everyday."],
    loop: [],
    typeSpeed: 70,
    deleteSpeed: 50,
  });
  return (
    <div className="w-full">
      <p className="  text-center font-bold">
        <span>{text}</span>
        <span>
          <Cursor cursorColor="indigo"></Cursor>
        </span>
      </p>
    </div>
  );
};

export default TypingAnimation;
