import { Page } from "tns-core-modules/ui/page";
import { Component, OnInit } from "@angular/core";
import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { Router } from "@angular/router";

@Component({
    selector: "gr-login",
    providers: [UserService],
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    isLoading = false; 
    isLoggingIn = true;
    user: User;
     

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private router: Router, private userService: UserService,
      private page: Page) {
        this.user = new User();
        this.user.email = "my11223.test.account@nativescript.org";
        this.user.password = "mypassword"
    }
    ngOnInit(): void {
      this.page.actionBarHidden = true;
    }

    submit() {
        if (this.isLoggingIn) {
          this.login();
        } else {
          this.signUp();
        }
      }
      
      login() {
        this.isLoading = true;
        this.userService.login(this.user)
        .subscribe(
          () => {
            this.router.navigate(["/list"]);
            this.isLoading = false;
          },
          (error) => {
            this.isLoading = false;
            alert("Unfortunately we could not find your account.")
          }
        );
      }
      
      signUp() {
        //this.userService.register(this.user)
        
       
        this.userService.register(this.user)
          .subscribe(
            () => {
              alert("Your account was successfully created.");
              this.toggleDisplay();
            },
            () => alert("Unfortunately we were unable to create your account.")
          );
         
      }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}
