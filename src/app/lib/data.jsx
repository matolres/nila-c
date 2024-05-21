
export default async function getData(id = null) {
    const url = id
    ? `https://cjwahixgspklivbzuuxe.supabase.co/rest/v1/products?id=eq.${id}`
    : "https://cjwahixgspklivbzuuxe.supabase.co/rest/v1/products";


    const res = await fetch(url, {
                    method: "GET",
                    headers: {
                        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqd2FoaXhnc3BrbGl2Ynp1dXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MTY0MTksImV4cCI6MjAzMTE5MjQxOX0.3QnDt9bicF_0L9HofVZoQJxBDlCAcSYBJFyUOiYGwY8",
                    },
                });
   
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }