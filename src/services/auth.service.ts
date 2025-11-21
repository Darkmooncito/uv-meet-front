/**
 * Login request service.
 * Uses Fetch API to execute authentication.
 */

export interface LoginPayload {
  username: string;
  password: string;
}

export async function loginRequest(payload: LoginPayload): Promise<boolean> {
  const endpoint = import.meta.env.VITE_API_URL + "/auth/login";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return response.ok;
}
