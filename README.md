# Fakebooker 1.0.0 ![Fakebooker-Frontend](https://github.com/KristianWEB/fakebooker-frontend/workflows/Fakebooker-Frontend/badge.svg) ![Fakebooker-Backend](https://github.com/KristianWEB/fakebooker-backend/workflows/Fakebooker-Backend/badge.svg)

Fakebooker is an extensive open-source project that is essentially a clone of the real Facebook. Now Fakebooker is not one of those little pet projects that just prove the concept, the Fakebooker UI is almost identical to the real Facebook Beta which makes it even more unique. The idea of this project is to try to implement Facebook's design patterns using the MERN stack. It is made for educational purposes only and nothing else!

## Technologies

### Frontend

- Javascript library for building User Interfaces: `React`
- Client for handling GraphQL queries + caching + local state management: `ApolloClient`
- CSS-in-JS library for handling Fakebooker's styles: `styled-components`
- Performant, flexible and extensible forms with easy-to-use validation: `react-hook-form`
- Notifications are built on top of: `react-toastify`
- Popups are made using: `reactjs-popup`
- Handling time properly: `momentjs`
- Skeletons for loading components: `react-content-loader`
- Loading spinners for smaller actions: `react-loader-spinner`

### Backend [link](https://github.com/KristianWEB/fakebooker-backend)

- The NoSQL database for modern applications: `mongodb`
- Elegant MongoDB object modeling for node.js: `mongoose`
- GraphQLServer: `apollo-server`
- Authentication built on top of tokens: `jwt`
- Image Upload: `cloudinary`
- Easily faking data: `faker`
- Testing framework: `jest`
- Integration testing package: `apollo-server-testing`

**Most of the backend code is test covered except some resolvers and the subscription ones**

## Features ( 1.0.0 )

**I've tried my best to clone the real Facebook Beta even with the same colors provided in theme.js**

### Login / Register

- You can `login` or `register` easily, and if something goes wrong there are cool validations to help you get on ( every input is validated on the app )

### Post

- You can create a post in which you can also use `markdown` and upload an image if you want to just like Facebook
- You can like or comment on a post and if the post is not yours the person who created it will receive an instant realtime notification about your particular action ( `apollo subscriptions` )
- You can delete a post ( `if it's yours all comments and likes associated to it will get deleted` )
- You can unlike or delete your comment ( `the notifications related to your like or comment will get deleted` )
- You can delete anyone's comment as long as you are the post creator
- On every post or comment if you hover on the post's / comment's creator you can go to his profile page

### ProfileHeader

- You can make friends: send friend requests to other users and they can respond to your request ( `a friend notification is fired through subscriptions once again` )
- You can open up a chat with that particular user
- You can change your avatarImage ( `cloudinary` )
- You can change your coverImage ( `cloudinary` )
- You can view your Timeline, About, Friends and Photos pages ( `refer to ProfilePage` )

### Navbar

- You can search for users with filter on.
- You can chat with people ( `again through subscriptions` ) and the ProfilePage corresponds with that user's data
- You can see all your conversations ( `chat button on Navbar` )
- You can see all your notifications ( `notification button on Navbar` )
- When you click on a notification it redirects you to the SinglePostPage if it's a post type or user if it's a friend request type

### Loading

- Loading states and skeletons for every single component/page on the app

### SinglePostPage

- Navbar
- Consists of the single post that the notification is pointing to

### Newsfeed

- The newsfeed contains all posts from the app, which again you can interact with them
- Contacts: Your friends ( `if you click on a friend, a chat tab is going to be opened for a quick chat with him` )
- Navbar

### ProfilePage

- Navbar
- ProfileHeader

#### You've read most of the features, go to [fakebooker.com](https://fakebooker.com) and then check in real time the features that I'm explaining

#### Timeline Page

- Consists of all your information: About, Photos, Friends and your posts

#### About Page

- Consists of all your personal information such as:
  - Workplace
  - School
  - Homeplace
  - Birthday
  - Gender

#### Friends Page

- Consists of all your friends ( `each friend has a button to remove him from your friends' list` )

#### Photos Page

- Consists of all your posts that contain images

## Setup a local environment

```sh
npm install && npm start
```

## Contribute

Contribution is accepted and I encourage you to do so as long as you follow my Github worklfow

## Issues / Problems

Check out `Projects` tab in both frontend and backend repos and if you don't find that issue that you are having, better create one and I will make sure everything is alright!
