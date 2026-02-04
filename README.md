# Readly Finance

Vite + React + AWS Amplify Finance Application

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite 7
- **Backend**: AWS Amplify Gen 2
- **Auth**: Amazon Cognito
- **Database**: AWS AppSync + DynamoDB

## Getting Started

### Prerequisites

- Node.js >= 20.20.0
- npm >= 10.8.0
- AWS Account with Amplify configured

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Amplify Setup

```bash
# Deploy Amplify backend (sandbox)
npx ampx sandbox

# Deploy to production
npx ampx pipeline-deploy
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
readly-finance/
├── amplify/           # Amplify backend configuration
│   ├── auth/          # Authentication configuration
│   ├── data/          # Data model & API configuration
│   └── backend.ts     # Backend entry point
├── src/               # React application source
│   ├── assets/        # Static assets
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Application entry point
├── public/            # Public static files
└── package.json       # Project dependencies
```

## License

MIT
