import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import NameAndAge from "./NameAndAge";
import CharacterArchetype from "./CharacterArchetype";
import CharacterLore from "./CharacterLore";
import CharacterAttributes from "./CharacterAttributes";
import CharacterSkillsAndResources from "./CharacterSkillsAndResources";
import CharacterTalents from "./CharacterTalents";
import CharacterRelationships from "./CharacterRelationships";
import CharacterMementos from "./CharacterMementos";
import CharacterEquipment from "./CharacterEquipment";
import CharacterWeapons from "./CharacterWeapons";
import { useLocation } from "react-router";

export default function CreateCharacter() {
  const location = useLocation();
  const userId = location.state?.userId || "";
  console.log("User ID:", userId);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    age: "",
    archetype: "",
    motivation: "",
    trauma: "",
    darkSecret: "",
    relationships: [],
    talents: [],
    equipment: [],
    weapons: [],
    mementos: [],
    attributes: [],
    resources: 0,
    skills: [],
  });
  const [currentScreen, setCurrentScreen] = useState("nameAndAge");
  const screens = {
    nameAndAge: NameAndAge,
    archetype: CharacterArchetype,
    characterLore: CharacterLore,
    characterAttributes: CharacterAttributes,
    characterSkillsAndResources: CharacterSkillsAndResources,
    characterTalents: CharacterTalents,
    characterRelationships: CharacterRelationships,
    characterMementos: CharacterMementos,
    characterEquipment: CharacterEquipment,
    CharacterWeapons: CharacterWeapons,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const checkIfNum = isNaN(parseInt(value, 10)) ? value : parseInt(value, 10);

    console.log(e);
    setFormData({
      ...formData,
      [name]: checkIfNum,
    });
  };

  const handleSubmit = async () => {
    console.log("Form Data:", formData);
    const response = await fetch(
      "http://localhost:8080/api/player-characters",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, userId }),
      }
    );

    console.log("Response:", response);
  };

  const handleChangeScreen = (forward) => {
    const screenKeys = Object.keys(screens);
    const currentIndex = screenKeys.indexOf(currentScreen);
    if (currentIndex < screenKeys.length - 1 && forward) {
      setCurrentScreen(screenKeys[currentIndex + 1]);
    } else if (currentIndex > 0 && !forward) {
      setCurrentScreen(screenKeys[currentIndex - 1]);
    } else {
      handleSubmit();
    }
  };

  const CurrentComponent = screens[currentScreen];

  return (
    <div>
      <h1>Create Character</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          //   bgcolor: "background.paper",
          padding: 2,
          borderRadius: 8,
        }}
        noValidate
        autoComplete="off"
      >
        {CurrentComponent && (
          <CurrentComponent formData={formData} handleChange={handleChange} />
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleChangeScreen(true)}
        >
          Next
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleChangeScreen(false)}
        >
          Back
        </Button>
      </Box>
    </div>
  );
}
