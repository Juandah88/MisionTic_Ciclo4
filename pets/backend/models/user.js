const mongoose  = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {      
      email: { type: String, required: true, unique: true, trim: true },
      password: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );

  userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(5);
    return await bcrypt.hash(password, salt);
  };
  
  userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

const Users = mongoose.model('Users', userSchema);
module.exports = Users;
