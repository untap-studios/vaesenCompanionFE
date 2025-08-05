import { Box, TextField } from "@mui/material";
import { CreateCharacterScreenComponentProps } from "../../../types/playerCharacterCreation";
import { ChangeEvent } from "../../../types/events";

export default function CharacterSkillsAndResources({
  formData,
  handleChange,
}: CreateCharacterScreenComponentProps) {
  const skillAttributeOptions: {[key: string]: string}  = {
    agility: "Physique",
    closeCombat: "Physique",
    force: "Physique",
    medicine: "Precision",
    rangedCombat: "Precision",
    stealth: "Precision",
    investigation: "Logic",
    learning: "Logic",
    vigilance: "Logic",
    inspiration: "Empathy",
    manipulation: "Empathy",
    observation: "Empathy",
  };

  const handleSkillChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    const skill = {
      name,
      value: parseInt(value, 10) || 0,
      attributeType: skillAttributeOptions[name] || "Unknown",
    };
    handleChange({
      target: {
        name: "skills",
        value: [...formData.skills, skill],
      },
    });
  };
  return (
    <>
      <Box>
        <TextField
          id="resources"
          onChange={handleChange}
          value={formData.resources}
          required
          type="number"
          name="resources"
          label="Resources"
          variant="standard"
        />
      </Box>
      <TextField
        id="agility"
        onChange={handleSkillChange}
        value={formData.skills.find((skill) => skill?.name === "agility")?.value || 0}
        required
        type="number"
        name="agility"
        label="Agility"
        variant="standard"
      />
      <TextField
        id="closeCombat"
        onChange={handleSkillChange}
        value={formData.skills.find((skill) => skill?.name === "closeCombat")?.value || 0}
        type="number"
        required
        name="closeCombat"
        label="Close Combat"
        variant="standard"
      />
      <TextField
        id="force"
        onChange={handleSkillChange}
        value={formData.skills.find((skill) => skill?.name === "force")?.value || 0}
        type="number"
        required
        name="force"
        label="Force"
        variant="standard"
      />
      <TextField
        id="medicine"
        onChange={handleSkillChange}
        value={formData.skills.find((skill) => skill?.name === "medicine")?.value || 0}
        type="number"
        required
        name="medicine"
        label="Medicine"
        variant="standard"
      />
      <TextField
        id="rangedCombat"
        onChange={handleSkillChange}
        value={formData.skills.find((skill) => skill?.name === "rangedCombat")?.value || 0}
        type="number"
        required
        name="rangedCombat"
        label="Ranged Combat"
        variant="standard"
      />
      <TextField
        id="stealth"
        onChange={handleSkillChange}
        value={formData.skills.find((skill) => skill?.name === "stealth")?.value || 0}
        type="number"
        required
        name="stealth"
        label="Stealth"
        variant="standard"
      />
      <TextField
        id="investigation"
        onChange={handleSkillChange}
        value={formData.skills.find((skill) => skill?.name === "investigation")?.value || 0}
        type="number"
        required
        name="investigation"
        label="Investigation"
        variant="standard"
      />
      <TextField
        id="learning"
        onChange={handleSkillChange}
        value={formData.skills.find((skill) => skill?.name === "learning")?.value || 0}
        type="number"
        required
        name="learning"
        label="Learning"
        variant="standard"
      />
      <TextField
        id="vigilance"
        onChange={handleSkillChange}
        value={formData.skills.find((skill) => skill?.name === "vigilance")?.value || 0}
        type="number"
        required
        name="vigilance"
        label="Vigilance"
        variant="standard"
      />
      <TextField
        id="inspiration"
        onChange={handleSkillChange}
        value={formData.skills.find((skill) => skill?.name === "inspiration")?.value || 0}
        type="number"
        required
        name="inspiration"
        label="Inspiration"
        variant="standard"
      />
      <TextField
        id="manipulation"
        onChange={handleSkillChange}
        value={formData.skills.find((skill) => skill?.name === "manipulation")?.value || 0}
        type="number"
        required
        name="manipulation"
        label="Manipulation"
        variant="standard"
      />
      <TextField
        id="observation"
        onChange={handleSkillChange}
        value={formData.skills.find((skill) => skill?.name === "observation")?.value || 0}
        type="number"
        required
        name="observation"
        label="Observation"
        variant="standard"
      />
    </>
  );
}
