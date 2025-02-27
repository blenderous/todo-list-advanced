import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function FilterTodos({
  titleFilter,
  setTitleFilter,
  priorityFilter,
  setPriorityFilter,
  statusFilter,
  setStatusFilter,
}: {
  titleFilter: string;
  setTitleFilter: (value: string) => void;
  priorityFilter: string;
  setPriorityFilter: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
}) {
  return (
    <div className="flex justify-between items-center p-4 gap-4">
      <Input
        type="text"
        placeholder="Search"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <Select
        defaultValue={priorityFilter}
        onValueChange={(value) => setPriorityFilter(value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="none">None</SelectItem>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="urgent">Urgent</SelectItem>
        </SelectContent>
      </Select>
      <Select
        defaultValue={statusFilter}
        onValueChange={(value) => setStatusFilter(value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="not_started">Not started</SelectItem>
          <SelectItem value="in_progress">In progress</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default FilterTodos;
