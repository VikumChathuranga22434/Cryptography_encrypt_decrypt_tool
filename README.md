# Crypto analysis

HI,
In Cryptography there are several algorithms to encrypt and decrypt the plain text to a cipher text. From this tool we trying to give a single pane of view to have hand on experience with these algos to use there functionalities in one place. And we try to help to you to have a proper knowledge about the encryption and decryption algorithms

Notion page Link: [Click Here...](https://www.notion.so/vikumchathuranga/Cryptography_encrypt_decrypt_tool-f553dff3bbda4ccd9107e840e7a90cbb?pvs=4)

## folder structure

### Project Architecture

- Vertical Slice Architecture
- Organizing code by features rather than technical layers helps in managing complexity and improving maintainability.

### General Project Structure

Directory Layout:

```
backend
├── controllers
├── routes // routes in the app
├── utils
├── src
│   ├── common         // Shared data across Node modules
│   ├── config         // Environment variable mapping and validation
│   ├── migrations     // Database migration files
│   ├── modules        // Core application parts
│   ├── scripts        // CLI scripts
│   ├── test-utils     // Test utility functions
│   └── main.ts        // Server setup and startup
├── .env.example       // Environment variables for development and CI testing
├── Dockerfile
├── docker-compose.yml
├── jest.config.js
├── package.json
├── tsconfig.json
```

### Modules Structure

GraphQL Modules:

The directory structure for GraphQL-based projects:

```
modules
└── cats
   ├── entities        // MikroORM entities
   ├── loaders         // Data loaders to avoid GraphQL N+1 problem
   ├── models          // GraphQL models
   ├── mutations       // GraphQL mutations
   ├── queries         // GraphQL queries
   ├── services        // Shared logic
   └── cats.module.ts  // Module definition
```

REST Modules:

The directory structure for REST-based projects:

```
modules
└── cats
   ├── dtos            // Data transfer objects
   ├── endpoints       // REST endpoints
   ├── entities        // MikroORM entities
   ├── services        // Shared logic
   └── cats.module.ts  // Module definition
```
