import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = [
    {"id":1, "name":"Cien Años de Soledad", "autor":"Gabriel García Márquez","idAutor":1, "img":"https://images-na.ssl-images-amazon.com/images/I/A1KbLZ3jhvS.jpg"},
    {"id":2, "name":"El Nombre del Viento", "autor":"Patrick Rothfuss","idAutor":2, "img":"https://images-na.ssl-images-amazon.com/images/I/51TOF2gV8fL._SX327_BO1,204,203,200_.jpg"},
    {"id":3, "name":"Humanos","autor":"Tom Phillips", "idAutor":3, "img":"https://www.planetadelibros.com/usuaris/libros/fotos/293/m_libros/portada_humanos_tom-phillips_201902211240.jpg"},
    {"id":4, "name":"21 Lecciones para el Siglo XXI"},
    {"id":5, "name":"Dune"},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(book: { id: any; }){
    this.router.navigate(['/indexcard', book.id]);
  }
  remove( id: number){
    console.log(id);
    //delete this.books[id-1];
    this.books = this.books.filter((book,i)=> i !== id);
    //console.log(id);
  }

}
