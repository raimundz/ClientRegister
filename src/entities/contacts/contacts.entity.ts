import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "../user/user.entity";

@Entity()
export class Contact {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  tel: number;

  @Column()
  createdAt: string;

  @ManyToOne(() => User, (user) => user.contacts)
  // @JoinColumn()
  user: User;
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
