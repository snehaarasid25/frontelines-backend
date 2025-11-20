import { Router } from "express";
import { getAllCompanies } from "../controllers/companyController.js";
const companyRouter = Router();

// Routes for /api/companies
companyRouter.get("/", getAllCompanies);

export default companyRouter;
