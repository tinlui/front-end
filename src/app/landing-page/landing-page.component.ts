import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() {
    this.peliculasEnCines = [
      {
        titulo: 'Spider-Man Far From Home',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster:'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX67_CR0,0,67,98_AL_.jpg'
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99,
        poster:'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX67_CR0,0,67,98_AL_.jpg'
      },
    ];
   }

  ngOnInit(): void {
  }
  peliculasEnCines: any;

  peliculasProximosEstrenos = [
    {
      titulo: 'Avengers',
      fechaLanzamiento: new Date(),
      precio: 1400.99,
    },
    {
      titulo: 'Inception',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 300.99,
    },
    {
      titulo: 'Rocky',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 300.99,
    },
  ];
}
