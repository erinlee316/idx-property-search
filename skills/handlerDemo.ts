export async function getCurrentTime() {
  return { currentTime: new Date().toISOString() };
}

export async function handleMessage(message: string) {
  if (message.toLowerCase().includes("time")) {
    return await getCurrentTime();
  }

  if (message.toLowerCase().includes("listing")) {
    return {
      response: "I can show you some listings.",
    };
  }

  if (message.toLowerCase().includes("city")) {
    return {
      response: "Finding homes in that city",
    };
  }

  return { response: "I could not understand the request." };
}
