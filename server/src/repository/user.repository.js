import userModel from "../model/user.model.js";

export default class UserRepo {
  async create(payload) {
    return await userModel.create(payload);
  }

  async findByEmail(email) {
    return await userModel.findOne({ email }).select("+password");
  }

  async findById(id) {
    return await userModel.findById(id);
  }
}

//below is function version of this class code
// export const create = async (payload) => {
//     return await userModel.create(payload);
// }

// export const findByEmail = async (email) => {
//     return await userModel.findOne({email}).lean();
// }