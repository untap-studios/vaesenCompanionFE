import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { CreateCharacterScreenComponentProps } from "../../../types/playerCharacterCreation";
import { Equipment } from "../../../types/playerCharacter";
import { SelectEvent } from "../../../types/events";

export default function CharacterEquipment({
  formData,
  handleChange,
}: CreateCharacterScreenComponentProps) {
  const [selectedEquipment, setSelectedEquipment] = React.useState<string | null>(null);

  const equipment: Equipment[] = [
    {
      name: "fieldKitchen",
      label: "Field Kitchen",
      description: "Cook food on the go",
      bonus: 0,
    },
    {
      name: "knife",
      label: "Knife",
      description: "A sharp blade",
      bonus: 1,
    },
  ];

  const handleEquipmentChange = (e: SelectEvent) => {
    const { name, value } = e.target;
    const equipItem = equipment.find((equip) => equip.name === value) || {
      name: "",
      description: "",
      bonus: 0,
    };

    setSelectedEquipment(equipItem.name);
    handleChange({
      target: {
        name: name || "equipment",
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
          {equipment.map((equip) => (
            <MenuItem key={equip.name} value={equip.name}>
              {equip.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
