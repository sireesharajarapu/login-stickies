// schema of the user data
export class User {
    name:string;
    email:string
    address:string;
    mobile_no:string;
    account_no:string;
    password:string;
    
  constructor(name:string,email:string,address:string,mobile_no:string,account_no:string,password:string) {
    this.name=name;
    this.email=email;
    this.address=address;
    this.mobile_no=mobile_no;
    this.account_no=account_no;
    this.password=password;
  }
}
