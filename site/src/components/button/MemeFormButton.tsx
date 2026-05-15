import PlusIcon from "../svg/PlusIcon";

interface MemeFormButtonProps {
  onClick: () => void; 
}


export default function MemeFormButton({onClick }: MemeFormButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed top-[83%] left-[85%] sm:left-[90%] md:left-[95%] z-50 p-2 bg-orange-600 text-white rounded-full hover:scale-110 transition shadow-md"
    >
      <PlusIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"></PlusIcon>
    </button>
  );
}
