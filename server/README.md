# mini-stackoverflow-server

Built with Node.js


## List of Basic router

| Route | HTTP  | Headers | Body   |
| ----- | ----- | ------- | ------ |
| `/`   | `GET` | `none`  | `none` |

Code : `200`  
Response :

```
{
    "message" : "app is running"
}
```



## List of User router

###Register a new user `POST /users/register`

| Route             | HTTP   | Headers | Body                                        |                                              |
| ----------------- | ------ | ------- | ------------------------------------------- | -------------------------------------------- |
| `/users/register` | `POST` | `none`  | `name:String,email:String, password:String` | No authentication and authorization required |

Code : `201`  
Response :

```
{
    "token": "......",
    "user": {
        "userId": "5d8c93d53f78c7053132e579",
        "email": "john@mail.com",
        "name": "John"
    }
}
```

Status : `400`
Response :

```
{
    "errors": [
        "Name is required!"
        "Email is required!",
        "Email is not a valid email!",
        "Email has been registered!",
       "Password is required!",
       "Password must be more or equal than 8 character!"
    ]
}
```

### Loging in a user `POST /users/login`

| Route          | HTTP   | Headers | Body                            |                                              |
| -------------- | ------ | ------- | ------------------------------- | -------------------------------------------- |
| `/users/login` | `POST` | `none`  | `email:String, password:String` | No authentication and authorization required |

Code : `200`  
Response :

```
{
    "token": "......",
    "user": {
        "userId": "5d8c93d53f78c7053132e579",
        "email": "john@mail.com",
        "name": "John"
    }
}
```

Status : `403`
Response :

```
{
    "errors": [
        "Invalid username / password!"
    ]
}
```

### Validation access token  `POST /users/checkToken`

| Route               | HTTP   | Headers        | Body   |      |
| ------------------- | ------ | -------------- | ------ | ---- |
| `/users/checkToken` | `POST` | `token:String` | `none` |      |

Code : `200`  
Response :

```
{
    "userId": "5d8c93d53f78c7053132e579",
    "name": "John",
    "email": "john@mail.com",
    "iat": 1569494154
}
```

Code : `403`  
Response :

```
{
    "errors": [
        "Access token is invalid!"
    ]
}
```

## List of Question router

###Get all question `GET /questions`

| Route        | HTTP  | Headers | Body   | Descrition        |      |
| ------------ | ----- | ------- | ------ | ----------------- | ---- |
| `/questions` | `GET` | `none`  | `none` | Get all questions |      |

Code : `200`  
Response :

```
[
    {
        "upvote": [],
        "downvote": [],
        "answer": [],
        "tag": [],
        "_id": "5d8b2649fa7a8ecc587c910e",
        "title": "mau nanya dong gan",
        "description": "gimana caranya bikin aplikasi dalam 30 detik",
        "userId": "5d8b1ff5fcca22cad566a901",
        "createdAt": "2019-09-25T08:33:13.593Z",
        "updatedAt": "2019-09-25T08:33:13.593Z",
        "__v": 0
    }
]
```

Code : `501`  
Response :

```
{
    "errors": [
        "Internal server error!"
    ]
}
```

### Get single question `GET /questions/:id`

| Route            | HTTP  | Headers | Body   | Descrition            |      |
| ---------------- | ----- | ------- | ------ | --------------------- | ---- |
| `/questions/:id` | `GET` | `none`  | `none` | get a single question |      |

Code : `200`  
Response :

```
{
    "upvote": [],
    "downvote": [],
    "answer": [],
    "tag": [],
    "_id": "5d8b2677fa7a8ecc587c910f",
    "title": "mau nanya dong gan",
    "description": "gimana caranya bikin aplikasi dalam 30 detik",
    "userId": "5d8b230647f66ecb655a38d2",
    "createdAt": "2019-09-25T08:33:59.848Z",
    "updatedAt": "2019-09-25T08:33:59.848Z",
    "__v": 0
}
```

Code : `501`  
Response :

```
{
    "errors": [
        "Internal server error!"
    ]
}
```

### Get by keyword `GET /questions/search/:keyword`

| Route                        | HTTP  | Headers | Body   | Descrition                   |      |
| ---------------------------- | ----- | ------- | ------ | ---------------------------- | ---- |
| `/questions/search/:keyword` | `GET` | `none`  | `none` | Get all questions by keyword |      |

Code : `200`  
Response :

