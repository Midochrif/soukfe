import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allFruits: Fruits[] = [];
 
  constructor(private fruitService: FruitsService) {}
 
  ngOnInit(): void {
    this.get();
  }
 
  get() {
    this.fruitService.get().subscribe((data) => {
      this.allFruits = data;
    });
  }
}


