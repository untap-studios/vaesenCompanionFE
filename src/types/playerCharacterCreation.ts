import { Equipment, Memento, Relationship, Skill } from "./playerCharacter";

export interface CreateCharacterFormData {
  name: string;
  image: string;
  age: number;
  archetype: string;
  motivation: string;
  trauma: string;
  darkSecret: string;
  relationships: Relationship[];
  talents: string[];
  equipment: Equipment[];
  weapons: string[];
  mementos: Memento[];
  attributes: { name: string; value: number }[];
  resources: number;
  skills: Skill[];
  physique?: number;
  precision?: number;
  logic?: number;
  empathy?: number;
};

// Define types for screens
export type ScreenKey =
  | "nameAndAge"
  | "archetype"
  | "characterLore"
  | "characterAttributes"
  | "characterSkillsAndResources"
  | "characterTalents"
  | "characterRelationships"
  | "characterMementos"
  | "characterEquipment"
  | "CharacterWeapons";

export type CreateCharacterScreenComponentProps = {
  formData: CreateCharacterFormData;
  handleChange: (e: any) => void;
};
