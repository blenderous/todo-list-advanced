import { Item } from "@/lib/types";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TableBody({
  items,
  handleDelete,
  handleSaveEditProp,
}: {
  items: Item[] | null;
  handleDelete: (id: number) => void;
  handleSaveEditProp: (
    id: number,
    title: string,
    priority: string,
    status: string
  ) => void;
}) {
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
    <>
      <tbody className="bg-background text-foreground">
        {items?.map((item) => (
          <tr key={item.id}>
            {editId === item.id ? (
              <td className="py-2 px-6">
                <Input
                  type="text"
                  className="w-full"
                  defaultValue={item.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </td>
            ) : (
              <td className="py-2 px-6">{item.title}</td>
            )}
            {editId === item.id ? (
              <TdPriorityEdit
                priority={item.priority}
                setPriority={(value) => setPriority(value)}
              />
            ) : (
              <TdPriority priority={item.priority} />
            )}
            {editId === item.id ? (
              <TdStatusEdit
                status={item.status}
                setStatus={(value) => setStatus(value)}
              />
            ) : (
              <TdStatus status={item.status} />
            )}
            <td className="p-2">
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
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default TableBody;

function TdStatusEdit({
  status,
  setStatus,
}: {
  status: string;
  setStatus: (value: string) => void;
}) {
  return (
    <td className="p-2">
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
    </td>
  );
}

function TdStatus({ status }: { status: string }) {
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
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full ${statusColor}`}>
        {statusText}
      </span>
    </td>
  );
}

function TdPriorityEdit({
  priority,
  setPriority,
}: {
  priority: string;
  setPriority: (value: string) => void;
}) {
  return (
    <td className="p-2">
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
    </td>
  );
}

function TdPriority({ priority }: { priority: string }) {
  let text = priority.charAt(0).toUpperCase() + priority.slice(1);
  return <td className="p-2">{text}</td>;
}
