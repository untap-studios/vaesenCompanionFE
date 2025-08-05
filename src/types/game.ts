import { UserTypes } from "./user";

export interface GameTypes {
    _id: string;
    name: string;
    image?: string;
    description?: string;
    users?: UserTypes[];
    playerCharacters?: string[];
    nonPlayerCharacters?: string[];
    createdAt?: Date;
  }