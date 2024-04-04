BEGIN;

-- Vérifier si la table player existe déjà
IF NOT EXISTS (SELECT 1 FROM pg_catalog.pg_class WHERE relname='player') THEN
  CREATE TABLE player (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );
END IF;

-- Vérifier si la table game existe déjà
IF NOT EXISTS (SELECT 1 FROM pg_catalog.pg_class WHERE relname='game') THEN
  CREATE TABLE game (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
  );
END IF;

-- Vérifier si la table class existe déjà
IF NOT EXISTS (SELECT 1 FROM pg_catalog.pg_class WHERE relname='class') THEN
  CREATE TABLE class (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );
END IF;

-- Vérifier si la table card existe déjà
IF NOT EXISTS (SELECT 1 FROM pg_catalog.pg_class WHERE relname='card') THEN
  CREATE TABLE card (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    class_id BIGINT REFERENCES class(id)
  );
END IF;

-- Vérifier si la table hero existe déjà
IF NOT EXISTS (SELECT 1 FROM pg_catalog.pg_class WHERE relname='hero') THEN
  CREATE TABLE hero (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    player_id BIGINT REFERENCES player(id),
    game_id BIGINT REFERENCES game(id),
    class_id BIGINT REFERENCES class(id)
  );
END IF;

COMMIT;
