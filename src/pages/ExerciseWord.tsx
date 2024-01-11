import { Block, Page } from "konsta/react";
import Header from "../components/exercise/Header";
import Content from "../components/exercise/Content";
import FooterAction from "../components/exercise/FooterAction";

const ExerciseWord = () => {
  return (
    <Page>
      <Block className="flex flex-col items-center gap-5">
        <h2 className="text-center mt-20">So'zni harflarini bittalab ayting</h2>
        <Header />
        <Content />
      </Block>
      <FooterAction />
    </Page>
  );
};

export default ExerciseWord;
