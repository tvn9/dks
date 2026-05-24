package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", HomeHandler)

	fmt.Println("Starting http server on port :8000")
	http.ListenAndServe((":8000"), nil)
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to go server home page!")
}
