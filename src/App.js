import React from "react";
import { ModalProvider } from "./utils/Modal";
import {Home} from "./components/Home";

function App() {
  return (
    <ModalProvider>
      <Home />
    </ModalProvider>
  );
}

export default App;
