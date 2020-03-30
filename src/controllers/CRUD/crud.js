const get = (Model, schema) => async (req, res) => {
  const { id } = req.query;

  const query = id !== undefined ? { _id: id } : {};
  const payload = { query, status: 200 };

  await Model.find(query)
    .catch((err) => {
      payload.err = err;
      payload.status = 500;
    })
    .then((post) => {
      payload.data = post;
    });

  res.status(payload.status).json(payload);
};

const post = (Model, schema) => async (req, res) => {
  const payload = { status: 201 };

  const query = {};
  schema.forEach((key) => {
    query[key] = req.body[key];
  });
  query.edited = Date.now();
  query.created = Date.now();

  const document = new Model(query);

  await document
    .save()
    .catch((err) => {
      payload.status = 500;
      payload.err = err;
    })
    .then((data) => {
      payload.data = data;
    });

  res.status(payload.status).json(payload);
};

const Crud = (Model) => {
  const schema = Object.keys(Model.schema.paths);
  return {
    get: get(Model, schema),
    post: post(Model, schema),
  };
};

module.exports = Crud;
