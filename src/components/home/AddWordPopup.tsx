import {
  Block,
  Navbar,
  NavbarBackLink,
  Page,
  Popup,
  Preloader,
  Searchbar,
} from "konsta/react";
import WordCard from "./WordCard";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setAddWordPopup } from "../../redux/homeSlice";
import useFindWord from "../../hooks/useFindWord";

const AddWordPopup = () => {
  const popup = useAppSelector(state => state.home.addWordPopup);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setAddWordPopup({ open: false }));
  };

  const { findWord, word, loading } = useFindWord();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    findWord(e.target.value);
  };

  return (
    <Popup opened={popup.open}>
      <Page>
        <Navbar
          left={<NavbarBackLink onClick={handleClose}></NavbarBackLink>}
          title="So'z qo'shish"
          subnavbar={
            <Searchbar onInput={handleSearch} placeholder={"Qidirish..."} />
          }
        ></Navbar>
        {loading && (
          <Block strong insetMaterial outlineIos className="text-center">
            <Preloader />
          </Block>
        )}

        {word && <WordCard word={word} />}
      </Page>
    </Popup>
  );
};

export default AddWordPopup;
