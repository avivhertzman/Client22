(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Trip/trip.component.css":
/*!*****************************************!*\
  !*** ./src/app/Trip/trip.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trip{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.trip-title{\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.flight-option-header{\r\n    width: 95%;\r\n}\r\n\r\n.card-content{\r\n    display: flex;\r\n}\r\n\r\n.accordion-container{\r\n    flex-grow: 1;\r\n}\r\n\r\n.select-price-container{\r\n    margin: 0 14px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.country-name{\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    margin-right: 6px;\r\n}\r\n\r\n.place-display{\r\n    font-size: 14px;\r\n    color:#737171;\r\n}\r\n\r\n.arrow-right-icon{\r\n    margin: 0 7px;\r\n}\r\n\r\n.trips-dates-display{\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    margin-left: 10px;\r\n}"

/***/ }),

/***/ "./src/app/Trip/trip.component.html":
/*!******************************************!*\
  !*** ./src/app/Trip/trip.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"trip\">\r\n    <mat-card-header class=\"trip-title\">\r\n        <div class=\"country-name\">{{trip.originPlace.countryName}}</div>\r\n        <div class=\"place-display\">{{dataDisplayService.getPlaceDisplay(trip.originPlace)}} </div>\r\n        <mat-icon color=\"accent\" class=\"arrow-right-icon\">arrow_right_alt</mat-icon>\r\n        <div class=\"country-name\">{{trip.destinationPlace.countryName}}</div>\r\n        <div class=\"place-display\"> {{dataDisplayService.getPlaceDisplay(trip.destinationPlace)}}</div>\r\n        <div class=\"trips-dates-display\">\r\n            {{dataDisplayService.getDateRangeDispaly(trip.outboundDate, trip.inboundDate)}}\r\n        </div>\r\n    </mat-card-header>\r\n    <div class=\"card-content\">\r\n        <div class=\"accordion-container\">\r\n            <mat-accordion>\r\n                <mat-expansion-panel class=\"flight-option\">\r\n                    <mat-expansion-panel-header>\r\n                        <app-flight-option-header class=\"flight-option-header\" [flightOption]=\"trip.outbound\"\r\n                            [isOutbound]=\"true\"></app-flight-option-header>\r\n                    </mat-expansion-panel-header>\r\n                    <app-flight-option-details [flightOption]=\"trip.outbound\"></app-flight-option-details>\r\n                </mat-expansion-panel>\r\n                <mat-expansion-panel class=\"flight-option\" *ngIf=\"trip.inbound\">\r\n                    <mat-expansion-panel-header>\r\n                        <app-flight-option-header class=\"flight-option-header\" [flightOption]=\"trip.inbound\"\r\n                            [isOutbound]=\"false\"></app-flight-option-header>\r\n                    </mat-expansion-panel-header>\r\n                    <app-flight-option-details [flightOption]=\"trip.inbound\"></app-flight-option-details>\r\n                </mat-expansion-panel>\r\n            </mat-accordion>\r\n        </div>\r\n        <div class=\"select-price-container\">\r\n            <div>{{trip.lowestPriceAgent.Name}}</div>\r\n            <div color=\"accent\">{{trip.lowestPriceAgent.price}}$</div>\r\n            <button (click)=\"selectAgent(trip.lowestPriceAgent)\" mat-raised-button color=\"primary\">Select\r\n                <mat-icon>done</mat-icon>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/Trip/trip.component.ts":
/*!****************************************!*\
  !*** ./src/app/Trip/trip.component.ts ***!
  \****************************************/
/*! exports provided: TripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripComponent", function() { return TripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Utils_dataDisplay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/dataDisplay.service */ "./src/app/Utils/dataDisplay.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripComponent = /** @class */ (function () {
    function TripComponent(dataDisplayService) {
        this.dataDisplayService = dataDisplayService;
    }
    TripComponent.prototype.selectAgent = function (agent) {
        window.open(agent.BookingUrl, '_blank');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TripComponent.prototype, "trip", void 0);
    TripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip',
            template: __webpack_require__(/*! ./trip.component.html */ "./src/app/Trip/trip.component.html"),
            styles: [__webpack_require__(/*! ./trip.component.css */ "./src/app/Trip/trip.component.css")]
        }),
        __metadata("design:paramtypes", [_Utils_dataDisplay_service__WEBPACK_IMPORTED_MODULE_1__["DataDisplayService"]])
    ], TripComponent);
    return TripComponent;
}());



/***/ }),

/***/ "./src/app/Utils/dataDisplay.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Utils/dataDisplay.service.ts ***!
  \**********************************************/
/*! exports provided: DataDisplayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDisplayService", function() { return DataDisplayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataDisplayService = /** @class */ (function () {
    function DataDisplayService() {
    }
    DataDisplayService.prototype.getDateDispaly = function (date) {
        var monthNames = [
            'January', 'February', 'March',
            'April', 'May', 'June', 'July',
            'August', 'September', 'October',
            'November', 'December'
        ];
        var day = date.getDate();
        var monthIndex = date.getMonth().toString();
        var year = date.getFullYear().toString();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    };
    DataDisplayService.prototype.getDateRangeDispaly = function (fromDate, toDate) {
        var output = this.getDateDispaly(fromDate);
        if (toDate) {
            output += ' - ' + this.getDateDispaly(toDate);
        }
        return output;
    };
    DataDisplayService.prototype.getTimeDispaly = function (date) {
        var hours = date.getHours().toString();
        var minutes = date.getMinutes().toString();
        if (hours.length === 1) {
            hours = '0' + hours;
        }
        if (minutes.length === 1) {
            minutes = '0' + minutes;
        }
        return hours + ':' + minutes;
    };
    DataDisplayService.prototype.getDatesDiffreceInDays = function (date1, date2) {
        var _MS_PER_DAY = 1000 * 60 * 60 * 24;
        var utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
        var utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    };
    DataDisplayService.prototype.getDatesDiffreceInHours = function (date1, date2) {
        var _MS_PER_MINUTES = 1000 * 60;
        var utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate(), date1.getHours(), date1.getMinutes());
        var utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate(), date2.getHours(), date2.getMinutes());
        var minutsDiff = Math.floor((utc2 - utc1) / _MS_PER_MINUTES);
        return this.getMinutesToHoursDisplay(minutsDiff);
    };
    DataDisplayService.prototype.getMinutesToHoursDisplay = function (minutes) {
        var hours = Math.floor(minutes / 60);
        var remainingMinutes = minutes % 60;
        return hours + ':' + remainingMinutes + ' Hours';
    };
    DataDisplayService.prototype.getStopsDisplay = function (stops) {
        if (stops === 1) {
            return 'Non-Stop';
        }
        return ((stops - 1) + ' Stops');
    };
    DataDisplayService.prototype.getPlaceDisplay = function (place) {
        return place ? place.placeName + ' (' + place.airportId + ')' : place;
    };
    DataDisplayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], DataDisplayService);
    return DataDisplayService;
}());



/***/ }),

/***/ "./src/app/Utils/daysOffUtils.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Utils/daysOffUtils.service.ts ***!
  \***********************************************/
/*! exports provided: DaysOffUtilsService, weekDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysOffUtilsService", function() { return DaysOffUtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekDay", function() { return weekDay; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DaysOffUtilsService = /** @class */ (function () {
    function DaysOffUtilsService() {
    }
    DaysOffUtilsService.prototype.getDatesToSerach = function (dateRange, wantedDaysOff, uncountedDays) {
        var dateRanges = [];
        var currentRange = { begin: dateRange.begin, end: dateRange.begin };
        var currentDate = dateRange.begin;
        while (currentDate <= dateRange.end) {
            var daysOffNum = 0;
            if (this.isDayOff(currentDate, uncountedDays)) {
                daysOffNum++;
            }
            currentRange.begin = currentDate;
            while (daysOffNum <= wantedDaysOff && currentDate <= dateRange.end) {
                var nextDay = this.addDays(currentDate, 1);
                if (this.isDayOff(nextDay, uncountedDays)) {
                    if (daysOffNum < wantedDaysOff) {
                        currentDate = nextDay;
                    }
                    daysOffNum++;
                }
                else {
                    currentDate = nextDay;
                }
            }
            currentRange.end = currentDate;
            dateRanges.push({ begin: currentRange.begin, end: currentRange.end });
        }
        return dateRanges;
    };
    DaysOffUtilsService.prototype.isDayOff = function (day, uncounedDates) {
        var weekDayName = this.getDayName(day);
        var dayInUncounedDates = uncounedDates.find(function (d) {
            return d.name === weekDayName;
        });
        return !dayInUncounedDates.isFreeDay;
    };
    DaysOffUtilsService.prototype.getDayName = function (date) {
        var weekDays = [weekDay.sunday, weekDay.monday, weekDay.tuesday,
            weekDay.wednesday, weekDay.thursday, weekDay.friday, weekDay.saturday];
        return weekDays[date.getDay()];
    };
    DaysOffUtilsService.prototype.addDays = function (date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };
    DaysOffUtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], DaysOffUtilsService);
    return DaysOffUtilsService;
}());

var weekDay;
(function (weekDay) {
    weekDay["sunday"] = "sunday";
    weekDay["monday"] = "monday";
    weekDay["tuesday"] = "tuesday";
    weekDay["wednesday"] = "wednesday";
    weekDay["thursday"] = "thursday";
    weekDay["friday"] = "friday";
    weekDay["saturday"] = "saturday";
})(weekDay || (weekDay = {}));


/***/ }),

