import { useState, useEffect } from "react";
import Select from "react-select";
import Grid from "./Grid";

function App() {
  const [modes, setModes] = useState();
  const [isLoading, setIsLoadint] = useState(true);
  const [currentMode, setCurrentMode] = useState();
  const [isStart, setIsStart] = useState(false);

  const selectOnChange = (option) => {
    setCurrentMode(option);
  };

  const fetchData = () => {
    fetch("http://demo7919674.mockable.io")
      .then((response) => response.json())
      .then((data) => {
        setModes(data);
        setCurrentMode(data[0]);
        setIsLoadint(false);

        return;
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div>Loading... </div>
      ) : (
        <>
          <div className="top-wrapper">
            <Select
              className="select"
              value={currentMode}
              onChange={selectOnChange}
              options={modes}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.field}
            />
            <button
              className={`${isStart ? "finish-button" : "start-button"}`}
              onClick={() => setIsStart(!isStart)}
            >
              {isStart ? "finish" : "start"}
            </button>
          </div>
          <div className="content-wrapper">
            <div
              className="grid-wrapper"
              style={{
                width: currentMode.field * 15 + 400,
                height: currentMode.field * 15 + 400,
              }}
            >
              <Grid isStart={isStart} />
            </div>
            <div className="hover-wrapper">
              <h2>Hover squares</h2>
              <ul id="list"></ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
