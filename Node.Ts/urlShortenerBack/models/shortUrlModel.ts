import mongoose from 'mongoose';
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuv0987654321", 6);

export interface ShortUrlTemplate extends mongoose.Document { 
  _fullUrl: string,
  _shortId: string;
  _clicks: number;
}

const schema = new mongoose.Schema({
  _fullUrl:{
    type:String,
    required: true,
  },
  _shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid() // runs the functions to generate a default short url
  },
  _clicks: {
    type: Number,
    required:true,
    default:0,
  }
});

const shortUrl = mongoose.model<ShortUrlTemplate>('shortUrlModel', schema, "shortUrls") //we are using the ShortUrlTemplate to specify the types in the db document

export default shortUrl;