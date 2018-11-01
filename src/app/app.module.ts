import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';

//tambah code berikut
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';

//tambah code berikut (2)
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';

//tambah code berikut (3)
import { ShoppingEditComponent } from './shoping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShopingListComponent,
    

    //tambah code berikut
    RecipeListComponent,
    RecipeDetailComponent,

    //tambah code berikut (2)
    RecipeItemComponent,

    //tambah code (3)
    ShoppingEditComponent,
    DropdownDirective
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
