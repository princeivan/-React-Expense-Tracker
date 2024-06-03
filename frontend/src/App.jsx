import { Box, Container, Flex } from "@chakra-ui/react";
import MainComponent from "./Components/Main/MainComponent";

function App() {
  return (
    <Container
      maxW="container.3xl"
      height={"100vh"}
      width={"100vw"}
      bg={"#f8fafd"}
      p={"0"}
    >
      <Flex height={"full"}>
        <Box height={"full"} flex={5} w={["20%", "30%", "20%", "50%", "60%"]}>
          <MainComponent />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
