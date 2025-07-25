import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export default function CharacterEquipment({ formData, handleChange }) {
    const [selectedEquipment, setSelectedEquipment] = React.useState();
  const equipment = [
    {
      name: "fieldKitchen",
      label: "Field Kitchen",
      description: "Cook food on the go",
      bonus: 0
    },
    {
      name: "knife",
      label: "Knife",
      description: "A sharp blade",
      bonus: 1
    },
  ];
  const handleEquipmentChange = (e) => {
    const { name, value } = e.target;
    const equipItem = {
      name: value,
      description: equipment.find((equip) => equip.name === value)?.description || "",
    };

    setSelectedEquipment(equipItem.name);
    handleChange({
      target: {
        name,
        value: [...formData.equipment, equipItem],
      },
    });
  };
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Equipment</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedEquipment || ""}
          name="equipment"
          label="Equipment"
          onChange={handleEquipmentChange}
        >
          {equipment.map((equipment) => (
            <MenuItem key={equipment.name} value={equipment.name}>
              {equipment.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
