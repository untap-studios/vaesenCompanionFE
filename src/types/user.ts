import { CharacterSheet } from "./playerCharacter";

export interface UserTypes {
    _id: string;
    name: string;
    email: string;
    image?: string;
    createdAt: string;
    updatedAt: string;
    playerCharacters?: CharacterSheet[];
    __v: number;
}