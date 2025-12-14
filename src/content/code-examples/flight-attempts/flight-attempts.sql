CREATE TABLE flight_attempts (
  id SERIAL PRIMARY KEY,
  penguin INT NOT NULL REFERENCES penguins(id),
  method flight_attempt_method NOT NULL,
  attempted_at TIMESTAMP WITH TIME ZONE NOT NULL,
  altitude_cm INT NOT NULL,
  success BOOLEAN NOT NULL,
  failure_reason TEXT,

  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);
