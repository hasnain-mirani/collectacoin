import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://doadmin:346eoR1k27Ttu58d@db-mongodb-nyc1-08654-eea55fda.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=db-mongodb-nyc1-08654",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connection is established!");
    });

    connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    connection.on("disconnected", () => {
      console.log("MongoDB connection lost. Reconnecting...");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
