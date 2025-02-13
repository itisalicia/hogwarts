import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import subjectActions from "./modules/item/subjects/subjectActions";

router.get("/api/subjects", subjectActions.browse);
router.get("/api/subjects/:id", subjectActions.read);

import houseActions from "./modules/item/houses/houseActions";

router.get("/api/houses", houseActions.browse);
router.get("/api/houses/:id", houseActions.read);

/* ************************************************************************* */

export default router;
