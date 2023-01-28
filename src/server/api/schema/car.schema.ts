import { object, string } from "zod";

export const createCarSchema = object({
  title: string({
    required_error: "Title is required",
  }),
  img: string({
    required_error: "Content is required",
  }),
});
