import React, { useState } from "react";
import Modal from "react-modal";
import { Card, Text, Heading, Button } from "rebass";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme";

export function Counter() {
  const [count, setCount] = useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Card width="450px" my={3}>
        <Heading fontWeight="bold">React component</Heading>
        <Text my="2" color="primary">
          count : {count}
        </Text>
        <Button onClick={() => setCount((c) => c + 1)}>Add count</Button>
        <Button ml={2} onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
          </form>
        </Modal>
      </Card>
    </ThemeProvider>
  );
}
