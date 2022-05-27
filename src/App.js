import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';

import "./index.css";

const App = () => {
  const [start, setStart] = useState(0);

  const inc = () => {
    setStart(start + 1);
  };
  const dec = () => {
    if (start === 0) {
      alert("no more possible");
    } else setStart(start - 1);
  };

  return (
    <>
      <div className="main_div">
        <div className="sec_div">
          <h1>{start}</h1>
          <span>
            <Button onClick={inc}><AddIcon /></Button>  <Button onClick={dec}><RemoveIcon /></Button>
          </span>
        </div>
      </div>
    </>
  );
};

export default App;
