/* eslint-disable no-unused-vars */

export const authorize = (_email, _password) => {
  return new Promise((resolve) => {
    console.log("Simulating backend login...");
    resolve({ token: "fake-jwt-token" });
  });
};

export const checkToken = (_token) => {
  return new Promise((resolve) => {
    console.log("Validating token...");
    resolve({
      user: { name: "Fake User", email: "fake@example.com", id: "fake-id" },
    });
  });
};
