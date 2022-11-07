const parseResponse = async (response) => {
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

const endpoints = {
  user: process.env.REACT_APP_BACKEND + "/user",
  register: process.env.REACT_APP_BACKEND + "/user/register",
  userById: (id) => process.env.REACT_APP_BACKEND + `/user/${id}`,
  postsByUserId: (id) => process.env.REACT_APP_BACKEND + `/user/${id}/posts`,
  login: process.env.REACT_APP_BACKEND + "/user/login",
  posts: process.env.REACT_APP_BACKEND + "/post",
  createPost: process.env.REACT_APP_BACKEND + "/post/create",
  postById: (id) => process.env.REACT_APP_BACKEND + `/post/${id}`,
};

// USER

const register = async ({ email, password }) => {
  const response = await fetch(endpoints.register, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return parseResponse(response);
};

const login = async ({ email, password }) => {
  const response = await fetch(endpoints.login, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return parseResponse(response);
};

const retrieve = async (id) => {
  const response = await fetch(endpoints.userById(id));
  return parseResponse(response);
};

// POSTS

const getPost = async (id) => {
  const response = await fetch(endpoints.postById(id));
  return parseResponse(response);
};

const getUserPosts = async (id) => {
  const response = await fetch(endpoints.postsByUserId(id));
  return parseResponse(response);
};

const getPosts = async () => {
  const response = await fetch(endpoints.posts);
  return parseResponse(response);
};

export const createPost = async ({ data, token }) => {
  const response = await fetch(endpoints.createPost, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });
  return parseResponse(response);
};

export const deletePostService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/post/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

//LIKES

//const

const services = {
  user: {
    register,
    login,
    retrieve,
  },
  posts: {
    getPost,
    getPosts,
    getUserPosts,
    createPost,
  },
  //likes{

  //  }
};

export default services;
