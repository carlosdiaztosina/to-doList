import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-indexcard',
  templateUrl: './indexcard.component.html',
  styleUrls: ['./indexcard.component.css']
})
export class IndexcardComponent implements OnInit {
  
  public bookId: number | undefined;
  public bookIdAutor: number | undefined;
  public bookNombre: string | undefined;
  public bookAutor: string | undefined;
  public bookImg : string | undefined;
  constructor(private route: ActivatedRoute, private router:Router) {

  }
  ngOnInit(): void {

    //let id = parseInt(this.route.snapshot.params['id']);
    //this.bookId=id;
    let ref=this.route.snapshot.params['id'];
    console.log(ref);
    let books = new BooksComponent(ref);
    books.books.forEach(libro => {
      if(ref == libro.id){
        this.bookId = libro.id;
        this.bookNombre = libro.name;
        this.bookAutor = libro.autor;
        this.bookIdAutor = libro.idAutor;
        this.bookImg = libro.img == undefined ? "https://cdn-icons-png.flaticon.com/512/85/85488.png" : libro.img;
      }
    });
  }

  onSelect(id: any){
    this.router.navigate(['/authors', id]);
  }

}
