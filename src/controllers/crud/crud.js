const get = (Model, schema) => async (req, res) => {
  const { id } = req.query;

  const query = id !== undefined ? { _id: id } : {};
  schema.forEach((key) => {
    if (req.query[key]) query[key] = req.query[key];
  });

  const payload = { query, status: 200 };

  await Model.find(query)
    .catch((err) => {
      payload.err = err;
      payload.status = 500;
    })
    .then((data) => {
      payload.data = data;
    });

  res.status(payload.status).json(payload);
};

const post = (Model, schema) => async (req, res) => {
  const body = {};
  schema.forEach((key) => {
    if (req.body[key]) body[key] = req.body[key];
  });
  body.edited = Date.now();
  body.created = Date.now();

  const payload = { status: 201 };
  const document = new Model(body);

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

const patch = (Model, schema) => async (req, res) => {
  const { id } = req.query;
  const query = id ? { _id: id } : {};

  const body = {};
  schema.forEach((key) => {
    if (req.body[key]) body[key] = req.body[key];
  });
  body.edited = Date.now();

  const payload = { status: 200, query, body };

  await Model.updateMany(query, body)
    .catch((err) => {
      payload.status = 500;
      payload.err = err;
    })
    .then((data) => {
      payload.data = data.nModified;
    });

  res.status(payload.status).json(payload);
};

const _delete = (Model, schema) => async (req, res) => {
  const { id } = req.query;

  const query = id !== undefined ? { _id: id } : {};
  schema.forEach((key) => {
    if (req.query[key]) query[key] = req.query[key];
  });

  const payload = { query, status: 200 };

  await Model.deleteMany(query)
    .catch((err) => {
      payload.err = err;
      payload.status = 500;
    })
    .then((data) => {
      payload.data = data.deletedCount;
    });

  res.status(payload.status).json(payload);
};

const Crud = (Model) => {
  const schema = Object.keys(Model.schema.paths);
  return {
    get: get(Model, schema),
    post: post(Model, schema),
    patch: patch(Model, schema),
    delete: _delete(Model, schema),
  };
};

module.exports = Crud;
