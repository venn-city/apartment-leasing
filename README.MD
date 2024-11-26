# Apartment Leasing System - Full Stack Home Assignment

A full-stack application for managing apartment leases using React Remix (SSR), GraphQL, and PostgreSQL.

## 🎯 Task Overview

Create a leasing management system with two main features:

1. **Lease Listing Page**

   - Paginated list view (25 items per page)
   - Drag and drop reordering
   - Search functionality

2. **New Lease Form**
   Multi-step form with the following steps:
   - Property Details (address, type, rent)
   - Tenant Information (name, email, phone)
   - Lease Terms (start date, end date, security deposit)

## 🛠 Tech Stack

- **Frontend**: React Remix with SSR
- **API**: GraphQL with graphql-yoga
- **Database**: PostgreSQL
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS
- **GraphQL Client**: genql

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm
- Docker and Docker Compose

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/venn-city/apartment-leasing
   cd apartment-leasing
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development environment**

   ```bash
   docker-compose up --build
   ```

4. **Initialize the database**
   ```bash
   # In a new terminal
    pnpm --filter api migrate
    pnpm --filter api seed
   ```

The application will be available at:

- Web App: http://localhost:3000
- GraphQL API: http://localhost:4000/graphql

## 📝 Development Tasks

### Backend Requirements

1. **Database Schema**

   - Set up proper indexes for efficient querying

2. **GraphQL API**
   - Implement the lease query with pagination and search
   - Implement the create lease mutation
   - Implement the update lease order mutation

### Frontend Requirements

1. **Lease List Page (`/leases`)**

   - Implement paginated list with 25 items per page
   - Add drag and drop reordering functionality
   - Implement search by address or tenant name

2. **New Lease Form (`/leases/new`)**
   - Create a multi-step form
   - Implement form state persistence between steps
   - Add validation for all required fields
   - Show progress indicator

## 📁 Project Structure

```
apartment-leasing/
├── docker/
│   ├── Dockerfile.api
│   ├── Dockerfile.web
│   └── docker-compose.yml
├── packages/
│   ├── api/
│   │   ├── src/
│   │   │   ├── db/
│   │   │   ├── resolvers/
│   │   │   └── schema.graphql
│   │   └── package.json
│   └── web/
│       ├── app/
│       │   ├── routes/
│       │   ├── styles/
│       │   └── lib/
│       └── package.json
└── README.md
```

## 💻 Development Commands

```bash
# Start development environment
docker-compose up

# Generate GraphQL types
pnpm --filter web generate:gql

# Run database migrations
docker-compose exec api pnpm migrate

# Seed database
docker-compose exec api pnpm seed
```

## 📊 Database Seeding

The seed script will populate the database with 100,000 sample lease records. This helps in testing:

## ✨ Bonus Points

- Adding comprehensive test coverage
- Implementing advanced search filters
- Adding performance optimizations

## 📋 Evaluation Criteria

1. **Code Quality**

   - Clean, maintainable code
   - Proper TypeScript usage
   - Error handling

2. **Functionality**

   - Working pagination
   - Smooth drag and drop
   - Form validation
   - Data persistence

3. **Performance**

   - Efficient database queries
   - Client-side optimization

4. **UX Considerations**
   - Loading states
   - Error feedback
   - Form progression
   - Responsive design

## 📝 Submission Guidelines

1. Fork this repository
2. Complete the implementation
3. Submit a pull request
4. Include:
   - Setup instructions
   - Any additional features implemented
   - Architectural decisions made
   - Performance considerations

## 🔒 License

This project is provided for interview purposes only.
