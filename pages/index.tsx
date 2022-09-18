import { useState } from "react";
import { Button, Text } from "@nextui-org/react";

const Home = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Text h1 size={60} weight="bold">
        Hello, World!
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        This is caspian.
      </Text>

      <Text>Count: {count}</Text>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

export default Home;
