import { Badge, Navbar, Segmented, SegmentedButton } from "konsta/react";
import Search from "./Search";
import Rank from "./Rank";

const MyNavbar = () => {
  return (
    <Navbar
      title={
        <div className="flex grow items-center gap-5">
          <Search />
          <Rank />
        </div>
      }
      subnavbar={
        <Segmented raised>
          <SegmentedButton active className="flex gap-2">
            O'rganyapman <Badge>10</Badge>
          </SegmentedButton>
          <SegmentedButton className="flex gap-2">
            Bilaman <Badge>30</Badge>
          </SegmentedButton>
        </Segmented>
      }
    ></Navbar>
  );
};

export default MyNavbar;
