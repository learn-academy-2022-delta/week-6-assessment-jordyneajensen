# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: 

Researched answer:






2. Which RESTful routes must always be passed params? Why?

Your answer:
Get/show - displays a specific id
Get/edit - edits at a specific ID
Put/update - updates at a specific ID
Delete/destroy - destroys at a specific ID

Accessing specific IDs for RESTful routes allows actions to take place on that particular ID so as not to affect everything in the entire database, which is why it is so important to have these routes. It prevents vulnerabilities within a database and keeps databases as accurate as possible.

Researched answer:






3. Name three rails generator commands. What is created by each?

Your answer: 

rails generate model: generates a model of a table with keys and their values that make up a database
rails generate resource: generates paths and routes connected to the controller and view built-in.
rails generate migrations: generates migrations to the database to keep it up-to-date and also works as sort of an active history to see what has been done each step of the way; modifies the shape of the table

Researched answer:








4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students = this will show all the students

action: "POST" location: /students = this will create the new student and post to all the students

action: "GET" location: /students/new = this will create a new student in a form

action: "GET" location: /students/2 = this will show the student at ID: 2

action: "GET" location: /students/2/edit = this will allow an edit of student with ID: 2

action: "PATCH" location: /students/2 = this will update the edit of the student with ID: 2

action: "DELETE" location: /students/2 = this will delete student at ID: 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

-I can create a to do list and save it to a Task database.
-In the table of this list will have: task_name:string, priority:string, due_date:string, status:string
-I can create new tasks with name, priority, due_date, and status, and add them to the database.
-I can update tasks as the status changes, due dates change, and priorities change.
-I can edit tasks as needed
-I can delete tasks as needed
-I can reset tasks to zero
-I can show all my tasks for one day
-I can show all my tasks needed complete
-I can see tasks by due_date, or priority, or status
