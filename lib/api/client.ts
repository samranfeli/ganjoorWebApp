export const BASE_URL = 'https://api.ganjoor.net';

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
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
  throw new ApiError(
    response.status,
    response.statusText,
  );
}

  return response.json() as Promise<T>;
}