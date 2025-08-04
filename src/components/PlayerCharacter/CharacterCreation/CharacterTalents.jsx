import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export default function CharacterTalents({ formData, handleChange }) {
  const [selectedTalent, setSelectedTalent] = React.useState();

  const talents = [
    {
      name: "toughAsNails",
      label: "Tough As Nails",
      description: "Provides a +1 bonus to Force rolls when fighting unarmed",
    },
    {
      name: "talent2",
      label: "Talent 2",
      description: "Description for Talent 2",
    },
    {
      name: "talent3",
      label: "Talent 3",
      description: "Description for Talent 3",
    },
    {
      name: "talent4",
      label: "Talent 4",
      description: "Description for Talent 4",
    },
    {
      name: "talent5",
      label: "Talent 5",
      description: "Description for Talent 5",
    },
  ];
  const handleTalentChange = (e) => {
    const { name, value } = e.target;
    const talent = {
      name: value,
      description:
        talents.find((talent) => talent.name === value)?.description || "",
    };

    setSelectedTalent(talent.name);

    handleChange({
      target: {
        name,
        value: [...formData.talents, talent],
      },
    });
  };
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Talents</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedTalent || ""}
          name="talents"
          label="Talent"
          onChange={handleTalentChange}
        >
          {talents.map((talent) => (
            <MenuItem key={talent.name} value={talent.name}>
              {talent.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
