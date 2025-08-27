package repository

import "common-service/pkg/db/mongodb"

type RolePostgresRepository struct {
	mongoClient *mongodb.MongoClient
}

func NewRolePostgresRepository(mongoClient *mongodb.MongoClient) *RolePostgresRepository {
	return &RolePostgresRepository{
		mongoClient: mongoClient,
	}
}

func (r *RolePostgresRepository) Create() {
	r.mongoClient.CreateCollection("roles")
}
