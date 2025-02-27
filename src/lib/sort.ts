import { Item } from "./types";

export const sortTitleByAscending = (items: Item[] | null): Item[] | null => {
  return items
    ? [...items].sort((a, b) => a.title.localeCompare(b.title))
    : null;
};

export const sortTitleByDescending = (items: Item[] | null): Item[] | null => {
  return items
    ? [...items].sort((a, b) => b.title.localeCompare(a.title))
    : null;
};

const priorityOrder = ["urgent", "high", "medium", "low", "none"];

export const sortPriorityByAscending = (
  items: Item[] | null
): Item[] | null => {
  return items
    ? [...items].sort(
        (a, b) =>
          priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
      )
    : null;
};

export const sortPriorityByDescending = (
  items: Item[] | null
): Item[] | null => {
  return items
    ? [...items].sort(
        (a, b) =>
          priorityOrder.indexOf(b.priority) - priorityOrder.indexOf(a.priority)
      )
    : null;
};

const statusOrder = ["completed", "in_progress", "not_started"];

export const sortStatusByAscending = (items: Item[] | null): Item[] | null => {
  return items
    ? [...items].sort(
        (a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
      )
    : null;
};

export const sortStatusByDescending = (items: Item[] | null): Item[] | null => {
  return items
    ? [...items].sort(
        (a, b) => statusOrder.indexOf(b.status) - statusOrder.indexOf(a.status)
      )
    : null;
};
