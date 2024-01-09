import { BlockTitle, Button, Fab, List, ListItem } from "konsta/react";
import { FcNext, FcSpeaker } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";

const Main = () => {
  return (
    <main>
      <Fab
        className="fixed bg-primary w-8 h-8 rounded-full right-4-safe bottom-24-safe z-40"
        icon={<RiAddFill className="text-white" />}
      />
      <BlockTitle>
        Yangi so'zlar{" "}
        <Button inline tonal small>
          Mashq qilish
        </Button>
      </BlockTitle>
      <List strong outline dividersMaterial className="pb-12">
        <ListItem
          media={
            <FcSpeaker
              onClick={(e: any) => {
                e.stopPropagation();
                console.log("hi");
              }}
              className="w-5 h-5 cursor-pointer"
            />
          }
          onClick={() => console.log("hello")}
          header="Name"
          title="John Doe"
          after={
            <div className="flex items-center">
              <FaStar className="text-yellow-400 text-xl"></FaStar> <FcNext />
            </div>
          }
        />
        <ListItem
          media={<FcSpeaker className="w-5 h-5" />}
          header="Phone"
          title="+7 90 111-22-3344"
          after="Edit"
          chevronIcon={<FcNext />}
        />
        <ListItem
          header="Email"
          title="john@doe"
          footer="Home"
          after="Edit"
          media={<FcSpeaker className="w-5 h-5" />}
          chevronIcon={<FcNext />}
        />
        <ListItem
          header="Email"
          title="john@konsta"
          footer="Work"
          after="Edit"
          media={<FcSpeaker className="w-5 h-5" />}
          chevronIcon={<FcNext />}
        />
        <ListItem
          header="Email"
          title="john@konsta"
          footer="Work"
          after="Edit"
          media={<FcSpeaker className="w-5 h-5" />}
          chevronIcon={<FcNext />}
        />
        <ListItem
          header="Email"
          title="john@konsta"
          footer="Work"
          after="Edit"
          media={<FcSpeaker className="w-5 h-5" />}
          chevronIcon={<FcNext />}
        />

        <ListItem
          header="Email"
          title="john@konsta"
          footer="Work"
          after="Edit"
          media={<FcSpeaker className="w-5 h-5" />}
          chevronIcon={<FcNext />}
        />
        <ListItem
          header="Email"
          title="john@konsta"
          footer="Work 2"
          after="Edit"
          media={<FcSpeaker className="w-5 h-5" />}
          chevronIcon={<FcNext />}
        />
      </List>
    </main>
  );
};

export default Main;
