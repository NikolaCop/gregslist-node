
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
  {
    bedrooms: { type: String, required: true },
    bathrooms: { type: String, required: true },
    levels: { type: Number, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true  },
    imgUrl: { type: String, required: true, default: "http://placehold.it/200x200" },
    description: { type: String },
    
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default House;