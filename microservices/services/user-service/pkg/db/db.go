package db

import (
	"database/sql"

	_ "github.com/lib/pq"
	"github.com/pressly/goose/v3"
)

func InitDB(driver, dsn string) (*sql.DB, error) {
	db, err := sql.Open(driver, dsn)
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	return db, nil
}

func ApplyMigrations(db *sql.DB, driver, migrationsDir string) error {
	if err := goose.SetDialect(driver); err != nil {
		return err
	}

	if err := goose.Up(db, migrationsDir); err != nil {
		return err
	}
	return nil
}
