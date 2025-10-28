import type { Message } from "./chatTypes";

// Sends a message to the n8n webhook and returns a normalized response text
export async function sendMessageToN8N(
  message: string,
  sessionId: string,
  history: Message[],
  webhookUrl: string
): Promise<string> {
  try {
    const jwt = import.meta.env.VITE_CHATBOT_JWT as string | undefined;

    // Prepare a compact history (last 5)
    const conversationHistory = history.slice(-5).map((msg) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text,
    }));

    const payload = {
      message,
      sessionId,
      timestamp: new Date().toISOString(),
      conversationHistory,
    };

    console.log("[Chatbot] POST", { webhookUrl, sessionId, payload });

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(jwt ? { Authorization: `Bearer ${jwt}` } : {}),
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Chatbot] HTTP error:", response.status, errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log("[Chatbot] Response data:", data);

    // n8n may return array of items or object, sometimes wrapped in { json: ... }
    const unwrap = (d: any) => {
      if (Array.isArray(d)) {
        const first = d[0] ?? {};
        return first?.json ?? first;
      }
      return d?.json ?? d;
    };

    const payloadOut = unwrap(data);
    const text =
      payloadOut?.response ??
      payloadOut?.message ??
      payloadOut?.output ??
      payloadOut?.data?.response ??
      payloadOut?.data?.message ??
      "";

    return text || "I'm here to help!";
  } catch (error: any) {
    console.error("[Chatbot] Network/parse error:", error);
    if (error instanceof TypeError && String(error.message).includes("fetch")) {
      return "Network error: Unable to connect to the chatbot service. Please check your internet connection.";
    }
    return "Sorry, I'm having trouble connecting right now. Please try again later or contact me directly.";
  }
}
