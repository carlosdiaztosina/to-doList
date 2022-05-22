import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { elementAt } from 'rxjs';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  public bookId: number | undefined;
  public bookNombre: string | undefined;
  public bookAutor: string | undefined;
  public bookImg : string | undefined;
  public array =  Array as any;
  list = [] as any;
  autores=[
    {"id":1, "name":"Gabriel García Márquez","img":"https://images-na.ssl-images-amazon.com/images/I/A1KbLZ3jhvS.jpg"},
    {"id":2, "name":"Patrick Rothfuss"},
    {"id":3, "name":"Tom Phillips"}
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    if(window.location.pathname != '/authors'){
      console.log(window.location.pathname)
      let aux = this.route.snapshot.params['idAutor'];
      let autores = new BooksComponent(aux);
      autores.books
      autores.books.forEach(libro => {
        if(aux == libro.idAutor){
          this.list.push(libro);
          this.bookId = libro.id;
          this.bookNombre = libro.name;
          this.bookAutor = libro.autor;
          this.bookImg = libro.img == undefined ? "https://cdn-icons-png.flaticon.com/512/85/85488.png" : libro.img;
        }
      });
    }
  }

  onSelect(autor: { id: any; }){
    this.router.navigate(['/authors', autor.id]);
  }
  remove( id: number){
    this.autores = this.autores.filter((autor,i)=> i !== id);
  }

}