/***/ "./src/app/Utils/filterTrips.Service.ts":
/*!**********************************************!*\
  !*** ./src/app/Utils/filterTrips.Service.ts ***!
  \**********************************************/
/*! exports provided: FilterTripsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTripsService", function() { return FilterTripsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterTripsService = /** @class */ (function () {
    function FilterTripsService() {
    }
    FilterTripsService.prototype.getFilteredTrips = function (trips, filterParams) {
        var filteredTrips = trips;
        if (filterParams.maxPrice) {
            filteredTrips = this.getTripsFilteredMaxPrice(filteredTrips, filterParams.maxPrice);
        }
        if (filterParams.numOfStops) {
            filteredTrips = this.getTripsFilteredByStopsNum(filteredTrips, filterParams);
        }
        if (filterParams.flightTime) {
            filteredTrips = this.getTripsFilteredFlightTime(filteredTrips, filterParams);
        }
        return filteredTrips;
    };
    FilterTripsService.prototype.getTripsFilteredMaxPrice = function (trips, maxPrice) {
        var filteredTrips = trips.filter(function (trip) {
            return trip.lowestPriceAgent.price <= maxPrice;
        });
        return filteredTrips;
    };
    FilterTripsService.prototype.getTripsFilteredByStopsNum = function (trips, filterParams) {
        var stopsNums = this.getStopsNumberArray(filterParams);
        var filteredTrips = trips.filter(function (trip) {
            var outbondStopsNum = trip.outbound.flights.length - 1;
            var inboundStopsNum;
            if (trip.inbound) {
                inboundStopsNum = trip.inbound.flights.length - 1;
            }
            return (stopsNums.includes(outbondStopsNum) &&
                (!inboundStopsNum || stopsNums.includes(inboundStopsNum)));
        });
        return filteredTrips;
    };
    FilterTripsService.prototype.getTripsFilteredFlightTime = function (trips, filterParams) {
        var _this = this;
        var filteredTrips = trips.filter(function (trip) {
            return _this.isInWantedHoursRange(trip.outbound.departure, filterParams.flightTime.outbound);
        });
        filteredTrips = filteredTrips.filter(function (trip) {
            return trip.inbound ?
                _this.isInWantedHoursRange(trip.inbound.departure, filterParams.flightTime.inbound)
                : true;
        });
        return filteredTrips;
    };
    FilterTripsService.prototype.getStopsNumberArray = function (filterParams) {
        var result = [];
        if (filterParams.numOfStops.zero) {
            result.push(0);
        }
        if (filterParams.numOfStops.one) {
            result.push(1);
        }
        if (filterParams.numOfStops.two) {
            result.push(2);
        }
        if (filterParams.numOfStops.threeAndMore) {
            result.push(3, 4);
        }
        return result;
    };
    FilterTripsService.prototype.isInWantedHoursRange = function (date, dayTimes) {
        var hours = date.getHours();
        if (dayTimes.morning && (hours >= 5 && hours <= 11)) {
            return true;
        }
        if (dayTimes.afternoon && (hours >= 12 && hours <= 16)) {
            return true;
        }
        if (dayTimes.evening && (hours >= 17 && hours <= 20)) {
            return true;
        }
        if (dayTimes.night && (hours >= 21 || hours <= 4)) {
            return true;
        }
        return false;
    };
    FilterTripsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], FilterTripsService);
    return FilterTripsService;
}());



/***/ }),

/***/ "./src/app/Utils/formatServerResult.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Utils/formatServerResult.service.ts ***!
  \*****************************************************/
/*! exports provided: FormatServerResultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatServerResultService", function() { return FormatServerResultService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataDisplay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataDisplay.service */ "./src/app/Utils/dataDisplay.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormatServerResultService = /** @class */ (function () {
    function FormatServerResultService(dataDisplayService) {
        this.dataDisplayService = dataDisplayService;
    }
    FormatServerResultService.prototype.getTripsFromServerResult = function (results) {
        var _this = this;
        results.forEach(function (trip) {
            trip.lowestPriceAgent = {'price':trip.Price};
            trip.outbound.arrive = _this.setDateValue(trip.outbound.arrive);
            trip.outbound.departure = _this.setDateValue(trip.outbound.departure);
            trip.outbound.daysDiff = _this.dataDisplayService.getDatesDiffreceInDays(trip.outbound.departure, trip.outbound.arrive);
            trip.outboundDate = trip.outbound.departure;
            trip.outbound.flights.forEach(function (flight) {
                flight.arrive = _this.setDateValue(flight.arrive);
                flight.departure = _this.setDateValue(flight.departure);
                flight.daysDiff = _this.dataDisplayService.getDatesDiffreceInDays(flight.departure, flight.arrive);
            });
            if (trip.inbound) {
                trip.inbound.arrive = _this.setDateValue(trip.inbound.arrive);
                trip.inbound.departure = _this.setDateValue(trip.inbound.departure);
                trip.inbound.daysDiff = _this.dataDisplayService.getDatesDiffreceInDays(trip.inbound.departure, trip.inbound.arrive);
                trip.inboundDate = trip.inbound.departure;
                trip.inbound.flights.forEach(function (flight) {
                    flight.arrive = _this.setDateValue(flight.arrive);
                    flight.departure = _this.setDateValue(flight.departure);
                    flight.daysDiff = _this.dataDisplayService.getDatesDiffreceInDays(flight.departure, flight.arrive);
                });
            }
        });
        return results;
    };
    FormatServerResultService.prototype.setDateValue = function (date) {
        if (date) {
            return new Date(date);
        }
    };
    FormatServerResultService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_dataDisplay_service__WEBPACK_IMPORTED_MODULE_1__["DataDisplayService"]])
    ], FormatServerResultService);
    return FormatServerResultService;
}());



/***/ }),

/***/ "./src/app/Utils/smartFlightsFilter.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Utils/smartFlightsFilter.service.ts ***!
  \*****************************************************/
