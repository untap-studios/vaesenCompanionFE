import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { CreateCharacterScreenComponentProps } from "../../../types/playerCharacterCreation";
import { Weapon } from "../../../types/playerCharacter";
import { SelectEvent } from "../../../types/events";

export default function CharacterWeapons({ formData, handleChange }: CreateCharacterScreenComponentProps) {
  const [selectedWeapon, setSelectedWeapon] = React.useState("");
  const weapons: Weapon[] = [
    {
      name: "revolver",
      label: "Revolver",
      description: "It's a classic sidearm",
      damage: 2,
      bonus: 2,
      longRange: 1,
      shortRange: 0,
    },
    {
      name: "knife",
      label: "Knife",
      description: "A sharp blade",
      bonus: 1,
      damage: 1,
      longRange: 0,
      shortRange: 0,
    },
  ];
  const handleWeaponChange = (e: SelectEvent) => {
    const { name, value } = e.target;
    const weapon = {
      name: value,
      description:
        weapons.find((weap) => weap.name === value)?.description || "",
    };

    setSelectedWeapon(weapon.name);
    handleChange({
      target: {
        name,
        value: [...formData.weapons, weapon],
      },
    });
  };
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Weapons</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedWeapon || ""}
          name="weapons"
          label="Weapons"
          onChange={handleWeaponChange}
        >
          {weapons.map((weapon) => (
            <MenuItem key={weapon.name} value={weapon.name}>
              {weapon.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
