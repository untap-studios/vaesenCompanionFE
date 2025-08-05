export interface PlayerCharacter {
  name: string;
  image?: string;
  characterSheet?: CharacterSheet;
  game?: string;
  user?: string;
}

export interface Relationship {
    characterName: string;
    relationshipDescription?: string;
  }
  
  export interface Talent {
    name: string;
    description?: string;
  }
  
  export interface Advantage {
    name?: string;
    description?: string;
  }
  
  export interface InsightOrDefect {
    name?: string;
    description?: string;
  }
  
  export interface Equipment {
    name: string;
    label?: string;
    description?: string;
    bonus?: number;
  }
  
  export interface Armor {
    name?: string;
    description?: string;
    protection?: number;
    agility?: number;
  }
  
  export interface Weapon {
    name: string;
    description?: string;
    damage?: number;
    label?: string;
    longRange?: number;
    shortRange?: number;
    bonus?: number;
  }
  
  export interface Memento {
    name: string;
    description?: string;
  }
  
  export interface Attribute {
    name: string;
    value?: number;
  }
  
  export interface Condition {
    type?: string;
    name?: string;
    description?: string;
    value?: number;
  }
  
  export interface Skill {
    name: string;
    attributeType?: string;
    value?: number;
  }
  
  export interface CharacterSheet {
    _id: string;
    image: string;
    name: string;
    age: number;
    archetype?: string;
    motivation?: string;
    trauma?: string;
    darkSecret?: string;
    relationships?: Relationship[];
    talents?: Talent[];
    advantages?: Advantage[];
    insightsAndDefects?: InsightOrDefect[];
    equipment?: Equipment[];
    armor?: Armor[];
    weapons?: Weapon[];
    mementos?: Memento[];
    attributes?: Attribute[];
    resources?: number;
    conditions?: Condition[];
    skills?: Skill[];
    experiencePoints?: number;
    owner: string;
  }