/*! exports provided: SmartFlightsFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartFlightsFilterService", function() { return SmartFlightsFilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _formatServerResult_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatServerResult.service */ "./src/app/Utils/formatServerResult.service.ts");
/* harmony import */ var _interfaces_QualityParam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/QualityParam */ "./src/app/interfaces/QualityParam.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmartFlightsFilterService = /** @class */ (function () {
    function SmartFlightsFilterService(formatFlightResultsService) {
        this.formatFlightResultsService = formatFlightResultsService;
    }
    SmartFlightsFilterService.prototype.getBestTripsResults = function (serverResult, qualityParams) {
        var _this = this;
        var maxNumberOfResults = 30;
        var trips = this.formatFlightResultsService.getTripsFromServerResult(serverResult);
        var tripScores = trips.map(function (trip) {
            var tripScore = { trip: trip, numberOfStopsScore: 0, priceScore: 0, totalQualityPoints: 0, tripLengthScore: 0 };
            return tripScore;
        });
        qualityParams.forEach(function (param) {
            _this.setTripsScoresByParam(tripScores, param);
        });
        var sortedTrips = tripScores.sort(function (a, b) { return a.totalQualityPoints - b.totalQualityPoints; }).map(function (tripScore) { return tripScore.trip; });
        return sortedTrips.slice(0, maxNumberOfResults);
    };
    SmartFlightsFilterService.prototype.calcNumOfStops = function (trip) {
        return trip.outbound.flights.length + (trip.inbound === undefined ? 0 : trip.inbound.flights.length);
    };
    SmartFlightsFilterService.prototype.calcPrice = function (trip) {
        return trip.lowestPriceAgent.price;
    };
    SmartFlightsFilterService.prototype.calcTripLength = function (trip) {
        return trip.outbound.duration + (trip.inbound === undefined ? 0 : trip.inbound.duration);
    };
    SmartFlightsFilterService.prototype.setTripsScoresByParam = function (tripScores, param) {
        var _this = this;
        switch (param.paramType) {
            case _interfaces_QualityParam__WEBPACK_IMPORTED_MODULE_2__["ParamTypes"].numberOfStops: {
                tripScores.sort(function (a, b) {
                    return _this.calcNumOfStops(a.trip) - _this.calcNumOfStops(b.trip);
                });
                break;
            }
            case _interfaces_QualityParam__WEBPACK_IMPORTED_MODULE_2__["ParamTypes"].price: {
                tripScores.sort(function (a, b) {
                    return _this.calcPrice(a.trip) - _this.calcPrice(b.trip);
                });
                break;
            }
            case _interfaces_QualityParam__WEBPACK_IMPORTED_MODULE_2__["ParamTypes"].totalTripLength: {
                tripScores.sort(function (a, b) {
                    return _this.calcTripLength(a.trip) - _this.calcTripLength(b.trip);
                });
                break;
            }
        }
        for (var index = 0; index < tripScores.length; index++) {
            var tripScore = tripScores[index];
            tripScore.totalQualityPoints += index * param.paramImportancePrecent;
        }
    };
    SmartFlightsFilterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_formatServerResult_service__WEBPACK_IMPORTED_MODULE_1__["FormatServerResultService"]])
    ], SmartFlightsFilterService);
    return SmartFlightsFilterService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n\r\n.toolbar-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.logo-img{\r\n  background-image: url('Logo.png');\r\n  background-repeat: no-repeat;\r\n  height: 45px;\r\n  width: 240px;\r\n  background-size: contain;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <mat-toolbar color=\"primary\">\r\n    <div class=\"logo-img\"></div>\r\n    <span class=\"toolbar-spacer\"></span>\r\n  </mat-toolbar>\r\n  <app-search-flights></app-search-flights>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AngularMaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/fesm5/saturn-datepicker.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _searchFlights_searchFlights_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchFlights/searchFlights.component */ "./src/app/searchFlights/searchFlights.component.ts");
/* harmony import */ var _flightsResults_flightsResults_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flightsResults/flightsResults.component */ "./src/app/flightsResults/flightsResults.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Utils_dataDisplay_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Utils/dataDisplay.service */ "./src/app/Utils/dataDisplay.service.ts");
/* harmony import */ var _flight_flight_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./flight/flight.component */ "./src/app/flight/flight.component.ts");
/* harmony import */ var _Trip_trip_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Trip/trip.component */ "./src/app/Trip/trip.component.ts");
/* harmony import */ var _flightOption_flightOptionHeader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./flightOption/flightOptionHeader.component */ "./src/app/flightOption/flightOptionHeader.component.ts");
/* harmony import */ var _errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./errorMessage/errorMessage.component */ "./src/app/errorMessage/errorMessage.component.ts");
/* harmony import */ var _noResultsMessage_noResultsMessage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./noResultsMessage/noResultsMessage.component */ "./src/app/noResultsMessage/noResultsMessage.component.ts");
/* harmony import */ var _Utils_smartFlightsFilter_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Utils/smartFlightsFilter.service */ "./src/app/Utils/smartFlightsFilter.service.ts");
/* harmony import */ var _loadingBar_loadingBar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./loadingBar/loadingBar.component */ "./src/app/loadingBar/loadingBar.component.ts");
/* harmony import */ var _flightOption_flightOptionDetails_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./flightOption/flightOptionDetails.component */ "./src/app/flightOption/flightOptionDetails.component.ts");
/* harmony import */ var _daysOffDialog_daysOffDialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./daysOffDialog/daysOffDialog.component */ "./src/app/daysOffDialog/daysOffDialog.component.ts");
/* harmony import */ var _Utils_formatServerResult_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Utils/formatServerResult.service */ "./src/app/Utils/formatServerResult.service.ts");
/* harmony import */ var _Utils_filterTrips_Service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Utils/filterTrips.Service */ "./src/app/Utils/filterTrips.Service.ts");
/* harmony import */ var _Utils_daysOffUtils_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Utils/daysOffUtils.service */ "./src/app/Utils/daysOffUtils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"]],
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _searchFlights_searchFlights_component__WEBPACK_IMPORTED_MODULE_7__["SearchFlightsComponent"],
                _flightsResults_flightsResults_component__WEBPACK_IMPORTED_MODULE_8__["FlightsResultsComponent"],
                _Trip_trip_component__WEBPACK_IMPORTED_MODULE_14__["TripComponent"],
                _flight_flight_component__WEBPACK_IMPORTED_MODULE_13__["FlightComponent"],
                _flightOption_flightOptionHeader_component__WEBPACK_IMPORTED_MODULE_15__["FlightOptionHeaderComponent"],
                _errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_16__["ErrorMessageComponent"],
                _noResultsMessage_noResultsMessage_component__WEBPACK_IMPORTED_MODULE_17__["NoResultsMessageComponent"],
                _loadingBar_loadingBar_component__WEBPACK_IMPORTED_MODULE_19__["LoadingBarComponent"],
                _flightOption_flightOptionDetails_component__WEBPACK_IMPORTED_MODULE_20__["FlightOptionDetailsComponent"],
                _daysOffDialog_daysOffDialog_component__WEBPACK_IMPORTED_MODULE_21__["DaysOffDialogComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                saturn_datepicker__WEBPACK_IMPORTED_MODULE_5__["SatDatepickerModule"],
                saturn_datepicker__WEBPACK_IMPORTED_MODULE_5__["SatNativeDateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], pathMatch: 'full' }
                ]),
                AngularMaterialModule
            ],
            entryComponents: [_daysOffDialog_daysOffDialog_component__WEBPACK_IMPORTED_MODULE_21__["DaysOffDialogComponent"]],
            providers: [_Utils_dataDisplay_service__WEBPACK_IMPORTED_MODULE_12__["DataDisplayService"], _Utils_smartFlightsFilter_service__WEBPACK_IMPORTED_MODULE_18__["SmartFlightsFilterService"],
                _Utils_formatServerResult_service__WEBPACK_IMPORTED_MODULE_22__["FormatServerResultService"], _Utils_filterTrips_Service__WEBPACK_IMPORTED_MODULE_23__["FilterTripsService"], _Utils_daysOffUtils_service__WEBPACK_IMPORTED_MODULE_24__["DaysOffUtilsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/daysOffDialog/daysOffDialog.component.css":
/*!***********************************************************!*\
  !*** ./src/app/daysOffDialog/daysOffDialog.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/daysOffDialog/daysOffDialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/daysOffDialog/daysOffDialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Days Off</h1>\r\n<div mat-dialog-content>\r\n    <p>Tell us how many days you want to take off work, and we'll do the rest!</p>\r\n    <p>These days are not counted as days off:</p>\r\n    <section *ngFor=\"let day of daysOff\">\r\n        <mat-checkbox [(ngModel)]=\"day.isFreeDay\">{{day.name}}</mat-checkbox>\r\n    </section>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"onNoClick()\">cancel</button>\r\n    <button mat-button [mat-dialog-close]=\"daysOff\" cdkFocusInitial>Save</button>\r\n</div>"

/***/ }),

/***/ "./src/app/daysOffDialog/daysOffDialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/daysOffDialog/daysOffDialog.component.ts ***!
  \**********************************************************/
/*! exports provided: DaysOffDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysOffDialogComponent", function() { return DaysOffDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DaysOffDialogComponent = /** @class */ (function () {
    function DaysOffDialogComponent(dialogRef, daysOff) {
        this.dialogRef = dialogRef;
        this.daysOff = daysOff;
    }
    DaysOffDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DaysOffDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-days-off-dialog',
            template: __webpack_require__(/*! ./daysOffDialog.component.html */ "./src/app/daysOffDialog/daysOffDialog.component.html"),
            styles: [__webpack_require__(/*! ./daysOffDialog.component.css */ "./src/app/daysOffDialog/daysOffDialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Array])
    ], DaysOffDialogComponent);
    return DaysOffDialogComponent;
}());



/***/ }),

/***/ "./src/app/enums/searchState.ts":
/*!**************************************!*\
  !*** ./src/app/enums/searchState.ts ***!
  \**************************************/
/*! exports provided: searchState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchState", function() { return searchState; });
var searchState;
(function (searchState) {
    searchState[searchState["empty"] = 0] = "empty";
    searchState[searchState["loading"] = 1] = "loading";
    searchState[searchState["succsses"] = 2] = "succsses";
    searchState[searchState["error"] = 3] = "error";
    searchState[searchState["noResults"] = 4] = "noResults";
})(searchState || (searchState = {}));


/***/ }),

/***/ "./src/app/errorMessage/errorMessage.component.css":
/*!*********************************************************!*\
  !*** ./src/app/errorMessage/errorMessage.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message{\r\n    text-align: center;\r\n}\r\n.error-message h1{\r\n    color: firebrick;\r\n}\r\n.error-icon{\r\n    font-size: 28px; \r\n}"

/***/ }),

/***/ "./src/app/errorMessage/errorMessage.component.html":
/*!**********************************************************!*\
  !*** ./src/app/errorMessage/errorMessage.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-message\">\r\n    <h1>Oh No!\r\n        <mat-icon class=\"error-icon\">sentiment_very_dissatisfied</mat-icon>\r\n    </h1>\r\n    <p>An error has occurred while searching flights. Please try to search again or refresh this page.</p>\r\n</div> "

/***/ }),

/***/ "./src/app/errorMessage/errorMessage.component.ts":
/*!********************************************************!*\
  !*** ./src/app/errorMessage/errorMessage.component.ts ***!
  \********************************************************/
/*! exports provided: ErrorMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function() { return ErrorMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorMessageComponent = /** @class */ (function () {
    function ErrorMessageComponent() {
    }
    ErrorMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-message',
            template: __webpack_require__(/*! ./errorMessage.component.html */ "./src/app/errorMessage/errorMessage.component.html"),
            styles: [__webpack_require__(/*! ./errorMessage.component.css */ "./src/app/errorMessage/errorMessage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());



/***/ }),

/***/ "./src/app/flight/flight.component.css":
/*!*********************************************!*\
  !*** ./src/app/flight/flight.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flight-display{\r\n  display: flex;  \r\n}\r\n\r\n.duration-display{\r\n    margin: 0 15px;\r\n    -ms-grid-row-align:center;\r\n        align-self:center;\r\n}\r\n\r\n.time-display{\r\n    text-align: center;\r\n}\r\n\r\n.long-arrow{\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAA3CAYAAAAVFkZ2AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEQAACxEBf2RfkQAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS42/U4J6AAAAl5JREFUeF7t3KFuFGEYheGKCkRFBaKiAoHgAhCICkQlooIEZCUX0Asg3EAvAIEkgaAqkBXophKJQCAQCAQJhAznS2aSmdmzM/8s/35AeMUj9t2dirYn3b+77U7TNAD+EBsB5LARQA4bAeSwEUAOGwHksBFADhsB5LARQA4bAeSwEUAOGwHksBFADhsB5LARQA4bAZR5c/PRvuulbAQwT+M7ki/y0N1fwkYA09rxfZVGfmw6QhsBrKex7Uv85IvxdTYaoY0ApsXY2tH91ghtBDAvxtaObuMR2gigTIytHd1GI7QRQLkYWzu6xSO0EcAyMbZ2dItGaCOA5WJs7eiKR2gj/h/65tiVWwnuJ3gsp1t2Jk8nvJKfUjTCwQ09yH3A2p7Liy27kMstu5YPW/ZJ+l9I/Lu+y0F/b2FwY3QBgHq+yVF/b2FwY3QBgLo+y+DN2wwQwT39re2duKfyNb0UdySp6Vzc0arzTK5k/DmOc+Bpf29hcEMPcB+wtifiDrc1PRB3SK/prrhfNtS0cmbA30tfrz15LePxxZu2T9w1KwHAchpYjC9+yo/HF2/aXjn7dWwEUE4DO5D37eD64rfYd9w1HRsBlImBSZxxx+OLQR66a/psBDBPA7sn7rXaeCpadH63EcA0DexYur+I73sre+4ax0YA62lgN+RjO7i+eBlk112zjo0Apmlo/f8JE87d4+bYCGCeRnci8QL7mbu/hI0Aymh8t10vZSOAHDYCyGEjgBw2AshhI4AcNgLIYSOAHDYCyGEjgBw2AshhI4AcNgLIYSOAHDYCyGEjgAzNzi9SftM/4G92cQAAAABJRU5ErkJggg==');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    height: 20px;\r\n    width: 85px;\r\n}\r\n\r\n.bold-text{\r\nfont-weight: bold;\r\n}\r\n\r\n.small-text{\r\n    font-size: 13px;\r\n    color: #9e9b9b;\r\n}\r\n\r\n.carrier-display{\r\n    margin-right: 15px;\r\n    width: 100px;\r\n}\r\n\r\n.days-diff{\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n    width: 10px;\r\n}\r\n\r\n.arrive-time{\r\n    display: flex;\r\n}"

/***/ }),

