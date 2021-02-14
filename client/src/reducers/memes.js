export default (memes = [], action) => {
  switch (action.type) {
    case "DELETE":
      return memes.filter((meme) => meme._id !== action.payload);
    case "FETCH_ALL":
      return action.payload;
    case "UPDATE":
    case "LIKE":
      return memes.map((meme) =>
        meme._id === action.payload._id ? action.payload : meme
      );
    case "CREATE":
      return [...memes, action.payload];
    default:
      return memes;
  }
};
