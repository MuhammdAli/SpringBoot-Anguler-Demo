webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <fb-form></fb-form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'facebook app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fb_form_component__ = __webpack_require__("../../../../../src/app/fb-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__events_component__ = __webpack_require__("../../../../../src/app/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_component__ = __webpack_require__("../../../../../src/app/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fb_service__ = __webpack_require__("../../../../../src/app/fb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__places_component__ = __webpack_require__("../../../../../src/app/places.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__fb_form_component__["a" /* FacebookFormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__places_component__["a" /* PlacesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__fb_form_component__["a" /* FacebookFormComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__fb_service__["a" /* FBService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Place; });
var Event = (function () {
    function Event(id, name, description, start_time, end_time, place, photo, attendees) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.start_time = start_time;
        this.end_time = end_time;
        this.place = place;
        this.photo = photo;
        this.attendees = attendees;
    }
    return Event;
}());

var User = (function () {
    function User(id, name, profilePhoto) {
        this.id = id;
        this.name = name;
        this.profilePhoto = profilePhoto;
        this.eventsAttended = 1;
    }
    return User;
}());

var Place = (function () {
    function Place(id, name, checkin, about, link, picture) {
        this.id = id;
        this.name = name;
        this.checkin = checkin;
        this.about = about;
        this.link = link;
        this.picture = picture;
        this.eventsAttended = 1;
    }
    return Place;
}());



/***/ }),

/***/ "../../../../../src/app/events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".events {\n\tmargin: 0 0 2em 0;\n\tlist-style-type: none;\n\tpadding: 0;\n\twidth: 50em;\n}\n.events li {\n\tcursor: pointer;\n\tposition: relative;\n\tleft: 0;\n\tbackground-color: #EEE;\n\tmargin: .5em;\n\tpadding: .3em 0;\n\tborder-radius: 4px;\n}\n.events li:hover {\n\tcolor: #607D8B;\n\tbackground-color: #DDD;\n\tleft: .1em;\n}\n.events .text {\n\tposition: relative;\n\ttop: -3px;\n}\n.events .badge {\n\tdisplay: inline-block;\n\tfont-size: small;\n\tcolor: white;\n\tpadding: 0.8em 0.7em 0 0.7em;\n\tbackground-color: #607D8B;\n\tline-height: 1em;\n\tposition: relative;\n\tleft: -1px;\n\ttop: -4px;\n\theight: 1.8em;\n\tmargin-right: .8em;\n\tborder-radius: 4px 0 0 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Latest events</h3>\n<ul class=\"events\">\n\t<li *ngFor=\"let event of latestEvents\" \n\t[class.selected]=\"event === selectedEvent\"\n\t(click)=\"onSelect(event)\">\n\t\t<h5>{{ event.name }}</h5>\n\t\t<img src=\"{{ event.photo }}\" alt=\"eventPhoto\">\n\t\t<div *ngIf=\"selectedEvent === event\">\n\t\t\t<h2>{{ selectedEvent.name }}</h2>\n\t\t\t<div><label>date:</label>{{ selectedEvent.start_time }} - {{ selectedEvent.end_time }}</div>\n\t\t\t<div><label>description:</label>{{ selectedEvent.description }}</div>\n\t\t</div>\n\t</li>\n</ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fb_service__ = __webpack_require__("../../../../../src/app/fb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsComponent = (function () {
    function EventsComponent(fbService) {
        this.fbService = fbService;
    }
    EventsComponent.prototype.onSelect = function (event) {
        this.selectedEvent = event;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], EventsComponent.prototype, "latestEvents", void 0);
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'events-list',
            template: __webpack_require__("../../../../../src/app/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/events.component.css")],
            inputs: ['latestEvents'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fb_service__["a" /* FBService */]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fb-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Extract Statistics About Famous FaceBook Pages</h2>\n<input class=\"form-control\" [formControl]=\"url\" placeholder=\"Facebook Page URL\">\n<button class=\"btn btn-success\" (click)=\"getLatestEvents()\">Get Latest Events</button>\n<button class=\"btn btn-success\" (click)=\"getUsers()\">Get Top Users</button>\n\n<h2>Extract Statistics About Near By Places</h2>\n<input class=\"form-control\" [formControl]=\"country\" placeholder=\"Enter Country\">\n<input class=\"form-control\" [formControl]=\"state\" placeholder=\"Enter State/City\">\n<input class=\"form-control\" [formControl]=\"location\" placeholder=\"Enter Location\">\n<button class=\"btn btn-success\" (click)=\"getNearByPlaces()\">Get NearBy Places</button>\n\n<events-list *ngIf=\"showEvents\" [latestEvents]=\"latestEvents\"></events-list>\n<users-list *ngIf=\"showUsers\" [mostActive]=\"mostActive\"></users-list>\n\n<places-list *ngIf=\"showPlaces\" [allPlaces]=\"allPlaces\"></places-list>\n"

/***/ }),

