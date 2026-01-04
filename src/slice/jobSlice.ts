import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ApplicationPageProps, IJobTemplate } from "../utils/utils";

const initialState: ApplicationPageProps = {
  role: {
    title: "",
    type: "",
    salary: "",
    lineManager: "",
    role: "",
    keyResponsibilities: [],
    jobRequirement: [],
  },
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setOpenPosition(state, action: PayloadAction<IJobTemplate>) {
      return {
        ...state,
        role: action.payload,
      };
    },
  },
});

export const { setOpenPosition } = jobSlice.actions;
export default jobSlice.reducer;
