import { Icon, Tabbar, TabbarLink } from "konsta/react";
import {
  FcAdvertising,
  FcBusinessman,
  FcGenericSortingAsc,
  FcHome,
} from "react-icons/fc";

const FooterNav = () => {
  return (
    <Tabbar icons className="left-0 bottom-0 fixed">
      <TabbarLink
        active
        icon={<Icon material={<FcHome className="w-8 h-8" />} />}
      />
      <TabbarLink
        icon={<Icon material={<FcAdvertising className="w-8 h-8" />} />}
      />
      <TabbarLink
        icon={<Icon material={<FcGenericSortingAsc className="w-8 h-8" />} />}
      />
      <TabbarLink
        icon={<Icon material={<FcBusinessman className="w-8 h-8" />} />}
      />
    </Tabbar>
  );
};

export default FooterNav;
