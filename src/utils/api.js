export const getSavedArticles = () => {
  return new Promise((resolve) => {
    console.log("Fetching saved articles...");
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85",
        title: "Lolita Fashion Makes a Statement: Red Lace-up Top Trends",
        description:
          "This exquisite Red Lace-up Detail Apple Embroidery and Print Short Sleeves Top has become a must-have for Lolita fashion enthusiasts.",
        url: "https://www.devilinspired.com/country/red-lace-up-detail-apple-embroidery-and-print-short-sleeves-top.html",
        urlToImage:
          "https://statics.devilinspired.com/image/cache/2024/0830/0/005f45ac-e710-9fce-1b16-850a7bfad6d0-750x1000.jpg.webp",
        source: "Lolita Berry News",
        publishedAt: "2023-09-20",
        keyword: "Lace",
      },
      {
        _id: "65f7371e7bce9e7d331b11a1",
        title: "Embrace Summer Vibes: Pink Apple Embroidery Neckline Tank Top",
        description:
          "This playful tank top with pink apple embroidery at the neckline is the perfect statement piece for a sunny day.",
        url: "https://www.devilinspired.com/country/pink-apple-embroidery-neckline-tank-top.html",
        urlToImage:
          "https://statics.devilinspired.com/image/cache/2024/0830/0/b6fd7b57-d726-9781-ac21-ff1585c472dc-750x1000.jpg.webp",
        source: "Lolita Berry Style",
        publishedAt: "2023-08-15",
        keyword: "Embroidery",
      },
      {
        _id: "65f7371e7bce9e7d331b11a2",
        title: "Trend Alert: Red Lace-up Apple Embroidery Top is Back",
        description:
          "Fashionistas are falling in love again with the iconic Red Lace-up Detail Top featuring intricate apple embroidery.",
        url: "https://www.devilinspired.com/country/red-lace-up-detail-apple-embroidery-and-print-short-sleeves-top.html",
        urlToImage:
          "https://statics.devilinspired.com/image/cache/2024/0830/0/aed468d2-fe35-4517-0d8d-720921d51d8c-750x1000.jpg.webp",
        source: "Lolita Weekly",
        publishedAt: "2023-07-30",
        keyword: "Apple",
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
