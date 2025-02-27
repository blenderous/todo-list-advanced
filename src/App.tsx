import { useEffect, useState } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TableBody from "./components/TableBody";
import TableHead from "./components/TableHead";
import { Item } from "./lib/types";
import {
  sortPriorityByAscending,
  sortPriorityByDescending,
  sortStatusByAscending,
  sortStatusByDescending,
  sortTitleByAscending,
  sortTitleByDescending,
} from "./lib/sort";
import FilterTodos from "./components/FilterTodos";
import { filterBy } from "./lib/filter";
import PaginationSetup from "./components/PaginationSetup";
import showCurrentPage from "./lib/showCurrentPage";

function App() {
  const [items, setItems] = useState<Item[] | null>(null);

  // state variables for sorting
  const [titleSort, setTitleSort] = useState("none");
  const [prioritySort, setPrioritySort] = useState("none");
  const [statusSort, setStatusSort] = useState("none");

  // state variables for filtering
  const [titleFilter, setTitleFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // state variables for pagination
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(
    (filterBy(items, titleFilter, priorityFilter, statusFilter)?.length || 0) /
      itemsPerPage
  );
  const [currentPage, setCurrentPage] = useState(1);

  const triggerNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const triggerPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [titleFilter, priorityFilter, statusFilter, itemsPerPage]);

  useEffect(() => {
    if (titleSort === "ascending") {
      setItems((prevItems) => {
        const sortedItems = sortTitleByAscending(prevItems);
        setPrioritySort("none");
        setStatusSort("none");
        return sortedItems;
      });
    } else if (titleSort === "descending") {
      setItems((prevItems) => {
        const sortedItems = sortTitleByDescending(prevItems);
        setPrioritySort("none");
        setStatusSort("none");
        return sortedItems;
      });
    }
  }, [titleSort]);

  useEffect(() => {
    if (prioritySort === "ascending") {
      setItems((prevItems) => {
        const sortedItems = sortPriorityByAscending(prevItems);
        setTitleSort("none");
        setStatusSort("none");
        return sortedItems;
      });
    } else if (prioritySort === "descending") {
      setItems((prevItems) => {
        const sortedItems = sortPriorityByDescending(prevItems);
        setTitleSort("none");
        setStatusSort("none");
        return sortedItems;
      });
    }
  }, [prioritySort]);

  useEffect(() => {
    if (statusSort === "ascending") {
      setItems((prevItems) => {
        const sortedItems = sortStatusByAscending(prevItems);
        setTitleSort("none");
        setPrioritySort("none");
        return sortedItems;
      });
    } else if (statusSort === "descending") {
      setItems((prevItems) => {
        const sortedItems = sortStatusByDescending(prevItems);
        setTitleSort("none");
        setPrioritySort("none");
        return sortedItems;
      });
    }
  }, [statusSort]);

  useEffect(() => {
    if (localStorage.getItem("items") === null) {
      fetch("/initial-tasks.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    if (items) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  useEffect(() => {
    if (localStorage.getItem("items") !== null) {
      const itemsFromLocalStorage = JSON.parse(
        localStorage.getItem("items")?.toString() || ""
      );
      setItems(itemsFromLocalStorage);
    }
  }, []);

  const handleDelete = (id: number) => {
    let updatedItems: Item[] = [];
    if (items) {
      updatedItems = items.filter((item) => item.id !== id);
    }
    setItems(updatedItems);
  };

  const handleAddTodo = (newItem: Item) => {
    let updatedItems: Item[] = [];
    if (items) {
      updatedItems = [...items, newItem];
    }
    setItems(updatedItems);
    setCurrentPage(totalPages);
  };

  const handleSaveEdit = (
    id: number,
    title: string,
    priority: string,
    status: string
  ) => {
    let updatedItems: Item[] = [];
    if (items) {
      updatedItems = items.map((item) => {
        if (item.id === id) {
          return { ...item, title, priority, status };
        }
        return item;
      });
    }
    setItems(updatedItems);
  };

  return (
    <>
      <main className="w-full h-screen p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome user!</h1>
        <section className="bg-background text-foreground">
          <FilterTodos
            titleFilter={titleFilter}
            setTitleFilter={setTitleFilter}
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
        </section>
        {/* Todos displayed in this section */}
        <section>
          <table className="w-full">
            <TableHead
              statusSort={statusSort}
              setStatusSort={setStatusSort}
              prioritySort={prioritySort}
              setPrioritySort={setPrioritySort}
              titleSort={titleSort}
              setTitleSort={setTitleSort}
            />
            <TableBody
              items={showCurrentPage(
                filterBy(items, titleFilter, priorityFilter, statusFilter),
                currentPage,
                itemsPerPage
              )}
              handleDelete={handleDelete}
              handleSaveEditProp={handleSaveEdit}
            />
          </table>
        </section>
        {/* section to add Todo */}
        <section className="bg-background text-foreground p-4">
          <AddTodoForm handleAddTodo={handleAddTodo} />
        </section>
        {/* Pagination */}
        <section className="bg-background text-foreground p-4">
          <PaginationSetup
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            currentPage={currentPage}
            totalPages={totalPages}
            triggerPreviousPage={triggerPreviousPage}
            triggerNextPage={triggerNextPage}
          />
        </section>
      </main>
    </>
  );
}

export default App;
