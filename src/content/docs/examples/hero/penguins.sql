CREATE TABLE penguins (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  species TEXT NOT NULL,
  waddle_speed_kph NUMERIC
);

CREATE TYPE flight_technique AS ENUM (
  'ski_jump',
  'hang_glider',
  'catapult'
);

CREATE TABLE flight_attempts (
  id SERIAL PRIMARY KEY,
  penguin INTEGER NOT NULL REFERENCES penguins(id),
  technique flight_technique NOT NULL,
  altitude_m INTEGER NOT NULL,
  success BOOLEAN NOT NULL,
  failure_reason TEXT,
  attempted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),

  CHECK (
    success = TRUE OR failure_reason IS NOT NULL
  )
);

CREATE INDEX ON flight_attempts (penguin_id);
