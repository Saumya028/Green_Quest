import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IUser extends Document {
  name?: string;
  email: string;
  image?: string;
  provider: string;
  providerId: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  provider: { type: String, required: true },
  providerId: { type: String, required: true },
}, { timestamps: true });

export const User = models.User || model<IUser>('User', UserSchema);