/***/ "../../../../../src/app/fb-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_model__ = __webpack_require__("../../../../../src/app/data-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fb_service__ = __webpack_require__("../../../../../src/app/fb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FacebookFormComponent = (function () {
    function FacebookFormComponent(fb) {
        this.fb = fb;
        this.url = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.country = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.state = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.location = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.latestEvents = [];
        this.allEvents = [];
        this.allPlaces = [];
        this.mostActive = [];
        this.showEvents = false;
        this.showUsers = false;
        this.showPlaces = false;
    }
    FacebookFormComponent.prototype.getNearByPlaces = function () {
        var _this = this;
        this.allPlaces = [];
        var location = this.getFinalLocation();
        this.fb.getNearByPlaces(location).then(function (res) {
            res.data.forEach(function (obj) {
                _this.allPlaces.push(new __WEBPACK_IMPORTED_MODULE_2__data_model__["b" /* Place */](obj.id, obj.name, obj.checkins, obj.about, obj.link, obj.picture == undefined ? '' : obj.picture.data.url));
            });
            if (_this.allPlaces.length > 0) {
                _this.showUsers = false;
                _this.showEvents = false;
                _this.showPlaces = true;
            }
        });
    };
    FacebookFormComponent.prototype.getLatestEvents = function () {
        var _this = this;
        this.latestEvents = [];
        var pageName = this.getPageName();
        this.fb.getLatestEvents(pageName).then(function (res) {
            res.data.forEach(function (obj) {
                _this.latestEvents.push(new __WEBPACK_IMPORTED_MODULE_2__data_model__["a" /* Event */](obj.id, obj.name, obj.description, obj.start_time, obj.end_time, obj.place == undefined ? '' : obj.place.name));
            });
            _this.latestEvents.forEach(function (event) {
                _this.fb.getPicture(event.id).then(function (res) { return event.photo = res.data.url; });
            });
            if (_this.latestEvents.length > 0) {
                _this.showUsers = false;
                _this.showPlaces = false;
                _this.showEvents = true;
            }
        });
    };
    FacebookFormComponent.prototype.getUsers = function () {
        var _this = this;
        this.mostActive = [];
        var pageName = this.getPageName();
        this.fb.getAllEvents(pageName).then(function (res) {
            _this.updateAllEvents(res.data, _this.allEvents, _this.fb);
            if (res.paging.next != undefined) {
                _this.fb.getNextEvents(res.paging.next, _this.allEvents, _this.updateAllEvents);
            }
            _this.getMostActiveUsers();
            if (_this.mostActive.length > 0) {
                _this.showEvents = false;
                _this.showPlaces = false;
                _this.showUsers = true;
            }
        });
    };
    FacebookFormComponent.prototype.getMostActiveUsers = function () {
        var _this = this;
        var uniqueUsers = new Map();
        this.allEvents.forEach(function (e) {
            e.attendees.forEach(function (a) {
                if (!uniqueUsers.has(a.id)) {
                    uniqueUsers.set(a.id, a);
                }
                else {
                    a.eventsAttended++;
                    uniqueUsers.set(a.id, a);
                }
            });
            _this.mostActive = Array.from(uniqueUsers.values())
                .sort(function (a, b) { return b.eventsAttended - a.eventsAttended; })
                .slice(0, 20);
            _this.mostActive.forEach(function (user) {
                _this.fb.getPicture(user.id).then(function (res) { return user.profilePhoto = res.data.url; });
            });
        });
    };
    FacebookFormComponent.prototype.updateAllEvents = function (fbEvents, allEvents, fbService) {
        fbEvents.forEach(function (obj) {
            fbService.getEventAttendees(obj.id).then(function (res) {
                var attendees = [];
                res.data.forEach(function (user) { return attendees.push(new __WEBPACK_IMPORTED_MODULE_2__data_model__["c" /* User */](user.id, user.name)); });
                allEvents.push(new __WEBPACK_IMPORTED_MODULE_2__data_model__["a" /* Event */](obj.id, obj.name, obj.description, obj.start_time, obj.end_time, null, null, attendees));
            });
        });
    };
    FacebookFormComponent.prototype.getPageName = function () {
        var regex = /https:\/\/www\.facebook\.com\/([\w.]+)\//;
        var match = regex.exec(this.url.value);
        return match[1];
    };
    FacebookFormComponent.prototype.getFinalLocation = function () {
        var finalString = "";
        if (!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.country.value))
            finalString += this.country.value;
        if (!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.state.value))
            finalString += ((!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.country.value)) ? "|" : "") + this.state.value;
        if (!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.location.value))
            finalString += ((!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.country.value) || !Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.state.value)) ? "|" : "") + this.location.value;
        return finalString;
    };
    FacebookFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'fb-form',
            template: __webpack_require__("../../../../../src/app/fb-form.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__fb_service__["a" /* FBService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__fb_service__["a" /* FBService */]])
    ], FacebookFormComponent);
    return FacebookFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var graphUrl = 'https://graph.facebook.com/';
