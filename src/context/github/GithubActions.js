import axios from "axios";

const github = axios.create({
  baseURL: "https://api.github.com",
});

// Get search results:
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// Get user & repos:
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?per_page=5&sort=created`),
  ]);

  return { user: user.data, repos: repos.data };
};
