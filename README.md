## Project setup
```
npm install
```

## Run
```
node server.js
```

## Global Variables

Set up your env variables in the .env file

```
DB="mongodb://localhost:27017/tn"
N_DEFAULT=3
FAKER_API="https://lorem-faker.vercel.app/api"
```

## Endpoints

There are 2 available endpoints:

1. GET /tasks that generate N tasks (N is dynamic, default is 3).
- **n: number of tasks to be generated, if ignored value is 3**

For example: http://localhost:8080/tasks?n=4

Response:
```json
[
    {
        "uuid": "f331b470-b6ad-4996-9b24-3c862441916a",
        "title": "aspernatur totam quasi",
        "done": false,
        "createdAt": "2022-08-28T13:23:00.869Z",
        "updatedAt": "2022-08-28T13:23:00.869Z",
        "id": "630b6c34cd6500bc44dc49f5"
    },
    {
        "uuid": "6fe6ec0a-fd23-4042-a792-159a3467b0e8",
        "title": "sed itaque non",
        "done": false,
        "createdAt": "2022-08-28T13:23:00.869Z",
        "updatedAt": "2022-08-28T13:23:00.869Z",
        "id": "630b6c34cd6500bc44dc49f6"
    },
    {
        "uuid": "62cf8835-bd8f-435f-b0ce-72772412f5bb",
        "title": "impedit totam est",
        "done": false,
        "createdAt": "2022-08-28T13:23:00.870Z",
        "updatedAt": "2022-08-28T13:23:00.870Z",
        "id": "630b6c34cd6500bc44dc49f7"
    },
    {
        "uuid": "432c7c23-7a06-40b5-a5db-a51d28e82a95",
        "title": "omnis sint repellat",
        "done": false,
        "createdAt": "2022-08-28T13:23:00.870Z",
        "updatedAt": "2022-08-28T13:23:00.870Z",
        "id": "630b6c34cd6500bc44dc49f8"
    }
]
```

2. PUT /tasks/:uuid that mark one task as done. 
- **uuid: auto generated task identificator**

For example: http://localhost:8080/tasks/f331b470-b6ad-4996-9b24-3c862441916a

Response:
```
{
    "message": "Task was updated successfully."
}
```

## Author
- [GERMAN DE LA CRUZ](https://www.linkedin.com/in/german-delacruz/)