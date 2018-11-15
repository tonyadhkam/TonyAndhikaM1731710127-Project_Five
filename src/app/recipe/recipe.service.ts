import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {

  recipeSelected=new EventEmitter<Recipe>();

  recipes: Recipe[] = [


    new Recipe('Burger', 
    'A hamburger with a rim of lettuce sitting on a black plate against a black background.', 
    'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
    [
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ]),

    new Recipe('Padang Rice', 
    'A Padang Rice is a typical of rice from Padang, Diverse cuisine, but the most typical is Rendang.', 
    'src/app/img/nasi_padang.jpg',
    [
      new Ingredient('rice',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

  getRecipe(index:number){
    return this.recipes[index];
  }
  
constructor(private slsService:ShoppingListService) { }

}