/***/ "./src/app/flight/flight.component.html":
/*!**********************************************!*\
  !*** ./src/app/flight/flight.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flight-display\">\r\n    <div class=\"carrier-display\">\r\n        <div class=\"small-text\">\r\n            carrier\r\n        </div>\r\n        <div class=\"bold-text\">\r\n            {{flight.carrier.Name}}\r\n        </div>\r\n        <div>\r\n            flight {{flight.flightNumber}}\r\n        </div>\r\n    </div>\r\n    <div class=\"place-display\">\r\n        <div class=\"small-text\">\r\n            departure\r\n        </div>\r\n        <div class=\"bold-text\">{{dataDisplayService.getTimeDispaly(flight.departure)}}</div>\r\n        <div class=\"bold-text\">{{displayFn(flight.originPlace)}}</div>\r\n        <div>{{dataDisplayService.getDateDispaly(flight.departure)}}</div>\r\n    </div>\r\n    <div class=\"duration-display\">\r\n        <div class=\"long-arrow\"></div>\r\n        <div class=\"time-display\">\r\n            {{dataDisplayService.getMinutesToHoursDisplay(flight.duration)}}\r\n        </div>\r\n    </div>\r\n    <div class=\"place-display\">\r\n        <div class=\"small-text\">\r\n            arrive\r\n        </div>\r\n        <div class=\"bold-text arrive-time\">\r\n            {{dataDisplayService.getTimeDispaly(flight.arrive)}}\r\n            <div *ngIf=\"(flight.daysDiff > 0)\" class=\"days-diff\">\r\n                +{{flight.daysDiff}}\r\n            </div>\r\n        </div>\r\n        <div class=\"bold-text\">{{displayFn(flight.destinationPlace)}}</div>\r\n        <div>{{dataDisplayService.getDateDispaly(flight.arrive)}}</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/flight/flight.component.ts":
/*!********************************************!*\
  !*** ./src/app/flight/flight.component.ts ***!
  \********************************************/
/*! exports provided: FlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightComponent", function() { return FlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Utils_dataDisplay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/dataDisplay.service */ "./src/app/Utils/dataDisplay.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlightComponent = /** @class */ (function () {
    function FlightComponent(dataDisplayService) {
        this.dataDisplayService = dataDisplayService;
    }
    FlightComponent.prototype.displayFn = function (place) {
        return place ? place.placeName + ' (' + place.airportId + ')' : place;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlightComponent.prototype, "flight", void 0);
    FlightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flight',
            template: __webpack_require__(/*! ./flight.component.html */ "./src/app/flight/flight.component.html"),
            styles: [__webpack_require__(/*! ./flight.component.css */ "./src/app/flight/flight.component.css")]
        }),
        __metadata("design:paramtypes", [_Utils_dataDisplay_service__WEBPACK_IMPORTED_MODULE_1__["DataDisplayService"]])
    ], FlightComponent);
    return FlightComponent;
}());



/***/ }),

/***/ "./src/app/flightOption/flightOptionDetails.component.css":
/*!****************************************************************!*\
  !*** ./src/app/flightOption/flightOptionDetails.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".connection-display{\r\n    display: flex;\r\n    background-color: #f1f1f1;\r\n    border-radius: 5px;\r\n    padding: 15px;\r\n    margin: 15px 0;\r\n    font-size: 15px;\r\n}\r\n\r\n.connent-title{    \r\n    font-weight: bold;\r\n    margin-left: 10px;\r\n}\r\n\r\n.clock-icon{\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/flightOption/flightOptionDetails.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/flightOption/flightOptionDetails.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let flight of flightOption.flights; let i = index\">\r\n    <app-flight [flight]=\"flight\"></app-flight>\r\n    <div class=\"connection-display\" *ngIf=\"flightOption.flights[i+1]\">\r\n        <mat-icon class=\"clock-icon\" color=\"accent\">watch_later</mat-icon>\r\n        <div>\r\n            {{dataDisplayService.getDatesDiffreceInHours(flight.arrive, flightOption.flights[i+1].departure)}}\r\n        </div>\r\n        <div class=\"connent-title\">\r\n            Connect in airport\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/flightOption/flightOptionDetails.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/flightOption/flightOptionDetails.component.ts ***!
  \***************************************************************/
/*! exports provided: FlightOptionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightOptionDetailsComponent", function() { return FlightOptionDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Utils_dataDisplay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/dataDisplay.service */ "./src/app/Utils/dataDisplay.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlightOptionDetailsComponent = /** @class */ (function () {
    function FlightOptionDetailsComponent(dataDisplayService) {
        this.dataDisplayService = dataDisplayService;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlightOptionDetailsComponent.prototype, "flightOption", void 0);
    FlightOptionDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flight-option-details',
            template: __webpack_require__(/*! ./flightOptionDetails.component.html */ "./src/app/flightOption/flightOptionDetails.component.html"),
            styles: [__webpack_require__(/*! ./flightOptionDetails.component.css */ "./src/app/flightOption/flightOptionDetails.component.css")]
        }),
        __metadata("design:paramtypes", [_Utils_dataDisplay_service__WEBPACK_IMPORTED_MODULE_1__["DataDisplayService"]])
    ], FlightOptionDetailsComponent);
    return FlightOptionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/flightOption/flightOptionHeader.component.css":
/*!***************************************************************!*\
  !*** ./src/app/flightOption/flightOptionHeader.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flight-option-title{\r\n    font-weight: bold;\r\n    width: 80px;\r\n    display: flex;\r\n}\r\n\r\n.title-container, .duration-container{\r\n    display: flex;\r\n}\r\n\r\n.flight-option-header{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 95%;\r\n}\r\n\r\n.flight-option-header > div{\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\n\r\nmat-icon{\r\n    margin-right: 5px; \r\n}\r\n\r\n.flip {\r\n    -webkit-transform: scaleX(-1);\r\n            transform: scaleX(-1)\r\n}\r\n\r\n.flight-hours{\r\n    display: flex;\r\n    width: 150px;\r\n}\r\n\r\n.days-diff{\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n    width: 10px;\r\n}"

/***/ }),

/***/ "./src/app/flightOption/flightOptionHeader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/flightOption/flightOptionHeader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flight-option-header\">\r\n    <div class=\"title-container\">\r\n        <div *ngIf=\"isOutbound\" class=\"flight-option-title\">\r\n            <mat-icon color=\"accent\">flight_takeoff</mat-icon>\r\n            {{outboundTitle}}\r\n        </div>\r\n        <div *ngIf=\"!isOutbound\" class=\"flight-option-title\">\r\n            <mat-icon color=\"accent\" class=\"flip\">flight_land</mat-icon>\r\n            {{inboundTitle}}\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div class=\"flight-hours\">\r\n            {{dataDisplayService.getTimeDispaly(flightOption.departure)}}\r\n            <mat-icon color=\"accent\">arrow_right_alt</mat-icon>\r\n            {{dataDisplayService.getTimeDispaly(flightOption.arrive)}}\r\n            <div *ngIf=\"(flightOption.daysDiff > 0)\" class=\"days-diff\">\r\n                +{{flightOption.daysDiff}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div>{{dataDisplayService.getStopsDisplay(flightOption.flights.length)}}</div>\r\n    </div>\r\n    <div class=\"duration-container\">\r\n        <mat-icon color=\"accent\">watch_later</mat-icon>\r\n        <div>\r\n            {{dataDisplayService.getMinutesToHoursDisplay(flightOption.duration)}}\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/flightOption/flightOptionHeader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/flightOption/flightOptionHeader.component.ts ***!
  \**************************************************************/
