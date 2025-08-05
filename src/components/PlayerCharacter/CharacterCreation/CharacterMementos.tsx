import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { CreateCharacterScreenComponentProps } from "../../../types/playerCharacterCreation";
import { ChangeEvent } from "../../../types/events";
import { Memento } from "../../../types/playerCharacter";

export default function CharacterMementos({ formData, handleChange }: CreateCharacterScreenComponentProps) {
  const [toggleForm, setToggleForm] = React.useState<boolean>(false);
  const [mementos, setMementos] = React.useState<Memento[]>([]);
  const [mementoName, setMementoName] = React.useState<string>("");
  const [mementoDescription, setMementoDescription] = React.useState<string>("");

  const handleMementoChange = () => {
    const memento = {
      name: mementoName,
      description: mementoDescription,
    };
    handleChange({
      target: {
        name: "mementos",
        value: [...formData.mementos, memento],
      },
    });
  };

  const handleMementoNameChange = (e: ChangeEvent) => {
    setMementoName(e.target.value);
  };

  const handleMementoDescriptionChange = (e: ChangeEvent) => {
    setMementoDescription(e.target.value);
  };

  return (
    <>
      {mementos &&
        mementos.map((memento, index) => (
          <div key={index}>
            <Typography variant="h6">{memento.name}</Typography>
            <Typography variant="body1">{memento.description}</Typography>
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
                  description: mementoDescription,
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
