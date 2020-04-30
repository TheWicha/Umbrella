const rngColor = () => {
  const colors = [
    {
        primary: 'LightGreen',
        secondary: '#8ae58a'
    },
    {
        primary: "Gold",
        secondary: '#f5cf00'
    },
    {
        primary: "#1590FF",
        secondary: '#148af5'
    },
    {
        primary: "#00BFFF",
        secondary: '#00b8f5'
    }
];
  const randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
};

export default rngColor