var authToken = 'access_token=181182242224859|6b420d60a65a990be00082571c32b382';
var FBService = (function () {
    function FBService(fb) {
        this.fb = fb;
        fb.init({
            appId: '181182242224859',
            xfbml: true,
            version: 'v2.8'
        });
    }
    FBService.prototype.getLatestEvents = function (name) {
        return this.fb.api(graphUrl + name + '/events/?limit=20&' + authToken);
    };
    FBService.prototype.getPicture = function (id) {
        return this.fb.api(graphUrl + id + '/picture/?' + authToken);
    };
    FBService.prototype.getAllEvents = function (name) {
        return this.fb.api(graphUrl + name + '/events/?' + authToken);
    };
    FBService.prototype.getNearByPlaces = function (location) {
        return this.fb.api(graphUrl + 'search?type=place&q=' + location + "&fields=name,checkins,picture,about,link&" + authToken);
    };
    FBService.prototype.getNextEvents = function (url, allEvents, callback) {
        var _this = this;
        return this.fb.api(url).then(function (result) {
            callback(result.data, allEvents, _this);
            if (result.paging.next != undefined) {
                _this.getNextEvents(result.paging.next, allEvents, callback);
            }
        });
    };
    FBService.prototype.getEventAttendees = function (id) {
        return this.fb.api(graphUrl + id + '/attending/?limit=9999&' + authToken);
    };
    FBService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    FBService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]])
    ], FBService);
    return FBService;
}());



/***/ }),

/***/ "../../../../../src/app/places.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".places {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 30em;\n}\n\n.places li {\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  border-radius: 4px;\n}\n\n.places .text {\n  position: relative;\n  top: -3px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/places.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Near By Places</h3>\n<ul class=\"places\">\n  <li *ngFor=\"let place of allPlaces\">\n    <h4>{{ place.name }}</h4>\n    <img src=\"{{ place.picture }}\" alt=\"PhotoOfPlace\">\n    <div>CheckIns: {{ place.checkin }} | Link: <a href=\"{{ place.link }}\">{{ place.link }}</a></div>\n    <p *ngIf=\"place.about\">{{ place.about }}</p>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/places.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fb_service__ = __webpack_require__("../../../../../src/app/fb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlacesComponent = (function () {
    function PlacesComponent(fbService) {
        this.fbService = fbService;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], PlacesComponent.prototype, "allPlaces", void 0);
    PlacesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'places-list',
            template: __webpack_require__("../../../../../src/app/places.component.html"),
            styles: [__webpack_require__("../../../../../src/app/places.component.css")],
            inputs: ['allPlaces'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fb_service__["a" /* FBService */]])
    ], PlacesComponent);
    return PlacesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".users {\n\tmargin: 0 0 2em 0;\n\tlist-style-type: none;\n\tpadding: 0;\n\twidth: 30em;\n}\n.users li {\n\tposition: relative;\n\tleft: 0;\n\tbackground-color: #EEE;\n\tmargin: .5em;\n\tpadding: .3em 0;\n\tborder-radius: 4px;\n}\n.users .text {\n\tposition: relative;\n\ttop: -3px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Most Active Users</h3>\n<ul class=\"users\">\n\t<li *ngFor=\"let user of mostActive\"> \n\t\t<h4>{{ user.name }}</h4>\n\t\t<img src=\"{{ user.profilePhoto }}\" alt=\"userPhoto\">\n\t\t<div>Attended events: {{ user.eventsAttended }}</div>\n\t</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fb_service__ = __webpack_require__("../../../../../src/app/fb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(fbService) {
        this.fbService = fbService;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], UsersComponent.prototype, "mostActive", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'users-list',
            template: __webpack_require__("../../../../../src/app/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users.component.css")],
            inputs: ['mostActive'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fb_service__["a" /* FBService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map