import { Item } from "./types";

export const filterBy = (
  items: Item[] | null,
  title: string,
  priority: string,
  status: string
): Item[] | null => {
  return items
    ? [...items]
        .filter((item) =>
          item.title.toLowerCase().includes(title.toLowerCase())
        )
        .filter((item) => {
          if (
            item.priority === priority ||
            priority === "all" ||
            priority === ""
          )
            return item;
        })
        .filter((item) => {
          if (item.status === status || status === "all" || status === "")
            return item;
        })
    : null;
};
