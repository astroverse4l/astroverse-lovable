
interface AIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface AIResponse {
  id: string;
  message: AIMessage;
  createdAt: string;
}

// Service to handle AI assistant interactions
export class AIService {
  private apiKey: string | null = null;
  private groqApiEndpoint = 'https://api.groq.com/openai/v1/chat/completions';
  private geminiApiEndpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
  
  // Method to set API keys - in a real application, these would be securely stored
  setApiKeys(groqKey: string, geminiKey: string) {
    this.apiKey = {
      groq: groqKey,
      gemini: geminiKey
    };
  }
  
  // Lyra assistant using Groq
  async askLyra(messages: AIMessage[]): Promise<AIResponse | null> {
    try {
      if (!this.apiKey?.groq) {
        console.error('Groq API key not set');
        return null;
      }
      
      const response = await fetch(this.groqApiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey.groq}`
        },
        body: JSON.stringify({
          model: 'llama3-70b-8192',
          messages: [
            { role: 'system', content: 'You are Lyra, an AI assistant specializing in research, knowledge discovery, and complex problem solving. You provide precise, accurate, and helpful responses.' },
            ...messages
          ],
          temperature: 0.7,
          max_tokens: 1024
        })
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${await response.text()}`);
      }
      
      const data = await response.json();
      
      return {
        id: data.id,
        message: data.choices[0].message,
        createdAt: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error calling Groq API:', error);
      return null;
    }
  }
  
  // Astra assistant using Gemini
  async askAstra(messages: AIMessage[]): Promise<AIResponse | null> {
    try {
      if (!this.apiKey?.gemini) {
        console.error('Gemini API key not set');
        return null;
      }
      
      // Convert chat format to Gemini's format
      const geminiMessages = messages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : msg.role,
        parts: [{ text: msg.content }]
      }));
      
      const response = await fetch(`${this.geminiApiEndpoint}?key=${this.apiKey.gemini}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: 'You are Astra, a creative AI assistant specializing in content creation, design ideation, and artistic collaboration. You are helpful, creative, and engaging.' }]
            },
            ...geminiMessages
          ],
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 1024
          }
        })
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${await response.text()}`);
      }
      
      const data = await response.json();
      
      return {
        id: Math.random().toString(36).substring(2, 15),
        message: {
          role: 'assistant',
          content: data.candidates[0].content.parts[0].text
        },
        createdAt: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return null;
    }
  }
}

export const aiService = new AIService();
