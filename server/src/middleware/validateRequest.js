import { z } from "zod";
import BadRequest from "../shared/error/BadRequest.error.js";

export function validateRequest(schema) {
  return function validateRequestMiddleware(req, res, next) {
    const { success, error, data } = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!success) {
      next(new BadRequest("Validation failed", z.treeifyError(error)));
      return;
    }

    req.validated = data;
    next();
  };
}
