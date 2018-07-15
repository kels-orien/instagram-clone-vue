const users = [
  {
    id: "1",
    nickname: "Joe",
    avatar: "./assets/user.jpg"
  },
  {
    id: "2",
    nickname: "John",
    avatar: ""
  }
];

const posts = [
  {
    id: "0",
    user_id: "1",
    caption: "My Desktop",
    image: "./assets/domenico-loia-310197-unsplash.jpg"
  },
  {
    id: "1",
    user_id: "1",
    caption: "Smoking Weed!",
    image: "./assets/party-unsplash.jpg"
  },
  {
    id: "2",
    user_id: "1",
    caption: "Night View!",
    image: "./assets/serhat-beyazkaya-672367-unsplash.jpg"
  },
  {
    id: "3",
    user_id: "1",
    caption: "Vacation! Vaction!",
    image: ""
  }
];

console.log("all data: ", posts);
export const userData = {
  posts: posts,
  users: users
};
