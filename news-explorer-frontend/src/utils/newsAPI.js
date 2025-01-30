const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const apiKey = "089f7002af7c42b4b6e816bf2a582530";

export const fetchNewsArticles = async (keyword) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const url = `${newsApiBaseUrl}?q=${encodeURIComponent(
    keyword
  )}&from=${sevenDaysAgo}&to=${currentDate}&pageSize=100&apiKey=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  const data = await response.json();
  return data.articles;
};
