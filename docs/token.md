# :newspaper_roll: Graffitis API :: token

API tokens are fixed UUID, bound to user at first login. They can be retrieved through any front-end authentication method and used to feed API endpoints when required.

To read more about the UUID protocol visit [UUID@Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier)

<br>

Tokens are read from express `req.body` and `req.query`, con can be sent through:

- `URL parameters` : `/*?token=xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx`
- `BODY parameters`: `{ "token": "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx" }`

<br>

## Endpoints

| Endpoint  | Supported methods | Async (Y/N) |
| --------- | ----------------- | ----------- |
| /token/me | GET               | N           |

### /auth/me

#### Behavior

Test token and return owner user.

#### Response

**Fields appear only if `status` (`status code`) match!** (\* match any code)

| Field  | Type   | Description                             | Status code |
| ------ | ------ | --------------------------------------- | ----------- |
| status | Number | response [status](./index#Status_Codes) | \*          |
| data   | Object | user model                              | 200         |

`status` (`status code`) will also be the response HTTP status code.

<br>

## Middlewares

### authenticate

Authenticate a route with a token API. On error return a `json` response.

Serialize user into `req.user`, so that it can be used in rail with passport middlewares.

#### Error response

**Fields appear only if `status` (`status code`) match!** (\* match any code)

| Field  | Type   | Description                             | Status code |
| ------ | ------ | --------------------------------------- | ----------- |
| status | Number | response [status](./index#Status_Codes) | \*          |
| err    | Object | internal error trace                    | 500, 404    |
| data   | String | request token                           | 505         |

`status` (`status code`) will also be the response HTTP status code.

#### Example

```js
router.route('/token/test').get(authenticate, (req, res) => {
  res.json(req.user);
});
```
