import { Badge, Navbar, Segmented, SegmentedButton } from "konsta/react";

import Rank from "./Rank";
import Search from "./Search";

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
        <Segmented raised rounded>
          <SegmentedButton className="flex gap-2">
            O'rganyapman <Badge>10</Badge>
          </SegmentedButton>
          <SegmentedButton active className="flex gap-2">
            Bilaman <Badge>30</Badge>
          </SegmentedButton>
        </Segmented>
      }
    >
      {/* Sections */}
    </Navbar>
  );
};

export default MyNavbar;
