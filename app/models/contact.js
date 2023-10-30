import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    trim: true,
    minLength: [2, "El nombre debe ser de almenos 2 caracteres"],
    maxLength: [50, "El nombre no puede ser mayor a 50 caracteres"],
  },

  business: {
    type: String,
    required: [false, "Name is required."],
    trim: true,
    minLength: [0, "business?"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },

  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Correo invalido"],
  },

  message: {
    type: String,
    required: [true, "El mensaje es obligatorio"],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;