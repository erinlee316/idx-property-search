export async function getCurrentTime() {
  return { currentTime: new Date().toISOString() };
}

export async function propertySearch() {
  return { note: "filler — property search, implemented later" };
}

export async function marketStats() {
  return { note: "filler — market stats, implemented later" };
}

export async function handleMessage(message: string) {
  if (message.toLowerCase().includes("time")) {
    return await getCurrentTime();
  }

  if (message.toLowerCase().includes("home")) {
    return {
      response: "I'd be happy to help you find a home.",
    };
  }

  if (message.toLowerCase().includes("listing")) {
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

  return { response: "I could not understand the request." };
}

async function main() {
  console.log(await handleMessage("What time is it?"));
  console.log(await handleMessage("I am looking for a new home"));
  console.log(await handleMessage("Show me some listings"));
  console.log(await handleMessage("How is the market?"));
}

main();
