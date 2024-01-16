import { BlockTitle, Button, List, ListItem } from "konsta/react";
import { FcNext, FcSpeaker } from "react-icons/fc";

import AddWordBtn from "./AddWordBtn";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IWord } from "../../hooks/useFindWord";
import { RiStarLine } from "react-icons/ri";

async function getWords() {
  const res = await axios.get("http://localhost:3000/user_bank");
  return res.data;
}

const Main = () => {
  const { data } = useQuery({
    queryKey: ["words"],
    queryFn: getWords,
  });
  return (
    <main className="pb-12">
      <AddWordBtn />
      <BlockTitle>
        Yangi so'zlar{" "}
        <Button inline tonal small>
          Mashq qilish
        </Button>
      </BlockTitle>
      <List strong dividersMaterial>
        {data?.map((word: IWord) => (
          <ListItem
            media={
              <FcSpeaker
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  console.log("hi");
                }}
                className="w-5 h-5 cursor-pointer"
              />
            }
            onClick={() => console.log("hello")}
            header={word.pronunciation}
            title={word.word}
            footer={word.uzbek.join(", ")}
            after={
              <div className="flex items-center">
                <RiStarLine className="text-lg text-slate-400" />
                <RiStarLine className="text-lg text-slate-400" />
                <RiStarLine className="text-lg text-slate-400" /> <FcNext />
              </div>
            }
          />
        ))}
      </List>
    </main>
  );
};

export default Main;
