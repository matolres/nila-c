export const performRequest = async ({ query, variables = {}, includeDrafts = false }) => {
  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
      "Cache-Control": "no-cache",
    },
    method: "POST",
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await response.json();

  // Log the response body with pretty-printing
  console.log('Response Body:', JSON.stringify(responseBody, null, 2));

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`);
  }

  return responseBody;
};
