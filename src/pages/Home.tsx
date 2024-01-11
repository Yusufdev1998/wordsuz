import { Page } from "konsta/react";
import FooterNav from "../components/base/FooterNav";
import Main from "../components/home/Main";
import MyNavbar from "../components/home/Navbar";

const Home = () => {
  return (
    <>
      <Page>
        <MyNavbar />
        <Main />
        <FooterNav />
      </Page>
    </>
  );
};

export default Home;