```
[
    {
        "upvote": [],
        "downvote": [],
        "answer": [],
        "tag": [],
        "_id": "5d8b2649fa7a8ecc587c910e",
        "title": "mau nanya dong gan",
        "description": "gimana caranya bikin aplikasi dalam 30 detik",
        "userId": "5d8b1ff5fcca22cad566a901",
        "createdAt": "2019-09-25T08:33:13.593Z",
        "updatedAt": "2019-09-25T08:33:13.593Z",
        "__v": 0
    }
]
```

Code : `501`  
Response :

```
{
    "errors": [
        "Internal server error!"
    ]
}
```

### Create a question `POST /questions`

| Route        | HTTP   | Headers        | Body                               | Descrition            |                         |
| ------------ | ------ | -------------- | ---------------------------------- | --------------------- | ----------------------- |
| `/questions` | `POST` | `token:String` | `title:String, description:String` | Create a new question | Authentication required |

Code : `201`  
Response :

```
{
    "upvote": [],
    "downvote": [],
    "answer": [],
    "tag": [],
    "_id": "5d8b2677fa7a8ecc587c910f",
    "title": "mau nanya dong gan",
    "description": "gimana caranya bikin aplikasi dalam 30 detik",
    "userId": "5d8b230647f66ecb655a38d2",
    "createdAt": "2019-09-25T08:33:59.848Z",
    "updatedAt": "2019-09-25T08:33:59.848Z",
    "__v": 0
}
```

Status : `403`
Response :

```
{
    "errors": [
        "Please login first"
    ]
}
```

###Upvote a question `PATCH /questions/:id/upvote`

| Route                   | HTTP    | Headers        | Body   | Descrition                  |                         |
| ----------------------- | ------- | -------------- | ------ | --------------------------- | ----------------------- |
| `/questions/:id/upvote` | `PATCH` | `token:String` | `none` | Giving a vote to a question | Authentication required |

Code : `200`  
Response :

```
{
    "title" : ""
    "description" : ""
    "upvote" : [
        { userId }
    ]
    "downvote" : [
        { userId }
    ]
    "answer" : [
        { answerId }
    ]
    "userId" : ""
    "createdAt" : ""
    "updatedAt" : ""
}
```

Status : `403`
Response :

```
{
    "errors": [
        "Please login first"
    ]
}
```

###Downvote a question `PATCH /questions/:id/downvote`

| Route                     | HTTP    | Headers        | Body   | Descrition                    |                         |
| ------------------------- | ------- | -------------- | ------ | ----------------------------- | ----------------------- |
| `/questions/:id/downvote` | `PATCH` | `token:String` | `none` | Delete a vote from a question | Authentication required |

Code : `200`  
Response :

```
{
    "title" : ""
    "description" : ""
    "upvote" : [
        { userId }
    ]
    "downvote" : [
        { userId }
    ]
    "answer" : [
        { answerId }
    ]
    "userId" : ""
    "createdAt" : ""
    "updatedAt" : ""
}
```

Status : `403`
Response :

```
{
    "errors": [
        "Please login first"
    ]
}
```

### Edit a question `PATCH /questions/:id`

| Route            | HTTP    | Headers        | Body                               | Descrition            |                                           |
| ---------------- | ------- | -------------- | ---------------------------------- | --------------------- | ----------------------------------------- |
| `/questions/:id` | `PATCH` | `token:String` | `title:String, description:String` | get a single question | Authentication and authorization required |

Code : `200`  
Response :

```
{
    "title" : ""
    "description" : ""
    "upvote" : [
        { userId }
    ]
    "downvote" : [
        { userId }
    ]
    "answer" : [
        { answerId }
    ]
    "userId" : ""
    "createdAt" : ""
    "updatedAt" : ""
}
```

Status : `403`
Response :

```
{
    "errors": [
        "Please login first"
    ]
}
```

Status : `401`
Response :

```
{
    "errors": [
        "You are not authorized!"
    ]
}
```

### Delete a question `DELETE /questions/:id`

| Route            | HTTP     | Headers        | Body   | Descrition               |                                           |
| ---------------- | -------- | -------------- | ------ | ------------------------ | ----------------------------------------- |
| `/questions/:id` | `DELETE` | `token:String` | `none` | Delete a single question | Authentication and authorization required |

Code : `200`  
Response :

```
{
    "title" : ""
    "description" : ""
    "upvote" : [
        { userId }
    ]
    "downvote" : [
        { userId }
    ]
    "answer" : [
        { answerId }
    ]
    "userId" : ""
    "createdAt" : ""
    "updatedAt" : ""
}
```

