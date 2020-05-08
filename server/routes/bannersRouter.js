const express = require("express");
const router = express.Router();

const bannersController = require("../controllers/bannersController");

/**
 * @swagger
 * /api/banners:
 *    get:
 *      tags:
 *          - Banners
 *      summary: Returns all banners
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Success
 */
router.get("/", (req, res) => {
  return bannersController.getBanners(req, res);
});

/**
 * @swagger
 * /api/banners/{id}:
 *    get:
 *      tags:
 *          - Banners
 *      summary: Returns banner with specific id
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
  return bannersController.getBanner(req, res);
});

/**
 * @swagger
 * /api/banners:
 *    post:
 *      tags:
 *          - Banners
 *      summary: Returns a newly created banner
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: banner
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              description:
 *                type: string
 *              imageUrl:
 *                type: string
 *      responses:
 *        201:
 *          description: Created
 */
router.post("/", (req, res) => {
  return bannersController.createBanner(req, res);
});

/**
 * @swagger
 * /api/banners/{id}:
 *    put:
 *      tags:
 *          - Banners
 *      summary: Updates and returns updated banner with specific id
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
 *        - name: banner
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              description:
 *                type: string
 *              imageUrl:
 *                type: string
 *      responses:
 *        200:
 *          description: Success
 *        404:
 *          description: Not Found
 */
router.put("/:id", (req, res) => {
  return bannersController.updateBanner(req, res);
});

/**
 * @swagger
 * /api/banners/{id}:
 *    delete:
 *      tags:
 *          - Banners
 *      summary: Deletes and returns deleted banner with specific id
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
  return bannersController.deleteBanner(req, res);
});

module.exports = router;
