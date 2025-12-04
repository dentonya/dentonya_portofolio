# AI Portfolio - Dennis Atonya

An interactive AI-powered portfolio where visitors can chat with an AI assistant to learn about Dennis Atonya's experience, skills, and projects.

## Features

- 🤖 **AI Chat Interface** - Chat with an AI assistant powered by OpenAI or Anthropic
- 🎨 **Minimalistic Design** - Clean, modern UI with gradient backgrounds
- ⚡ **Quick Actions** - Pre-defined prompts for common questions (Me, Projects, Skills, Experience, Contact)
- 📱 **Responsive** - Works seamlessly on all devices
- 🎭 **Smooth Animations** - Framer Motion animations for a polished experience

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **AI:** OpenAI GPT-4o-mini / Anthropic Claude
- **Animations:** Framer Motion
- **Markdown:** React Markdown

## Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenAI API key or Anthropic API key

### Installation

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

Create a `.env.local` file in the root directory:

```env
# Choose your AI provider: "openai" or "anthropic"
AI_PROVIDER=openai

# Add your API key
OPENAI_API_KEY=your_openai_api_key_here
# OR
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ai-portfolio/
├── src/
│   ├── app/
│   │   ├── api/chat/route.ts    # AI chat API endpoint
│   │   ├── page.tsx             # Main page
│   │   ├── layout.tsx           # Root layout
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── ChatInterface.tsx    # Chat UI component
│   │   └── Header.tsx           # Header with social links
│   └── data/
│       └── cv-data.ts           # CV/resume data for AI context
├── .env.local                   # Environment variables (not committed)
└── package.json
```

## Customization

### Update CV Data

Edit `src/data/cv-data.ts` to update personal information, experience, skills, projects, etc.

### Change AI Provider

In `.env.local`, set `AI_PROVIDER` to either `"openai"` or `"anthropic"` and provide the corresponding API key.

### Modify Quick Actions

Edit the quick action buttons in `src/components/ChatInterface.tsx`:

```typescript
const prompts: Record<string, string> = {
  me: "Tell me about Dennis Atonya",
  projects: "What are Dennis's notable projects?",
  // Add more...
};
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
