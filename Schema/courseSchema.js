import { model, Schema } from "mongoose";

const courseSchema = new Schema({
  Title: {
    type: String,
    required:["Title is required"]
  },
  Level: {
    type: String,
    required:["Level is required"]
  },
  Pricing: {
    type: String,
    required:["Pricing is required"]
  },
  FromDate: {
    type: String,
    required:["FromDate is required"]
  },
  ToDate: {
    type: String,
    required:["ToDate is required"]
  },
  Mode: {
    type: String,
    required:["Mode is required"]
  },
  Start: {
    type: String,
    required:["Start Time is required"]
  },
  End: {
    type: String,
    required:["End Time is required"]
  },
  Description: {
    type: String,
    required:["Description is required"]
  },
});

export default model("COURSE", courseSchema);
