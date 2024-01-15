import { Fab } from "konsta/react";
import { RiAddFill } from "react-icons/ri";
import { useAppDispatch } from "../../hooks/hooks";
import { setAddWordPopup } from "../../redux/homeSlice";

const AddWordBtn = () => {
  const dispatch = useAppDispatch();
  const handleAddWordPopup = () => {
    dispatch(setAddWordPopup({ open: true }));
  };
  return (
    <Fab
      onClick={handleAddWordPopup}
      className="fixed bg-primary  rounded-full right-4-safe bottom-24-safe z-40"
      icon={<RiAddFill className="text-white" />}
    />
  );
};

export default AddWordBtn;
