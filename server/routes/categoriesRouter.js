const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/categoriesController");

/**
 * @swagger
 * /api/categories:
 *    get:
 *      tags:
 *          - Get Categories
 *      summary: Returns all categories
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Success
 */
router.get("/", (req, res) => {
  return categoriesController.getCategories(req, res);
});

/**
 * @swagger
 * /api/categories/{id}:
 *    get:
 *      tags:
 *          - Get Category
 *      summary: Returns category with specific id
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *      responses:
 *        200:
 *          description: Success
 *        404:
 *          description: Not Found
 */
router.get("/:id", (req, res) => {
  return categoriesController.getCategory(req, res);
});

/**
 * @swagger
 * /api/categories:
 *    post:
 *      tags:
 *          - Create Category
 *      summary: Returns a newly created category
 *      description: Returns a newly created category
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: category
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              description:
 *                type: string
 *      responses:
 *        201:
 *          description: Created
 */
router.post("/", (req, res) => {
  return categoriesController.createCategory(req, res);
});

/**
 * @swagger
 * /api/categories/{id}:
 *    put:
 *      tags:
 *          - Update Category
 *      summary: Updates and returns updated category with specific id
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *        - name: category
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              description:
 *                type: string
 *      responses:
 *        200:
 *          description: Success
 *        404:
 *          description: Not Found
 */
router.put("/:id", (req, res) => {
  return categoriesController.updateCategory(req, res);
});

/**
 * @swagger
 * /api/categories/{id}:
 *    delete:
 *      tags:
 *          - Delete Category
 *      summary: Deletes and returns deleted category with specific id
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *      responses:
 *        200:
 *          description: Success
 *        404:
 *          description: Not Found
 */
router.delete("/:id", (req, res) => {
  return categoriesController.deleteCategory(req, res);
});

module.exports = router;
