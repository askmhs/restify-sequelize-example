export class CanNotCreateNewUserException extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}