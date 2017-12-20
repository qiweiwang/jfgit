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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-drug></app-drug>\n"

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
        this.title = 'Bow of Hygieia';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nvd3__ = __webpack_require__("../../../../ng2-nvd3/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__drug_drug_component__ = __webpack_require__("../../../../../src/app/drug/drug.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fda_service__ = __webpack_require__("../../../../../src/app/fda.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_nvd3__ = __webpack_require__("../../../../nvd3/build/nv.d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_nvd3__);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__drug_drug_component__["a" /* DrugComponent */],
                __WEBPACK_IMPORTED_MODULE_8__modal_modal_component__["a" /* ModalComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_nvd3__["NvD3Module"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__fda_service__["a" /* FdaService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/drug/drug.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n    <div class=\"col-md-3 text-right\"><img src=\"assets/images/logo.png\" width=\"50\" height=\"50\"/></div>\n    <div class=\"col-md-4\">\n        <div class=\"input-group\" style=\"margin-top: 10px;\">\n            <input id=\"typeahead-basic\" type=\"text\" class=\"form-control\"\n            [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" placeholder=\"Type in Drug Name\"/>\n            <span class=\"input-group-btn\">\n                <button title=\"Search the drug\" alt=\"Search the drug\" class=\"btn\" (click)=\"getChart()\">\n                    <i class=\"icon-search pointer\"></i>Go</button>\n            </span>\n        </div>\n    </div>\n    <div class=\"col-md-1\" style=\"padding:15px;\">   <app-modal #modal></app-modal> </div>\n    <div class=\"col-md-4\" style=\"padding-left:15px;\">\n      <a href=\"http://www.fda.gov/Safety/MedWatch/\">\n         Report A Problem to<img src=\"https://www.accessdata.fda.gov/scripts/medwatch/images/mw_logo_ani_160px.gif\">\n       </a>\n     </div>\n</div>\n\n<div class='row' style='padding-top:50px;'>\n  <div class=\"col-md-1\"></div>\n  <div class=\"col-md-5\">\n        <div *ngIf=\"labelNotFound\">\n            <h3 style=\"text-align: center;\">{{labelNotFound}}</h3>\n        </div>\n        <div *ngIf=\"!labelNotFound && (openFdaLabel || drugLabel)\">\n          <h3 style=\"text-align: center;\"> Drug Labeling Information</h3>\n          <div *ngIf=\"openFdaLabel\">\n              <h4>Open FDA Drug Information</h4>\n              <dl class=\"dl-horizontal\" *ngFor=\"let oFLK of openFdaLabelKeys\" >\n                  <dt>{{oFLK}}</dt>\n                  <dd>{{formatLabel(openFdaLabel[oFLK])}}</dd>\n              </dl>\n          </div>\n          <div *ngIf=\"drugLabel\">\n              <h4 >Other Information</h4>\n              <dl class=\"dl-horizontal\" *ngFor=\"let dLK of drugLabelKeys\" >\n                  <dt>{{dLK}}</dt>\n                  <dd>{{formatLabel(drugLabel[dLK])}}</dd>\n              </dl>\n          </div>\n        </div>\n  </div>\n  <div class=\"col-md-6\" *ngIf=\"chartShow\" style=\"font-size: 70%;\" >\n    <h3>{{chartTitle}}</h3>\n    <nvd3 [options]=\"chartOptions\" [data]=\"chartData\" #nvd3chart></nvd3>\n  </div>\n</div>\n\n<!-- <hr>\n<pre>Model: {{ model | json }}</pre> -->\n\n\n\n<!-- {{drugList}} -->\n"

/***/ }),

