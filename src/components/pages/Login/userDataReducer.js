export default (state, { type, payload }) => {
  switch (type) {
    case "username":
      return { ...state, username: payload };

    case "password":
      return { ...state, password: payload };

    default:
      return state;
  }
};
