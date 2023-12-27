import { IUser } from "../interfaces/IUser";

interface Data {
  data: {
    user: IUser;
  };
}

export default {
  key: "StoreSync",
  async handle({ data }: Data) {
    const { user } = data;
    console.log(user);
  },
};
