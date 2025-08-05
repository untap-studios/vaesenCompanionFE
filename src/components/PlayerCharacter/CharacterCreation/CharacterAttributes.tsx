import { TextField } from "@mui/material";
import { ChangeEvent } from "../../../types/events";
import { CreateCharacterScreenComponentProps } from "../../../types/playerCharacterCreation";

export default function CharacterAttributes({ formData, handleChange }: CreateCharacterScreenComponentProps) {
    const handleAttributeChange = (e: ChangeEvent) => {
        const { name, value } = e.target;
        const attribute = {
            name,
            value: parseInt(value, 10) || 0,
        }
        handleChange({
          target: { name: "attributes", value: [...formData.attributes, attribute] },
        });
      };
  return (
    <>
      <TextField
        id="physique"
        onChange={handleAttributeChange}
        value={formData.physique}
        required
        type="number"
        name="physique"
        label="Physique"
        variant="standard"
      />
      <TextField
        id="precision"
        onChange={handleAttributeChange}
        value={formData.precision}
        type="number"
        required
        name="precision"
        label="Precision"
        variant="standard"
      />
      <TextField
        id="logic"
        onChange={handleAttributeChange}
        value={formData.logic}
        type="number"
        required
        name="logic"
        label="Logic"
        variant="standard"
      />
      <TextField
        id="empathy"
        onChange={handleAttributeChange}
        value={formData.empathy}
        type="number"
        required
        name="empathy"
        label="Empathy"
        variant="standard"
      />
    </>
  );
}
