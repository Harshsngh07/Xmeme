import * as api from "../api";

export const getMemes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMemes();
    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createMeme = (meme) => async (dispatch) => {
  try {
    const { data } = await api.createMemes(meme);
    dispatch({
      type: "CREATE",
      payload: data,
    });
  } catch (err) {
    alert("Meme already exists.Try different name or caption");
  }
};

export const updateMeme = (id, meme) => async (dispatch) => {
  try {
    const { data } = await api.updateMeme(id, meme);
    dispatch({
      type: "UPDATE",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const likeMeme = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeMeme(id);
    dispatch({ type: "LIKE", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteMeme = (id) => async (dispatch) => {
  try {
    await api.deleteMeme(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (err) {
    console.log(err);
  }
};
