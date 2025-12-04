import { NextResponse } from "next/server";
import { cvData } from "@/data/cv-data";
import { generateMockResponse } from "@/utils/mockAI";

// You can switch between OpenAI, Anthropic, or Mock AI
const AI_PROVIDER = process.env.AI_PROVIDER || "mock"; // "openai", "anthropic", or "mock"

// Build context from CV data
const buildContext = () => {
  return `You are an AI assistant representing Dennis Atonya, a Software Engineer. Here's information about Dennis:

PERSONAL INFO:
- Name: ${cvData.personalInfo.name}
- Title: ${cvData.personalInfo.title}
- Location: ${cvData.personalInfo.location}
- Email: ${cvData.personalInfo.email}
- LinkedIn: ${cvData.personalInfo.linkedin}
- GitHub: ${cvData.personalInfo.github}

SUMMARY:
${cvData.summary}

EXPERIENCE:
${cvData.experience
  .map(
    (exp) => `
- ${exp.position} at ${exp.company} (${exp.duration})
  Location: ${exp.location}
  Technologies: ${exp.technologies.join(", ")}
  Responsibilities:
${exp.responsibilities.map((r) => `  * ${r}`).join("\n")}
`
  )
  .join("\n")}

SKILLS:
- Languages: ${cvData.skills.languages.join(", ")}
- Frontend: ${cvData.skills.frontend.join(", ")}
- API Design: ${cvData.skills.apiDesign.join(", ")}
- Databases: ${cvData.skills.databases.join(", ")}
- ORMs: ${cvData.skills.orms.join(", ")}
- Testing: ${cvData.skills.testing.join(", ")}
- Security: ${cvData.skills.security.join(", ")}
- Version Control: ${cvData.skills.versionControl.join(", ")}
- DevOps: ${cvData.skills.devops.join(", ")}
- Cloud: ${cvData.skills.cloud.join(", ")}
- Tools: ${cvData.skills.tools.join(", ")}
- Soft Skills: ${cvData.skills.softSkills.join(", ")}

NOTABLE PROJECTS:
${cvData.projects
  .map(
    (proj) => `
- ${proj.name}: ${proj.description}
  Technologies: ${proj.technologies.join(", ")}
  Highlights:
${proj.highlights.map((h) => `  * ${h}`).join("\n")}
`
  )
  .join("\n")}

EDUCATION:
${cvData.education.degree} from ${cvData.education.institution} (${cvData.education.year})
Achievements: ${cvData.education.achievements.join(", ")}

CERTIFICATIONS:
${cvData.certifications.map((cert) => `- ${cert}`).join("\n")}

INTERESTS:
${cvData.interests.map((interest) => `- ${interest}`).join("\n")}

Please respond in a friendly, professional manner. Keep responses concise but informative. Use emojis occasionally to make the conversation engaging. If asked about contact information, provide the email and LinkedIn links. If asked about specific technical details, refer to the information above.`;
};

async function chatWithOpenAI(messages: { role: string; content: string }[]) {
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error("OpenAI API key not configured");
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: buildContext(),
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

async function chatWithAnthropic(messages: { role: string; content: string }[]) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    throw new Error("Anthropic API key not configured");
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 500,
      system: buildContext(),
      messages: messages,
    }),
  });

  if (!response.ok) {
    throw new Error(`Anthropic API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.content[0].text;
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    let responseText: string;

    // Use Mock AI if no API provider is configured or if explicitly set to "mock"
    if (AI_PROVIDER === "mock") {
      const lastMessage = messages[messages.length - 1];
      responseText = generateMockResponse(lastMessage.content);
    } else if (AI_PROVIDER === "anthropic") {
      responseText = await chatWithAnthropic(messages);
    } else {
      responseText = await chatWithOpenAI(messages);
    }

    return NextResponse.json({
      message: responseText,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error: "Failed to process chat request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
