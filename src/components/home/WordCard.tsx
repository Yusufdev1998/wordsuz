import { Button, Card } from "konsta/react";
import { FaPlus } from "react-icons/fa";
const WordCard = () => {
  return (
    <Card
      raised
      footer={
        <>
          <div className="flex justify-start  space-x-2 rtl:space-x-reverse">
            <Button rounded inline>
              O'rganish
            </Button>
            <Button rounded inline outline className="flex gap-2">
              Keyinroq <FaPlus></FaPlus>
            </Button>
          </div>
        </>
      }
    >
      <div
        className="ios:-mx-4 ios:-mt-4 h-48 p-4 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
        style={{
          backgroundImage:
            "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
        }}
      ></div>
      <div className="text-gray-500 mb-3">Posted on January 21, 2021</div>
      <p>
        Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
        efficitur vitae non felis. Phasellus quis nibh hendrerit...
      </p>
    </Card>
  );
};

export default WordCard;
