import { Ingredient } from 'src/app/shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    public ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 15),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredientsFromOutside(ingredients: Ingredient[]) {
        // for (const ingredient of ingredients) {
        //     this.addIngredients(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
