import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TextField } from "tns-core-modules/ui/text-field";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";

var Sqlite = require("nativescript-sqlite");

@Component({
  selector: 'ns-db-demo',
  templateUrl: './db-demo.component.html',
  styleUrls: ['./db-demo.component.css'],
  moduleId: module.id,
})
export class DbDemoComponent implements OnInit {
  private database: any;
  public people: Array<any>;
  firstName = "";
  lastName = "";
  @ViewChild("lastNameTextField") lastNameTextField: ElementRef;

  public constructor() {
      this.people = [];
      (new Sqlite("my.db")).then(db => {
          db.execSQL("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)").then(id => {
              this.database = db;
          }, error => {
              console.log("CREATE TABLE ERROR", error);
          });
      }, error => {
          console.log("OPEN DB ERROR", error);
      });
  }

  ngOnInit() {
  }

  public insert() {
      if(this.firstName.trim()===''){
        alert('Please enter first name!');
        return;
      }
      if(this.lastName.trim()===''){
        alert('Please enter last name!');
        return;
      }
      let textField = <TextField>this.lastNameTextField.nativeElement;
      textField.dismissSoftInput();
      
      this.database.execSQL(
        "INSERT INTO people (firstname, lastname) VALUES (?, ?)", 
        [this.firstName.trim(), this.lastName.trim()]).then(id => {
          console.log("INSERT RESULT", id);          
          this.people.unshift({ id: id, firstName: this.firstName, lastName:this.lastName });
          this.firstName = "";
          this.lastName = "";
      }, error => {
          console.log("INSERT ERROR", error);
      });
  }

  public fetch() {
      this.database.all("SELECT * FROM people").then(rows => {
          this.people = [];
          for(var row in rows) {
              this.people.push({
                  "id": rows[row][0],
                  "firstname": rows[row][1],
                  "lastname": rows[row][2]
              });
          }
      }, error => {
          console.log("SELECT ERROR", error);
      });
  }

  delete(args: ListViewEventData) {
		let person = <any>args.object.bindingContext;
		this.database.execSQL("DELETE FROM people WHERE id=?", [person.id]).then(() => {
			let index = this.people.indexOf(person);
			this.people.splice(index, 1);
			console.log(" Item deleted successfully!")
		});

	}
}
