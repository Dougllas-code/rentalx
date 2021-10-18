import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

// --------------------- POST - SPECIFICATION --------------------- //
specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationServices = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationServices.execute({ name, description });
  return response.status(201).send();
});

export { specificationsRoutes };