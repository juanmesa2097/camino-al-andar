const menu = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About us",
  },
];

export default (req, res) => {
  res.status(200).json(menu);
};
