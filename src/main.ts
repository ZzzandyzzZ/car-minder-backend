import { app } from "./app";
import { AppDataSource } from "./db";
import { PORT } from "./env-vars";

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
    await app.listen(PORT);
    console.log(`Server listening on port ${PORT}`);
  } catch (error) {
    console.error("Error during app initialization", error);
  }
};

main();
