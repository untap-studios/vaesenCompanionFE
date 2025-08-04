import { Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function CharacterRelationships({ formData, handleChange }) {
  const [toggleForm, setToggleForm] = React.useState(false);
  const [relationships, setRelationships] = React.useState([]);
  const [characterName, setCharacterName] = React.useState("");
  const [relationshipDescription, setRelationshipDescription] =
    React.useState("");

  const handleRelationshipChange = () => {
    const relationship = {
        characterName,
        value: relationshipDescription,
    }

    handleChange({
      target: {
        name: "relationships",
        value: [...formData.relationships, relationship],
      },
    });
  };

  const handleCharacterNameChange = (e) => {
    setCharacterName(e.target.value);
  };
  const handleRelationshipDescriptionChange = (e) => {
    setRelationshipDescription(e.target.value);
  };
  return (
    <>
      {relationships &&
        relationships.map((relationship, index) => (
          <div key={index}>
            <Typography variant="h6">{relationship.name}</Typography>
            <Typography variant="body1">{relationship.value}</Typography>
          </div>
        ))}
      {toggleForm && (
        <>
          <TextField
            id="characterName"
            onChange={handleCharacterNameChange}
            value={characterName}
            required
            type="text"
            name="characterName"
            label="Character Name"
            variant="standard"
          />
          <TextField
            id="relationshipDescription"
            onChange={handleRelationshipDescriptionChange}
            value={relationshipDescription}
            required
            type="text"
            name="relationshipDescription"
            label="Relationship Description"
            variant="standard"
          />
          <Button
            onClick={() => {
              setToggleForm(false);
              setRelationships([
                ...relationships,
                {
                  name: characterName,
                  value: relationshipDescription,
                },
              ]);
              handleRelationshipChange();
            }}
          >
            Add
          </Button>
        </>
      )}
      <Button onClick={() => setToggleForm(!toggleForm)}>
        Create Relationship
      </Button>
    </>
  );
}
