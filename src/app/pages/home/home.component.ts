import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('Construindo Home Component...');
  }
  ngOnDestroy(): void {
    console.log('Destruindo Home Component...');
  }

}
