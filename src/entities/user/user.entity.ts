import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Contact } from "../contacts/contacts.entity";
@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  tel: number;

  @OneToMany(() => Contact, (contacts) => contacts.user)
  @JoinColumn({ name: "contacts" })
  
  @Column()
  createdAt: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
