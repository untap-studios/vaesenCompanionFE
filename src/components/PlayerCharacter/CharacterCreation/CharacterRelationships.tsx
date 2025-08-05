import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { CreateCharacterScreenComponentProps } from "../../../types/playerCharacterCreation";
import { Relationship } from "../../../types/playerCharacter";
import { ChangeEvent } from "../../../types/events";

export default function CharacterRelationships({ formData, handleChange }: CreateCharacterScreenComponentProps) {
  const [toggleForm, setToggleForm] = React.useState<boolean>(false);
  const [relationships, setRelationships] = React.useState<Relationship[]>([]);
  const [characterName, setCharacterName] = React.useState<string>("");
  const [relationshipDescription, setRelationshipDescription] =
    React.useState<string>("");

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

  const handleCharacterNameChange = (e: ChangeEvent) => {
    setCharacterName(e.target.value);
  };
  const handleRelationshipDescriptionChange = (e: ChangeEvent) => {
    setRelationshipDescription(e.target.value);
  };
  return (
    <>
      {relationships &&
        relationships.map((relationship, index) => (
          <div key={index}>
            <Typography variant="h6">{relationship.characterName}</Typography>
            <Typography variant="body1">{relationship.relationshipDescription}</Typography>
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
                  characterName,
                  relationshipDescription,
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