/*! exports provided: FlightOptionHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightOptionHeaderComponent", function() { return FlightOptionHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Utils_dataDisplay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/dataDisplay.service */ "./src/app/Utils/dataDisplay.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlightOptionHeaderComponent = /** @class */ (function () {
    function FlightOptionHeaderComponent(dataDisplayService) {
        this.dataDisplayService = dataDisplayService;
        this.outboundTitle = 'Outbound';
        this.inboundTitle = 'Return';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlightOptionHeaderComponent.prototype, "flightOption", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FlightOptionHeaderComponent.prototype, "isOutbound", void 0);
    FlightOptionHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flight-option-header',
            template: __webpack_require__(/*! ./flightOptionHeader.component.html */ "./src/app/flightOption/flightOptionHeader.component.html"),
            styles: [__webpack_require__(/*! ./flightOptionHeader.component.css */ "./src/app/flightOption/flightOptionHeader.component.css")]
        }),
        __metadata("design:paramtypes", [_Utils_dataDisplay_service__WEBPACK_IMPORTED_MODULE_1__["DataDisplayService"]])
    ], FlightOptionHeaderComponent);
    return FlightOptionHeaderComponent;
}());



/***/ }),

/***/ "./src/app/flightsResults/flightsResults.component.css":
/*!*************************************************************!*\
  !*** ./src/app/flightsResults/flightsResults.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trips-options{\r\n    margin-top: 30px;\r\n}\r\n\r\n.trips-options .mat-card-title{\r\n    display: flex;\r\n}"

/***/ }),

/***/ "./src/app/flightsResults/flightsResults.component.html":
/*!**************************************************************!*\
  !*** ./src/app/flightsResults/flightsResults.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"flightsResults.length > 0\">\r\n  Showing {{flightsResults.length}} results\r\n</div>\r\n<div *ngIf=\"flightsResults.length === 0\">\r\n  No results matching your filters.\r\n</div>\r\n<div *ngFor=\"let trip of flightsResults\">\r\n  <app-trip [trip]=\"trip\"></app-trip>\r\n</div>"

/***/ }),

/***/ "./src/app/flightsResults/flightsResults.component.ts":
/*!************************************************************!*\
  !*** ./src/app/flightsResults/flightsResults.component.ts ***!
  \************************************************************/
/*! exports provided: FlightsResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsResultsComponent", function() { return FlightsResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlightsResultsComponent = /** @class */ (function () {
    function FlightsResultsComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FlightsResultsComponent.prototype, "flightsResults", void 0);
    FlightsResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flights-results',
            template: __webpack_require__(/*! ./flightsResults.component.html */ "./src/app/flightsResults/flightsResults.component.html"),
            styles: [__webpack_require__(/*! ./flightsResults.component.css */ "./src/app/flightsResults/flightsResults.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlightsResultsComponent);
    return FlightsResultsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".site-title{\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #2c9cfe;\r\n  font-size: 55px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"site-title\">Flights Finder</h1>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interfaces/QualityParam.ts":
/*!********************************************!*\
  !*** ./src/app/interfaces/QualityParam.ts ***!
  \********************************************/
/*! exports provided: ParamTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamTypes", function() { return ParamTypes; });
var ParamTypes;
(function (ParamTypes) {
    ParamTypes[ParamTypes["price"] = 0] = "price";
    ParamTypes[ParamTypes["totalTripLength"] = 1] = "totalTripLength";
    ParamTypes[ParamTypes["numberOfStops"] = 2] = "numberOfStops";
})(ParamTypes || (ParamTypes = {}));


/***/ }),

/***/ "./src/app/loadingBar/loadingBar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/loadingBar/loadingBar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-title{\r\n    display: flex;\r\n}\r\n\r\n.loading-text{\r\n    margin-left: 10px;  \r\n    flex-grow: 1;\r\n    text-align: center\r\n}"

/***/ }),

/***/ "./src/app/loadingBar/loadingBar.component.html":
/*!******************************************************!*\
  !*** ./src/app/loadingBar/loadingBar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-bar\">\r\n    <div class=\"loading-title\">\r\n        <mat-spinner diameter=\"20\"></mat-spinner>   \r\n        <h4 class=\"loading-text\">{{message}}</h4>    \r\n    </div>\r\n    <mat-progress-bar class=\"example-margin\" color=\"primary\" mode=\"determinate\" [value]=\"value\">\r\n    </mat-progress-bar>\r\n</div>"

/***/ }),

/***/ "./src/app/loadingBar/loadingBar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/loadingBar/loadingBar.component.ts ***!
  \****************************************************/
/*! exports provided: LoadingBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBarComponent", function() { return LoadingBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingBarComponent = /** @class */ (function () {
    function LoadingBarComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LoadingBarComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoadingBarComponent.prototype, "message", void 0);
    LoadingBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading-bar',
            template: __webpack_require__(/*! ./loadingBar.component.html */ "./src/app/loadingBar/loadingBar.component.html"),
            styles: [__webpack_require__(/*! ./loadingBar.component.css */ "./src/app/loadingBar/loadingBar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingBarComponent);
    return LoadingBarComponent;
}());



/***/ }),

/***/ "./src/app/noResultsMessage/noResultsMessage.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/noResultsMessage/noResultsMessage.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.no-results{\r\n    text-align: center;\r\n}\r\n\r\n.no-results .header{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.sad-icon{\r\n    margin-top: 7px;\r\n    margin-left: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/noResultsMessage/noResultsMessage.component.html":
/*!******************************************************************!*\
  !*** ./src/app/noResultsMessage/noResultsMessage.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"no-results\">\r\n    <div class=\"header\">\r\n        <h3>\r\n            Sorry, we found no results on these dates\r\n        </h3>\r\n        <mat-icon class=\"sad-icon\">sentiment_dissatisfied</mat-icon>\r\n    </div>\r\n    <span>Please Change your dates or airports and try again.</span>\r\n</div>"

/***/ }),

/***/ "./src/app/noResultsMessage/noResultsMessage.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/noResultsMessage/noResultsMessage.component.ts ***!
  \****************************************************************/
/*! exports provided: NoResultsMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoResultsMessageComponent", function() { return NoResultsMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoResultsMessageComponent = /** @class */ (function () {
    function NoResultsMessageComponent() {
    }
    NoResultsMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-results-message',
            template: __webpack_require__(/*! ./noResultsMessage.component.html */ "./src/app/noResultsMessage/noResultsMessage.component.html"),
            styles: [__webpack_require__(/*! ./noResultsMessage.component.css */ "./src/app/noResultsMessage/noResultsMessage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoResultsMessageComponent);
    return NoResultsMessageComponent;
}());



/***/ }),

