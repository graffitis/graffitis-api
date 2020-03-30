# :newspaper_roll: API docs

### Response structure

The response is always formatted as `json`.

- `query`: request filtered query
- `status`: response status code
- `data`: response data, may vary between endpoints
- `[body]`: request filtered body

### Status codes

- `500`: internal server error, please report to a dev
- `404`: not found
- `200`: generic OK
- `201`: successfully created

### Endpoint tree

- `/`: `GET`
  - `post`: `GET`, `POST`, `PATCH`, `DELETE`
  - `cat`: `GET`, `POST`, `PATCH`, `DELETE`

### CRUD endpoint description

`CRUD` endpoints behave all in the same way, to change is the Model on which they work.

#### GET

- `params`: filter `req.query` for scheme allowed parameters
- `res.data`: results of the `params` query applied to Model

Eg: `/post?id=5e82097f606e056963ec50ab`, `/post?author=author&title=title`

#### POST

- `params`: filter `req.body` for scheme allowed parameters
- `res.data`: newly created document

Eg:

```json
BODY:
{
    "author": "author",
    "this_isnt_a_scheme_allowed_params": "and_it_will_be_discarted",
    ...
}
```

#### PATCH

- `params`:
  - `id`: from `req.query`. :heavy_exclamation_mark: If `undefined` all documents will be updated :heavy_exclamation_mark:
  - `body`: filter `req.body` for scheme allowed parameters
- `res.data`: number of documents updated

Eg:

`/post?id=5e82097f606e056963ec50ab`

```json
BODY:
{
    "author": "author_modified"
}
```

#### DELETE

- `params`: filter `req.query` for scheme allowed parameters
- `res.data`: number of documents deleted

Eg: `/post?id=5e82097f606e056963ec50ab`, `/post?author=author&title=title`

### Allowed parameters on CRUD endpoints

#### /post

- `id`, mapped to `_id`, read-only
- `cover`
- `title`
- `desc`
- `body`
- `category`
- `author`
- `status`
- `tags`
- `special`
- `featured`

`created` and `edited` are automatically managed

#### /cat

- `id`, mapped to `_id`, read-only
- `name`
- `desc`
- `status`

`created` and `edited` are automatically managed
