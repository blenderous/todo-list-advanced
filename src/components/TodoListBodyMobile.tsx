import { Item } from "@/lib/types";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { cn } from "@/lib/utils";

type TodoListBodyMobileProps = {
  items: Item[] | null;
  handleDelete: (id: number) => void;
  handleSaveEditProp: (
    id: number,
    title: string,
    priority: string,
    status: string
  ) => void;
};

function TodoListBodyMobile({
  items,
  handleDelete,
  handleSaveEditProp,
}: TodoListBodyMobileProps) {
  const [editId, setEditId] = useState<number | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [priority, setPriority] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const handleEdit = (
    id: number | null,
    titleProp: string | null,
    priorityProp: string | null,
    statusProp: string | null
  ) => {
    setEditId(id);
    setTitle(titleProp);
    setPriority(priorityProp);
    setStatus(statusProp);
  };
  const handleSaveEdit = () => {
    if (
      editId === null ||
      title === null ||
      priority === null ||
      status === null
    )
      return;
    handleSaveEditProp(editId, title, priority, status);
    setEditId(null);
  };
  return (
    <div className="flex flex-col gap-2">
      {items?.map((item) => (
        <div
          className="bg-background text-foreground rounded-md flex justify-between items-start"
          key={item.id}
        >
          <div className="p-4 flex flex-col gap-2">
            {editId === item.id ? (
              <>
                <Input
                  type="text"
                  className="w-full"
                  defaultValue={item.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </>
            ) : (
              <>{item.title}</>
            )}
            {editId === item.id ? (
              <MobilePriorityEdit
                priority={item.priority}
                setPriority={(value) => setPriority(value)}
              />
            ) : (
              <MobilePriority priority={item.priority} />
            )}
            {editId === item.id ? (
              <MobileStatusEdit
                status={item.status}
                setStatus={(value) => setStatus(value)}
              />
            ) : (
              <MobileStatus status={item.status} />
            )}
          </div>
          <div className="p-4">
            <EditButton
              handleEdit={handleEdit}
              id={item.id}
              editId={editId}
              editTitle={item.title}
              editPriority={item.priority}
              editStatus={item.status}
              handleSaveEdit={handleSaveEdit}
            />
            <DeleteButton
              handleDelete={handleDelete}
              id={item.id}
              editId={editId}
              cancelEdit={() => setEditId(null)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoListBodyMobile;

function MobileStatusEdit({
  status,
  setStatus,
}: {
  status: string;
  setStatus: (value: string) => void;
}) {
  return (
    <>
      <Select defaultValue={status} onValueChange={(value) => setStatus(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="not_started">Not started</SelectItem>
          <SelectItem value="in_progress">In progress</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}

function MobileStatus({ status }: { status: string }) {
  let statusColor = "";
  let statusText = "";
  if (status === "completed") {
    statusColor = "bg-green-500";
    statusText = "Completed";
  } else if (status === "in_progress") {
    statusColor = "bg-yellow-500";
    statusText = "In progress";
  } else if (status === "not_started") {
    statusColor = "bg-red-500";
    statusText = "Not started";
  }
  return (
    <div>
      <span className={cn("inline-block px-2 py-1 rounded-full", statusColor)}>
        {statusText}
      </span>
    </div>
  );
}

function MobilePriorityEdit({
  priority,
  setPriority,
}: {
  priority: string;
  setPriority: (value: string) => void;
}) {
  return (
    <div className="flex gap-2 items-center">
      <span>Priority:</span>
      <Select
        defaultValue={priority}
        onValueChange={(value) => setPriority(value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">None</SelectItem>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="urgent">Urgent</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

function MobilePriority({ priority }: { priority: string }) {
  let text = priority.charAt(0).toUpperCase() + priority.slice(1);
  return (
    <div className="flex gap-2 items-center">
      <span>Priority:</span>
      <span>{text}</span>
    </div>
  );
}
