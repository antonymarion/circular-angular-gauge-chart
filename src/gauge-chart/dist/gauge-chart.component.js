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
            this.bottomLabelMargin = '-' + this.bottomLabelFont;
        }
        if (this.optionsCheck()) {
            this.element = this.gaugeArea.nativeElement;
            this.options.centralLabel = this.centralLabel;
            // Drawing and updating the chart
            this.gaugeChart = GaugeChart.gaugeChart(this.element, this.canvasWidth, this.options);
            this.gaugeChart.updateNeedle(this.needleValue);
        }
    };
    GaugeChartComponent.prototype.optionsCheck = function () {
        if (this.canvasWidth == null) {
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
        return true;
    };
    GaugeChartComponent.prototype.ngOnChanges = function (changes) {
        if (changes.needleValue && !changes.needleValue.firstChange) {
            if (changes.needleValue.currentValue !== changes.needleValue.previousValue) {
                this.needleValue = changes.needleValue.currentValue;
                this.gaugeChart.removeGauge();
                this.bottomLabel = this.centralLabel = this.options.bottomLabel
                    = this.options.centralLabel = '' + this.needleValue + '/' + this.totalValue;
                this.gaugeChart = GaugeChart.gaugeChart(this.element, this.canvasWidth, this.options);
                this.options.arcDelimiters[0] = Math.floor(100 * this.needleValue / this.totalValue);
                this.gaugeChart.updateNeedle(this.needleValue);
            }
        }
        if (changes.centralLabel && !changes.centralLabel.firstChange) {
            if (changes.centralLabel.currentValue !== changes.centralLabel.previousValue) {
                this.gaugeChart.removeGauge();
                this.centralLabel = changes.centralLabel.currentValue;
                this.options.centralLabel = this.centralLabel;
                this.gaugeChart = GaugeChart.gaugeChart(this.element, this.canvasWidth, this.options);
                this.gaugeChart.updateNeedle(this.needleValue);
            }
        }
        if (changes.centralLabel && !changes.centralLabel.firstChange) {
            if (changes.bottomLabel.currentValue !== changes.bottomLabel.previousValue) {
                console.log(changes.bottomLabel.currentValue);
            }
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
    ], GaugeChartComponent.prototype, "needleValue");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "totalValue");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "centralLabel");
    __decorate([
        core_1.Input()
    ], GaugeChartComponent.prototype, "options");
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
    ], GaugeChartComponent.prototype, "bottomLabelFont");
    GaugeChartComponent = __decorate([
        core_1.Component({
            selector: 'gauge-chart',
            templateUrl: './gauge-chart.component.html',
            styleUrls: ['./gauge-chart.component.scss']
        })
    ], GaugeChartComponent);
    return GaugeChartComponent;
}());
exports.GaugeChartComponent = GaugeChartComponent;
