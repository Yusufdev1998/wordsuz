import { Navbar, NavbarBackLink, Page, Popup, Searchbar } from "konsta/react";
import WordCard from "./WordCard";

const WordPopup = () => {
  return (
    <Popup opened={false}>
      <Page>
        <Navbar
          left={<NavbarBackLink></NavbarBackLink>}
          title="So'z qo'shish"
          subnavbar={<Searchbar placeholder={"Qidirish..."} />}
        ></Navbar>
        <WordCard />
      </Page>
    </Popup>
  );
};

export default WordPopup;
