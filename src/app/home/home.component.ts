import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nombre : string | any;
  public autor : string | any;
  public img : string | any;
  arrayLibro = new BooksComponent(this.router.snapshot.params['']) ;

  constructor(private router : ActivatedRoute){ }

  ngOnInit(): void {
    console.log(this.arrayLibro);
  }
  addBook():void{
    var aux = $('#nombreLibro').val();
    this.nombre = $('#nombreLibro').val();
    this.autor = $('#autorLibro').val();
    this.img = $('#imagenLibro').val();
    console.log(aux);
    let libro = {
      id: this.arrayLibro.books.length + 1,
      name:  this.nombre,
      autor: this.autor,
      idAutor: 4,
      img: this.img
    }
    console.log(libro);
    this.arrayLibro.books.push(libro)
    // location.href ="/books";

  }

}
