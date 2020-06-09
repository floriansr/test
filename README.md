### THP Gram React/RailsAPI

## Application

Now that you have created your JSON API with Rails, it's time to use it from a React app to be able to use the datas and format them!

## Topic


You just signed your first contract as a young freelance developer. Wow, classy! A client would like you to help him revisit Instagram, renamed THPGram for the occasion. Now that you're starting to get the hang of it, we can take you on your own and put you through your paces in a real-world application.

For this application, your only indications will be user stories as often in a real professional project. So it's up to you to organize your UI, your routes, your datas (even if I strongly advise you to use Redux), etc... The goal is just that the user can do everything he asked for.

Here is the list of stories:

If he doesn't have an account, the user must be able to register in the application.
The user must be able to authenticate in the application.
If not authenticated, the user is redirected to the login page.
The user must be able to disconnect from the application (and his token will no longer be valid).
The user must be able to delete his account
The user must be able to consult his user profile :
Username
First name/Last name
Email
Date of registration
The user must be able to edit his profile (email, first name, last name).
The user must be able to upload an image with a description.
The user must be able to modify the description of one of his images.
The user must be able to delete one of his images
The user must be able to consult his images
The user must be able to consult a list of images ordered by date for all users.
By clicking on an image, the user must be able to consult a particular image with its comments.
The user must be able to comment on an image
The user must be able to delete one of his comments.
3. Bonus
The user can pass an image in private and it becomes visible only to the user.
The user must be able to see the username of the person who uploaded the image.
By clicking on the username, the user can consult the profile page of the username he has clicked on and thus see :
His username
His First Name/Last Name
His Email
Its date of registration
His image list


## Installation

```
git clone https://github.com/floriansr/THPGram.git
```

```
cd THPGram
```

```
npm install
```

```
npm start
```

## Author

-   **Florian Sueur** - _Initial work_ - (https://github.com/floriansr)

Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject