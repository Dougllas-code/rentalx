import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

// --------------------- POST - CATEGORIES --------------------- //
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

// --------------------- GET - CATEGORIES --------------------- //
categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
