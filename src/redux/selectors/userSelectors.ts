import { RootState } from '../store';

export const selectUserId = (state: RootState) => state.user.id;
export const selectUserName = (state: RootState) => state.user.name;
export const selectUserEmail = (state: RootState) => state.user.email;
