# :newspaper_roll: Graffitis API :: auth

User authentication is handled via [OAuth 2.0](https://oauth.net/2/) and [passport.js](http://www.passportjs.org/). We support authentication via [ITISCuneo](http://www.itiscuneo.gov.it/) internal Google account.

Google authentication is a front-end method, thus need an user interface. Suggested to use only during a development process!

<br>

## Endpoints

| Endpoint     | Supported methods | Async (Y/N) |
| ------------ | ----------------- | ----------- |
| /auth/login  | GET               | N           |
| /auth/logout | GET               | N           |
| /auth/me     | GET               | N           |

<br>

### /auth/login

Parameters are read from express `req.query`.

| Parameter | Type   | Required (Y/N) | Description |
| --------- | ------ | -------------- | ----------- |
| redirect  | String | N              | Redirect    |

#### Behavior

Start passport authentication routine. This is a front-end method, thus need an user interface.

<br>

### /auth/logout

#### Behavior

Start passport logout routine.

<br>

### /auth/me

#### Behavior

Give information about authenticated user.

#### Response

**Fields appear only if `status` (`status code`) match!** (\* match any code)

| Field  | Type   | Description                                                                        | Status code |
| ------ | ------ | ---------------------------------------------------------------------------------- | ----------- |
| status | Number | response [status](./index#Status_Codes).<br />`200`: logged<br />`401`: not logged | \*          |
| data   | Object | user model                                                                         | 200         |

`status` (`status code`) will also be the response HTTP status code.
