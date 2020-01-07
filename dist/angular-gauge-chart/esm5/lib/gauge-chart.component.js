/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular 2 decorators and services
 */
import { Component, Input, ViewChild, } from '@angular/core';
import * as GaugeChart from 'gauge-chart';
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
        this.canvasHeight += 10;
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
        this.gaugeChart = GaugeChart.gaugeChart(this.element, this.canvasWidth, this.options);
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
export { GaugeChartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1nYXVnZS1jaGFydC8iLCJzb3VyY2VzIjpbImxpYi9nYXVnZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQTtBQUN0QixPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsQ0FBQTs7OztBQUt6QztJQUFBO0lBK0dBLENBQUM7Ozs7SUFuRkMsc0NBQVE7OztJQUFSO1FBQ0UsNENBQTRDO1FBQzVDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUE7YUFDdkQ7WUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQTtTQUN0RDtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFBO2FBQzlEO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFBO2FBQ3BEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENB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QUNELElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUE7WUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNyQjtJQUNILENBQUM7O2dCQTlHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsMmVBQTJDOztpQkFFNUM7Ozs0QkFFRSxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFFdkMsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7cUNBQ0wsS0FBSztrQ0FDTCxLQUFLOzBDQUNMLEtBQUs7O0lBNEZSLDBCQUFDO0NBQUEsQUEvR0QsSUErR0M7U0ExR1ksbUJBQW1COzs7SUFDOUIsd0NBQW1EOztJQUVuRCwwQ0FBNEI7O0lBQzVCLDJDQUE2Qjs7SUFDN0IsMENBQTRCOztJQUM1QiwyQ0FBNkI7O0lBQzdCLHNDQUFnQjs7SUFDaEIsMENBQXFCOztJQUNyQixtQ0FBc0I7O0lBQ3RCLHVDQUEwQjs7SUFDMUIsMENBQTZCOztJQUM3QixpREFBb0M7O0lBQ3BDLDhDQUFpQzs7SUFDakMsc0RBQXlDOztJQUV6Qyx5Q0FBeUI7O0lBQ3pCLGdEQUFnQzs7Ozs7SUFFaEMsc0NBQWU7Ozs7O0lBQ2YseUNBQXVCOzs7OztJQUN2Qix5Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFuZ3VsYXIgMiBkZWNvcmF0b3JzIGFuZCBzZXJ2aWNlc1xuICovXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBEb0NoZWNrLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0ICogYXMgR2F1Z2VDaGFydCBmcm9tICdnYXVnZS1jaGFydCdcblxuLyoqXG4gKiBHYXVnZUNoYXJ0IENvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaXJjdWxhci1nYXVnZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nYXVnZS1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dhdWdlLWNoYXJ0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR2F1Z2VDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcbiAgQFZpZXdDaGlsZCgnZ2F1Z2VBcmVhJywgeyBzdGF0aWM6IHRydWUgfSkgZ2F1Z2VBcmVhXG5cbiAgQElucHV0KCkgY2FudmFzV2lkdGg6IG51bWJlclxuICBASW5wdXQoKSBjYW52YXNIZWlnaHQ6IG51bWJlclxuICBASW5wdXQoKSBuZWVkbGVWYWx1ZTogbnVtYmVyXG4gIEBJbnB1dCgpIGNlbnRyYWxMYWJlbDogc3RyaW5nXG4gIEBJbnB1dCgpIG9wdGlvbnNcbiAgQElucHV0KCkgd3JhcE9wdGlvbnM/XG4gIEBJbnB1dCgpIG5hbWU/OiBzdHJpbmdcbiAgQElucHV0KCkgbmFtZUZvbnQ/OiBzdHJpbmdcbiAgQElucHV0KCkgYm90dG9tTGFiZWw/OiBzdHJpbmdcbiAgQElucHV0KCkgY3VzdG9tRGlzcGxheUxhYmVsPzogc3RyaW5nXG4gIEBJbnB1dCgpIGJvdHRvbUxhYmVsRm9udD86IHN0cmluZ1xuICBASW5wdXQoKSBjdXN0b21Cb3R0b21MYWJlbE1hcmdpbj86IHN0cmluZ1xuXG4gIHB1YmxpYyBuYW1lTWFyZ2luOiBzdHJpbmdcbiAgcHVibGljIGJvdHRvbUxhYmVsTWFyZ2luOiBzdHJpbmdcblxuICBwcml2YXRlIGVsZW1lbnRcbiAgcHJpdmF0ZSBnYXVnZUNoYXJ0OiBhbnlcbiAgcHJpdmF0ZSBvbGRPcHRpb25zXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY2FsY3VsYXRlIHN0eWxlcyBmb3IgbmFtZSBhbmQgYm90dG9tTGFiZWxcbiAgICBpZiAodGhpcy5uYW1lKSB7XG4gICAgICBpZiAoIXRoaXMubmFtZUZvbnQpIHtcbiAgICAgICAgdGhpcy5uYW1lRm9udCA9ICcnICsgTWF0aC5yb3VuZCh0aGlzLmNhbnZhc1dpZHRoIC8gMTUpXG4gICAgICB9XG4gICAgICB0aGlzLm5hbWVNYXJnaW4gPSAnJyArIE1hdGgucm91bmQoK3RoaXMubmFtZUZvbnQgLyA0KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdHRvbUxhYmVsKSB7XG4gICAgICBpZiAoIXRoaXMuYm90dG9tTGFiZWxGb250KSB7XG4gICAgICAgIHRoaXMuYm90dG9tTGFiZWxGb250ID0gJycgKyBNYXRoLnJvdW5kKHRoaXMuY2FudmFzV2lkdGggLyAxMClcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jdXN0b21Cb3R0b21MYWJlbE1hcmdpbikge1xuICAgICAgICB0aGlzLmJvdHRvbUxhYmVsTWFyZ2luID0gJy0nICsgdGhpcy5ib3R0b21MYWJlbEZvbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYm90dG9tTGFiZWxNYXJnaW4gPSB0aGlzLmN1c3RvbUJvdHRvbUxhYmVsTWFyZ2luXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY3VzdG9tRGlzcGxheUxhYmVsKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tRGlzcGxheUxhYmVsID0gJ2Jsb2NrJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnNDaGVjaygpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmdhdWdlQXJlYS5uYXRpdmVFbGVtZW50XG4gICAgICB0aGlzLmRyYXdDaGFydCgpXG4gICAgfVxuICAgIHRoaXMub2xkT3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSlcbiAgfVxuXG4gIG9wdGlvbnNDaGVjaygpIHtcbiAgICBpZiAodGhpcy5jYW52YXNXaWR0aCA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2dhdWdlLWNoYXJ0IHdhcm5pbmc6IGNhbnZhc1dpZHRoIGlzIG5vdCBzcGVjaWZpZWQhJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAodGhpcy5jYW52YXNIZWlnaHQgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKCdnYXVnZS1jaGFydCB3YXJuaW5nOiBjYW52YXNXaWR0aCBpcyBub3Qgc3BlY2lmaWVkIScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVlZGxlVmFsdWUgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKCdnYXVnZS1jaGFydCB3YXJuaW5nOiBuZWVkbGVWYWx1ZSBpcyBub3Qgc3BlY2lmaWVkIScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKHRoaXMuY2VudHJhbExhYmVsID09IG51bGwpIHtcbiAgICAgIHRoaXMuY2VudHJhbExhYmVsID0gJydcbiAgICB9XG4gICAgdGhpcy5jYW52YXNIZWlnaHQgKz0gMTBcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICghdGhpcy5hcmVFcXVhbCh0aGlzLm9wdGlvbnMsIHRoaXMub2xkT3B0aW9ucykpIHtcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KHRydWUpXG4gICAgICB0aGlzLm9sZE9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMub3B0aW9ucykpXG4gICAgfVxuICB9XG5cbiAgYXJlRXF1YWwob2JqMSwgb2JqMikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmoxKSA9PT0gSlNPTi5zdHJpbmdpZnkob2JqMilcbiAgfVxuXG4gIGRyYXdDaGFydChyZWRyYXcgPSBmYWxzZSkge1xuICAgIGlmIChyZWRyYXcpIHtcbiAgICAgIHRoaXMuZ2F1Z2VDaGFydC5yZW1vdmVHYXVnZSgpXG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5jZW50cmFsTGFiZWwgPSB0aGlzLmNlbnRyYWxMYWJlbFxuICAgIHRoaXMuZ2F1Z2VDaGFydCA9IEdhdWdlQ2hhcnQuZ2F1Z2VDaGFydChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMuY2FudmFzV2lkdGgsXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgKVxuICAgIHRoaXMuZ2F1Z2VDaGFydC51cGRhdGVOZWVkbGUodGhpcy5uZWVkbGVWYWx1ZSlcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5uZWVkbGVWYWx1ZSAmJiAhY2hhbmdlcy5uZWVkbGVWYWx1ZS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5uZWVkbGVWYWx1ZSA9IGNoYW5nZXMubmVlZGxlVmFsdWUuY3VycmVudFZhbHVlXG4gICAgICB0aGlzLmdhdWdlQ2hhcnQudXBkYXRlTmVlZGxlKHRoaXMubmVlZGxlVmFsdWUpXG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmNlbnRyYWxMYWJlbCAmJiAhY2hhbmdlcy5jZW50cmFsTGFiZWwuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuY2VudHJhbExhYmVsID0gY2hhbmdlcy5jZW50cmFsTGFiZWwuY3VycmVudFZhbHVlXG4gICAgICB0aGlzLmRyYXdDaGFydCh0cnVlKVxuICAgIH1cbiAgfVxufVxuIl19