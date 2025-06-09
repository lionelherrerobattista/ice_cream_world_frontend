# Ice Cream World Front-end

This is the front-end for the Ice Cream World business. It displays the flavors that the business sells. The admin can add new flavors, edit or delete them.

# Getting started

```bash
npm start
```

## Run with backend in docker

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

# Users actions in detail

## Customer

- The customer can see the flavors.
- The customer can see the flavors details.

## Admin

- The admin user can add new flavors.
- The admin user can edit the flavors.
- The admin user can delete the flavors.
