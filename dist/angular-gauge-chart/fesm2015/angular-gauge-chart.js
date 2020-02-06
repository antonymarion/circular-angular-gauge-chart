import { ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵɵstyleProp, ɵɵadvance, ɵɵtextInterpolate1, ɵsetClassMetadata, Component, ViewChild, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { gaugeChart } from 'gauge-chart';

/**
 * Angular 2 decorators and services
 */
const _c0 = ["gaugeArea"];
/**
 * GaugeChart Component
 */
class GaugeChartComponent {
    ngOnInit() {
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
    }
    optionsCheck() {
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
    }
    ngDoCheck() {
        if (!this.areEqual(this.options, this.oldOptions)) {
            this.drawChart(true);
            this.oldOptions = JSON.parse(JSON.stringify(this.options));
        }
    }
    areEqual(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    drawChart(redraw = false) {
        if (redraw) {
            this.gaugeChart.removeGauge();
        }
        this.options.centralLabel = this.centralLabel;
        this.gaugeChart = gaugeChart(this.element, this.canvasWidth, this.options);
        this.gaugeChart.updateNeedle(this.needleValue);
    }
    ngOnChanges(changes) {
        if (changes.needleValue && !changes.needleValue.firstChange) {
            this.needleValue = changes.needleValue.currentValue;
            this.gaugeChart.updateNeedle(this.needleValue);
        }
        if (changes.centralLabel && !changes.centralLabel.firstChange) {
            this.centralLabel = changes.centralLabel.currentValue;
            this.drawChart(true);
        }
    }
}
GaugeChartComponent.ɵfac = function GaugeChartComponent_Factory(t) { return new (t || GaugeChartComponent)(); };
GaugeChartComponent.ɵcmp = ɵɵdefineComponent({ type: GaugeChartComponent, selectors: [["circular-gauge-chart"]], viewQuery: function GaugeChartComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.gaugeArea = _t.first);
    } }, inputs: { canvasWidth: "canvasWidth", canvasHeight: "canvasHeight", needleValue: "needleValue", centralLabel: "centralLabel", options: "options", wrapOptions: "wrapOptions", name: "name", nameFont: "nameFont", bottomLabel: "bottomLabel", customDisplayLabel: "customDisplayLabel", bottomLabelFont: "bottomLabelFont", customBottomLabelMargin: "customBottomLabelMargin" }, features: [ɵɵNgOnChangesFeature()], decls: 7, vars: 16, consts: [[1, "gauge-chart"], ["gaugeArea", ""], [1, "gauge-chart__label"]], template: function GaugeChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "span");
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelement(3, "div", null, 1);
        ɵɵelementStart(5, "span", 2);
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleProp("width", ctx.canvasWidth, "px")("height", ctx.canvasHeight, "px");
        ɵɵadvance(1);
        ɵɵstyleProp("font-size", ctx.nameFont, "px")("margin-bottom", ctx.nameMargin, "px");
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.name, " ");
        ɵɵadvance(3);
        ɵɵstyleProp("display", ctx.customDisplayLabel)("font-size", ctx.bottomLabelFont, "px")("margin-top", ctx.bottomLabelMargin, "px");
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.bottomLabel, " ");
    } }, styles: ["*[_ngcontent-%COMP%]{font-family:Roboto,'Helvetica Neue',sans-serif}.gauge-chart[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center}.gauge-chart__label[_ngcontent-%COMP%]{font-weight:700}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GaugeChartComponent, [{
        type: Component,
        args: [{
                selector: 'circular-gauge-chart',
                templateUrl: './gauge-chart.component.html',
                styleUrls: ['./gauge-chart.component.css'],
            }]
    }], null, { gaugeArea: [{
            type: ViewChild,
            args: ['gaugeArea', { static: true }]
        }], canvasWidth: [{
            type: Input
        }], canvasHeight: [{
            type: Input
        }], needleValue: [{
            type: Input
        }], centralLabel: [{
            type: Input
        }], options: [{
            type: Input
        }], wrapOptions: [{
            type: Input
        }], name: [{
            type: Input
        }], nameFont: [{
            type: Input
        }], bottomLabel: [{
            type: Input
        }], customDisplayLabel: [{
            type: Input
        }], bottomLabelFont: [{
            type: Input
        }], customBottomLabelMargin: [{
            type: Input
        }] }); })();

class CircularGaugeChartModule {
}
CircularGaugeChartModule.ɵmod = ɵɵdefineNgModule({ type: CircularGaugeChartModule });
CircularGaugeChartModule.ɵinj = ɵɵdefineInjector({ factory: function CircularGaugeChartModule_Factory(t) { return new (t || CircularGaugeChartModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CircularGaugeChartModule, { declarations: [GaugeChartComponent], exports: [GaugeChartComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CircularGaugeChartModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [GaugeChartComponent],
                exports: [GaugeChartComponent],
            }]
    }], null, null); })();

/*
 * Public API Surface of gauge-chart
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CircularGaugeChartModule, GaugeChartComponent };
//# sourceMappingURL=angular-gauge-chart.js.map
