import { TextField } from "@mui/material";
import { CreateCharacterScreenComponentProps } from "../../../types/playerCharacterCreation";

export default function CharacterLore({ formData, handleChange }: CreateCharacterScreenComponentProps) {
  return (
    <>
      <TextField
        id="motivation"
        onChange={handleChange}
        value={formData.motivation}
        required
        name="motivation"
        label="Motivation"
        variant="standard"
      />
      <TextField
        id="trauma"
        onChange={handleChange}
        value={formData.trauma}
        required
        name="trauma"
        label="Trauma"
        variant="standard"
      />
      <TextField
        id="darkSecret"
        onChange={handleChange}
        value={formData.darkSecret}
        required
        name="darkSecret"
        label="Dark Secret"
        variant="standard"
      />
    </>
  );
}
