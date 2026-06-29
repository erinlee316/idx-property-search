// ALL TOOLS
export async function getCurrentTime() {
  return { currentTime: new Date().toISOString() };
}

export async function propertySearch() {
  return { note: "filler — property search, implemented later" };
}

export async function marketStats() {
  return { note: "filler — market stats, implemented later" };
}

// WHATSAPP usage
// inspects a message and returns a response --> conditional statement is mapped by first matching keyword
export async function handleMessage(message: string) {
  if (message.toLowerCase().includes("time")) {
    return await getCurrentTime();
  }

  if (message.toLowerCase().includes("listings")) {
    return {
      response: "Let me pull up the active listings in that area for you.",
      skill: "propertySearch",
    };
  }

  if (message.toLowerCase().includes("market")) {
    return {
      response: "Let me look up the latest market trends for that area.",
      skill: "marketStats",
    };
  }

  return {
    response:
      "I'm sorry, I didn't quite catch that. You can ask me to search for listings or check market stats for a specific city.",
  };
}

// TESTER
// give sample messages through the handler and print results
async function main() {
  console.log(await handleMessage("What time is it?"));
  console.log(await handleMessage("Show me some listings"));
  console.log(await handleMessage("How is the current market?"));
  console.log(await handleMessage("What is this about?"));
}

main();
