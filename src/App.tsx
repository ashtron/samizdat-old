import React from 'react';
import 'bulma/css/bulma.min.css';
import './styles/main.css';
import MainPanel from "./MainPanel";
import BookForm from "./BookForm";

function App() {
  return (
    <>
      <MainPanel>
        <BookForm />
      </MainPanel>
    </>
  );
}

export default App;
