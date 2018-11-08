import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shoping-list/shoping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingredients:Ingredient[]
  //=[
  //  new Ingredient('Apples',23),
  //  new Ingredient('tomato',10),
  // ];

  constructor(private slsService:ShopingListService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredient();
    this.slsService.IngredientChange
    .subscribe(
      (Ingredient:Ingredient[])=>{
        this.ingredients=Ingredient;
      }
    )
  }
  // onIngredientAdded(ingredient:Ingredient)
  // {
  //   this.ingredients.push
  // }

}
