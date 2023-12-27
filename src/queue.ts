import "dotenv/config";
import Queue from "./app/lib/Queue";
import StoreSync from "./app/jobs/StoreSync";

Queue.process(StoreSync.handle);
