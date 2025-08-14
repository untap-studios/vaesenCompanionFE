import { UserTypes } from "./user";

export interface GameTypes {
    _id: string;
    name: string;
    imageUrl?: string;
    description?: string;
    users?: UserTypes[];
    playerCharacters?: string[];
    nonPlayerCharacters?: string[];
    createdAt?: Date;
  }