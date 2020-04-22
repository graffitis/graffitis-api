# :newspaper_roll: Graffitis API :: CRUD

CRUD routes are automatically built from models schema.

## Endpoints

| Endpoint | Supported methods        | Async (Y/N) |
| -------- | ------------------------ | ----------- |
| /:model  | GET, POST, PATCH, DELETE | Y           |

**Where `:model` is one of**

| Modifier | Model    | Description          |
| -------- | -------- | -------------------- |
| post     | Post     | Graffitis posts      |
| cat      | Category | Graffitis categories |

To read more about `models` and `schemas` take a look at [DB](./db.md)

<br>

## Parameters

Parameters are read from express `req.body` and `req.query`, con can be sent through:

- `URL parameters`
- `BODY parameters`

<br>

### GET

| Parameter  | Type   | Required (Y/N) | Description                                                                |
| ---------- | ------ | -------------- | -------------------------------------------------------------------------- |
| id         | String | N              | MongoDB document id. Converted internally to `_id`                         |
| ... fields |        | N              | MongoDB schema fields. Any parameter not in model schema will be discarded |

#### Behavior

Parse parameters and return an array of matching documents. If `id` and `fields` are `undefined` return whole collection.

#### Response

**Fields appear only if `status` (`status code`) match!** (\* match any code)

| Field  | Type          | Description                             | Status code |
| ------ | ------------- | --------------------------------------- | ----------- |
| query  | Object        | query applied to MongoDB model          | \*          |
| status | Number        | response [status](./index#Status_Codes) | \*          |
| data   | Array[Object] | query matching documents                | 200         |
| err    | Object        | internal error trace                    | 500         |

`status` (`status code`) will also be the response HTTP status code.

#### Example

##### Request body

```json
// URL: /post?featured=true
{
  "title": "Workout e quarantena"
}
```

##### Response

```json
{
    "query": {
        "title": "Workout e quarantena",
    	"featured": true
    },
    "status": 200,
    "data": [ ... ]
}
```

<br>

### POST

| Parameter  | Required (Y/N) | Description                                                                |
| ---------- | -------------- | -------------------------------------------------------------------------- |
| ... fields | N              | MongoDB schema fields. Any parameter not in model schema will be discarded |

#### Behavior

Create a new document with parameters as body.

#### Response

**Fields appear only if `status` (`status code`) match!** (\* match any code)

| Field  | Type   | Description                             | Status code |
| ------ | ------ | --------------------------------------- | ----------- |
| status | Number | response [status](./index#Status_Codes) | \*          |
| data   | Object | newly created document                  | 201         |
| err    | Object | internal error trace                    | 500         |

`status` (`status code`) will also be the response HTTP status code.

#### Example

##### Request body

```json
// URL: /post
{
  "title": "Workout e quarantena V2",
  "featured": true,
  "field not in schema": "that will be ignored"
}
```

##### Response

```json
{
  "status": 200,
  "data": {
    "title": "Workout e quarantena",
    "featured": true,
    "created": "", // Date
    "edited": "" // Date
  }
}
```

<br>

### PATCH

| Parameter  | Type   | Required (Y/N) | Description                                                                |
| ---------- | ------ | -------------- | -------------------------------------------------------------------------- |
| id         | String | N              | MongoDB document id. Converted internally to `_id`                         |
| ... fields |        | N              | MongoDB schema fields. Any parameter not in model schema will be discarded |

#### Behavior

Patch documents matching with `id`, applying `fields` as modifications. Set `document.edited` to current time.

If `id` is`undefined` update all documents.

#### Response

**Fields appear only if `status` (`status code`) match!** (\* match any code)

| Field  | Type   | Description                                           | Status code |
| ------ | ------ | ----------------------------------------------------- | ----------- |
| status | Number | response [status](./index#Status_Codes)               | \*          |
| query  | Object | query applied to MongoDB models                       | \*          |
| body   | Object | modifications applied to documents matching with `id` | \*          |
| data   | Number | number of updated documents                           | 200         |
| err    | Object | internal error trace                                  | 500         |

`status` (`status code`) will also be the response HTTP status code.

#### Example

##### Request body

```json
// URL: /post
{
  "id": undefined, // update every documents
  "title": "Now all posts have this title!"
}
```

##### Response

```json
{
    "status": 200,
    "query": {},
    "body": {
        "title": "Now all posts have this title!"
    }
    "data": N // number of documents in `post` model
}
```

<br>

### DELETE

| Parameter  | Type   | Required (Y/N) | Description                                                                |
| ---------- | ------ | -------------- | -------------------------------------------------------------------------- |
| id         | String | N              | MongoDB document id. Converted internally to `_id`                         |
| ... fields |        | N              | MongoDB schema fields. Any parameter not in model schema will be discarded |

#### Behavior

Delete matching documents. If `id` and `fields` are `undefined` delete whole collection.

#### Response

**Fields appear only if `status` (`status code`) match!** (\* match any code)

| Field  | Type   | Description                             | Status code |
| ------ | ------ | --------------------------------------- | ----------- |
| status | Number | response [status](./index#Status_Codes) | \*          |
| query  | Object | query applied to MongoDB models         | \*          |
| data   | Number | number of deleted documents             | 200         |
| err    | Object | internal error trace                    | 500         |

`status` (`status code`) will also be the response HTTP status code.

#### Example

##### Request body

```json
// URL: /post
{
  "featured": true
}
```

##### Response

```json
{
  "status": 200,
  "query": {
    "featured": true
  },
  "data": N // number of documents in `post` model
}
```
