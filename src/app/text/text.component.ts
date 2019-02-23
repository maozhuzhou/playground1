import { Component, OnInit } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Component({
    selector: "text",
    moduleId: module.id,
    templateUrl: "./text.component.html",
    styleUrls: ['./text.component.css']
}) 
export class TextComponent implements OnInit {
    documents = { 'documents': [
        { 'id': '1', 'text': 'This is a document written in English.' },
        { 'id': '2', 'text': 'Este es un document escrito en Español.' },
        { 'id': '3', 'text': '这是一个用中文写的文件' }
    ]};
    constructor( private http: Http) {
    }

    ngOnInit(): void {
        //console.log(this.documents)
        //this.get_language (this.documents);
        this.f();
    }

    f() {
        //console.log(JSON.stringify(this.documents))
        this.http.post(
            Config.apiUrl + Config.path,
            JSON.stringify(this.documents),
            { headers: this.getCommonHeaders() }
        )        
        .pipe(
            map(response => {
                console.log('.map')
                console.log(response)
                console.log(response.json())
            }),
            tap(data => {
                console.log('tap')
                console.log(data)
                //Config.token = data._kmd.authtoken
            }),
            //catchError()//this.handleErrors)
        )
        .subscribe((data) => {
            console.log('.subscribe')
            console.log(data)
        },(err)=>{
            console.log(err)
        })
    }
    getCommonHeaders() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Ocp-Apim-Subscription-Key", Config.accessKey);
        return headers;
    }
    get_language = function (documents) {
        let body = JSON.stringify (documents);
     
        let request_params = {
            method : 'POST',
            hostname : Config.apiUrl,
            path : Config.path,
            headers : {
                'Ocp-Apim-Subscription-Key' : Config.accessKey,
            }
        };
        
        let req = this.http.request (request_params, this.response_handler);
        console.log(req)
        req.write (body);
        req.end();
    }
    response_handler = function (response) {
        let body = '';
        response.on ('data', function (d) {
            console.log('response.on data'+d)
            body += d;
        });
        response.on ('end', function () {
            console.log('response.on end')
            let body_ = JSON.parse (body);
            let body__ = JSON.stringify (body_, null, '  ');
            console.log (body__);
        });
        response.on ('error', function (e) {
            console.log('response.on error '+e)
            console.log ('Error: ' + e.message);
        });
    };
    
}
export class Config {
    static apiUrl = "https://southcentralus.api.cognitive.microsoft.com";
    static accessKey = "9962000b173c4d58986270a2c0e7f029";
    static path ='/text/analytics/v2.0/languages';
    //static authHeader = "Basic a2lkX0h5SG9UX1JFZjo1MTkxMDJlZWFhMzQ0MzMyODFjN2MyODM3MGQ5OTIzMQ";
    //static token = "";
  }