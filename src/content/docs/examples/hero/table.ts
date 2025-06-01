// TODO: Finish me.
import { z } from "zod";
import { sql } from "slonik";

export const row = z.object({
  id: z.number().brand<"public.penguins">(),
  name: z.string(),
  species: z.string(),
  waddle_speed_kph: z.number(),
});

export type Row = z.infer<typeof row>;

export type Id = Row["id"];

export type Create = {
  name: string;
  species: string;
  waddle_speed_kph: number;
};

export type Update = {
  name: string;
  species: string;
  waddle_speed_kph: number;
};

export const tableFragment = sql.identifier(["public", "penguins"]);

export const columns = Object.keys(row.shape).map((col) =>
  sql.identifier([col]),
);

export const columnsFragment = sql.join(columns, sql.fragment`, `);
