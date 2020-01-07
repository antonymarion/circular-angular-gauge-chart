import { Component, ViewChild, Input, NgModule } from '@angular/core';
import { gaugeChart } from 'gauge-chart';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * GaugeChart Component
 */
var GaugeChartComponent = /** @class */ (function () {
    function GaugeChartComponent() {
    }
    /**
     * @return {?}
     */
    GaugeChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    /**
     * @return {?}
     */
    GaugeChartComponent.prototype.optionsCheck = /**
     * @return {?}
     */
    function () {
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
        return true;
    };
    /**
     * @return {?}
     */
    GaugeChartComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (!this.areEqual(this.options, this.oldOptions)) {
            this.drawChart(true);
            this.oldOptions = JSON.parse(JSON.stringify(this.options));
        }
    };
    /**
     * @param {?} obj1
     * @param {?} obj2
     * @return {?}
     */
    GaugeChartComponent.prototype.areEqual = /**
     * @param {?} obj1
     * @param {?} obj2
     * @return {?}
     */
    function (obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    };
    /**
     * @param {?=} redraw
     * @return {?}
     */
    GaugeChartComponent.prototype.drawChart = /**
     * @param {?=} redraw
     * @return {?}
     */
    function (redraw) {
        if (redraw === void 0) { redraw = false; }
        if (redraw) {
            this.gaugeChart.removeGauge();
        }
        this.options.centralLabel = this.centralLabel;
        this.gaugeChart = gaugeChart(this.element, this.canvasWidth, this.options);
        this.gaugeChart.updateNeedle(this.needleValue);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GaugeChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.needleValue && !changes.needleValue.firstChange) {
            this.needleValue = changes.needleValue.currentValue;
            this.gaugeChart.updateNeedle(this.needleValue);
        }
        if (changes.centralLabel && !changes.centralLabel.firstChange) {
            this.centralLabel = changes.centralLabel.currentValue;
            this.drawChart(true);
        }
    };
    GaugeChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'circular-gauge-chart',
                    template: "<div class=\"gauge-chart\"\n     [style.width.px]=\"canvasWidth\"\n     [style.height.px]=\"canvasHeight\"\n>\n  <span\n    [style.font-size.px]=\"nameFont\"\n    [style.margin-bottom.px]=\"nameMargin\">\n    {{name}}\n  </span>\n  <div #gaugeArea></div>\n  <span\n    class=\"gauge-chart__label\"\n    [style.display]=\"customDisplayLabel\"\n    [style.font-size.px]=\"bottomLabelFont\"\n    [style.margin-top.px]=\"bottomLabelMargin\">\n    {{bottomLabel}}\n  </span>\n</div>\n",
                    styles: ["*{font-family:Roboto,'Helvetica Neue',sans-serif}.gauge-chart{display:flex;flex-direction:column;text-align:center}.gauge-chart__label{font-weight:700}"]
                }] }
    ];
    GaugeChartComponent.propDecorators = {
        gaugeArea: [{ type: ViewChild, args: ['gaugeArea', { static: true },] }],
        canvasWidth: [{ type: Input }],
        canvasHeight: [{ type: Input }],
        needleValue: [{ type: Input }],
        centralLabel: [{ type: Input }],
        options: [{ type: Input }],
        wrapOptions: [{ type: Input }],
        name: [{ type: Input }],
        nameFont: [{ type: Input }],
        bottomLabel: [{ type: Input }],
        customDisplayLabel: [{ type: Input }],
        bottomLabelFont: [{ type: Input }],
        customBottomLabelMargin: [{ type: Input }]
    };
    return GaugeChartComponent;
}());
if (false) {
    /** @type {?} */
    GaugeChartComponent.prototype.gaugeArea;
    /** @type {?} */
    GaugeChartComponent.prototype.canvasWidth;
    /** @type {?} */
    GaugeChartComponent.prototype.canvasHeight;
    /** @type {?} */
    GaugeChartComponent.prototype.needleValue;
    /** @type {?} */
    GaugeChartComponent.prototype.centralLabel;
    /** @type {?} */
    GaugeChartComponent.prototype.options;
    /** @type {?} */
    GaugeChartComponent.prototype.wrapOptions;
    /** @type {?} */
    GaugeChartComponent.prototype.name;
    /** @type {?} */
    GaugeChartComponent.prototype.nameFont;
    /** @type {?} */
    GaugeChartComponent.prototype.bottomLabel;
    /** @type {?} */
    GaugeChartComponent.prototype.customDisplayLabel;
    /** @type {?} */
    GaugeChartComponent.prototype.bottomLabelFont;
    /** @type {?} */
    GaugeChartComponent.prototype.customBottomLabelMargin;
    /** @type {?} */
    GaugeChartComponent.prototype.nameMargin;
    /** @type {?} */
    GaugeChartComponent.prototype.bottomLabelMargin;
    /**
     * @type {?}
     * @private
     */
    GaugeChartComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    GaugeChartComponent.prototype.gaugeChart;
    /**
     * @type {?}
     * @private
     */
    GaugeChartComponent.prototype.oldOptions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GaugeChartModule = /** @class */ (function () {
    function GaugeChartModule() {
    }
    GaugeChartModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [GaugeChartComponent],
                    exports: [GaugeChartComponent],
                },] }
    ];
    return GaugeChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GaugeChartComponent, GaugeChartModule };
//# sourceMappingURL=angular-gauge-chart.js.map
