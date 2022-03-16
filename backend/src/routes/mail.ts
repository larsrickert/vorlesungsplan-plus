import router from "./index";
import logger from "../services/logger";

router.post("/mail", async (req, res) => {
  logger.log("Request to /mail");

  // TODO: implement
  res.status(405).send("Method not implemented yet.");
});
