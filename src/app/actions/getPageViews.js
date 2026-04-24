"use server";

export async function getPageViews() {
  try {
    const websiteId = process.env.UMAMI_WEBSITE_ID;
    const apiUrl = process.env.UMAMI_API_URL ?? "https://api.umami.is"; // Umami Cloud default
    const apiKey = process.env.UMAMI_API_KEY; // Umami API key

    if (!websiteId || !apiUrl || !apiKey) {
      console.warn("Umami env vars not configured.");
      return null;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    let res;
    try {
      res = await fetch(
        `${apiUrl}/v1/websites/${websiteId}/stats?startAt=0&endAt=${Date.now()}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          signal: controller.signal,
          next: { revalidate: 3600 },
        }
      );
    } finally {
      clearTimeout(timeout);
    }

    if (!res.ok) {
      console.error("Umami API error:", res.status, await res.text());
      return null;
    }

    const data = await res.json();
    // Response shape: { pageviews: 8, visitors: 2, ... }
    return typeof data?.pageviews === "number" ? data.pageviews : null;
  } catch (err) {
    if (err.name === "AbortError") {
      console.warn("Umami API timed out — showing no count.");
    } else {
      console.error("Failed to fetch Umami page views:", err);
    }
    return null;
  }
}
