import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Contact } from "./contacts.entity";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;
  @Column()
  password: string;

  @Column()
  tel: string;

  @OneToMany(() => Contact, (contacts) => contacts.user, { eager: true })
  contacts: Contact[];

  @Column()
  createdAt: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
