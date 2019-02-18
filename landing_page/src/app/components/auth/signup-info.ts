export class SignUpInfo {
    fullName: string;
    // phone: string;
    username: string;
    email: string;
    role: string[];
    password: string;
    gender: string;
    securityAnswer: string;


    constructor(fullname: string, username: string, email: string, password: string, gender: string, securityAnswer: string) {
        this.fullName = fullname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.securityAnswer = securityAnswer;
        this.role = ['user'];
    }
}
