/* eslint-disable @typescript-eslint/no-namespace */
import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGOOSE_CONNECT;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

interface CachedMongoose {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: CachedMongoose;
    }
  }
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI!, opts)
      .then((mongooseInstance) => {
        return mongooseInstance.connection;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};

export default dbConnect;
