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
    user: {
      id: "1",
      nickname: "Joe",
      avatar:
        "https://res.cloudinary.com/dofiasjpi/image/upload/v1531735316/user.jpg"
    },
    caption: "My Desktop",
    image:
      "https://res.cloudinary.com/dofiasjpi/image/upload/v1531736068/domenico-loia-310197-unsplash.jpg"
  },
  {
    id: "1",
    user: {
      id: "1",
      nickname: "Joe",
      avatar:
        "https://res.cloudinary.com/dofiasjpi/image/upload/v1531735316/user.jpg"
    },
    caption: "Smoking Weed!",
    image:
      "https://res.cloudinary.com/dofiasjpi/image/upload/v1531735211/party-unsplash.jpg"
  },
  {
    id: "2",
    user: {
      id: "1",
      nickname: "Joe",
      avatar:
        "https://res.cloudinary.com/dofiasjpi/image/upload/v1531735316/user.jpg"
    },
    caption: "Night View!",
    image:
      "https://res.cloudinary.com/dofiasjpi/image/upload/v1531735606/serhat-beyazkaya-672367-unsplash.jpg"
  },
  {
    id: "3",
    user: {
      id: "1",
      nickname: "Joe",
      avatar:
        "https://res.cloudinary.com/dofiasjpi/image/upload/v1531735316/user.jpg"
    },
    caption: "Vacation! Vaction!",
    image:
      "https://res.cloudinary.com/dofiasjpi/image/upload/v1531734692/raining-huang-31298-unsplash.jpg"
  }
];

console.log("all data: ", posts);
export const userData = {
  posts: posts,
  users: users
};
