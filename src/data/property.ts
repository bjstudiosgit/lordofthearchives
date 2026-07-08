export type PropertyItem = {
  name: string;
  usedById: string;
  usedBy: string;
  usedByHref: string;
  battle: string;
  battleHref: string;
  episode: string;
  category: string;
  date: string;
  dateSort: string;
  note: string;
};

export const propertyItems: PropertyItem[] = [
  {
    name: "Tangled wig prop",
    usedById: "frizz-price",
    usedBy: "FRIZZ PRICE",
    usedByHref: "/mc/frizzprice",
    battle: "FRIZZ PRICE vs REN DMC",
    battleHref: "/battle/frizzpricevsrendmc",
    episode: "2x02",
    category: "Prop",
    date: "21 Feb 2021",
    dateSort: "2021-02-21",
    note: "Used as a visual gag.",
  },
];
