import { Box, Typography } from "@mui/material";
import { CreateCharacterScreenComponentProps } from "../../../types/playerCharacterCreation";

export default function CharacterArchetype({ formData, handleChange }: CreateCharacterScreenComponentProps) {
  const archetypeOptions = [
    {
      value: "Academic",
      label: "Good at researching, learning, and providing information",
    },
    { value: "Doctor", label: "Good at treating wounds and forensic analysis" },
    { value: "Hunter", label: "Good at tracking and ranged combat" },
    {
      value: "Occultist",
      label: "Good at stealth and tapping into supernatural forces",
    },
    { value: "Officer", label: "Good at ranged combat and leading others" },
    {
      value: "Priest",
      label: "Good at observation and healing others emotionally",
    },
    {
      value: "Private Detective",
      label: "Good at finding and analyzing clues",
    },
    { value: "Servant", label: "Good at physical challenges and endurance" },
    {
      value: "Vagabond",
      label: "Good at physical challenges and manipulating others",
    },
    { value: "Writer", label: "Good at understanding and inspiring others" },
    {
      value: "Socialite",
      label: "Good at talking with others and influencing them",
    },
    {
      value: "Athlete",
      label: "Good at physical challenges based on their chosen sport",
    },
    {
      value: "Entertainer",
      label: "Good at understanding and manipulating others",
    },
  ];

  const handleArchetypeChange = (archetype: string) => {
    handleChange({
      target: { name: "archetype", value: archetype },
    });
  };

  return (
    <>
      <Typography>Character Archetype</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {archetypeOptions.map((option) => (
          <Box
            onClick={() => handleArchetypeChange(option.value)}
            key={option.value}
            sx={{ padding: 1, border: "1px solid #ccc", borderRadius: 2, borderColor: formData.archetype === option.value ? "green" : "grey.400", cursor: "pointer" }}
          >
            <Typography variant="body1">{option.value}</Typography>
            <Typography variant="body2" color="textSecondary">
              {option.label}
            </Typography>
          </Box>
        ))}
        
      </Box>
    </>
  );
}
