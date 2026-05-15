import OpenAI from "openai";
import { ChatCompletionMessageParam, ChatCompletionTool } from "openai/resources/index";
import { zodResponseFormat } from 'openai/helpers/zod';
import { z } from "zod";
import { LifeData } from "@/data/lifedata";
import { ProjectsData } from "@/data/projectdata";

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY as string,
  dangerouslyAllowBrowser: true,
});

// --- Data Retrieval Functions ---

function getKikiLifeData(args: { data: string }): string {
  const content = LifeData[`${args.data}.tsx`] || LifeData[args.data] || {};
  return JSON.stringify({ data: args.data, content });
}

function getKikiProjectsData(args: { data: string }): string {
  const content = ProjectsData[args.data] || {};
  return JSON.stringify({ data: args.data, content });
}

function getAboutKiki(): string {
  return `Ekky Mulia Lasardi (Ekky/Kiki), Software Engineer in Jakarta. Focus: Fullstack & GenAI. Lead at GDGoc IPB. Pursuing Bachelor's in Software Engineering at IPB University.`;
}

function getWebsiteFAQ(): string {
  return `Built with Next.js, Tailwind, ShadCN, and MagicUI. Deployed on Vercel. Uses dynamic tool calling and structured outputs to provide consistent portfolio data.`;
}

// --- Tools Configuration ---

const tools: ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "get_kiki_life_data",
      description: "Get life data like education, skills, work, awards.",
      parameters: {
        type: "object",
        properties: {
          data: { type: "string", enum: ["educationformal", "skills", "workformal", "freelance", "awards", "journal", "gdgoc"] },
        },
        required: ["data"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_kiki_projects_data",
      description: "Get project data.",
      parameters: {
        type: "object",
        properties: {
          data: { type: "string", enum: ["personalhobbycompetitionproject", "freelanceworkproject"] },
        },
        required: ["data"],
      },
    },
  },
  {
    type: "function",
    function: { name: "get_about_kiki", description: "Get general bio summary.", parameters: { type: "object", properties: {} } },
  },
  {
    type: "function",
    function: { name: "get_website_faq", description: "Technical info about this site and AI logic.", parameters: { type: "object", properties: {} } },
  },
];

const ResponseFormatSchema = z.object({
  answer: z.string(),
  followUpQuestion: z.array(z.string()).min(4).max(4),
});

type ResponseFormat = z.infer<typeof ResponseFormatSchema>;

export async function askingAI(question: string, retryCount = 2): Promise<ResponseFormat> {
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: `You are Kiki Assistant. Answer based on the tools provided. 
      - Keep answers under 55 words.
      - Provide exactly 4 follow-up questions in the 2nd person (you).
      - If data is missing, say "I don't have that data yet."`,
    },
    { role: "user", content: question },
  ];

  try {
    // 1. First call to determine which tool to use
    const firstResponse = await client.chat.completions.create({
      messages,
      model: "deepseek/deepseek-v4-flash:free",
      tools,
      tool_choice: "auto",
    });

    const responseMessage = firstResponse.choices[0]?.message;

    if (responseMessage?.tool_calls) {
      messages.push(responseMessage);

      for (const toolCall of responseMessage.tool_calls) {
        const functionName = toolCall.function.name;
        const functionArgs = JSON.parse(toolCall.function.arguments);
        let result = "";

        // execution logic
        if (functionName === "get_kiki_life_data") result = getKikiLifeData(functionArgs);
        else if (functionName === "get_kiki_projects_data") result = getKikiProjectsData(functionArgs);
        else if (functionName === "get_about_kiki") result = getAboutKiki();
        else if (functionName === "get_website_faq") result = getWebsiteFAQ();

        messages.push({
          role: "tool",
          tool_call_id: toolCall.id,
          content: result,
        });
      }

      // 2. Second call to format the final result using Structured Output
      const finalResponse = await client.chat.completions.create({
        model: "openai/gpt-4o-mini", // o3-mini doesn't always support JSON schema perfectly on OpenRouter providers
        messages: messages,
        response_format: zodResponseFormat(ResponseFormatSchema, "portfolio_response"),
      });

      const finalContent = finalResponse.choices[0]?.message?.content;
      if (finalContent) {
        return ResponseFormatSchema.parse(JSON.parse(finalContent));
      }
    } else {
        // Fallback if no tool was called
        return { answer: responseMessage?.content || "I'm here to help with Kiki's portfolio.", followUpQuestion: ["Tell me about Kiki", "What are his skills?", "Show me his projects", "How was this site built?"] };
    }
  } catch (error) {
    console.error("AI Error:", error);
    if (retryCount > 0) return askingAI(question, retryCount - 1);
  }

  return { answer: "I'm having trouble connecting right now.", followUpQuestion: [] };
}
