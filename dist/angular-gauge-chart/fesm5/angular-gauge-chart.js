import { __decorate, __metadata } from 'tslib';
import { ViewChild, Input, Component, NgModule } from '@angular/core';
import { gaugeChart } from 'gauge-chart';

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
        this.gaugeChart = gaugeChart(this.element, this.canvasWidth, this.options);
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
        ViewChild('gaugeArea', { static: true }),
        __metadata("design:type", Object)
    ], GaugeChartComponent.prototype, "gaugeArea", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], GaugeChartComponent.prototype, "canvasWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], GaugeChartComponent.prototype, "canvasHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], GaugeChartComponent.prototype, "needleValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GaugeChartComponent.prototype, "centralLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GaugeChartComponent.prototype, "options", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GaugeChartComponent.prototype, "wrapOptions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GaugeChartComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GaugeChartComponent.prototype, "nameFont", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GaugeChartComponent.prototype, "bottomLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GaugeChartComponent.prototype, "customDisplayLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GaugeChartComponent.prototype, "bottomLabelFont", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GaugeChartComponent.prototype, "customBottomLabelMargin", void 0);
    GaugeChartComponent = __decorate([
        Component({
            selector: 'circular-gauge-chart',
            template: "<div class=\"gauge-chart\"\n     [style.width.px]=\"canvasWidth\"\n     [style.height.px]=\"canvasHeight\"\n>\n  <span\n    [style.font-size.px]=\"nameFont\"\n    [style.margin-bottom.px]=\"nameMargin\">\n    {{name}}\n  </span>\n  <div #gaugeArea></div>\n  <span\n    class=\"gauge-chart__label\"\n    [style.display]=\"customDisplayLabel\"\n    [style.font-size.px]=\"bottomLabelFont\"\n    [style.margin-top.px]=\"bottomLabelMargin\">\n    {{bottomLabel}}\n  </span>\n</div>\n",
            styles: ["*{font-family:Roboto,'Helvetica Neue',sans-serif}.gauge-chart{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center}.gauge-chart__label{font-weight:700}"]
        })
    ], GaugeChartComponent);
    return GaugeChartComponent;
}());

var CircularGaugeChartModule = /** @class */ (function () {
    function CircularGaugeChartModule() {
    }
    CircularGaugeChartModule = __decorate([
        NgModule({
            imports: [],
            declarations: [GaugeChartComponent],
            exports: [GaugeChartComponent],
        })
    ], CircularGaugeChartModule);
    return CircularGaugeChartModule;
}());

/*
 * Public API Surface of gauge-chart
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CircularGaugeChartModule, GaugeChartComponent };
//# sourceMappingURL=angular-gauge-chart.js.map
