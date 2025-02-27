import { Item } from "./types";

function showCurrentPage(
  items: Item[] | null,
  currentPage: number,
  itemsPerPage: number
): Item[] | null {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  return items ? items.slice(indexOfFirstItem, indexOfLastItem) : null;
}

export default showCurrentPage;
