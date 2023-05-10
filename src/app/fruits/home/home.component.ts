import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
styles: [
    'table { min-width: 600px }',
  ]
})
export class HomeComponent {
  displayedColumns = ['id', 'name', 'price', 'quantity', 'category', 'actions'];
  selectedFruits!: Fruits;
  feedback: any = {};
  deleteModal: any;
  idTodelete: number = 0;
  allFruits : Fruits[] = [];
 
  constructor(private fruitService: FruitsService) {}
 
  ngOnInit(): void {

    this.getAllFruits();
    

  }
  
 
  getAllFruits(){

    this.fruitService.get().subscribe((data:Fruits[]) => {
      this.allFruits= data;
      console.log("allFruits : ", this.allFruits);
    });

  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  select(selected: Fruits): void {
    this.selectedFruits = selected;
  }

  delete(fruits: Fruits): void {
    if (confirm('Are you sure?')) {
      this.fruitService.delete(fruits.id).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
         
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}



