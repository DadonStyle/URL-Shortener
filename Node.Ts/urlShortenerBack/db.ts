import mongoose from "mongoose";

async function db() {
  const mongobUri = "mongodb+srv://MongoDB:1234@firstcluster.fsma9.mongodb.net/NoamDB?retryWrites=true&w=majority"
  try {
    await mongoose
      .connect(mongobUri)
      .then(() => {
        console.log('DB connected');
      });
  } catch (e) {
    console.error(e);
  }
}

export default db;