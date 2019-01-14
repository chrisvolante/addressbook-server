const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  name: { type: String, required: true },
  description: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true }
});

contactsSchema.methods.serialize = function() {
  let user;
  if (typeof this.user.serialize === "function") {
    user = this.user.serialize();
  } else {
    user = this.user;
  }
  return {
    id: this._id,
    user: user,
    name: this.name,
    description: this.description,
    phone: this.phone,
    email: this.email,
    address: this.address
  };
};

const Contact = mongoose.model("contact", contactsSchema);
module.exports = { Contact };
