import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";

function PaginationSetup({
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  totalPages,
  triggerPreviousPage,
  triggerNextPage,
}: {
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
  currentPage: number;
  totalPages: number;
  triggerPreviousPage: () => void;
  triggerNextPage: () => void;
}) {
  const handlePreviousClick = () => {
    triggerPreviousPage();
  };

  const handleNextClick = () => {
    triggerNextPage();
  };

  return (
    <>
      <div className="mt-4 flex justify-center items-center gap-4">
        <div className="flex items-center">
          <Select
            defaultValue={itemsPerPage.toString()}
            onValueChange={(value) => setItemsPerPage(Number(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Items per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-primary text-white p-2"
            onClick={handlePreviousClick}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon />
          </button>
          <span className="p-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="bg-primary text-white p-2"
            onClick={handleNextClick}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default PaginationSetup;
