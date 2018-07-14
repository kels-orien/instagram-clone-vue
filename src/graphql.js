const users = [
  {
    id: "1",
    nickname: "Joe",
    avatar: ""
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
    user: users["0"],
    caption: "A fun day out!",
    image: ""
  },
  {
    id: "1",
    user: users["0"],
    caption: "Old Trafford Red!",
    image: ""
  },
  {
    id: "2",
    user: users["0"],
    caption: "Boarding Flight!",
    image: ""
  },
  {
    id: "3",
    user: users["0"],
    caption: "Moving on!",
    image: ""
  }
];

console.log("all data: ", posts);
export const userData = {
  posts: posts,
  users: users
};
