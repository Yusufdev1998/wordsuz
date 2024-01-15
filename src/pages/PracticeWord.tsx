import { Button } from "konsta/react";
import useRecognition from "../hooks/useRecognition";

const PracticeWord = () => {
  const { text, isListening, startListening, stopListening, hasSupport } =
    useRecognition();
  return (
    <div>{hasSupport && <Button onClick={startListening}>speek</Button>}</div>
  );
};

export default PracticeWord;
