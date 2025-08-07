import { GameTypes } from "./game";
import { CharacterSheet } from "./playerCharacter";

export interface UserTypes {
    _id: string;
    name: string;
    email: string;
    imageUrl?: string;
    createdAt: string;
    updatedAt: string;
    games: GameTypes[];
    playerCharacters?: CharacterSheet[];
    __v: number;
}