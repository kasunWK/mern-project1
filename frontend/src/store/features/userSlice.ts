import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const getInitialState = (): UserType | null => {
  let user = localStorage.getItem("user");
  if (user) return JSON.parse(user) as UserType;
  return null;
};

const initialState = getInitialState();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(_, action: PayloadAction<UserType>) {
      return action.payload;
    },
    removeUser(_) {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
