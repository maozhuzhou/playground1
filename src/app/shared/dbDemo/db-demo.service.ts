import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable, throwError, of, from, observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";


var Sqlite = require("nativescript-sqlite");

 
@Injectable()
export class DbDemoService {
    private database: any;
    private db_name = "my.db";

    public people: Array<any>;
    public person: any;
    
    public constructor() {
      this.people = [];
      this.getdbConnection().then(db => {       
          db.execSQL("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)").then(id => {
              this.database = db;
          }, error => {
              console.log("CREATE TABLE ERROR", error);
          });
      }, error => {
          console.log("OPEN DB ERROR", error);
      });
  }

    public getdbConnection() {
        return new Sqlite(this.db_name);
    }

    public closedbConnection() {
        new Sqlite(this.db_name)
            .then((db) => {
                db.close();
            })
    }

  
  fetchById2(id: number):Observable<any> {   
    return from(this.fetchById(id));
    // .pipe(
    //     map(rows => {
    //         this.person = {
    //             "id": rows[0][0],
    //             "firstname": rows[0][1],
    //             "lastname": rows[0][2]
    //         };  
    //     })
    // )            
 }

  fetchById(id: number):Promise<any> {                
    let promise1 = this.database.all("SELECT * FROM people WHERE ID=?", [id])
       .then(rows => {            
               this.person = {
                   "id": rows[0][0],
                   "firstname": rows[0][1],
                   "lastname": rows[0][2]
               };                          
               let promise2 = new Promise((resolve, reject) => { 
                    console.log("222");  
                    resolve(this.person);
                    //resolve({id:33,firstname:'www',lastname:'qqqq11dd'})
                  });
               return promise2;
           }, error => {
               console.log("fetchById() : SELECT ERROR", error);
           })               
        .catch(() => {
               console.log('Do that');
        })
           
    return promise1;
 }
  
//   fetchById(id: number):Promise<any> {                
//      let pro = this.database.all("SELECT * FROM people WHERE ID=?", [id])
//         .then(rows => {            
//                 this.person = {
//                     "id": rows[0][0],
//                     "firstname": rows[0][1],
//                     "lastname": rows[0][2]
//                 };                          
//                 let pro2 = new Promise((resolve, reject) => { 
//                     console.log("222")  
//                     resolve(this.person)
//                    //resolve({id:33,firstname:'www',lastname:'qqqq11dd'})
//                });
//                return pro2;
//             }, error => {
//                 console.log("fetchById() : SELECT ERROR", error);
//             })    
//             .catch(() => {
//                 console.log('Do that');
//             })
            
//      return pro;
//   }

}