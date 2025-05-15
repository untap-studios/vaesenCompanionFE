import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import BasicInfo from "./CharacterSheetComponents/BasicInfo";
import Conditions from "./CharacterSheetComponents/Conditions";
import Background from "./CharacterSheetComponents/Background";
import AttributesAndSkills from "./CharacterSheetComponents/AttributesAndSkills";

export default function CreatePlayerCharacter() {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    age: "",
    archetype: "",
    motivation: "",
    trauma: "",
    darkSecret: "",
    relationships: [{ characterName: "", relationshipDescription: "" }],
    talents: [{ name: "", description: "" }],
    advantages: [{ name: "", description: "" }],
    insightsAndDefects: [{ name: "", description: "" }],
    equipment: [{ name: "", description: "", bonus: "" }],
    armor: [{ name: "", description: "", protection: "", agility: "" }],
    weapons: [{ name: "", description: "", damage: "", range: "", bonus: "" }],
    memento: [{ name: "", description: "" }],
    attributes: [{ name: "", value: "", description: "" }],
    resources: "",
    conditions: [{ type: "", name: "", description: "", value: "" }],
    skills: [{ name: "", attributeType: "", description: "", value: "" }],
    experiencePoints: "",
  });

  const handleChange = (e, field, index, subField) => {
    if (Array.isArray(formData[field])) {
      const updatedArray = [...formData[field]];
      updatedArray[index][subField] = e.target.value;
      setFormData({ ...formData, [field]: updatedArray });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const handleAddItem = (field) => {
    const newItem = {};
    Object.keys(formData[field][0]).forEach((key) => (newItem[key] = ""));
    setFormData({ ...formData, [field]: [...formData[field], newItem] });
  };

  const handleRemoveItem = (field, index) => {
    const updatedArray = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updatedArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(formData);
    console.log(
      "%csrc/components/PlayerCharacter/CreatePlayerCharacter.jsx:51 formData",
      "color: #007acc;",
      formData
    );
  };

  return (
    <Grid container spacing={2} sx={{ border: "1px solid red" }}>
      <Grid item size={12} sx={{ border: "1px solid blue" }}>
        <h1>New Character</h1>
      </Grid>
      <Grid items size={12} sx={{ border: "1px solid green" }}>
        <form onSubmit={handleSubmit}>
          <h2>Character Sheet</h2>
          <Grid container sx={{ border: "1px solid purple" }}>
            <BasicInfo formData={formData} handleChange={handleChange} />
            <Conditions />
          </Grid>
          <Grid container>
            <Background formData={formData} handleChange={handleChange} />
          </Grid>
          <Grid container>
            <AttributesAndSkills />
          </Grid>

          {/* Relationships */}
          <fieldset>
            <legend>Relationships</legend>
            {formData.relationships.map((relationship, index) => (
              <div key={index}>
                <label>
                  Character Name:
                  <input
                    type="text"
                    value={relationship.characterName}
                    onChange={(e) =>
                      handleChange(e, "relationships", index, "characterName")
                    }
                  />
                </label>
                <label>
                  Relationship Description:
                  <textarea
                    value={relationship.relationshipDescription}
                    onChange={(e) =>
                      handleChange(
                        e,
                        "relationships",
                        index,
                        "relationshipDescription"
                      )
                    }
                  />
                </label>
                <button
                  type="button"
                  onClick={() => handleRemoveItem("relationships", index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddItem("relationships")}
            >
              Add Relationship
            </button>
          </fieldset>

          {/* Repeat similar sections for talents, advantages, insightsAndDefects, etc. */}
          {/* Attributes */}
          <fieldset>
            <legend>Attributes</legend>
            {formData.attributes.map((attribute, index) => (
              <div key={index}>
                <label>
                  Name:
                  <input
                    type="text"
                    value={attribute.name}
                    onChange={(e) =>
                      handleChange(e, "attributes", index, "name")
                    }
                  />
                </label>
                <label>
                  Value:
                  <input
                    type="number"
                    value={attribute.value}
                    onChange={(e) =>
                      handleChange(e, "attributes", index, "value")
                    }
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    value={attribute.description}
                    onChange={(e) =>
                      handleChange(e, "attributes", index, "description")
                    }
                  />
                </label>
                <button
                  type="button"
                  onClick={() => handleRemoveItem("attributes", index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => handleAddItem("attributes")}>
              Add Attribute
            </button>
          </fieldset>

          {/* Resources */}
          <label>
            Resources:
            <input
              type="number"
              value={formData.resources}
              onChange={(e) => handleChange(e, "resources")}
            />
          </label>

          <button type="submit">Save Character</button>
        </form>
      </Grid>
    </Grid>
  );
}
