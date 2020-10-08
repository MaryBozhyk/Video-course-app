export interface User {
    id: string;
    firstName: string;
    lastName: string;
}

export class UserModel implements User {
    constructor(
        public id: string = null,
        public firstName: string = '',
        public lastName: string = ''
    ) { }
}
