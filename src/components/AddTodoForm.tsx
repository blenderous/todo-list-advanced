import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Item } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function AddTodoForm({
  handleAddTodo,
}: {
  handleAddTodo: (item: Item) => void;
}) {
  const formSchema = z.object({
    title: z
      .string()
      .min(2, {
        message: "Title must be at least 2 characters.",
      })
      .max(50, {
        message: "Title must be less than 50 characters.",
      }),
    priority: z.enum(["none", "low", "medium", "high", "urgent"]),
    status: z.enum(["not_started", "in_progress", "completed"]),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      priority: "none",
      status: "not_started",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleAddTodo({
      id: Math.floor(Math.random() * 1000),
      title: values.title,
      priority: values.priority,
      status: values.status,
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-row items-start justify-between gap-4 py-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <VisuallyHidden>
                <FormLabel>Title</FormLabel>
              </VisuallyHidden>
              <FormControl>
                <Input className="w-[300px]" placeholder="Title" {...field} />
              </FormControl>
              <VisuallyHidden>
                <FormDescription>
                  This is the title of your todo item.
                </FormDescription>
              </VisuallyHidden>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <VisuallyHidden>
                <FormLabel>Priority</FormLabel>
              </VisuallyHidden>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <SelectTrigger className="w-[180px]">
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
              </FormControl>
              <VisuallyHidden>
                <FormDescription>
                  This is the priority of your todo item.
                </FormDescription>
              </VisuallyHidden>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <VisuallyHidden>
                <FormLabel>Status</FormLabel>
              </VisuallyHidden>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="not_started">Not Started</SelectItem>
                    <SelectItem value="in_progress">In progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <VisuallyHidden>
                <FormDescription>
                  This is the status of your todo item.
                </FormDescription>
              </VisuallyHidden>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-2">
          <Button type="submit">Add Todo</Button>
        </div>
      </form>
    </Form>
  );
}

export default AddTodoForm;
