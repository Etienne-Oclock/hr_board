const initialState = {
  user: {
    name:"",
    id:0,
    isLogged:false
  }
}


export const createUserSlice = (set) => ({
  ...initialState,
  setUser: (name,id) => {
    set((state) => ({ user : { ...state.user, id , name, isLogged:true}}))
  },
  logout: () => {
    set(initialState)
  }
  // setUserName: (name) => {
  //   set((state) => ({ user: { id: state.user.id, name  } }));
  // },
  // setUserId: (id) => {
  //   set((state) => ({ user: { id , name: state.user.name} }));
  // },
  // setIsLogged: () => {
  //   set((state) => ({ user : { isLogged: state.user.id !== 0 ? true : false} }))
  // },
});
