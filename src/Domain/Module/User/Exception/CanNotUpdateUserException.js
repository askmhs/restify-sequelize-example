export class CanNotUpdateUserException extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}