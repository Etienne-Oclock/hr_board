export const createUserSlice = (set) => ({
  user: {
    name: "",
    id: 0,
  },
  setUserName: (name) => {
    set((state) => ({ user: { id: state.user.id, name  } }));
  },
  setUserId: (id) => {
    set((state) => ({ user: { id , name: state.user.name} }));
  },
});
