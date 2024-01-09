import { Icon } from "konsta/react";
import { GiRank1 } from "react-icons/gi";
const Rank = () => {
  return (
    <div className="flex items-center">
      <Icon
        material={
          <GiRank1 style={{ color: "#005BC1", fontSize: 25 }}></GiRank1>
        }
        badgeColors={{ bg: "bg-green-600" }}
        badge={0}
      ></Icon>
    </div>
  );
};

export default Rank;
