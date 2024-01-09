import { Page } from "konsta/react";
import FooterNav from "../components/base/FooterNav";
import Main from "../components/home/Main";
import Navbar from "../components/home/Navbar";

const Home = () => {
  return (
    <Page>
      <Navbar />
      <Main />
      <FooterNav />
    </Page>
  );
};

export default Home;
