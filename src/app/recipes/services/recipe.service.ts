import { Recipe } from '../recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chilli Paneer', 'how to make chilli paneer',
        'https://www.vegrecipesofindia.com/wp-content/uploads/2017/04/chilli-paneer-restaurant-style.jpg',
        [ new Ingredient('Paneer', 5),  new Ingredient('Chilli', 10)]),
        new Recipe('Veg Roll', 'tasty tasty veg role recipe',
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2013/12/spring-rolls-500x500.jpg',
        [ new Ingredient('Vegitables', 25),  new Ingredient('Wheat', 2)]),
        new Recipe('Chicken biryani', 'NOn veg special',
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe-500x500.jpg',
        [ new Ingredient('Chicken', 1),  new Ingredient('Masala', 15)]),
      ];

      constructor(private slService: ShoppingListService) {

      }

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredientsFromOutside(ingredients);
      }


}
