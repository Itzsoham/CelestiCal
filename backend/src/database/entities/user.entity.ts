import { Entity } from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
  id: number;
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
export default UserEntity;
