import Queue, { QueueOptions } from "bull";
import redisConfig from "../config/redis";
import StoreSync from "../jobs/StoreSync";

const storeSync = new Queue(StoreSync.key, redisConfig as QueueOptions);

storeSync.on("failed", (job, err: Error) => {
  console.log("Job failed", job.name, job.data);
  console.log(err);
});

export default storeSync;
