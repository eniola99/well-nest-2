import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ApplicationPageProps, RoleProps } from "../utils/utils";

const initialState: ApplicationPageProps = {
  role: {
    title: "",
    job_type: "",
    salary: "",
    reports_to: "",
    berief: "",
    your_role: "",
    key_responsibilities: [],
    additional_training_provided: [],
    what_you_bring: [],
    why_join_us: [],
  },
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setOpenPosition(state, action: PayloadAction<RoleProps>) {
      return {
        ...state,
        role: action.payload,
      };
    },
  },
});

export const { setOpenPosition } = jobSlice.actions;
export default jobSlice.reducer;
