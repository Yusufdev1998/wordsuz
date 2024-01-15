import { Navbar, NavbarBackLink, Page, Popup, Searchbar } from "konsta/react";
import WordCard from "./WordCard";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setAddWordPopup } from "../../redux/homeSlice";

const AddWordPopup = () => {
  const popup = useAppSelector(state => state.home.addWordPopup);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setAddWordPopup({ open: false }));
  };
  return (
    <Popup opened={popup.open}>
      <Page>
        <Navbar
          left={<NavbarBackLink onClick={handleClose}></NavbarBackLink>}
          title="So'z qo'shish"
          subnavbar={<Searchbar placeholder={"Qidirish..."} />}
        ></Navbar>
        <WordCard />
      </Page>
    </Popup>
  );
};

export default AddWordPopup;
