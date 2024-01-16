import { Block, BlockHeader, BlockTitle, Button, Card } from "konsta/react";
import { FC } from "react";
import { FaPlus } from "react-icons/fa";
import { IWord } from "../../hooks/useFindWord";
import { RiVolumeUpFill } from "react-icons/ri";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const WordCard: FC<{ word: IWord }> = ({ word }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newTodo: Partial<IWord>) => {
      return axios.post("http://localhost:3000/user_bank", newTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["words"] });
    },
  });
  const handleWordToBank = () => {
    const new_word = { ...word } as Partial<IWord>;
    delete new_word.id;
    mutation.mutate(new_word);
  };
  return (
    <Card
      raised
      footer={
        <>
          <div className="flex justify-start  space-x-2 rtl:space-x-reverse">
            <Button rounded inline>
              O'rganish
            </Button>
            <Button
              rounded
              onClick={handleWordToBank}
              inline
              outline
              className="flex gap-2"
            >
              Keyinroq <FaPlus></FaPlus>
            </Button>
          </div>
        </>
      }
    >
      <div
        className="ios:-mx-4 relative ios:-mt-4 h-48  p-4 flex items-end text-white ios:font-bold   bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
        style={{
          backgroundImage: `url(${word?.imgURL})`,
        }}
      >
        <div className="flex gap-2 items-center py-2 px-4  rounded bg-[rgba(0,0,0,0.1)]">
          <RiVolumeUpFill className="text-3xl text-slate-200 cursor-pointer"></RiVolumeUpFill>
          <div className="flex flex-col gap-1">
            <span className="font-bold tracking-wide">{word?.word}</span>
            <span className="text-sm">{word?.pronunciation}</span>
          </div>
        </div>
      </div>
      <BlockTitle medium>{word?.uzbek.join(", ")}</BlockTitle>
      {word?.meanings.map(meaning => (
        <>
          <BlockHeader className="italic">{meaning.partOfSpeech}</BlockHeader>
          <Block>
            <p>
              <span className="font-bold">Definition:</span>{" "}
              {meaning.definition.english}
            </p>
            <p>
              <span className="font-bold">Ta'rif:</span>{" "}
              {meaning.definition.uzbek}
            </p>
            <br />
            <p>
              <span className="font-bold">Example:</span>{" "}
              {meaning.example.english}
            </p>
            <p>
              <span className="font-bold">Misol:</span> {meaning.example.uzbek}
            </p>
          </Block>
        </>
      ))}
      {/* <Block>
        <p>
          <span className="font-bold">Synonyms: </span>
          {word?.additionalElements.synonyms.join(", ")}
        </p>
        <p>
          <span className="font-bold">Antonyms: </span>
          {word?.additionalElements.antonyms.join(", ")}
        </p>
      </Block> */}
    </Card>
  );
};

export default WordCard;
