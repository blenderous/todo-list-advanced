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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

function SortPortionMobile({
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
    <div>
      <div className="bg-background text-foreground flex justify-around items-center gap-4 rounded-md p-4 mb-4">
        <div className="p-2 flex flex-col gap-2">
          <span className="text-center">Sort by Title</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <VisuallyHidden>Sort by title</VisuallyHidden>
                {sortIcon(titleSort)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-8">
              <VisuallyHidden>
                <DropdownMenuLabel>Choose from below</DropdownMenuLabel>
              </VisuallyHidden>
              <DropdownMenuRadioGroup
                value={titleSort}
                onValueChange={setTitleSortFn}
              >
                <DropdownMenuRadioItem value="none">
                  <VisuallyHidden>
                    <span>None</span>
                  </VisuallyHidden>
                  <ArrowDownUp className="size-6 ml-2" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="ascending">
                  <VisuallyHidden>
                    <span>Ascending</span>
                  </VisuallyHidden>
                  <ArrowDownAzIcon className="size-6 ml-2" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="descending">
                  <VisuallyHidden>
                    <span>Descending</span>
                  </VisuallyHidden>
                  <ArrowDownZaIcon className="size-6 ml-2" />
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <span className="text-center">Sort by Priority</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <VisuallyHidden>Sort by priority</VisuallyHidden>
                {sortPriorityIcon(prioritySort)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-8">
              <VisuallyHidden>
                <DropdownMenuLabel>Choose from below</DropdownMenuLabel>
              </VisuallyHidden>
              <DropdownMenuRadioGroup
                value={prioritySort}
                onValueChange={setPrioritySortFn}
              >
                <DropdownMenuRadioItem value="none">
                  <VisuallyHidden>
                    <span>None</span>
                  </VisuallyHidden>
                  <ArrowDownUp className="size-6 ml-2" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="ascending">
                  <VisuallyHidden>
                    <span>Descending</span>
                  </VisuallyHidden>
                  <ArrowDownWideNarrowIcon className="size-6 ml-2" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="descending">
                  <VisuallyHidden>
                    <span>Ascending</span>
                  </VisuallyHidden>
                  <ArrowDownNarrowWideIcon className="size-6 ml-2" />
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <span className="text-center">Sort by Status</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <VisuallyHidden>Sort by status</VisuallyHidden>
                {sortStatusIcon(statusSort)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-8">
              <VisuallyHidden>
                <DropdownMenuLabel>Choose from below</DropdownMenuLabel>
              </VisuallyHidden>
              <DropdownMenuRadioGroup
                value={statusSort}
                onValueChange={setStatusSortFn}
              >
                <DropdownMenuRadioItem value="none">
                  <VisuallyHidden>
                    <span>None</span>
                  </VisuallyHidden>
                  <ArrowDownUp className="size-6 ml-2" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="ascending">
                  <VisuallyHidden>
                    <span>Descending</span>
                  </VisuallyHidden>
                  <ArrowDownWideNarrowIcon className="size-6 ml-2" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="descending">
                  <VisuallyHidden>
                    <span>Ascending</span>
                  </VisuallyHidden>
                  <ArrowDownNarrowWideIcon className="size-6 ml-2" />
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default SortPortionMobile;
