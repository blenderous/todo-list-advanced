import { PencilIcon, SaveIcon } from "lucide-react";
import { Button } from "./ui/button";

function EditButton({
  id,
  handleEdit,
  editId,
  editTitle,
  editPriority,
  editStatus,
  handleSaveEdit,
}: {
  id: number;
  handleEdit: (
    id: number,
    title: string | null,
    priority: string | null,
    status: string | null
  ) => void;
  editId: number | null;
  editTitle: string | null;
  editPriority: string | null;
  editStatus: string | null;
  handleSaveEdit: (
    editId: number,
    editTitle: string | null,
    editPriority: string | null,
    editStatus: string | null
  ) => void;
}) {
  function handleEditItem(
    id: number,
    editTitle: string | null,
    editPriority: string | null,
    editStatus: string | null
  ) {
    handleEdit(id, editTitle, editPriority, editStatus);
  }

  function handleSaveEditItem(
    editId: number,
    editTitle: string | null,
    editPriority: string | null,
    editStatus: string | null
  ) {
    handleSaveEdit(editId, editTitle, editPriority, editStatus);
  }

  return (
    <>
      {editId === id ? (
        <Button
          onClick={() =>
            handleSaveEditItem(editId, editTitle, editPriority, editStatus)
          }
        >
          <span className="sr-only">Save</span>
          <SaveIcon />
        </Button>
      ) : (
        <Button
          onClick={() =>
            handleEditItem(id, editTitle, editPriority, editStatus)
          }
        >
          <span className="sr-only">Edit</span>
          <PencilIcon />
        </Button>
      )}
    </>
  );
}

export default EditButton;
