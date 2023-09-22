export async function GET() {
    const USER_BASE_URL = process.env.USER_BASE_URL;
    const USER_ACCESS_TOKEN = process.env.USER_ACCESS_TOKEN;
  
    if (!USER_BASE_URL) {
      return new Response("User base URL not found", {
        status: 404,
      });
    }
    if (!USER_ACCESS_TOKEN) {
      return new Response("User API token not found", {
        status: 400,
      });
    }
  
    try {
      const request = await fetch(`${USER_BASE_URL}/my-url`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${USER_ACCESS_TOKEN}`
        },
      });
      if (!request.ok) {
        throw new Error(`Request failed with status ${request.status}`);
      }
  
      const responseJson = await request.json();
  
      return new Response(JSON.stringify(responseJson), {
        status: 200,
        statusText: 'Success',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      const responseBody = JSON.stringify({ error: errorMessage });
  
      return new Response(responseBody, {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }