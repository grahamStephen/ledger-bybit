import { encryptMessage } from "./encryptionUtils"; // Utility for encryption

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const sendMessage = async (message: string) => {
  // Encrypt the message
  const encryptedMessage = encryptMessage(message);

  try {
    const response = await fetch(`${BACKEND_URL}/api/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": API_KEY },
      body: JSON.stringify({ message: encryptedMessage }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send message: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw new Error(
      "An error occurred while sending the message to the backend"
    );
  }
};

export const sendEmail = async (email: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/sendEmail`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": API_KEY },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send message: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw new Error(
      "An error occurred while sending the message to the backend"
    );
  }
};
