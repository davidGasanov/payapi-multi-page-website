import Button from "../../components/button";
import Input from "../../components/input";

const TestPage = () => {
  return (
    <div className="ml-[100px]">
      Test page
      <h1 className="h1-large">Test title</h1>
      <h1 className="h1-small">Test title small</h1>
      <div className="flex flex-col gap-16 my-auto">
        <h1 className="h1">Quick waltz</h1>
        <h2 className="font-public-sans font-bold">Public Sans</h2>
      </div>
      <div className="my-[100px]">
        <Input
          placeholder="Test"
        />
      </div>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary-dark">Secondary Dark</Button>
      <div className="p-4 bg-black">
        <Button variant="secondary-light">Secondary Light</Button>
      </div>
    </div>
  );
};

export default TestPage;
