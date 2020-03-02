"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/**
 * Angular 2 decorators and services
 */
var core_1 = require("@angular/core");
var GaugeChart = require("gauge-chart");
/**
 * GaugeChart Component
 */
var GaugeChartComponent = /** @class */ (function () {
    function GaugeChartComponent() {
    }
    GaugeChartComponent.prototype.ngOnInit = function () {
        // calculate styles for name and bottomLabel
        if (this.name) {
            if (!this.nameFont) {
                this.nameFont = '' + Math.round(this.canvasWidth / 15);
            }
            this.nameMargin = '' + Math.round(+this.nameFont / 4);
        }
        if (this.bottomLabel) {
            if (!this.bottomLabelFont) {
                this.bottomLabelFont = '' + Math.round(this.canvasWidth / 10);
            }
            if (!this.customBottomLabelMargin) {
                this.bottomLabelMargin = '-' + this.bottomLabelFont;
            }
            else {
                this.bottomLabelMargin = this.customBottomLabelMargin;
            }
            if (!this.customDisplayLabel) {
                this.customDisplayLabel = 'block';
            }
        }
        if (this.optionsCheck()) {
            this.element = this.gaugeArea.nativeElement;
            this.drawChart();
        }
        this.oldOptions = JSON.parse(JSON.stringify(this.options));
    };
    GaugeChartComponent.prototype.optionsCheck = function () {
        if (this.canvasWidth == null) {
            console.warn('gauge-chart warning: canvasWidth is not specified!');
            return false;
        }
        if (this.canvasHeight == null) {
            console.warn('gauge-chart warning: canvasWidth is not specified!');
            return false;
        }
        else if (this.needleValue == null) {
            console.warn('gauge-chart warning: needleValue is not specified!');
            return false;
        }
        if (this.centralLabel == null) {
            this.centralLabel = '';
        }
        this.canvasHeight += 10;
        return true;
    };
    GaugeChartComponent.prototype.ngDoCheck = function () {
        if (!this.areEqual(this.options, this.oldOptions)) {
            this.drawChart(true);
            this.oldOptions = JSON.parse(JSON.stringify(this.options));
        }
    };
    GaugeChartComponent.prototype.areEqual = function (obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    };
    GaugeChartComponent.prototype.drawChart = function (redraw) {
        if (redraw === void 0) { redraw = false; }
        if (redraw) {
            this.gaugeChart.removeGauge();
        }
        this.options.centralLabel = this.centralLabel;
        this.gaugeChart = GaugeChart.gaugeChart(this.element, this.canvasWidth, this.options);
        if (this.needleValue === 100) {
            this.needleValue = 99;
        }
        if (this.needleValue === 0) {
            this.needleValue = 1;
        }
        this.gaugeChart.updateNeedle(this.needleValue);
    };
    GaugeChartComponent.prototype.ngOnChanges = function (changes) {
        if (changes.needleValue && !changes.needleValue.firstChange) {
            this.needleValue = changes.needleValue.currentValue;
            this.gaugeChart.updateNeedle(this.needleValue);
        }
        if (changes.centralLabel && !changes.centralLabel.firstChange) {
            this.centralLabel = changes.centralLabel.currentValue;
            this.drawChart(true);
        }
    };
    __decorate([
        core_1.ViewChild('gaugeArea', { static: true })
    ], GaugeChartComponent.prototype, "gaugeArea");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "canvasWidth");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "canvasHeight");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "needleValue");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "centralLabel");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "options");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "wrapOptions");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "name");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "nameFont");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "bottomLabel");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "customDisplayLabel");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "bottomLabelFont");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "customBottomLabelMargin");
    GaugeChartComponent = __decorate([
        core_1.Component({
            selector: 'circular-gauge-chart',
            templateUrl: './gauge-chart.component.html',
            styleUrls: ['./gauge-chart.component.css']
        })
    ], GaugeChartComponent);
    return GaugeChartComponent;
}());
exports.GaugeChartComponent = GaugeChartComponent;