/***/ "./src/app/searchFlights/searchFlights.component.html":
/*!************************************************************!*\
  !*** ./src/app/searchFlights/searchFlights.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page\">\r\n  <mat-card class=\"form-card\">\r\n    <div class=\"form-container\">\r\n      <div class=\"form-first-row\">\r\n        <mat-radio-group [(ngModel)]=\"tripType\">\r\n          <mat-radio-button class=\"radio-button-field\" value=\"roundTrip\">Round Trip</mat-radio-button>\r\n          <mat-radio-button class=\"radio-button-field\" value=\"oneWay\" [disabled]=\"datesToggleValue === 'DaysOff'\">One\r\n            Way</mat-radio-button>\r\n        </mat-radio-group>\r\n        <div class=\"search-by-container\">\r\n          <div class=\"search-by-title\">\r\n            Search By\r\n          </div>\r\n          <mat-button-toggle-group class=\"search-by-button\" #group=\"matButtonToggleGroup\" [value]=\"datesToggleValue\"\r\n            (change)=\"onDatesToggleValueChange(group.value)\">\r\n            <mat-button-toggle value=\"Dates\">Dates</mat-button-toggle>\r\n            <mat-button-toggle value=\"DaysOff\" [disabled]=\"tripType === 'oneWay'\">Days-off</mat-button-toggle>\r\n          </mat-button-toggle-group>\r\n        </div>\r\n      </div>\r\n      <form (ngSubmit)=\"onSearch()\" class=\"search-form\">\r\n        <div class=\"form-fields\">\r\n          <mat-form-field class=\"autocomplete-field\">\r\n            <input matInput [matAutocomplete]=\"autoFrom\" placeholder=\"From...\" [formControl]=\"whereFrom\">\r\n            <mat-autocomplete #autoFrom=\"matAutocomplete\" autoActiveFirstOption\r\n              [displayWith]=\"dataDisplayService.getPlaceDisplay\" [panelWidth]=\"250\">\r\n              <mat-option *ngIf=\"isLoadingFromOptions\" class=\"is-loading\" class=\"autocomplete-option\">\r\n                <mat-spinner diameter=\"20\"></mat-spinner>\r\n              </mat-option>\r\n              <ng-container>\r\n                <mat-option *ngFor=\"let option of fromOptions\" [value]=\"option\" class=\"autocomplete-option\">\r\n                  <div class=\"autocomplete-place-name\">{{ dataDisplayService.getPlaceDisplay(option) }}</div>\r\n                  <div class=\"autocomplete-country-name\">{{ option.countryName }}</div>\r\n                </mat-option>\r\n              </ng-container>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n          <button type=\"button\" (click)=\"swapDestinations()\" mat-icon-button color=\"accent\">\r\n            <mat-icon>swap_horiz</mat-icon>\r\n          </button>\r\n          <mat-form-field class=\"autocomplete-field\">\r\n            <input matInput [matAutocomplete]=\"autoTo\" placeholder=\"To...\" [formControl]=\"whereTo\">\r\n            <mat-autocomplete #autoTo=\"matAutocomplete\" autoActiveFirstOption\r\n              [displayWith]=\"dataDisplayService.getPlaceDisplay\" [panelWidth]=\"250\">\r\n              <mat-option *ngIf=\"isLoadingToOptions\" class=\"is-loading\" class=\"autocomplete-option\">\r\n                <mat-spinner diameter=\"20\"></mat-spinner>\r\n              </mat-option>\r\n              <ng-container>\r\n                <mat-option *ngFor=\"let option of toOptions\" [value]=\"option\" class=\"autocomplete-option\">\r\n                  <div class=\"autocomplete-place-name\">{{ dataDisplayService.getPlaceDisplay(option) }}</div>\r\n                  <div class=\"autocomplete-country-name\">{{ option.countryName }}</div>\r\n                </mat-option>\r\n              </ng-container>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n          <div class=\"dates-container\">\r\n            <div *ngIf=\"datesToggleValue === 'Dates'\">\r\n              <mat-form-field class=\"date-picker-field outbound-date\">\r\n                <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"departurePicker\"\r\n                  placeholder=\"Departure on...\" [formControl]=\"departureDate\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"departurePicker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #departurePicker></mat-datepicker>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"date-picker-field\">\r\n                <input [min]=\"minDate\" [max]=\"maxDate\" [disabled]=\"isOneWay()\" matInput [matDatepicker]=\"returnPicker\"\r\n                  placeholder=\"Return on...\" [formControl]=\"returnDate\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"returnPicker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #returnPicker></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n            <div *ngIf=\"datesToggleValue === 'DaysOff'\">\r\n              <div>\r\n                <mat-form-field class=\"days-off-display\">\r\n                  <mat-label>Days Off</mat-label>\r\n                  <mat-select [(ngModel)]=\"numberOfDaysOff\" name=\"daysOff\">\r\n                    <mat-option *ngFor=\"let num of numberOfDaysOffOptions\" [value]=\"num\">\r\n                      {{num}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <button type=\"button\" (click)=\"openDaysOffDialog()\" mat-icon-button color=\"accent\">\r\n                  <mat-icon>help</mat-icon>\r\n                </button>\r\n              </div>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Choose a date range\" [satDatepicker]=\"picker\"\r\n                  [formControl]=\"daysOffDateRange\" [min]=\"minDate\">\r\n                <sat-datepicker #picker [rangeMode]=\"true\"></sat-datepicker>\r\n                <sat-datepicker-toggle matSuffix [for]=\"picker\"></sat-datepicker-toggle>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"options-container\">\r\n            <mat-form-field class=\"passengers-select\">\r\n              <mat-label>Passengers</mat-label>\r\n              <mat-select [(ngModel)]=\"numberOfPassengers\" name=\"passengers\">\r\n                <mat-option *ngFor=\"let num of numberOfPassengersOptions\" [value]=\"num\">\r\n                  {{num}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"search-button-div\" [matTooltip]=\"getTooltipMessage()\" [matTooltipDisabled]=\"showErrorTooltip()\"\r\n          matTooltipClass=\"example-tooltip-red\">\r\n          <button type=\"submit\" mat-raised-button color=\"accent\" [disabled]=\"disableSearch()\">Search\r\n            <mat-icon>search</mat-icon>\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </mat-card>\r\n  <div *ngIf=\"currentSearchState === searchStatesEnum.succsses\" class=\"slider-container\">\r\n    <span>Speed</span>\r\n    <mat-slider class=\"slider-display\" [max]=\"maxSliderValue\" [min]=\"minSliderValue\" [(ngModel)]=\"sliderValue\" #mySlider\r\n      (slideend)=\"onSliderInputChange(mySlider.value)\" (pointerup)=\"onSliderInputChange(mySlider.value)\">\r\n    </mat-slider>\r\n    <span>Price</span>\r\n  </div>\r\n  <div class=\"results-content\">\r\n    <div class=\"filters-display\" *ngIf=\"currentSearchState === searchStatesEnum.succsses\">\r\n      <mat-expansion-panel class=\"filter-expander\">\r\n        <mat-expansion-panel-header>\r\n          Price\r\n        </mat-expansion-panel-header>\r\n        <div>Max Price\r\n          <span *ngIf=\"priceSliderValue\">: {{priceSliderValue}}$</span>\r\n        </div>\r\n        <mat-slider class=\"price-slider-display\" [max]=\"maxPriceSliderValue\" [min]=\"minPriceSliderValue\"\r\n          [(ngModel)]=\"priceSliderValue\" #priceSlider (slideend)=\"onPriceSliderInputChange(priceSlider.value)\"\r\n          (pointerup)=\"onPriceSliderInputChange(priceSlider.value)\" (input)=\"onPriceInputLiveChange($event)\">\r\n        </mat-slider>\r\n        <button *ngIf=\"priceSliderValue\" mat-stroked-button color=\"primary\" (click)=\"resetPriceSlider()\">reset</button>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel class=\"filter-expander\">\r\n        <mat-expansion-panel-header>\r\n          Stops\r\n        </mat-expansion-panel-header>\r\n        <div class=\"checkbox-container\">\r\n          <mat-checkbox [(ngModel)]=\"this.filterParams.numOfStops.zero\" (change)=\"onCheckboxChanged()\">Non-Stop\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"this.filterParams.numOfStops.one\" (change)=\"onCheckboxChanged()\">1 Stop\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"this.filterParams.numOfStops.two\" (change)=\"onCheckboxChanged()\">2 Stops\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"this.filterParams.numOfStops.threeAndMore\" (change)=\"onCheckboxChanged()\">3+\r\n            Stops\r\n          </mat-checkbox>\r\n          <div>\r\n            <button mat-stroked-button color=\"primary\" (click)=\"resetStopsCheckboxs()\">reset</button>\r\n          </div>\r\n        </div>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel class=\"filter-expander\">\r\n        <mat-expansion-panel-header>\r\n          Outbound Flight\r\n        </mat-expansion-panel-header>\r\n        <div class=\"checkbox-container\">\r\n          <mat-checkbox [(ngModel)]=\"this.filterParams.flightTime.outbound.morning\" (change)=\"onCheckboxChanged()\">\r\n            morning <span class=\"checkbox-hours\">(5am - 12pm)</span>\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"this.filterParams.flightTime.outbound.afternoon\" (change)=\"onCheckboxChanged()\">\r\n            afternoon <span class=\"checkbox-hours\">(12pm - 17pm)</span>\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"this.filterParams.flightTime.outbound.evening\" (change)=\"onCheckboxChanged()\">\r\n            evening <span class=\"checkbox-hours\">(17pm - 21pm)</span>\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"this.filterParams.flightTime.outbound.night\" (change)=\"onCheckboxChanged()\">night\r\n            <span class=\"checkbox-hours\">(21pm - 5am)</span>\r\n          </mat-checkbox>\r\n          <div>\r\n            <button mat-stroked-button color=\"primary\" (click)=\"resetOutboundTimesCheckboxs()\">reset</button>\r\n          </div>\r\n        </div>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel class=\"filter-expander\">\r\n        <mat-expansion-panel-header>\r\n          Inbound Flight\r\n        </mat-expansion-panel-header>\r\n        <div class=\"checkbox-container\">\r\n          <mat-checkbox [(ngModel)]=\"this.filterParams.flightTime.inbound.morning\" (change)=\"onCheckboxChanged()\">\r\n            morning <span class=\"checkbox-hours\">(5am - 12pm)</span>\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"this.filterParams.flightTime.inbound.afternoon\" (change)=\"onCheckboxChanged()\">\r\n            afternoon <span class=\"checkbox-hours\">(12pm - 17pm)</span>\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"this.filterParams.flightTime.inbound.evening\" (change)=\"onCheckboxChanged()\">\r\n            evening <span class=\"checkbox-hours\">(17pm - 21pm)</span>\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"this.filterParams.flightTime.inbound.night\" (change)=\"onCheckboxChanged()\">night\r\n            <span class=\"checkbox-hours\">(21pm - 5am)</span>\r\n          </mat-checkbox>\r\n          <div>\r\n            <button mat-stroked-button color=\"primary\" (click)=\"resetInboundTimesCheckboxs()\">reset</button>\r\n          </div>\r\n        </div>\r\n      </mat-expansion-panel>\r\n    </div>\r\n    <div class=\"space-div\" *ngIf=\"currentSearchState != searchStatesEnum.succsses\"></div>\r\n    <mat-card class=\"results-container\" *ngIf=\"currentSearchState !== searchStatesEnum.empty\">\r\n      <app-error-message *ngIf=\"currentSearchState === searchStatesEnum.error\"></app-error-message>\r\n      <app-no-results-message *ngIf=\"currentSearchState === searchStatesEnum.noResults\">\r\n      </app-no-results-message>\r\n      <app-loading-bar *ngIf=\"currentSearchState === searchStatesEnum.loading\" [message]=\"loadingMessage\"\r\n        [value]=\"loadingProgress\"></app-loading-bar>\r\n      <div *ngIf=\"currentSearchState === searchStatesEnum.succsses\" class=\"trips-options\">\r\n        <app-flights-results [flightsResults]=\"filteredTripOptions\"></app-flights-results>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/searchFlights/searchFlights.component.scss":
/*!************************************************************!*\
  !*** ./src/app/searchFlights/searchFlights.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-page {\n  width: 100%;\n  margin: auto;\n  margin-top: 50px; }\n  .main-page .form-first-row {\n    display: flex;\n    justify-content: space-between;\n    height: 55px;\n    margin-bottom: 20px; }\n  .main-page .passengers-select {\n    width: 70px; }\n  .main-page .form-card {\n    width: 850px;\n    margin-bottom: 20px;\n    margin-left: 200px; }\n  .main-page .form-card .form-container .search-form {\n      margin-bottom: 5px; }\n  .main-page .form-card .form-container .date-picker-field {\n      width: 165px; }\n  .main-page .form-card .form-container .search-button-div {\n      text-align: center; }\n  .main-page .form-card .form-container .radio-button-field {\n      margin-right: 40px; }\n  .main-page .form-card .form-container .autocomplete-field {\n      width: 160px; }\n  .main-page .form-card .form-container .airport-id {\n      font-weight: bold; }\n  .is-loading ::ng-deep .mat-option-text {\n  display: flex;\n  justify-content: center; }\n  .form-fields {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px; }\n  .results-content {\n  display: flex; }\n  .results-container {\n  width: 850px;\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  padding: 30px;\n  transition: 1s linear; }\n  .options-container {\n  display: flex; }\n  .search-by-container {\n  margin-left: 15px;\n  margin-right: 10px; }\n  .search-by-title {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54); }\n  .search-by-button {\n  font-size: 14px;\n  height: 28px;\n  align-items: center; }\n  .outbound-date {\n  margin-right: 15px; }\n  .dates-container {\n  width: 350px; }\n  .days-off-display {\n  width: 75px; }\n  .mat-button-toggle-checked {\n  background-color: #00b8d44a; }\n  .dates-container > div {\n  display: flex;\n  justify-content: center; }\n  .filters-display, .space-div {\n  width: 181px;\n  margin: 0 10px; }\n  .mat-slider-track-fill {\n  background-color: #b0b0b0 !important; }\n  .slider-display {\n  width: 300px; }\n  .slider-display .mat-slider-thumb {\n  box-shadow: 0 0 15px #ad1457;\n  background-color: #ad1457 !important;\n  border-color: #ad1457 !important; }\n  .slider-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ad1457;\n  font-weight: bold; }\n  .autocomplete-place-name {\n  line-height: normal;\n  white-space: normal;\n  font-weight: bold;\n  font-size: 14px; }\n  .autocomplete-country-name {\n  line-height: normal;\n  font-size: 14px;\n  color: gray; }\n  .autocomplete-option {\n  height: 55px; }\n  .filter-expander {\n  margin-bottom: 10px; }\n  .price-slider-display {\n  width: 160px;\n  left: -8px; }\n  .checkbox-container {\n  display: -ms-grid;\n  display: grid; }\n  .checkbox-hours {\n  font-size: 10px;\n  color: gray; }\n  .example-tooltip-red {\n  background: #b71c1c; }\n"

/***/ }),

