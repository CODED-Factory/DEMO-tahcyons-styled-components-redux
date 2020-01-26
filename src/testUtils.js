import casual from "casual";

casual.seed(666);

export const fakeUserData = overrides => ({
  username: casual.username,
  password: casual.password,
  ...overrides
});

export const type = (wrapper, name, value) => {
  wrapper.find(`input[name="${name}"]`).simulate("change", {
    target: { name, value }
  });
};
