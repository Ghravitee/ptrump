type Props = {
  content: string;
};

const Button = ({ content }: Props) => {
  return (
    <button className="flex items-center justify-center bg-green-500 text-[19px] font-bold border-2 border-black border-b-4 rounded-2xl px-[48px] py-[10px] cursor-pointer">
      {content}
    </button>
  );
};

export default Button;
