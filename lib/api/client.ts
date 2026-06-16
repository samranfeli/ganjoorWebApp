export const BASE_URL = 'https://api.ganjoor.net';

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

type ApiClientOptions = RequestInit;

export async function apiClient<T>(
  endpoint: string,
  options?: ApiClientOptions
): Promise<T> {
  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      ...options,
      headers: {
        'Accept': 'application/json',
        ...options?.headers,
      },
    }
  );
  
  if (!response.ok) {
  const errorText = await response.text();
  throw new ApiError(
    response.status,
    errorText || response.statusText
  );
}

  return response.json() as Promise<T>;
}