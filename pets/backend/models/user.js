const mongoose  = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {      
      email: { type: String, required: true, unique: true, trim: true, default: 'admin@admin.co' },
      password: { type: String, required: true, default: encryptPassword('123456')},
    },
    {
      timestamps: true,
    }
  );

  userSchema.methods.encryptPassword = async (password) => {
   return encryptPassword(password)
  };
  
  userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  async function encryptPassword(password){
    const salt = await bcrypt.genSalt(5);
    return await bcrypt.hash(password, salt);
  }


const Users = mongoose.model('Users', userSchema);
module.exports = Users;
