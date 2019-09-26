#HACKTIV OVERFLOW



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
    "token": "........",
    "user": {
        "id": "5d8b1ff5fcca22cad566a901",
        "email": "2@mail.com",
        "name": "dua"
    }
}
```

Status : `400`
Response :

```
{
    "errors": [
        "Email is required!",
        "Email format is invalid!",
        "Email is already registered!",
        "Password is required!"
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
    "token": "........",
    "user": {
        "id": "5d8b1ff5fcca22cad566a901",
        "email": "2@mail.com",
        "name": "dua"
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
    "userId": "5d8b230647f66ecb655a38d2",
    "name": "zaki",
    "email": "zaki@mail.com",
    "iat": 1569400428
}
```

Code : `403`  
Response :

```
{
		"errors" : [
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

Status : `401`
Response :

```
{
    "errors": [
        "You are not authorized!"
    ]
}
```

###Get single question `GET /questions/:id`

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

###Get all answer for one question `GET /questions/:id/answer`

| Route                   | HTTP  | Headers        | Body   | Descrition                 |                         |
| ----------------------- | ----- | -------------- | ------ | -------------------------- | ----------------------- |
| `/questions/:id/answer` | `GET` | `token:String` | `none` | Get all questions's answer | Authentication required |

Code : `200`  
Response :

```
[
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
]
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

### Status : `401`
Response :

```
{
    "errors": [
        "You are not authorized!"
    ]
}
```

### 

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

Status : `401`
Response :

```
{
    "errors": [
        "You are not authorized!"
    ]
}
```