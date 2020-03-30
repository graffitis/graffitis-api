const { Router } = require('express');

const buildRoute = (crud) => {
  const router = Router();
  router
    .route('/')
    .get(crud.get)
    .post(crud.post)
    .patch(crud.patch)
    .delete(crud.delete);
  return router;
};

module.exports = buildRoute;
