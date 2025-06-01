// TODO: Finish me.
import { type CommonQueryMethods, sql } from "slonik";
import {
  columnsFragment,
  type Id,
  row,
  type Row,
  type Create,
  tableFragment,
} from "./table";

type GetArgs = BaseArgs & {
  id: Id;
};

// TODO: Do the `getMany` pattern and have this call that.
/**
 * Given a verified id will return a `Row`.
 */
export function get({ connection, id }: GetArgs): Promise<Row> {
  const query = sql.type(row)`
    SELECT ${columnsFragment} 
    FROM ${tableFragment}
    WHERE id = ${id}`;

  return connection.one(query);
}

type CreateArgs = BaseArgs & {
  shape: Create;
};

export function create({ connection, shape }: CreateArgs): Promise<Row> {
  const query = sql.type(row)`
    INSERT INTO ${tableFragment} (
      job
    ) VALUES (
      ${shape.name}
    )
    RETURNING ${columnsFragment}`;

  return connection.one(query);
}

type UpdateArgs = BaseArgs & {
  newRow: Row;
};

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
