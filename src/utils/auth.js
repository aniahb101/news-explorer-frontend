// src/utils/auth.js
export const authorize = (email, password) => {
  return new Promise((resolve) => {
    console.log("Simulating backend login...");
    resolve({ token: "fake-jwt-token" });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve) => {
    console.log("Validating token...");
    resolve({
      user: { name: "Fake User", email: "fake@example.com", id: "fake-id" },
    });
  });
};
