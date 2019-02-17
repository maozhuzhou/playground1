"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var db_demo_service_1 = require("../shared/dbDemo/db-demo.service");
var Sqlite = require("nativescript-sqlite");
var DbDemoComponent = /** @class */ (function () {
    function DbDemoComponent(dbservice) {
        var _this = this;
        this.dbservice = dbservice;
        this.firstName = "";
        this.lastName = "";
        this.people = [];
        (new Sqlite("my.db")).then(function (db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)").then(function (id) {
                _this.database = db;
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
    }
    DbDemoComponent.prototype.ngOnInit = function () {
    };
    DbDemoComponent.prototype.insert = function () {
        var _this = this;
        if (this.firstName.trim() === '') {
            alert('Please enter first name!');
            return;
        }
        if (this.lastName.trim() === '') {
            alert('Please enter last name!');
            return;
        }
        var textField = this.lastNameTextField.nativeElement;
        textField.dismissSoftInput();
        this.database.execSQL("INSERT INTO people (firstname, lastname) VALUES (?, ?)", [this.firstName.trim(), this.lastName.trim()]).then(function (id) {
            console.log("INSERT RESULT", id);
            _this.people.unshift({ id: id, firstName: _this.firstName, lastName: _this.lastName });
            _this.firstName = "";
            _this.lastName = "";
        }, function (error) {
            console.log("INSERT ERROR", error);
        });
    };
    //use observable
    DbDemoComponent.prototype.fetch2 = function () {
        var _this = this;
        this.people = [];
        this.dbservice.fetchById2(3)
            .subscribe(function (person) {
            _this.people.push(person);
        }, function (error) {
            console.log("fetch() ERROR");
            console.dir(error);
        });
    };
    //use promise
    DbDemoComponent.prototype.fetch = function () {
        var _this = this;
        this.people = [];
        this.dbservice.fetchById(3)
            .then(function (person) {
            console.log("3");
            var p = person;
            if (p) {
                console.log("33");
                _this.people.push(p);
            }
        }, function (error) {
            console.log("fetch() ERROR");
            console.dir(error);
        });
    };
    //   public fetch(){
    //     this.dbservice.fetchById(3)
    //     .subscribe(people => {
    //         this.people = people;
    //         console.log("3")
    //         if(this.people[0]){
    //             console.log("33")
    //         }
    //     }, error =>{
    //         console.log("fetch() ERROR")
    //     })
    //   }
    //   public fetch() {
    //       this.database.all("SELECT * FROM people").then(rows => {
    //           this.people = [];
    //           for(var row in rows) {
    //               this.people.push({
    //                   "id": rows[row][0],
    //                   "firstname": rows[row][1],
    //                   "lastname": rows[row][2]
    //               });
    //           }
    //       }, error => {
    //           console.log("SELECT ERROR", error);
    //       });
    //   }
    DbDemoComponent.prototype.delete = function (args) {
        var _this = this;
        var person = args.object.bindingContext;
        this.database.execSQL("DELETE FROM people WHERE id=?", [person.id]).then(function () {
            var index = _this.people.indexOf(person);
            _this.people.splice(index, 1);
            console.log(" Item deleted successfully!");
        });
    };
    __decorate([
        core_1.ViewChild("lastNameTextField"),
        __metadata("design:type", core_1.ElementRef)
    ], DbDemoComponent.prototype, "lastNameTextField", void 0);
    DbDemoComponent = __decorate([
        core_1.Component({
            selector: 'ns-db-demo',
            templateUrl: './db-demo.component.html',
            styleUrls: ['./db-demo.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [db_demo_service_1.DbDemoService])
    ], DbDemoComponent);
    return DbDemoComponent;
}());
exports.DbDemoComponent = DbDemoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGItZGVtby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYi1kZW1vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUd6RSxvRUFBaUU7QUFHakUsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFRNUM7SUFPRSx5QkFBMkIsU0FBd0I7UUFBbkQsaUJBV0M7UUFYMEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUpuRCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUlWLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO1lBQ3pCLEVBQUUsQ0FBQyxPQUFPLENBQUMseUdBQXlHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO2dCQUN6SCxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQUEsaUJBc0JDO1FBckJHLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBRyxFQUFFLEVBQUM7WUFDNUIsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDbEMsT0FBTztTQUNSO1FBQ0QsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFD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O0lBRUosZ0NBQU0sR0FBTixVQUFPLElBQXVCO1FBQTlCLGlCQVFBO1FBUEEsSUFBSSxNQUFNLEdBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEUsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUE1R2dDO1FBQS9CLGdCQUFTLENBQUMsbUJBQW1CLENBQUM7a0NBQW9CLGlCQUFVOzhEQUFDO0lBTG5ELGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDdEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBUXNDLCtCQUFhO09BUHhDLGVBQWUsQ0FrSDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxIRCxJQWtIQztBQWxIWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IERiRGVtb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZGJEZW1vL2RiLWRlbW8uc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcblxudmFyIFNxbGl0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1kYi1kZW1vJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RiLWRlbW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYi1kZW1vLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgRGJEZW1vQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBkYXRhYmFzZTogYW55O1xuICBwdWJsaWMgcGVvcGxlOiBBcnJheTxhbnk+O1xuICBmaXJzdE5hbWUgPSBcIlwiO1xuICBsYXN0TmFtZSA9IFwiXCI7XG4gIEBWaWV3Q2hpbGQoXCJsYXN0TmFtZVRleHRGaWVsZFwiKSBsYXN0TmFtZVRleHRGaWVsZDogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBkYnNlcnZpY2U6IERiRGVtb1NlcnZpY2UpIHtcbiAgICAgIHRoaXMucGVvcGxlID0gW107XG4gICAgICAobmV3IFNxbGl0ZShcIm15LmRiXCIpKS50aGVuKGRiID0+IHtcbiAgICAgICAgICBkYi5leGVjU1FMKFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgcGVvcGxlIChpZCBJTlRFR0VSIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsIGZpcnN0bmFtZSBURVhULCBsYXN0bmFtZSBURVhUKVwiKS50aGVuKGlkID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRiO1xuICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDUkVBVEUgVEFCTEUgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiT1BFTiBEQiBFUlJPUlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIGluc2VydCgpIHtcbiAgICAgIGlmKHRoaXMuZmlyc3ROYW1lLnRyaW0oKT09PScnKXtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBmaXJzdCBuYW1lIScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZih0aGlzLmxhc3ROYW1lLnRyaW0oKT09PScnKXtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBsYXN0IG5hbWUhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMubGFzdE5hbWVUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcbiAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgICBcbiAgICAgIHRoaXMuZGF0YWJhc2UuZXhlY1NRTChcbiAgICAgICAgXCJJTlNFUlQgSU5UTyBwZW9wbGUgKGZpcnN0bmFtZSwgbGFzdG5hbWUpIFZBTFVFUyAoPywgPylcIiwgXG4gICAgICAgIFt0aGlzLmZpcnN0TmFtZS50cmltKCksIHRoaXMubGFzdE5hbWUudHJpbSgpXSkudGhlbihpZCA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgUkVTVUxUXCIsIGlkKTsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5wZW9wbGUudW5zaGlmdCh7IGlkOiBpZCwgZmlyc3ROYW1lOiB0aGlzLmZpcnN0TmFtZSwgbGFzdE5hbWU6dGhpcy5sYXN0TmFtZSB9KTtcbiAgICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5sYXN0TmFtZSA9IFwiXCI7XG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICAvL3VzZSBvYnNlcnZhYmxlXG4gIHB1YmxpYyBmZXRjaDIoKXtcbiAgICB0aGlzLnBlb3BsZSA9IFtdO1xuICAgIHRoaXMuZGJzZXJ2aWNlLmZldGNoQnlJZDIoMylcbiAgICAgLnN1YnNjcmliZShwZXJzb24gPT4geyAgICAgICAgXG4gICAgICAgIHRoaXMucGVvcGxlLnB1c2gocGVyc29uKTsgICAgICAgIFxuICAgIH0sIGVycm9yID0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoKCkgRVJST1JcIilcbiAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpXG4gICAgfSkgICAgXG4gIH1cblxuICAvL3VzZSBwcm9taXNlXG4gIHB1YmxpYyBmZXRjaCgpe1xuICAgIHRoaXMucGVvcGxlID0gW107XG4gICAgdGhpcy5kYnNlcnZpY2UuZmV0Y2hCeUlkKDMpXG4gICAgLnRoZW4ocGVyc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCIzXCIpXG4gICAgICAgIGxldCBwID0gcGVyc29uO1xuICAgICAgICBcbiAgICAgICAgaWYocCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjMzXCIpO1xuICAgICAgICAgICAgdGhpcy5wZW9wbGUucHVzaChwKTtcbiAgICAgICAgfVxuICAgIH0sIGVycm9yID0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoKCkgRVJST1JcIilcbiAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpXG4gICAgfSkgICAgXG4gIH1cblxuLy8gICBwdWJsaWMgZmV0Y2goKXtcbi8vICAgICB0aGlzLmRic2VydmljZS5mZXRjaEJ5SWQoMylcbi8vICAgICAuc3Vic2NyaWJlKHBlb3BsZSA9PiB7XG4vLyAgICAgICAgIHRoaXMucGVvcGxlID0gcGVvcGxlO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIjNcIilcbi8vICAgICAgICAgaWYodGhpcy5wZW9wbGVbMF0pe1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCIzM1wiKVxuLy8gICAgICAgICB9XG4vLyAgICAgfSwgZXJyb3IgPT57XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2goKSBFUlJPUlwiKVxuLy8gICAgIH0pXG4gICAgXG4vLyAgIH1cbi8vICAgcHVibGljIGZldGNoKCkge1xuLy8gICAgICAgdGhpcy5kYXRhYmFzZS5hbGwoXCJTRUxFQ1QgKiBGUk9NIHBlb3BsZVwiKS50aGVuKHJvd3MgPT4ge1xuLy8gICAgICAgICAgIHRoaXMucGVvcGxlID0gW107XG4vLyAgICAgICAgICAgZm9yKHZhciByb3cgaW4gcm93cykge1xuLy8gICAgICAgICAgICAgICB0aGlzLnBlb3BsZS5wdXNoKHtcbi8vICAgICAgICAgICAgICAgICAgIFwiaWRcIjogcm93c1tyb3ddWzBdLFxuLy8gICAgICAgICAgICAgICAgICAgXCJmaXJzdG5hbWVcIjogcm93c1tyb3ddWzFdLFxuLy8gICAgICAgICAgICAgICAgICAgXCJsYXN0bmFtZVwiOiByb3dzW3Jvd11bMl1cbi8vICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgfSwgZXJyb3IgPT4ge1xuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0VMRUNUIEVSUk9SXCIsIGVycm9yKTtcbi8vICAgICAgIH0pO1xuLy8gICB9XG5cbiAgZGVsZXRlKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG5cdFx0bGV0IHBlcnNvbiA9IDxhbnk+YXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQ7XG5cdFx0dGhpcy5kYXRhYmFzZS5leGVjU1FMKFwiREVMRVRFIEZST00gcGVvcGxlIFdIRVJFIGlkPT9cIiwgW3BlcnNvbi5pZF0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0bGV0IGluZGV4ID0gdGhpcy5wZW9wbGUuaW5kZXhPZihwZXJzb24pO1xuXHRcdFx0dGhpcy5wZW9wbGUuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiIEl0ZW0gZGVsZXRlZCBzdWNjZXNzZnVsbHkhXCIpXG5cdFx0fSk7XG5cblx0fVxufVxuIl19