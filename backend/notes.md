API's:

1. For creating user:
   http://localhost:4949/api/v1/signup

body:

{
"email":"mayankverma@yopmail.com",
"password":"Mayank@123",
"username":"mayank"
}

2. For verifying user:
   http://localhost:4949/api/v1/login

body:

{
"email":"mayankverma@yopmail.com",
"otp":"555407"  
}

3. For getting All users data:
   http://localhost:4949/api/v1/users

4. For Getting a specific user by Id:
   http://localhost:4949/api/v1/users/{id}

5. For uploading posts:
   http://localhost:4949/api/v1/post-upload

6. For Fetching All Posts:
   http://localhost:4949/api/v1/fetchPosts

7. For Fetching Post by Id:
   http://localhost:4949/api/v1/fetchPosts/{id}
