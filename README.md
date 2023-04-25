
# Student Activities
Application developed for students to add and view activites/events/meetups.
Project uses React(Vite) on the frontend and Node+Express on the backend data is stored in MongoDB cluster.


## Environment Variables

If you wish to run this project locally, you will need to add the following environment variables to your .env file. PORT variable can be random although you're going to have to modify a few lines of code.

 `PORT`

 `DB_USER` 
 
 `DB_PASSWORD` 
 
 `DB_NAME`

## Run locally with docker compose
```bash
  git clone https://github.com/kayYZ1/StudentActivities.git
```

```bash
  cd StudentActivities
```
```bash
  docker compose up --build
```

## Run Locally by installing dependencies

Clone the project

```bash
  git clone https://github.com/kayYZ1/StudentActivities.git
  cd StudentActivities
```

Go to the projects directory

```bash
  cd client
  cd server
```

Install dependencies

```bash
  npm install
```

 Start the services

```bash
  npm run dev (on both)
```



