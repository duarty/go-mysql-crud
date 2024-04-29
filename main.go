package main

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
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
	product.Name = "updatedSpaceShip"
	product.Price = 11.05
	err = UpdateProduct(db, product)
	if err != nil {
		panic(err)
	}

	//ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	//defer cancel()
	p, err := SelectOneProduct(db, product.ID)
	if err != nil {
		panic(err)
	}
	fmt.Println(p)
	products, err := SelectProducts(db)
	if err != nil {
		panic(err)
	}
	fmt.Println(products)

	err = DeleteProducts(db, product.ID)
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

func UpdateProduct(db *sql.DB, product *Product) error {
	stmt, err := db.Prepare("update products set name = ?, price = ? where id = ?")
	if err != nil {
		panic(err)
	}
	defer stmt.Close()
	_, err = stmt.Exec(product.Name, product.Price, product.ID)
	if err != nil {
		panic(err)
	}
	return nil
}

func SelectOneProduct(db *sql.DB, id string) (*Product, error) {
	stmt, err := db.Prepare("select id, name, price from products where id = ?")
	if err != nil {
		panic(err)
	}
	defer stmt.Close()

	var p Product

	//err = stmt.QueryRowContext(ctx, id).Scan(&p.ID, &p.Name, &p.Price)
	err = stmt.QueryRow(id).Scan(&p.ID, &p.Name, &p.Price)
	if err != nil {
		panic(err)
	}
	return &p, nil
}

func SelectProducts(db *sql.DB) ([]Product, error) {
	rows, err := db.Query("select id, name, price from products")
	if err != nil {
		panic(err)
	}
	defer rows.Close()
	var allProduts []Product
	for rows.Next() {
		var p Product
		err := rows.Scan(&p.ID, &p.Name, &p.Price)
		if err != nil {
			panic(err)
		}
		allProduts = append(allProduts, p)
	}
	return allProduts, nil
}

func DeleteProducts(db *sql.DB, id string) error {
	stmt, err := db.Prepare("DELETE FROM products WHERE id = ?")
	if err != nil {
		panic(err)
	}
	defer stmt.Close()
	_, err = stmt.Exec(id)
	if err != nil {
		panic(err)
	}
	return nil
}
