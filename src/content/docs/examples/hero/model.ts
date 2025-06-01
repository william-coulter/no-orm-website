// TODO: Finish me.
import { type CommonQueryMethods, sql } from "slonik";
import {
  columnsFragment,
  type Id,
  row,
  type Row,
  tableFragment,
} from "./table";

export type CreateManyArgs = BaseArgs & {
  shapes: Create[];
};

export async function createMany({
  connection,
  shapes,
}: CreateManyArgs): Promise<readonly Row[]> {
  const names = shapes.map((shape) => shape.name);
  const species = shapes.map((shape) => shape.species);
  const waddleSpeeds = shapes.map((shape) => shape.waddle_speed_kph);

  const query = sql.type(row)`
    INSERT INTO ${tableFragment} (
      name,
      species,
      waddle_speed_kph
    )
    SELECT ${columnsFragment} FROM ${sql.unnest(
      [names, species, waddleSpeeds],
      ["text", "text", "numeric"],
    )}
    RETURNING ${columnsFragment}`;

  return connection.any(query);
}

export type CreateArgs = BaseArgs & {
  shape: Create;
};

export async function create({ connection, shape }: CreateArgs): Promise<Row> {
  const result = await createMany({ connection, shapes: [shape] });
  return result[0];
}

export type GetManyArgs = BaseArgs & {
  ids: number[];
};

export async function getMany({
  connection,
  ids,
}: GetManyArgs): Promise<readonly Row[]> {
  const query = sql.type(row)`
    SELECT ${columnsFragment}
    FROM ${tableFragment}
    WHERE id = ANY(${sql.array(ids, "INT")})`;

  return connection.any(query);
}

type GetArgs = BaseArgs & {
  id: Id;
};

export async function get({ connection, id }: GetArgs): Promise<Row> {
  const result = await getMany({ connection, ids: [id] });
  return result[0];
}

// STARTHERE: Do an update many.

export function update({ connection, newRow }: UpdateArgs): Promise<Row> {
  const query = sql.type(row)`
    UPDATE ${tableFragment} SET
      job = ${newRow.job},
      patch = ${newRow.patch},
      scraped_patch = ${newRow.scraped_patch},
      scraped_lolalytics = ${newRow.scraped_lolalytics},
      scraped_gol = ${newRow.scraped_gol},
      processed_data = ${newRow.processed_data}
    WHERE id = ${newRow.id}
    RETURNING ${columnsFragment}`;

  return connection.one(query);
}

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

type UpdateArgs = BaseArgs & {
  newRow: Row;
};

type FindByJobArgs = BaseArgs & {
  job: JobId;
};

export function findByJob({
  connection,
  job,
}: FindByJobArgs): Promise<Row | null> {
  const query = sql.type(row)`
    SELECT ${columnsFragment} 
    FROM ${tableFragment}
    WHERE job = ${job}`;

  return connection.maybeOne(query);
}

type BaseArgs = { connection: CommonQueryMethods };
