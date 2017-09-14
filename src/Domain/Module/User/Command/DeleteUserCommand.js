import {InvalidException} from "../../../Exception/InvalidException";

export class DeleteUserCommand {
    constructor(userId) {
        if (typeof userId === 'string') {
            this.userId = userId;
        } else {
            throw new InvalidException('userId must be a string!');
        }
    }
}