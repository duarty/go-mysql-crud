package main

import (
	"database/sql"

	"github.com/google/uuid"
)

func main() {
	db, err := sql.Open("mysql", "root:root@tcp(localhost:3306)/gomysqlcrud")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	product := CreateProduct("SpaceShip", 10.02)
	err = InsertProduct(db, product)
	if err != nil {
		panic(err)
	}

}

type Product struct {
	ID    string
	Name  string
	Price float64
}

func CreateProduct(name string, price float64) *Product {
	return &Product{
		ID:    uuid.New().String(),
		Name:  name,
		Price: price,
	}
}

func InsertProduct(db *sql.DB, product *Product) error {
	stmt, err := db.Prepare("insert into products(id, name, price) values(?, ?, ?)")
	if err != nil {
		panic(err)
	}
	defer stmt.Close()
	_, err = stmt.Exec(product.ID, product.Name, product.Price)
	if err != nil {
		panic(err)
	}
	return nil
}
