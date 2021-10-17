import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  // ----------------------- CREATE ---------------------- //
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  // ------------------------ LIST ----------------------- //
  list(): Category[] {
    return this.categories;
  }

  // --------------------- FIND NAME --------------------- //
  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}

export { CategoriesRepository };
