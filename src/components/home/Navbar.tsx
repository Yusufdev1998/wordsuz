import { Badge, Navbar, Segmented, SegmentedButton } from "konsta/react";

import Rank from "./Rank";
import Search from "./Search";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { EHomePage, THomePage, setHomePage } from "../../redux/homeSlice";

const MyNavbar = () => {
  const page = useAppSelector(state => state.home.page);
  const dispatch = useAppDispatch();
  const handlePage = (page: THomePage) => {
    dispatch(setHomePage(page));
  };
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
          <SegmentedButton
            onClick={() => handlePage(EHomePage.PAGE_LEARNING)}
            active={page === EHomePage.PAGE_LEARNING}
            className="flex gap-2"
          >
            O'rganyapman <Badge>10</Badge>
          </SegmentedButton>
          <SegmentedButton
            onClick={() => handlePage(EHomePage.PAGE_MEMORIZED)}
            active={page === EHomePage.PAGE_MEMORIZED}
            className="flex gap-2"
          >
            Bilaman <Badge>30</Badge>
          </SegmentedButton>
        </Segmented>
      }
    />
  );
};

export default MyNavbar;
