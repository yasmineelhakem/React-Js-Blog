# React Blog Project

This is a simple blog application built with React, using Axios for API requests, Easy Peasy for state management, and React Bootstrap for styling.

## Usage

### API

This project interacts with an external API to manage posts. 

### State Management

This project uses Easy Peasy for state management. The store configuration can be found in `src/store.js`.

### Styling

React Bootstrap is used for styling components. 

### Components

- **Search:** A component to search for posts.
- **PostList:** Displays a list of all posts.
- **Post:** Displays a single post.
- **AddPost:** A form to add a new post.
- **EditPost:** A form to edit an existing post.

### Actions

The following actions are available in the store:

- `setPosts`
- `setSearch`
- `setPostTitle`
- `setPostBody`
- `setEditPostBody`
- `setEditPostTitle`
- `savePost`
- `deletePost`
- `editPost`
- `searchClick`

## Features

- **Create, Read, Update, Delete (CRUD) Posts:** Basic CRUD operations for blog posts.
- **Search Posts:** Search posts by title or body content.
- **State Management with Easy Peasy:** Easy Peasy provides a simple and powerful state management solution.
- **API Requests with Axios:** Axios is used to handle API requests.
- **Styling with React Bootstrap:** React Bootstrap provides a set of pre-styled components for a responsive UI.

## Deployment

This project is deployed using Netlify. Any changes pushed to the main branch are automatically deployed to https://clever-griffin-d0cc9d.netlify.app/.