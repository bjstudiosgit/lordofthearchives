export interface CreditPerson {
  id: string;
  slug: string;
  name: string;
  role: "Host" | "Judge";
  bio: string;
}

export const creditPeople: CreditPerson[] = [
  {
    id: "margs-andre-wright",
    slug: "margs-andre-wright",
    name: "Margs (Andre Wright)",
    role: "Host",
    bio: "Margs, also credited as Andre Wright, hosts PenGame battles with a steady presence that keeps the room moving, frames the contest for the audience, and gives the artists space to perform. His role in these early fixtures helps hold the event together, especially when battles shift under pressure or last-minute changes.",
  },
  {
    id: "lippy-lickshot",
    slug: "lippy-lickshot",
    name: "Lippy Lickshot",
    role: "Judge",
    bio: "Lippy Lickshot appears as a PenGame judge, weighing battle performance through both artistry and competitive effectiveness. His feedback helps separate raw musical ability from battle-specific preparation, directness, and impact in the room.",
  },
  {
    id: "lv-general",
    slug: "lv-general",
    name: "LV General",
    role: "Judge",
    bio: "LV General serves as part of the judging panel for these PenGame clashes, helping assess who controlled the battle through delivery, crowd reaction, direct attacks, and overall round structure.",
  },
  {
    id: "joe-black",
    slug: "joe-black",
    name: "Joe Black",
    role: "Judge",
    bio: "Joe Black is credited as a judge on these PenGame battles, contributing to the final decision by reading the balance between performance, lyricism, preparation, and how each battler handled the pressure of the room.",
  },
];

export const getCreditPersonByName = (name: string) =>
  creditPeople.find((person) => person.name.toLowerCase() === name.toLowerCase());
