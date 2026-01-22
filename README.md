# Ice Cream World Front-end

This is the front-end for the Ice Cream World business. It is a system for the employees to add new flavors, edit or delete them.

# Getting started

1. Start app

```bash
npm start
```

## Run with backend in Docker

1. Run app with Docker

```bash
npm run docker
```

# Technical Docs

- Framework:

  - Angular v20

- [Backend repository](https://github.com/lionelherrerobattista/ice_cream_world_backend)

# Components

## Home

- `/home`

Displays the flavors and serving cups.

## Flavor

- `/flavor/:id`

Displays the flavor details

- `/flavor/:id/edit`

Allows the user to edit the flavor details.

- `/flavor/new`

Allows the user to add a new flavor.

# User stories

- UI
  - [ ] Add SCSS styles.
  - [ ] Add toast.
  - [ ] Add error messages.
  - [ ] Add favicon.
  - [ ] Improve image loading and layout wobbling
- Flavor Component
  - [ ] Fix redirection when deleting element.
  - [ ] Add spinner when loading flavor.
- Flavor list
  - [ ] Add table to display flavors
  - [ ] Add spinner when loading flavors.
- Edit flavor
  - [ ] Extract form to components scss (same as new-flavor component).
  - [ ] Display the flavor image?