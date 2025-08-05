import { TextField } from "@mui/material";
import { CreateCharacterScreenComponentProps } from "../../../types/playerCharacterCreation";

export default function NameAndAge({ formData, handleChange }: CreateCharacterScreenComponentProps) {
  return (
    <>
      <TextField
        id="name"
        onChange={handleChange}
        value={formData.name}
        required
        name="name"
        label="Name"
        variant="standard"
      />
      <TextField
        id="image"
        onChange={handleChange}
        value={formData.image}
        required
        name="image"
        label="image"
        variant="standard"
      />
      <TextField
        id="age"
        onChange={handleChange}
        value={formData.age}
        required
        name="age"
        type="number"
        label="Age"
        variant="standard"
      />
    </>
  );
}
