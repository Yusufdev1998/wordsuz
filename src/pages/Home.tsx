import { Page } from "konsta/react";
import FooterNav from "../components/base/FooterNav";
import Main from "../components/home/Main";
import MyNavbar from "../components/home/Navbar";
import AddWordPopup from "../components/home/AddWordPopup";
import WordPopup from "../components/home/WordPopup";

const Home = () => {
  return (
    <>
      <Page>
        <MyNavbar />
        <Main />
        <FooterNav />
      </Page>
      <AddWordPopup />
      <WordPopup />
    </>
  );
};

export default Home;
