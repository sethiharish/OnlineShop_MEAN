const express = require("express");
const router = express.Router();

const piesController = require("../controllers/piesController");

/**
 * @swagger
 * /api/pies:
 *    get:
 *      tags:
 *          - Pies
 *      summary: Returns all pies
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Success
 */
router.get("/", (req, res) => {
  return piesController.getPies(req, res);
});

/**
 * @swagger
 * /api/pies/{id}:
 *    get:
 *      tags:
 *          - Pies
 *      summary: Returns pie with specific id
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
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
  return piesController.getPie(req, res);
});

/**
 * @swagger
 * /api/pies:
 *    post:
 *      tags:
 *          - Pies
 *      summary: Returns a newly created pie
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: pie
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              price:
 *                type: number
 *              shortDescription:
 *                type: string
 *              longDescription:
 *                type: string
 *              inStock:
 *                type: boolean
 *              isPieOfTheWeek:
 *                type: boolean
 *              imageUrl:
 *                type: string
 *              thumbnailImageUrl:
 *                type: string
 *              categoryId:
 *                type: string
 *      responses:
 *        201:
 *          description: Created
 */
router.post("/", (req, res) => {
  return piesController.createPie(req, res);
});

/**
 * @swagger
 * /api/pies/{id}:
 *    put:
 *      tags:
 *          - Pies
 *      summary: Updates and returns updated pie with specific id
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *        - name: pie
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              price:
 *                type: number
 *              shortDescription:
 *                type: string
 *              longDescription:
 *                type: string
 *              inStock:
 *                type: boolean
 *              isPieOfTheWeek:
 *                type: boolean
 *              imageUrl:
 *                type: string
 *              thumbnailImageUrl:
 *                type: string
 *              categoryId:
 *                type: string
 *      responses:
 *        200:
 *          description: Success
 *        404:
 *          description: Not Found
 */
router.put("/:id", (req, res) => {
  return piesController.updatePie(req, res);
});

/**
 * @swagger
 * /api/pies/{id}:
 *    delete:
 *      tags:
 *          - Pies
 *      summary: Deletes and returns deleted pie with specific id
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
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
  return piesController.deletePie(req, res);
});

module.exports = router;
