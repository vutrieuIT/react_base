import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';
import logo from "./logo.svg";
import "./App.css";

// components
// import Button from './components/atoms/Button';
import MenuItemType from "./shared/types/common";
// import Select from './components/atoms/Select';
import Chip from "./components/atoms/Chip";
import TextInputField from "./components/molecules/TextInputField";
import SelectField from "./components/molecules/SelectField";
import FormLogin from "./components/organisms/FormLogin";

function App() {
  const options: MenuItemType[] = [
    { key: "0", value: "Zero" },
    { key: "1", value: "Zero2" },
    { key: "2", value: "Zero3" },
    { key: "3", value: "Zero4" },
    { key: "4", value: "Zero5" },
    { key: "5", value: "Zero6" },
    { key: "6", value: "Zero7" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <FormLogin></FormLogin>
      </header>
      
    </div>
  );
}

export default App;
