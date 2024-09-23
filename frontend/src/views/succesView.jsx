import { SiVerizon } from "react-icons/si";

const SuccesView = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-full flex flex-col items-center mt-36 gap-8">
        <h2 className="text-2xl  underline underline-offset-4 decoration-primary">
          Your message has been sent
        </h2>
        <SiVerizon size={40} />
      </div>
    </div>
  );
};

export default SuccesView;
