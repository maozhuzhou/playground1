"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var operators_1 = require("rxjs/operators");
var TextComponent = /** @class */ (function () {
    function TextComponent(http) {
        this.http = http;
        this.documents = { 'documents': [
                { 'id': '1', 'text': 'This is a document written in English.' },
                { 'id': '2', 'text': 'Este es un document escrito en Español.' },
                { 'id': '3', 'text': '这是一个用中文写的文件' }
            ] };
        this.get_language = function (documents) {
            var body = JSON.stringify(documents);
            var request_params = {
                method: 'POST',
                hostname: Config.apiUrl,
                path: Config.path,
                headers: {
                    'Ocp-Apim-Subscription-Key': Config.accessKey,
                }
            };
            var req = this.http.request(request_params, this.response_handler);
            console.log(req);
            req.write(body);
            req.end();
        };
        this.response_handler = function (response) {
            var body = '';
            response.on('data', function (d) {
                console.log('response.on data' + d);
                body += d;
            });
            response.on('end', function () {
                console.log('response.on end');
                var body_ = JSON.parse(body);
                var body__ = JSON.stringify(body_, null, '  ');
                console.log(body__);
            });
            response.on('error', function (e) {
                console.log('response.on error ' + e);
                console.log('Error: ' + e.message);
            });
        };
    }
    TextComponent.prototype.ngOnInit = function () {
        //console.log(this.documents)
        //this.get_language (this.documents);
        this.f();
    };
    TextComponent.prototype.f = function () {
        //console.log(JSON.stringify(this.documents))
        this.http.post(Config.apiUrl + Config.path, JSON.stringify(this.documents), { headers: this.getCommonHeaders() })
            .pipe(operators_1.map(function (response) {
            console.log('.map');
            console.log(response);
            console.log(response.json());
        }), operators_1.tap(function (data) {
            console.log('tap');
            console.log(data);
            //Config.token = data._kmd.authtoken
        }))
            .subscribe(function (data) {
            console.log('.subscribe');
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    TextComponent.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Ocp-Apim-Subscription-Key", Config.accessKey);
        return headers;
    };
    TextComponent = __decorate([
        core_1.Component({
            selector: "text",
            moduleId: module.id,
            templateUrl: "./text.component.html",
            styleUrls: ['./text.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], TextComponent);
    return TextComponent;
}());
exports.TextComponent = TextComponent;
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.apiUrl = "https://southcentralus.api.cognitive.microsoft.com";
    Config.accessKey = "9962000b173c4d58986270a2c0e7f029";
    Config.path = '/text/analytics/v2.0/languages';
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzQ0FBd0Q7QUFFeEQsNENBQXNEO0FBUXREO0lBTUksdUJBQXFCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBTC9CLGNBQVMsR0FBRyxFQUFFLFdBQVcsRUFBRTtnQkFDdkIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSx3Q0FBd0MsRUFBRTtnQkFDL0QsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSx5Q0FBeUMsRUFBRTtnQkFDaEUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUU7YUFDdkMsRUFBQyxDQUFDO1FBMkNILGlCQUFZLEdBQUcsVUFBVSxTQUFTO1lBQzlCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUUsU0FBUyxDQUFDLENBQUM7WUFFdEMsSUFBSSxjQUFjLEdBQUc7Z0JBQ2pCLE1BQU0sRUFBRyxNQUFNO2dCQUNmLFFBQVEsRUFBRyxNQUFNLENBQUMsTUFBTTtnQkFDeEIsSUFBSSxFQUFHLE1BQU0sQ0FBQyxJQUFJO2dCQUNsQixPQUFPLEVBQUc7b0JBQ04sMkJBQTJCLEVBQUcsTUFBTSxDQUFDLFNBQVM7aUJBQ2pEO2FBQ0osQ0FBQztZQUVGLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLEdBQUcsQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLENBQUM7WUFDakIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFBO1FBQ0QscUJBQWdCLEdBQUcsVUFBVSxR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LENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FPNkIsV0FBSTtPQU50QixhQUFhLENBbUZ6QjtJQUFELG9CQUFDO0NBQUEsQUFuRkQsSUFtRkM7QUFuRlksc0NBQWE7QUFvRjFCO0lBQUE7SUFNRSxDQUFDO0lBTFEsYUFBTSxHQUFHLG9EQUFvRCxDQUFDO0lBQzlELGdCQUFTLEdBQUcsa0NBQWtDLENBQUM7SUFDL0MsV0FBSSxHQUFFLGdDQUFnQyxDQUFDO0lBR2hELGFBQUM7Q0FBQSxBQU5ILElBTUc7QUFOVSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGV4dFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90ZXh0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGV4dC5jb21wb25lbnQuY3NzJ11cbn0pIFxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGRvY3VtZW50cyA9IHsgJ2RvY3VtZW50cyc6IFtcbiAgICAgICAgeyAnaWQnOiAnMScsICd0ZXh0JzogJ1RoaXMgaXMgYSBkb2N1bWVudCB3cml0dGVuIGluIEVuZ2xpc2guJyB9LFxuICAgICAgICB7ICdpZCc6ICcyJywgJ3RleHQnOiAnRXN0ZSBlcyB1biBkb2N1bWVudCBlc2NyaXRvIGVuIEVzcGHDsW9sLicgfSxcbiAgICAgICAgeyAnaWQnOiAnMycsICd0ZXh0JzogJ+i/meaYr+S4gOS4queUqOS4reaWh+WGmeeahOaWh+S7ticgfVxuICAgIF19O1xuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmRvY3VtZW50cylcbiAgICAgICAgLy90aGlzLmdldF9sYW5ndWFnZSAodGhpcy5kb2N1bWVudHMpO1xuICAgICAgICB0aGlzLmYoKTtcbiAgICB9XG5cbiAgICBmKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZG9jdW1lbnRzKSlcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgQ29uZmlnLnBhdGgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLmRvY3VtZW50cyksXG4gICAgICAgICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICAgICAgKSAgICAgICAgXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLm1hcCcpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0YXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RhcCcpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAvL0NvbmZpZy50b2tlbiA9IGRhdGEuX2ttZC5hdXRodG9rZW5cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgLy9jYXRjaEVycm9yKCkvL3RoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcuc3Vic2NyaWJlJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0sKGVycik9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiLCBDb25maWcuYWNjZXNzS2V5KTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuICAgIGdldF9sYW5ndWFnZSA9IGZ1bmN0aW9uIChkb2N1bWVudHMpIHtcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSAoZG9jdW1lbnRzKTtcbiAgICAgXG4gICAgICAgIGxldCByZXF1ZXN0X3BhcmFtcyA9IHtcbiAgICAgICAgICAgIG1ldGhvZCA6ICdQT1NUJyxcbiAgICAgICAgICAgIGhvc3RuYW1lIDogQ29uZmlnLmFwaVVybCxcbiAgICAgICAgICAgIHBhdGggOiBDb25maWcucGF0aCxcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7XG4gICAgICAgICAgICAgICAgJ09jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXknIDogQ29uZmlnLmFjY2Vzc0tleSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGxldCByZXEgPSB0aGlzLmh0dHAucmVxdWVzdCAocmVxdWVzdF9wYXJhbXMsIHRoaXMucmVzcG9uc2VfaGFuZGxlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcSlcbiAgICAgICAgcmVxLndyaXRlIChib2R5KTtcbiAgICAgICAgcmVxLmVuZCgpO1xuICAgIH1cbiAgICByZXNwb25zZV9oYW5kbGVyID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBib2R5ID0gJyc7XG4gICAgICAgIHJlc3BvbnNlLm9uICgnZGF0YScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2Uub24gZGF0YScrZClcbiAgICAgICAgICAgIGJvZHkgKz0gZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3BvbnNlLm9uICgnZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlLm9uIGVuZCcpXG4gICAgICAgICAgICBsZXQgYm9keV8gPSBKU09OLnBhcnNlIChib2R5KTtcbiAgICAgICAgICAgIGxldCBib2R5X18gPSBKU09OLnN0cmluZ2lmeSAoYm9keV8sIG51bGwsICcgICcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cgKGJvZHlfXyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNwb25zZS5vbiAoJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZS5vbiBlcnJvciAnK2UpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoJ0Vycm9yOiAnICsgZS5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBcbn1cbmV4cG9ydCBjbGFzcyBDb25maWcge1xuICAgIHN0YXRpYyBhcGlVcmwgPSBcImh0dHBzOi8vc291dGhjZW50cmFsdXMuYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tXCI7XG4gICAgc3RhdGljIGFjY2Vzc0tleSA9IFwiOTk2MjAwMGIxNzNjNGQ1ODk4NjI3MGEyYzBlN2YwMjlcIjtcbiAgICBzdGF0aWMgcGF0aCA9Jy90ZXh0L2FuYWx5dGljcy92Mi4wL2xhbmd1YWdlcyc7XG4gICAgLy9zdGF0aWMgYXV0aEhlYWRlciA9IFwiQmFzaWMgYTJsa1gwaDVTRzlVWDFKRlpqbzFNVGt4TURKbFpXRmhNelEwTXpNeU9ERmpOMk15T0RNM01HUTVPVEl6TVFcIjtcbiAgICAvL3N0YXRpYyB0b2tlbiA9IFwiXCI7XG4gIH0iXX0=