/***/ "../../../../../src/app/drug/drug.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fda_service__ = __webpack_require__("../../../../../src/app/fda.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrugComponent = (function () {
    function DrugComponent(fdaService) {
        var _this = this;
        this.fdaService = fdaService;
        this.chartShow = 0;
        this.chartOptions = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 450,
                useInteractiveGuideline: false,
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showControls: false,
                showValues: true,
                transitionDuration: 1000,
                valueFormat: function (n) { return d3.format(',')(n); },
                showYAxis: false,
                tooltipContent: function (key, x, y, e, graph) { return '<center><span class="tooltipUpper">' + key + '</span><br>' + x + ': ' + y + '</center>'; },
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 50
                },
                xAxis: {
                    showMaxMin: false,
                },
                yAxis: {
                    axisLabel: 'Incident Count',
                    tickFormat: function (d) {
                        return d3.format(',')(d);
                    },
                    showMaxMin: false
                },
            }
        };
        this.chartData = [
            {
                "key": 'Serious Incidents',
                "color": "#d62728",
                "values": []
            },
            {
                "key": 'Not Serious Incidents',
                "color": "#1f77b4",
                "values": []
            }
        ];
        this.formatLabel = function (val) {
            var result;
            if (typeof val !== "object")
                return val;
            for (var i = 0; val.length && i < val.length; i++) {
                result = result ? result + ", " + val[i] : val[i];
            }
            return result ? result : val;
        };
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 1 ? []
                : _this.drugList.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 8); });
        };
    }
    DrugComponent.prototype.ngOnInit = function () {
        this.getDrugList();
    };
    DrugComponent.prototype.getDrugList = function () {
        var _this = this;
        this.fdaService.getDrugList()
            .subscribe(function (data) { return (_this.drugList = data.results.map(function (item) { return item.term.toLowerCase(); })); });
    };
    DrugComponent.prototype.getChart = function () {
        var _this = this;
        var maxTextLength = function (a, b) { return Math.max(a, b.label.length); };
        var chartValues1;
        var chartValues2;
        var chartHeight1;
        var chartHeight2;
        var drug = this.model.replace(' ', '+');
        this.fdaService.getChart1(drug).subscribe(function (data1) {
            var results = data1.results;
            console.log(results);
            var resultCount = results.length;
            chartHeight1 = resultCount * 50;
            chartValues1 = results.map(function (item) { return { "label": item.term.toLowerCase(), "value": Math.floor(item.count) }; });
            var maxEffectLength = chartValues1.reduce(maxTextLength, 0);
            _this.fdaService.getChart2(drug).subscribe(function (data2) {
                var results = data2.results;
                //                console.log(results);
                var resultCount = results.length;
                chartHeight2 = resultCount * 50;
                chartValues2 = results.map(function (item) { return { "label": item.term.toLowerCase(), "value": Math.floor(item.count) }; });
                maxEffectLength = chartValues2.reduce(maxTextLength, maxEffectLength);
                _this.chartData[0].values = chartValues1;
                //           $scope.chartData[0].key="Side Effect Count1";
                _this.chartData[1].values = chartValues2;
                //           $scope.chartData[1].key="Side Effect Count2";
                _this.chartOptions.chart.height = chartHeight1 + chartHeight2;
                _this.chartTitle = "Reported Side Effects Related to " + _this.model;
                if (!_this.chartShow)
                    _this.chartShow = _this.chartShow + 1;
            });
            maxEffectLength = Math.ceil(maxEffectLength * 4.7);
            if (maxEffectLength > 120)
                maxEffectLength = 120;
            //this.paddingForLabel=maxEffectLength;
            //var cD;
            //cD = this.chartData.slice();
            //this.chartData = cD;
            //this.chartOptions = Object.assign({}, this.chartOptions);
            // this.chartData = this.chartData.slice();
            // this.chartOptions = Object.assign({}, this.chartOptions);
            console.log(_this.chartData);
            _this.chartShow = 0;
        });
        ;
        this.fdaService.getLabel(drug).subscribe(function (labelData) {
            console.log(labelData);
            if (labelData.length == 0)
                _this.labelNotFound = "No labeling information is found for " + _this.model;
            else {
                var results = labelData.results[0];
                console.log(results);
                _this.openFdaLabel = results.openfda;
                _this.openFdaLabelKeys = Object.keys(_this.openFdaLabel);
                console.log("openfda");
                console.log(results.openfda);
                console.log("openfdakeys");
                console.log(_this.openFdaLabelKeys);
                delete results.openfda;
                //            delete results.set_id;
                //            delete results.id;
                //            delete results.effective_time;
                _this.drugLabel = results;
                _this.drugLabelKeys = Object.keys(_this.drugLabel);
                _this.labelNotFound = undefined;
            }
        });
    };
    DrugComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drug',
            template: __webpack_require__("../../../../../src/app/drug/drug.component.html"),
            styles: [__webpack_require__("../../../../nvd3/build/nv.d3.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fda_service__["a" /* FdaService */]])
    ], DrugComponent);
    return DrugComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fda.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FdaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FdaService = (function () {
    function FdaService(http) {
        this.http = http;
        this.drugEventUrl = 'https://api.fda.gov/drug/event.json';
        this.drugLabelUrl = 'https://api.fda.gov/drug/label.json';
    }
    FdaService.prototype.getDrugList = function () {
        return this.http.get(this.drugEventUrl + '?count=patient.drug.medicinalproduct.exact&limit=1000');
    };
    FdaService.prototype.getChart1 = function (drug) {
        var fdaUrl1 = this.drugEventUrl + '?search=patient.drug.medicinalproduct:"' + drug + '"+AND+serious:1&count=patient.reaction.reactionmeddrapt.exact';
        //var fdaUrl2=this.drugEventUrl+'?search=patient.drug.medicinalproduct:"'+drug+'"+AND+serious:2&count=patient.reaction.reactionmeddrapt.exact';
        return this.http.get(fdaUrl1);
    };
    FdaService.prototype.getChart2 = function (drug) {
        //var fdaUrl1=this.drugEventUrl+'?search=patient.drug.medicinalproduct:"'+drug+'"+AND+serious:1&count=patient.reaction.reactionmeddrapt.exact';
        var fdaUrl2 = this.drugEventUrl + '?search=patient.drug.medicinalproduct:"' + drug + '"+AND+serious:2&count=patient.reaction.reactionmeddrapt.exact';
        return this.http.get(fdaUrl2);
    };
    FdaService.prototype.getLabel = function (drug) {
        var labelUrl = this.drugLabelUrl + '?search=substance_name:"' + drug + '"';
        return this.http.get(labelUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError([])));
    };
    FdaService.prototype.handleError = function (result) {
        return function (error) { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result); };
    };
    FdaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FdaService);
    return FdaService;
}());



/***/ }),

/***/ "../../../../../src/app/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\">About the ADS Prototype App</h3>\n  </div>\n  <div class=\"modal-body\">\n    The web site is for a patient to search and match the drug side effects.\n    The patient can search drug based on the name, and find the detail information\n    of this drug from live FDA FEARS system.  If the result is found,\n    the site will display all side effect based on serious level.  If any symptom is\n    matched and found, the patient is able to submit his/her report from MedWatch.\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<div><a href ='#' (click)=\"open(content)\" >About</a></div>\n"

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
    }
    ModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__("../../../../../src/app/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], ModalComponent);
    return ModalComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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