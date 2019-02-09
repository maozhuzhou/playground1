"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
var DbDemoComponent = /** @class */ (function () {
    function DbDemoComponent() {
        var _this = this;
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
            _this.fetch();
            //or:  this.groceryList.unshift({ id: id, name: this.grocery });
            _this.firstName = "";
            _this.lastName = "";
        }, function (error) {
            console.log("INSERT ERROR", error);
        });
    };
    DbDemoComponent.prototype.fetch = function () {
        var _this = this;
        this.database.all("SELECT * FROM people").then(function (rows) {
            _this.people = [];
            for (var row in rows) {
                _this.people.push({
                    "id": rows[row][0],
                    "firstname": rows[row][1],
                    "lastname": rows[row][2]
                });
            }
        }, function (error) {
            console.log("SELECT ERROR", error);
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
        __metadata("design:paramtypes", [])
    ], DbDemoComponent);
    return DbDemoComponent;
}());
exports.DbDemoComponent = DbDemoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGItZGVtby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYi1kZW1vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQVE1QztJQU9FO1FBQUEsaUJBV0M7UUFmRCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUlWLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO1lBQ3pCLEVBQUUsQ0FBQyxPQUFPLENBQUMseUdBQXlHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO2dCQUN6SCxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQUEsaUJBdUJDO1FBdEJHLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBRyxFQUFFLEVBQUM7WUFDNUIsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDbEMsT0FBTztTQUNSO1FBQ0QsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFHLEVBQUUsRUFBQztZQUMzQixLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUNqQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1FBQ2hFLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUNuQix3REFBd0QsRUFDeEQsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsZ0VBQWdFO1lBQ2hFLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwrQkFBSyxHQUFaO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDL0MsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDakIsS0FBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNiLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQixXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNCLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhEK0I7UUFBL0IsZ0JBQVMsQ0FBQyxtQkFBbUIsQ0FBQztrQ0FBb0IsaUJBQVU7OERBQUM7SUFMbkQsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzs7T0FDVyxlQUFlLENBOEQzQjtJQUFELHNCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XG52YXIgU3FsaXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zcWxpdGVcIik7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWRiLWRlbW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGItZGVtby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RiLWRlbW8uY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBEYkRlbW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGRhdGFiYXNlOiBhbnk7XG4gIHB1YmxpYyBwZW9wbGU6IEFycmF5PGFueT47XG4gIGZpcnN0TmFtZSA9IFwiXCI7XG4gIGxhc3ROYW1lID0gXCJcIjtcbiAgQFZpZXdDaGlsZChcImxhc3ROYW1lVGV4dEZpZWxkXCIpIGxhc3ROYW1lVGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMucGVvcGxlID0gW107XG4gICAgICAobmV3IFNxbGl0ZShcIm15LmRiXCIpKS50aGVuKGRiID0+IHtcbiAgICAgICAgICBkYi5leGVjU1FMKFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgcGVvcGxlIChpZCBJTlRFR0VSIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsIGZpcnN0bmFtZSBURVhULCBsYXN0bmFtZSBURVhUKVwiKS50aGVuKGlkID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRiO1xuICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDUkVBVEUgVEFCTEUgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiT1BFTiBEQiBFUlJPUlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIGluc2VydCgpIHtcbiAgICAgIGlmKHRoaXMuZmlyc3ROYW1lLnRyaW0oKT09PScnKXtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBmaXJzdCBuYW1lIScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZih0aGlzLmxhc3ROYW1lLnRyaW0oKT09PScnKXtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBsYXN0IG5hbWUhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMubGFzdE5hbWVUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcbiAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgICBcbiAgICAgIHRoaXMuZGF0YWJhc2UuZXhlY1NRTChcbiAgICAgICAgXCJJTlNFUlQgSU5UTyBwZW9wbGUgKGZpcnN0bmFtZSwgbGFzdG5hbWUpIFZBTFVFUyAoPywgPylcIiwgXG4gICAgICAgIFt0aGlzLmZpcnN0TmFtZS50cmltKCksIHRoaXMubGFzdE5hbWUudHJpbSgpXSkudGhlbihpZCA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgUkVTVUxUXCIsIGlkKTtcbiAgICAgICAgICB0aGlzLmZldGNoKCk7XG4gICAgICAgICAgLy9vcjogIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdCh7IGlkOiBpZCwgbmFtZTogdGhpcy5ncm9jZXJ5IH0pO1xuICAgICAgICAgIHRoaXMuZmlyc3ROYW1lID0gXCJcIjtcbiAgICAgICAgICB0aGlzLmxhc3ROYW1lID0gXCJcIjtcbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIklOU0VSVCBFUlJPUlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBmZXRjaCgpIHtcbiAgICAgIHRoaXMuZGF0YWJhc2UuYWxsKFwiU0VMRUNUICogRlJPTSBwZW9wbGVcIikudGhlbihyb3dzID0+IHtcbiAgICAgICAgICB0aGlzLnBlb3BsZSA9IFtdO1xuICAgICAgICAgIGZvcih2YXIgcm93IGluIHJvd3MpIHtcbiAgICAgICAgICAgICAgdGhpcy5wZW9wbGUucHVzaCh7XG4gICAgICAgICAgICAgICAgICBcImlkXCI6IHJvd3Nbcm93XVswXSxcbiAgICAgICAgICAgICAgICAgIFwiZmlyc3RuYW1lXCI6IHJvd3Nbcm93XVsxXSxcbiAgICAgICAgICAgICAgICAgIFwibGFzdG5hbWVcIjogcm93c1tyb3ddWzJdXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFTEVDVCBFUlJPUlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIl19