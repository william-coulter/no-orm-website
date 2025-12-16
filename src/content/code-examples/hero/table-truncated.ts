import { z } from "zod";
import { type CommonQueryMethods, type ListSqlToken, sql } from "slonik";

export const row = z.object({
  id: z.number().brand<"public.penguins.id">(),
  name: z.string(),
  species: z.string(),
  waddle_speed_kph: z.number(),
  favourite_snack: z.string().nullable(),
  date_of_birth: z.date(),
});

export type Row = z.infer<typeof row>;

export type Id = Row["id"];

// ...
