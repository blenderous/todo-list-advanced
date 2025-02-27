import { TrashIcon, XIcon } from "lucide-react";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

function DeleteButton({
  id,
  handleDelete,
  editId,
  cancelEdit,
}: {
  id: number;
  handleDelete: (id: number) => void;
  editId: number | null;
  cancelEdit: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirmDelete = (id: number) => {
    // delete the task
    handleDelete(id);
    // close the dialog
    setIsOpen(false);
  };

  const handleCancelEdit = () => {
    cancelEdit();
  };

  return (
    <>
      {editId === id ? (
        <Button onClick={handleCancelEdit} className="ml-2">
          <span className="sr-only">Cancel</span>
          <XIcon />
        </Button>
      ) : (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="ml-2">
              <span className="sr-only">Delete</span>
              <TrashIcon />
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete?</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this task?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                onClick={() => handleConfirmDelete(id)}
                className="bg-destructive border-destructive-foreground"
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export default DeleteButton;
