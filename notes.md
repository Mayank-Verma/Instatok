API's:

1. For creating user:
http://localhost:4949/api/v1/signup

body: 

{
    "email":"mayankverma@yopmail.com",
    "password":"Mayank@123",
    "username":"mayank"
}

For verifying user:
http://localhost:4949/api/v1/login

body: 

{
    "email":"mayankverma@yopmail.com",
    "otp":"555407"   
}

For getting All users data:
http://localhost:4949/api/v1/users

For Getting a specific user by Id:
http://localhost:4949/api/v1/users/{id}

For uploading posts: 
http://localhost:4949/api/v1/post-upload


For Fetching All Posts:
http://localhost:4949/api/v1/fetchPosts


For Fetching Post by Id:
http://localhost:4949/api/v1/fetchPosts/{id}