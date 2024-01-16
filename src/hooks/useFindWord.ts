import axios from "axios";
import { useState } from "react";

interface IMeaning {
  partOfSpeech: string;
  definition: {
    english: string;
    uzbek: string;
  };
  example: {
    english: string;
    uzbek: string;
  };
}

export interface IWord {
  id: number;
  word: string;
  imgURL?: string;
  uzbek: string[];
  pronunciation: string;
  meanings: IMeaning[];
  additionalElements: {
    synonyms: string[];
    antonyms: string[];
  };
  homophones: string[];
}

export default () => {
  const [word, setWord] = useState<IWord | null>(null);
  const [loading, setLoading] = useState(false);

  const findWord = async (word: string) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:3000/word_bank?word=${word}`
      );
      if (res.data.length > 0) {
        setWord(res.data[0]);
      } else {
        setWord(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    findWord,
    word,
    loading,
  };
};
