import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
      updateUser: {
        email?: BaseSchema<Maybe<string | undefined>>;
        name?: BaseSchema<Maybe<string | undefined>>;
        password?: BaseSchema<Maybe<string | undefined>>;
        tel?: BaseSchema<Maybe<string | undefined>>;
      };
    }
    // interface Request {
    //   user?: Record<string,any>
    // }
  }
}