Status : `403`
Response :

```
{
    "errors": [
        "Please login first"
    ]
}
```

Status : `401`
Response :

```
{
    "errors": [
        "You are not authorized!"
    ]
}
```

##List of Answer router

###Create an answer `POST /answers`

| Route      | HTTP   | Headers        | Body                 | Descrition                        |                         |
| ---------- | ------ | -------------- | -------------------- | --------------------------------- | ----------------------- |
| `/answers` | `POST` | `token:String` | `description:String` | Create a new answer to a question | Authentication required |

Code : `201`  
Response :

```
{
    "title" : ""
    "description" : ""
    "upvote" : [
        { userId }
    ]
    "downvote" : [
        { userId }
    ]
    "createdAt" : ""
    "updatedAt" : ""
}
```

Status : `403`
Response :

```
{
    "errors": [
        "Please login first"
    ]
}
```

### Get an answer `GET /answers/:id`

| Route          | HTTP  | Headers        | Body   | Descrition                        |      |
| -------------- | ----- | -------------- | ------ | --------------------------------- | ---- |
| `/answers/:id` | `GET` | `token:String` | `none` | Create a new answer to a question |      |

Code : `201`  
Response :

```
{
    "title" : ""
    "description" : ""
    "upvote" : [
        { userId }
    ]
    "downvote" : [
        { userId }
    ]
    "createdAt" : ""
    "updatedAt" : ""
}
```

Code : `501`  
Response :

```
{
    "errors": [
        "Internal server error!"
    ]
}
```

###Upvote a question `PATCH /answers/:id/upvote`

| Route                 | HTTP    | Headers        | Body   | Descrition                 |                         |
| --------------------- | ------- | -------------- | ------ | -------------------------- | ----------------------- |
| `/answers/:id/upvote` | `PATCH` | `token:String` | `none` | Giving a vote to an answer | Authentication required |

Code : `200`  
Response :

```
{
    "title" : ""
    "description" : ""
    "upvote" : [
        { userId }
    ]
    "downvote" : [
        { userId }
    ]
    "createdAt" : ""
    "updatedAt" : ""
}
```

Status : `403`
Response :

```
{
    "errors": [
        "Please login first"
    ]
}
```

###Downvote a question `PATCH /answers/:id/downvote`

| Route                   | HTTP    | Headers        | Body   | Descrition                   |                         |
| ----------------------- | ------- | -------------- | ------ | ---------------------------- | ----------------------- |
| `/answers/:id/downvote` | `PATCH` | `token:String` | `none` | Delete a vote from an answer | Authentication required |

Code : `200`  
Response :

```
{
    "title" : ""
    "description" : ""
    "upvote" : [
        { userId }
    ]
    "downvote" : [
        { userId }
    ]
    "createdAt" : ""
    "updatedAt" : ""
}
```

Status : `403`
Response :

```
{
    "errors": [
        "Please login first"
    ]
}
```

### Edit an answer `PATCH /answers/:id`

| Route          | HTTP    | Headers        | Body                 | Descrition           |                                           |
| -------------- | ------- | -------------- | -------------------- | -------------------- | ----------------------------------------- |
| `/answers/:id` | `PATCH` | `token:String` | `description:String` | Edit a single answer | Authentication and authorization required |

Code : `200`  
Response :

```
{
    "title" : ""
    "description" : ""
    "upvote" : [
        { userId }
    ]
    "downvote" : [
        { userId }
    ]
    "createdAt" : ""
    "updatedAt" : ""
}
```

Status : `403`
Response :

```
{
    "errors": [
        "Please login first"
    ]
}
```

Status : `401`
Response :

```
{
    "errors": [
        "You are not authorized!"
    ]
}
```

### Delete an answer `DELETE /answers/:id`

| Route          | HTTP     | Headers        | Body   | Descrition             |                                           |
| -------------- | -------- | -------------- | ------ | ---------------------- | ----------------------------------------- |
| `/answers/:id` | `DELETE` | `token:String` | `none` | Delete a single answer | Authentication and authorization required |

Code : `200`  
Response :

```
{
    "title" : ""
    "description" : ""
    "upvote" : [
        { userId }
    ]
    "downvote" : [
        { userId }
    ]
    "createdAt" : ""
    "updatedAt" : ""
}
```

Status : `403`
Response :

```
{
    "errors": [
        "Please login first"
    ]
}
```

Status : `401`
Response :

```
{
    "errors": [
        "You are not authorized!"
    ]
}
```