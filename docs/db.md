# :newspaper_roll: Graffitis API :: DB

We use [MongoDB](https://www.mongodb.com/) as `noSQL` db engine.

<br>

## Models

### Post

| Field    | Type       |
| -------- | ---------- |
| cover    | String     |
| title    | String     |
| desc     | String     |
| body     | String     |
| category | String     |
| author   | MongoDB id |
| status   | Number     |
| edited   | Date       |
| tags     | Array      |
| created  | Date       |
| special  | Boolean    |
| featured | Boolean    |

### Category

| Field   | Type   |
| ------- | ------ |
| name    | String |
| desc    | String |
| status  | Number |
| created | Date   |
| edited  | Date   |

### User

| Field    | Type   |
| -------- | ------ |
| name     | String |
| email    | String |
| pic      | String |
| desc     | String |
| role     | Number |
| googleId | String |
| token    | String |
