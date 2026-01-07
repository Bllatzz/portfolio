export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

