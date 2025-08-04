import { Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function CharacterMementos({ formData, handleChange }) {
  const [toggleForm, setToggleForm] = React.useState(false);
  const [mementos, setMementos] = React.useState([]);
  const [mementoName, setMementoName] = React.useState("");
  const [mementoDescription, setMementoDescription] = React.useState("");

  const handleMementoChange = () => {
    const memento = {
      name: mementoName,
      value: mementoDescription,
    };
    handleChange({
      target: {
        name: "mementos",
        value: [...formData.mementos, memento],
      },
    });
  };

  const handleMementoNameChange = (e) => {
    setMementoName(e.target.value);
  };

  const handleMementoDescriptionChange = (e) => {
    setMementoDescription(e.target.value);
  };

  return (
    <>
      {mementos &&
        mementos.map((memento, index) => (
          <div key={index}>
            <Typography variant="h6">{memento.name}</Typography>
            <Typography variant="body1">{memento.value}</Typography>
          </div>
        ))}

      {toggleForm && (
        <>
          <TextField
            id="mementoName"
            onChange={handleMementoNameChange}
            value={mementoName}
            required
            type="text"
            name="mementoName"
            label="Memento Name"
            variant="standard"
          />
          <TextField
            id="mementoDescription"
            onChange={handleMementoDescriptionChange}
            value={mementoDescription}
            required
            type="text"
            name="mementoDescription"
            label="Memento Description"
            variant="standard"
          />
          <Button
            onClick={() => {
              setToggleForm(false);
              setMementos([
                ...mementos,
                {
                  name: mementoName,
                  value: mementoDescription,
                },
              ]);
              handleMementoChange();
            }}
          >
            Add
          </Button>
        </>
      )}

      <Button onClick={() => setToggleForm(!toggleForm)}>
        Create Memento
      </Button>
    </>
  );
}
