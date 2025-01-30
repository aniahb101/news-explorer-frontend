// src/utils/api.js
export const getSavedArticles = () => {
  return new Promise((resolve) => {
    console.log("Fetching saved articles...");
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85",
        title: "Some news article",
        url: "https://example.com/article1",
        imageUrl: "https://via.placeholder.com/150",
        source: "Example News",
        date: "January 1, 2023",
      },
      {
        _id: "65f7371e7bce9e7d331b11a0",
        title: "Another news article",
        url: "https://example.com/article2",
        imageUrl: "https://via.placeholder.com/150",
        source: "Another Source",
        date: "January 2, 2023",
      },
    ]);
  });
};

export const saveArticle = (article) => {
  return new Promise((resolve) => {
    console.log("Saving article...");
    resolve({
      _id: "65f7371e7bce9e7d331b11a0",
      ...article,
    });
  });
};
