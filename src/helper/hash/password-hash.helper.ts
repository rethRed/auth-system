import bcrypt from "bcrypt";

export class PasswordHashHelper {

    static async hash(password: string) {
        return bcrypt.hash(password, bcrypt.genSaltSync(10));
    }

    static async compare(password: string, hashPassword: string) {
        return bcrypt.compare(password, hashPassword);
    }
}