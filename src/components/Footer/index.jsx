import Signature from "./Signature";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center p-2 bg-slate-500 text-white">
      <div className="flex justify-center items-center">
        <Signature />
      </div>
    </footer>
  );
};

export default Footer;
