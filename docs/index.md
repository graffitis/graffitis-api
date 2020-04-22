# :newspaper_roll: Graffitis API :: docs index

## API Endpoints

- [crud](./crud.md) - CRUD DB interface
- [auth](./auth.md) - Google front-end authentication
- [token](./token.md) - Token authentication engine

## Other

- [db](./db.md) - DB structure

### Status codes

Status codes used in the API

| Code | Name                  | Description                                                                                                                      |
| ---- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 200  | OK                    | Standard response for successful HTTP requests.                                                                                  |
| 201  | Created               | The request has been fulfilled, resulting in the creation of a new resource.                                                     |
| 401  | Unauthorized          | Authentication is required and has failed or has not yet been provided.                                                          |
| 404  | Not Found             | The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible. |
| 500  | Internal Server Error | A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.            |

Read more @ [Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