/***/ "./src/app/searchFlights/searchFlights.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/searchFlights/searchFlights.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchFlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFlightsComponent", function() { return SearchFlightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _Utils_smartFlightsFilter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/smartFlightsFilter.service */ "./src/app/Utils/smartFlightsFilter.service.ts");
/* harmony import */ var _interfaces_QualityParam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interfaces/QualityParam */ "./src/app/interfaces/QualityParam.ts");
/* harmony import */ var _enums_searchState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/searchState */ "./src/app/enums/searchState.ts");
/* harmony import */ var _Utils_dataDisplay_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Utils/dataDisplay.service */ "./src/app/Utils/dataDisplay.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _daysOffDialog_daysOffDialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../daysOffDialog/daysOffDialog.component */ "./src/app/daysOffDialog/daysOffDialog.component.ts");
/* harmony import */ var _Utils_filterTrips_Service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Utils/filterTrips.Service */ "./src/app/Utils/filterTrips.Service.ts");
/* harmony import */ var _Utils_daysOffUtils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Utils/daysOffUtils.service */ "./src/app/Utils/daysOffUtils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var SearchFlightsComponent = /** @class */ (function () {
    function SearchFlightsComponent(http, baseUrl, smartFlightsFilterService, dataDisplayService, dialog, filterTripsService, daysOffUtilsService) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.smartFlightsFilterService = smartFlightsFilterService;
        this.dataDisplayService = dataDisplayService;
        this.dialog = dialog;
        this.filterTripsService = filterTripsService;
        this.daysOffUtilsService = daysOffUtilsService;
        this.loadingProgress = 0;
        this.loadingMessage = 'Searching for flights...';
        this.searchStatesEnum = _enums_searchState__WEBPACK_IMPORTED_MODULE_7__["searchState"];
        this.currentSearchState = _enums_searchState__WEBPACK_IMPORTED_MODULE_7__["searchState"].empty;
        this.minAutocompliteLength = 2;
        this.whereTo = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.tripType = 'roundTrip';
        this.whereFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.searchByDates = 'Dates';
        this.searchByDaysOff = 'DaysOff';
        this.datesToggleValue = this.searchByDates;
        this.isLoadingFromOptions = false;
        this.isLoadingToOptions = false;
        this.serverResult = [];
        this.qualityParams = [
            { paramType: _interfaces_QualityParam__WEBPACK_IMPORTED_MODULE_6__["ParamTypes"].price, paramImportancePrecent: 40 },
            { paramType: _interfaces_QualityParam__WEBPACK_IMPORTED_MODULE_6__["ParamTypes"].totalTripLength, paramImportancePrecent: 40 },
            { paramType: _interfaces_QualityParam__WEBPACK_IMPORTED_MODULE_6__["ParamTypes"].numberOfStops, paramImportancePrecent: 20 }
        ];
        this.minSliderValue = 10;
        this.maxSliderValue = 70;
        this.sliderValue = (this.maxSliderValue + this.minSliderValue) / 2;
        this.numberOfPassengersOptions = [1, 2, 3, 4, 5, 6, 7, 8];
        this.numberOfPassengers = 2;
        this.numberOfDaysOffOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.numberOfDaysOff = 4;
        this.daysOff = [
            { name: _Utils_daysOffUtils_service__WEBPACK_IMPORTED_MODULE_12__["weekDay"].sunday, isFreeDay: false },
            { name: _Utils_daysOffUtils_service__WEBPACK_IMPORTED_MODULE_12__["weekDay"].monday, isFreeDay: false },
            { name: _Utils_daysOffUtils_service__WEBPACK_IMPORTED_MODULE_12__["weekDay"].tuesday, isFreeDay: false },
            { name: _Utils_daysOffUtils_service__WEBPACK_IMPORTED_MODULE_12__["weekDay"].wednesday, isFreeDay: false },
            { name: _Utils_daysOffUtils_service__WEBPACK_IMPORTED_MODULE_12__["weekDay"].thursday, isFreeDay: false },
            { name: _Utils_daysOffUtils_service__WEBPACK_IMPORTED_MODULE_12__["weekDay"].friday, isFreeDay: true },
            { name: _Utils_daysOffUtils_service__WEBPACK_IMPORTED_MODULE_12__["weekDay"].saturday, isFreeDay: true },
        ];
        this.filterParams = {
            maxPrice: undefined,
            flightTime: {
                inbound: { morning: true, afternoon: true, evening: true, night: true },
                outbound: { morning: true, afternoon: true, evening: true, night: true }
            },
            numOfStops: { zero: true, one: true, two: false, threeAndMore: false }
        };
        this.minPriceSliderValue = 0;
        this.maxPriceSliderValue = 3000;
        this.initializeDates();
        this.subscribeToWhereFromField();
        this.subscribeToWhereToField();
    }
    SearchFlightsComponent.prototype.initializeDates = function () {
        this.minDate = new Date();
        this.maxDate = new Date(this.minDate.getFullYear() + 1, this.minDate.getMonth(), this.minDate.getDate());
        this.defultDepartureDate = new Date();
        this.defultDepartureDate.setHours(0, 0, 0, 0);
        this.departureDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defultDepartureDate);
        var returnDate = new Date();
        returnDate.setDate(returnDate.getDate() + 1);
        this.returnDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](returnDate);
        var returnDateForRange = new Date();
        returnDateForRange.setDate(returnDate.getDate() + 7);
        this.daysOffDateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ begin: new Date(), end: returnDateForRange });
    };
    SearchFlightsComponent.prototype.subscribeToWhereFromField = function () {
        var _this = this;
        var fromLoadingRequestNumber = 0;
        var fromFinishedRequestNumber = 0;
        this.whereFrom.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            fromLoadingRequestNumber++;
            _this.isLoadingFromOptions = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (val) {
            return _this.getFlightPlacesFromServer(val || '')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                fromFinishedRequestNumber++;
                if (fromFinishedRequestNumber === fromFinishedRequestNumber) {
                    _this.isLoadingFromOptions = false;
                }
            }));
        })).subscribe(function (result) { return _this.fromOptions = result; });
    };
    SearchFlightsComponent.prototype.subscribeToWhereToField = function () {
        var _this = this;
        var toLoadingRequestNumber = 0;
        var toFinishedRequestNumber = 0;
        this.whereTo.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            toLoadingRequestNumber++;
            _this.isLoadingToOptions = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (val) {
            return _this.getFlightPlacesFromServer(val || '')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                toFinishedRequestNumber++;
                if (toFinishedRequestNumber === toLoadingRequestNumber) {
                    _this.isLoadingToOptions = false;
                }
            }));
        })).subscribe(function (re) { _this.toOptions = re; });
    };
    SearchFlightsComponent.prototype.getFlightPlacesFromServer = function (val) {
        if (val && val.length >= this.minAutocompliteLength) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('query', val);
            return this.http.get(this.baseUrl + 'api/SkyScanner/GetPlaces', { params: params });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
    };
    SearchFlightsComponent.prototype.onSearch = function () {
        var _this = this;
        this.resetResults();
        this.setCurrentState(_enums_searchState__WEBPACK_IMPORTED_MODULE_7__["searchState"].loading);
        this.manageLoadingValue();
        if (this.datesToggleValue === this.searchByDaysOff) {
            var searchDates = this.daysOffUtilsService.getDatesToSerach(this.daysOffDateRange.value, this.numberOfDaysOff, this.daysOff);
            var observables_1 = [];
            searchDates.forEach(function (dateRange) {
                observables_1.push(_this.requestFromServer(dateRange.begin, dateRange.end));
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(observables_1).subscribe(function (results) {
                results.forEach(function (tripOptions) {
                    (_a = _this.serverResult).push.apply(_a, tripOptions);
                    var _a;
                });
                _this.allTripOptions = _this.smartFlightsFilterService.getBestTripsResults(_this.serverResult, _this.qualityParams);
                if (_this.allTripOptions.length === 0) {
                    _this.setCurrentState(_enums_searchState__WEBPACK_IMPORTED_MODULE_7__["searchState"].noResults);
                    return;
                }
                _this.filteredTripOptions = _this.filterTripsService.getFilteredTrips(_this.allTripOptions, _this.filterParams);
                _this.setCurrentState(_enums_searchState__WEBPACK_IMPORTED_MODULE_7__["searchState"].succsses);
            }, function (error) { return _this.onError(error); });
        }
        else {
            this.requestFromServer(this.departureDate.value, this.returnDate.value).subscribe(function (tripOptions) {
                _this.serverResult = tripOptions;
                _this.allTripOptions = _this.smartFlightsFilterService.getBestTripsResults(_this.serverResult, _this.qualityParams);
                if (_this.allTripOptions.length === 0) {
                    _this.setCurrentState(_enums_searchState__WEBPACK_IMPORTED_MODULE_7__["searchState"].noResults);
                    return;
                }
                _this.filteredTripOptions = _this.filterTripsService.getFilteredTrips(_this.allTripOptions, _this.filterParams);
                _this.setCurrentState(_enums_searchState__WEBPACK_IMPORTED_MODULE_7__["searchState"].succsses);
            }, function (error) { return _this.onError(error); });
        }
    };
    SearchFlightsComponent.prototype.requestFromServer = function (departureDate, returnDate) {
        if (departureDate === this.addHoursToDate(this.defultDepartureDate, 3)) {
            departureDate = new Date();
        }
        departureDate = this.addHoursToDate(departureDate, 3);
        returnDate = this.addHoursToDate(returnDate, 3);
        var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .append('outboundDate', departureDate ? departureDate.toISOString() : null)
            .append('inboundDate', returnDate ? returnDate.toISOString() : null)
            .append('originPlace', JSON.stringify(this.whereFrom.value))
            .append('destinationPlace', JSON.stringify(this.whereTo.value))
            .append('people', this.numberOfPassengers.toString())
            .append('oneWay', this.isOneWay().toString());
        return this.http.post(this.baseUrl + 'api/SkyScanner/flights', param);
    };
    SearchFlightsComponent.prototype.onError = function (error) {
        this.setCurrentState(_enums_searchState__WEBPACK_IMPORTED_MODULE_7__["searchState"].error);
        this.resetResults();
        console.error(error);
    };
    SearchFlightsComponent.prototype.resetResults = function () {
        this.serverResult = [];
        this.allTripOptions = [];
        this.filteredTripOptions = [];
    };
    SearchFlightsComponent.prototype.onSliderInputChange = function (value) {
        this.qualityParams.find(function (param) { return param.paramType === _interfaces_QualityParam__WEBPACK_IMPORTED_MODULE_6__["ParamTypes"].price; })
            .paramImportancePrecent = value;
        this.qualityParams.find(function (param) { return param.paramType === _interfaces_QualityParam__WEBPACK_IMPORTED_MODULE_6__["ParamTypes"].totalTripLength; })
            .paramImportancePrecent = (this.maxSliderValue + this.minSliderValue) - value;
        this.allTripOptions = this.smartFlightsFilterService.getBestTripsResults(this.serverResult, this.qualityParams);
        this.filteredTripOptions = this.filterTripsService.getFilteredTrips(this.allTripOptions, this.filterParams);
    };
    SearchFlightsComponent.prototype.isOneWay = function () {
        return this.tripType === 'oneWay';
    };
    SearchFlightsComponent.prototype.swapDestinations = function () {
        var dest = this.whereFrom.value;
        this.whereFrom.setValue(this.whereTo.value);
        this.whereTo.setValue(dest);
    };
    SearchFlightsComponent.prototype.onDatesToggleValueChange = function (val) {
        this.datesToggleValue = val;
    };
    SearchFlightsComponent.prototype.manageLoadingValue = function () {
        var _this = this;
        this.loadingProgress = 2;
        var tid = setInterval(function () {
            if (_this.currentSearchState === _enums_searchState__WEBPACK_IMPORTED_MODULE_7__["searchState"].loading &&
                _this.loadingProgress < 90) {
                _this.loadingProgress += 2;
            }
            else {
                clearInterval(tid);
            }
        }, 500);
    };
    SearchFlightsComponent.prototype.setCurrentState = function (state) {
        var _this = this;
        if (this.currentSearchState === _enums_searchState__WEBPACK_IMPORTED_MODULE_7__["searchState"].loading) {
            this.loadingProgress = 100;
            setTimeout(function () {
                _this.currentSearchState = state;
                _this.loadingProgress = 0;
            }, 500);
        }
        else {
            this.currentSearchState = state;
        }
    };
    SearchFlightsComponent.prototype.openDaysOffDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_daysOffDialog_daysOffDialog_component__WEBPACK_IMPORTED_MODULE_10__["DaysOffDialogComponent"], {
            width: '350px',
            data: this.daysOff
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.daysOff = result;
            }
        });
    };
    SearchFlightsComponent.prototype.onPriceSliderInputChange = function (value) {
        this.priceSliderValue = value;
        this.filterParams.maxPrice = this.priceSliderValue;
        this.filteredTripOptions = this.filterTripsService.getFilteredTrips(this.allTripOptions, this.filterParams);
    };
    SearchFlightsComponent.prototype.onPriceInputLiveChange = function (event) {
        this.priceSliderValue = event.value;
    };
    SearchFlightsComponent.prototype.resetPriceSlider = function () {
        this.priceSliderValue = undefined;
        this.filterParams.maxPrice = this.priceSliderValue;
        this.filteredTripOptions = this.filterTripsService.getFilteredTrips(this.allTripOptions, this.filterParams);
    };
    SearchFlightsComponent.prototype.onCheckboxChanged = function () {
        this.filteredTripOptions = this.filterTripsService.getFilteredTrips(this.allTripOptions, this.filterParams);
    };
    SearchFlightsComponent.prototype.resetStopsCheckboxs = function () {
        this.filterParams.numOfStops = { zero: true, one: true, two: false, threeAndMore: false };
        this.onCheckboxChanged();
    };
    SearchFlightsComponent.prototype.resetOutboundTimesCheckboxs = function () {
        this.filterParams.flightTime.outbound = { morning: true, afternoon: true, evening: true, night: true };
        this.onCheckboxChanged();
    };
    SearchFlightsComponent.prototype.resetInboundTimesCheckboxs = function () {
        this.filterParams.flightTime.inbound = { morning: true, afternoon: true, evening: true, night: true };
        this.onCheckboxChanged();
    };
    SearchFlightsComponent.prototype.addHoursToDate = function (date, hours) {
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        return date;
    };
    SearchFlightsComponent.prototype.disableSearch = function () {
        return (this.currentSearchState === _enums_searchState__WEBPACK_IMPORTED_MODULE_7__["searchState"].loading) || !this.isWhereFromValid()
            || !this.isWhereToValid() || !this.isDatesValid() || !this.isPlacesValid();
    };
    SearchFlightsComponent.prototype.showErrorTooltip = function () {
        return this.isWhereFromValid() && this.isWhereToValid() && this.isDatesValid() && this.isPlacesValid();
    };
    SearchFlightsComponent.prototype.isWhereFromValid = function () {
        return !this.whereFrom.value || (this.whereFrom.value && this.whereFrom.value.placeId);
    };
    SearchFlightsComponent.prototype.isWhereToValid = function () {
        return !this.whereTo.value || (this.whereTo.value && this.whereTo.value.placeId);
    };
    SearchFlightsComponent.prototype.isDatesValid = function () {
        if ((this.datesToggleValue === this.searchByDates) && this.departureDate.value && this.returnDate.value) {
            return (this.departureDate.value <= this.returnDate.value);
        }
        else {
            return true;
        }
    };
    SearchFlightsComponent.prototype.isPlacesValid = function () {
        return !(this.whereFrom.value && this.whereTo.value && (this.whereFrom.value.placeId === this.whereTo.value.placeId));
    };
    SearchFlightsComponent.prototype.getTooltipMessage = function () {
        if (!this.isWhereFromValid() || !this.isWhereToValid()) {
            return 'Please choose existing locations';
        }
        if (!this.isPlacesValid()) {
            return 'The departure and arrivle locations must be different';
        }
        if (!this.isDatesValid()) {
            return 'Return date must be after departure date';
        }
        return 'form not valid';
    };
    SearchFlightsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-flights',
            template: __webpack_require__(/*! ./searchFlights.component.html */ "./src/app/searchFlights/searchFlights.component.html"),
            styles: [__webpack_require__(/*! ./searchFlights.component.scss */ "./src/app/searchFlights/searchFlights.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _Utils_smartFlightsFilter_service__WEBPACK_IMPORTED_MODULE_5__["SmartFlightsFilterService"],
            _Utils_dataDisplay_service__WEBPACK_IMPORTED_MODULE_8__["DataDisplayService"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _Utils_filterTrips_Service__WEBPACK_IMPORTED_MODULE_11__["FilterTripsService"], _Utils_daysOffUtils_service__WEBPACK_IMPORTED_MODULE_12__["DaysOffUtilsService"]])
    ], SearchFlightsComponent);
    return SearchFlightsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\אביב\Source\Repos\FlightsFinder\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map