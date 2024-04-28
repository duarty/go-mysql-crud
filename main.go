package main

import (
	"database/sql"
)

func main() {
	db, err := sql.Open("mysql", "root:root@tcp(localhost:3306)/gomysqlcrud")
	if err != nil {
		panic(err)
	}
	defer db.Close()

}
