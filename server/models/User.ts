import { model, Schema } from "mongoose";

const objectId = Schema.ObjectId

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  diskSpace: { type: Number, default: 1024 ** 3 * 10 },
  usedSpace: { type: Number, default: 0 },
  avatar: { type: String },
  files: [{ type: objectId, ref: 'File' }],
})

module.exports = model('User', User)