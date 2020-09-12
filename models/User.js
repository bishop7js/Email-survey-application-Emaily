const mongoose = require("mongoose");
const { schema } = mongoose;

const userSchema = new schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

mongoose.model("users", userSchema);
