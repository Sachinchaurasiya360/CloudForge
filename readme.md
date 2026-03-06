# CloudForge

A cloud-based IDE platform where anyone can write, generate, and deploy code — all from the browser.

CloudForge combines a full-featured online code editor with AI-powered code generation (via Gemini and Claude) and one-click deployment, bringing together the best of platforms like Lovable and Vercel into a single unified experience.

---

## Features

### Cloud-Based Code Editor
- Write and edit code directly in the browser with a real-time development environment
- Support for multiple languages and frameworks
- Collaborative workspace with project management

### AI-Powered Code Generation
- Describe what you want to build in plain English and let AI write the code
- Integrated with **Google Gemini** and **Anthropic Claude** for intelligent code generation
- Iterate on generated code with follow-up prompts — just like chatting with a developer
- AI understands your full project context for accurate, relevant code suggestions

### One-Click Deployment
- Deploy your projects instantly with a Vercel-like deployment pipeline
- Git-based deployments with automatic builds
- Cloud-hosted on AWS infrastructure
- Get a live URL for every project with zero configuration

### Authentication & User Management
- Secure user authentication and session management
- Personal dashboard to manage all your projects
- Redis-backed sessions for fast, scalable access

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- Redis
- AWS credentials (for deployment features)

### Installation

```bash
# Clone the repository
git clone https://github.com/Sachinchaurasiya360/CloudForge
cd CloudForge

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### Development

```bash
# Start the client dev server
cd client
npm run dev

# Start the server (in a separate terminal)
cd server
npm run dev
```

The client runs at `http://localhost:5173` by default.

---

## How It Works

1. **Sign up** and create a new project
2. **Write code** in the cloud editor or **prompt the AI** to generate it for you
3. **Preview** your app in real time
4. **Deploy** with a single click and get a live URL

---

## License

This project is licensed under the MIT License.
