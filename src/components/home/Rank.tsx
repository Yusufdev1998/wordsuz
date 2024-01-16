import { Icon } from "konsta/react";
import { GiRank1 } from "react-icons/gi";
const Rank = () => {
  return (
    <div className="flex items-center">
      <Icon
        material={<GiRank1 className="text-amber-600 text-4xl" />}
        badgeColors={{ bg: "bg-primary" }}
        badge={125}
      ></Icon>
    </div>
  );
};

export default Rank;
