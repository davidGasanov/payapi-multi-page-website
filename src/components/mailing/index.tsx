import Button from "../button";

const Mailing = () => {
  return (
    <form className="max-w-[445px] flex flex-col gap-4 w-full">
      <input
        placeholder="Enter email address"
        className="w-full bg-water-white drop-shadow-[10px_30px_25px_rgba(54,83,107,0.25)] p-4 pl-6 rounded-[24px] outline-none focus:outline-none focus:ring-0 placeholder:font-public-sans placeholder:text-san-juan-blue/50 placeholder:font-bold"
      />
      <Button variant="primary" className="z-10" type="submit">
        Schedule a demo
      </Button>
    </form>
  );
};

export default Mailing;
