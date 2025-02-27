import {
  ArrowDownAzIcon,
  ArrowDownNarrowWideIcon,
  ArrowDownUp,
  ArrowDownWideNarrowIcon,
  ArrowDownZaIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function sortIcon(sortType: string) {
  switch (sortType) {
    case "ascending":
      return <ArrowDownAzIcon className="size-6" />;
    case "descending":
      return <ArrowDownZaIcon className="size-6" />;
    default:
      return <ArrowDownUp className="size-6" />;
  }
}

function sortPriorityIcon(sortType: string) {
  switch (sortType) {
    case "ascending":
      return <ArrowDownWideNarrowIcon className="size-6" />;
    case "descending":
      return <ArrowDownNarrowWideIcon className="size-6" />;
    default:
      return <ArrowDownUp className="size-6" />;
  }
}

function sortStatusIcon(sortType: string) {
  switch (sortType) {
    case "ascending":
      return <ArrowDownWideNarrowIcon className="size-6" />;
    case "descending":
      return <ArrowDownNarrowWideIcon className="size-6" />;
    default:
      return <ArrowDownUp className="size-6" />;
  }
}

function TableHead({
  titleSort,
  setTitleSort,
  prioritySort,
  setPrioritySort,
  statusSort,
  setStatusSort,
}: {
  titleSort: string;
  setTitleSort: (value: string) => void;
  prioritySort: string;
  setPrioritySort: (value: string) => void;
  statusSort: string;
  setStatusSort: (value: string) => void;
}) {
  const setTitleSortFn = (value: string) => {
    setTitleSort(value);
  };
  const setPrioritySortFn = (value: string) => {
    setPrioritySort(value);
  };
  const setStatusSortFn = (value: string) => {
    setStatusSort(value);
  };
  return (
    <thead>
      <tr className="bg-background text-foreground sticky top-0">
        <th className="p-2">
          Title
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-2">
                <VisuallyHidden>Sort by title</VisuallyHidden>
                {sortIcon(titleSort)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <VisuallyHidden>
                <DropdownMenuLabel>Choose from below</DropdownMenuLabel>
              </VisuallyHidden>
              <DropdownMenuRadioGroup
                value={titleSort}
                onValueChange={setTitleSortFn}
              >
                <DropdownMenuRadioItem value="none">
                  <span>None</span>
                  <ArrowDownUp className="size-6 ml-2" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="ascending">
                  <span>Ascending</span>
                  <ArrowDownAzIcon className="size-6 ml-2" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="descending">
                  <span>Descending</span>
                  <ArrowDownZaIcon className="size-6 ml-2" />
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </th>
        <th className="p-2">
          Priority
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-2">
                <VisuallyHidden>Sort by priority</VisuallyHidden>
                {sortPriorityIcon(prioritySort)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <VisuallyHidden>
                <DropdownMenuLabel>Choose from below</DropdownMenuLabel>
              </VisuallyHidden>
              <DropdownMenuRadioGroup
                value={prioritySort}
                onValueChange={setPrioritySortFn}
              >
                <DropdownMenuRadioItem value="none">
                  <span>None</span>
                  <ArrowDownUp className="size-6 ml-2" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="ascending">
                  <span>Descending</span>
                  <ArrowDownWideNarrowIcon className="size-6 ml-2" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="descending">
                  <span>Ascending</span>
                  <ArrowDownNarrowWideIcon className="size-6 ml-2" />
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </th>
        <th className="p-2">
          Status
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-2">
                <VisuallyHidden>Sort by status</VisuallyHidden>
                {sortStatusIcon(statusSort)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <VisuallyHidden>
                <DropdownMenuLabel>Choose from below</DropdownMenuLabel>
              </VisuallyHidden>
              <DropdownMenuRadioGroup
                value={statusSort}
                onValueChange={setStatusSortFn}
              >
                <DropdownMenuRadioItem value="none">
                  <span>None</span>
                  <ArrowDownUp className="size-6 ml-2" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="ascending">
                  <span>Descending</span>
                  <ArrowDownWideNarrowIcon className="size-6 ml-2" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="descending">
                  <span>Ascending</span>
                  <ArrowDownNarrowWideIcon className="size-6 ml-2" />
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </th>
        <th className="p-2">
          <span className="sr-only">Edit or Delete</span>
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
