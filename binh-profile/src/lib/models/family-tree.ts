export type Gender = "M" | "F";

export type Person = {
  id: number;
  name: string;
  married: boolean;
  spouse: number;
  gender: Gender;
  birthday_year: number;
  birthday_month?: number;
  birthday_day?: number;
};

export type Family = {
  layer: number;
  id: number;
  couple: Person[];
  children: Family[];
  parents: number;
};

export type FamilyTree = {
  layer: number;
  family: Family[];
};
