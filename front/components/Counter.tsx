import React, { useState } from "react";
import Modal from "react-modal";

export function Counter() {
  const [count, setCount] = useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "250px" }}>
      <p style={{ color: "green", margin: 0 }}>React component </p>
      <p style={{ margin: 0 }}>count : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Add count</button>

      <button onClick={() => setIsOpen(true)}>Open Modal</button>
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
    </div>
  );
}
