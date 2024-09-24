- Inside the database we should store the hashed password.
- Hashing is a one way process, it means that we can't reverse it.
- So we need to store the hashed password in the database.
- But when the user sign in again we need to hash the password and compare with the exiting hashed stored password.
- So no one can see the actual password in the database if leaked.
- But there is a problem if two people have same hashed string password then hacker can
know the password of one by asking the other person.

## Salting
- In the context of password hashing, we add salt to the password.
- If we dont do this hackers and use rainbow tables to find the password. (Rainbow table is a table of hashed passwords)
- Means that we add some random characters to the password.
- Then we hash the password with salt.
- We put the hashed password in the database and the salt in plain text in the database.

- We can use bcrypt for hashing and salting.

```js
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
// To hash a password:
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPlaintextPassword, salt);
// Store hash in your password DB.
```

```js
To check a password:
// Load hash from your password DB.
bcrypt.compareSync(myPlaintextPassword, hash); // true
bcrypt.compareSync(someOtherPlaintextPassword, hash); // false
```


## Input validation using ZOD
- By using this we can validate input from the user.
- So the user cant send the wrong data.
```js
const requiredBody = z.object({
      username: z.string().min(1).max(100),
      name: z.string().min(1).max(100),
      password: z.string().min(1).max(100),
   });
   

    const parseDataWithSuccess = requiredBody.safeParse(req.body);
    if (!parseDataWithSuccess.success){
      throw new Error("Incorrect format");
      
    }
```

## Assignment 
- Password validation.
