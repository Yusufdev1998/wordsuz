import { useEffect, useState } from "react";

let recognition: any = null;

if ("webkitSpeechRecognition" in window) {
  recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;

  recognition.lang = "en-US";
}

export default () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (!recognition) return;
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      console.log("event", event);
      recognition.stop();
      setIsListening(false);
    };
  });

  const startListening = () => {
    setText("");
    recognition.start();
    setIsListening(true);
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop;
  };

  return {
    text,
    isListening,
    startListening,
    stopListening,
    hasSupport: !!recognition,
  };
};
