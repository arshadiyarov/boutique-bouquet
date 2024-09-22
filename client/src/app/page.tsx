import { Button, LinkButton } from "shared/ui";

const HomePage = () => {
  return (
    <main className={"h-screen flex items-center justify-center bg-light-gray"}>
      <LinkButton href={"#"}>Select</LinkButton>
      <Button>Select</Button>
    </main>
  );
};

export default HomePage;
