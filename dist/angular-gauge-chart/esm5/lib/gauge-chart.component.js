/**
 * Angular 2 decorators and services
 */
import { Component, Input, ViewChild, } from '@angular/core';
import * as GaugeChart from 'gauge-chart';
import * as i0 from "@angular/core";
var _c0 = ["gaugeArea"];
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
    GaugeChartComponent.ɵfac = function GaugeChartComponent_Factory(t) { return new (t || GaugeChartComponent)(); };
    GaugeChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GaugeChartComponent, selectors: [["circular-gauge-chart"]], viewQuery: function GaugeChartComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gaugeArea = _t.first);
        } }, inputs: { canvasWidth: "canvasWidth", canvasHeight: "canvasHeight", needleValue: "needleValue", centralLabel: "centralLabel", options: "options", wrapOptions: "wrapOptions", name: "name", nameFont: "nameFont", bottomLabel: "bottomLabel", customDisplayLabel: "customDisplayLabel", bottomLabelFont: "bottomLabelFont", customBottomLabelMargin: "customBottomLabelMargin" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 7, vars: 16, consts: [[1, "gauge-chart"], ["gaugeArea", ""], [1, "gauge-chart__label"]], template: function GaugeChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "div", null, 1);
            i0.ɵɵelementStart(5, "span", 2);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.canvasWidth, "px")("height", ctx.canvasHeight, "px");
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("font-size", ctx.nameFont, "px")("margin-bottom", ctx.nameMargin, "px");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.name, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵstyleProp("display", ctx.customDisplayLabel)("font-size", ctx.bottomLabelFont, "px")("margin-top", ctx.bottomLabelMargin, "px");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.bottomLabel, " ");
        } }, styles: ["*[_ngcontent-%COMP%]{font-family:Roboto,'Helvetica Neue',sans-serif}.gauge-chart[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center}.gauge-chart__label[_ngcontent-%COMP%]{font-weight:700}"] });
    return GaugeChartComponent;
}());
export { GaugeChartComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GaugeChartComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1nYXVnZS1jaGFydC8iLCJzb3VyY2VzIjpbImxpYi9nYXVnZS1jaGFydC5jb21wb25lbnQudHMiLCJsaWIvZ2F1Z2UtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUE7QUFDdEIsT0FBTyxLQUFLLFVBQVUsTUFBTSxhQUFhLENBQUE7OztBQUV6Qzs7R0FFRztBQUNIO0lBQUE7S0ErR0M7SUFuRkMsc0NBQVEsR0FBUjtRQUNFLDRDQUE0QztRQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFBO2FBQ3ZEO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDdEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQTthQUM5RDtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQTthQUNwRDtpQkFBTTtnQkFDTCxJQUFJ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L0M7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTtZQUM3RCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFBO1lBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDckI7SUFDSCxDQUFDOzBGQXpHVSxtQkFBbUI7NERBQW5CLG1CQUFtQjs7Ozs7O1lDckJoQyw4QkFJRTtZQUFBLDRCQUdFO1lBQUEsWUFDRjtZQUFBLGlCQUFPO1lBQ1AsK0JBQXNCO1lBQ3RCLCtCQUtFO1lBQUEsWUFDRjtZQUFBLGlCQUFPO1lBQ1QsaUJBQU07O1lBaEJELDhDQUE4QixrQ0FBQTtZQUkvQixlQUErQjtZQUEvQiwrQ0FBK0IsdUNBQUE7WUFFL0IsZUFDRjtZQURFLHlDQUNGO1lBSUUsZUFBb0M7WUFBcEMsaURBQW9DLHdDQUFBLDJDQUFBO1lBR3BDLGVBQ0Y7WUFERSxnREFDRjs7OEJEaEJGO0NBK0hDLEFBL0dELElBK0dDO1NBMUdZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7a0JBRUUsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFFdkMsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQW5ndWxhciAyIGRlY29yYXRvcnMgYW5kIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIERvQ2hlY2ssXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgKiBhcyBHYXVnZUNoYXJ0IGZyb20gJ2dhdWdlLWNoYXJ0J1xuXG4vKipcbiAqIEdhdWdlQ2hhcnQgQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NpcmN1bGFyLWdhdWdlLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhdWdlLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBHYXVnZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xuICBAVmlld0NoaWxkKCdnYXVnZUFyZWEnLCB7IHN0YXRpYzogdHJ1ZSB9KSBnYXVnZUFyZWFcblxuICBASW5wdXQoKSBjYW52YXNXaWR0aDogbnVtYmVyXG4gIEBJbnB1dCgpIGNhbnZhc0hlaWdodDogbnVtYmVyXG4gIEBJbnB1dCgpIG5lZWRsZVZhbHVlOiBudW1iZXJcbiAgQElucHV0KCkgY2VudHJhbExhYmVsOiBzdHJpbmdcbiAgQElucHV0KCkgb3B0aW9uc1xuICBASW5wdXQoKSB3cmFwT3B0aW9ucz9cbiAgQElucHV0KCkgbmFtZT86IHN0cmluZ1xuICBASW5wdXQoKSBuYW1lRm9udD86IHN0cmluZ1xuICBASW5wdXQoKSBib3R0b21MYWJlbD86IHN0cmluZ1xuICBASW5wdXQoKSBjdXN0b21EaXNwbGF5TGFiZWw/OiBzdHJpbmdcbiAgQElucHV0KCkgYm90dG9tTGFiZWxGb250Pzogc3RyaW5nXG4gIEBJbnB1dCgpIGN1c3RvbUJvdHRvbUxhYmVsTWFyZ2luPzogc3RyaW5nXG5cbiAgcHVibGljIG5hbWVNYXJnaW46IHN0cmluZ1xuICBwdWJsaWMgYm90dG9tTGFiZWxNYXJnaW46IHN0cmluZ1xuXG4gIHByaXZhdGUgZWxlbWVudFxuICBwcml2YXRlIGdhdWdlQ2hhcnQ6IGFueVxuICBwcml2YXRlIG9sZE9wdGlvbnNcblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjYWxjdWxhdGUgc3R5bGVzIGZvciBuYW1lIGFuZCBib3R0b21MYWJlbFxuICAgIGlmICh0aGlzLm5hbWUpIHtcbiAgICAgIGlmICghdGhpcy5uYW1lRm9udCkge1xuICAgICAgICB0aGlzLm5hbWVGb250ID0gJycgKyBNYXRoLnJvdW5kKHRoaXMuY2FudmFzV2lkdGggLyAxNSlcbiAgICAgIH1cbiAgICAgIHRoaXMubmFtZU1hcmdpbiA9ICcnICsgTWF0aC5yb3VuZCgrdGhpcy5uYW1lRm9udCAvIDQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYm90dG9tTGFiZWwpIHtcbiAgICAgIGlmICghdGhpcy5ib3R0b21MYWJlbEZvbnQpIHtcbiAgICAgICAgdGhpcy5ib3R0b21MYWJlbEZvbnQgPSAnJyArIE1hdGgucm91bmQodGhpcy5jYW52YXNXaWR0aCAvIDEwKVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmN1c3RvbUJvdHRvbUxhYmVsTWFyZ2luKSB7XG4gICAgICAgIHRoaXMuYm90dG9tTGFiZWxNYXJnaW4gPSAnLScgKyB0aGlzLmJvdHRvbUxhYmVsRm9udFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ib3R0b21MYWJlbE1hcmdpbiA9IHRoaXMuY3VzdG9tQm90dG9tTGFiZWxNYXJnaW5cbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jdXN0b21EaXNwbGF5TGFiZWwpIHtcbiAgICAgICAgdGhpcy5jdXN0b21EaXNwbGF5TGFiZWwgPSAnYmxvY2snXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9uc0NoZWNrKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZ2F1Z2VBcmVhLm5hdGl2ZUVsZW1lbnRcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KClcbiAgICB9XG4gICAgdGhpcy5vbGRPcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm9wdGlvbnMpKVxuICB9XG5cbiAgb3B0aW9uc0NoZWNrKCkge1xuICAgIGlmICh0aGlzLmNhbnZhc1dpZHRoID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybignZ2F1Z2UtY2hhcnQgd2FybmluZzogY2FudmFzV2lkdGggaXMgbm90IHNwZWNpZmllZCEnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmICh0aGlzLmNhbnZhc0hlaWdodCA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2dhdWdlLWNoYXJ0IHdhcm5pbmc6IGNhbnZhc1dpZHRoIGlzIG5vdCBzcGVjaWZpZWQhJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSBpZiAodGhpcy5uZWVkbGVWYWx1ZSA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2dhdWdlLWNoYXJ0IHdhcm5pbmc6IG5lZWRsZVZhbHVlIGlzIG5vdCBzcGVjaWZpZWQhJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAodGhpcy5jZW50cmFsTGFiZWwgPT0gbnVsbCkge1xuICAgICAgdGhpcy5jZW50cmFsTGFiZWwgPSAnJ1xuICAgIH1cbiAgICB0aGlzLmNhbnZhc0hlaWdodCArPSAxMFxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKCF0aGlzLmFyZUVxdWFsKHRoaXMub3B0aW9ucywgdGhpcy5vbGRPcHRpb25zKSkge1xuICAgICAgdGhpcy5kcmF3Q2hhcnQodHJ1ZSlcbiAgICAgIHRoaXMub2xkT3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSlcbiAgICB9XG4gIH1cblxuICBhcmVFcXVhbChvYmoxLCBvYmoyKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iajEpID09PSBKU09OLnN0cmluZ2lmeShvYmoyKVxuICB9XG5cbiAgZHJhd0NoYXJ0KHJlZHJhdyA9IGZhbHNlKSB7XG4gICAgaWYgKHJlZHJhdykge1xuICAgICAgdGhpcy5nYXVnZUNoYXJ0LnJlbW92ZUdhdWdlKClcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLmNlbnRyYWxMYWJlbCA9IHRoaXMuY2VudHJhbExhYmVsXG4gICAgdGhpcy5nYXVnZUNoYXJ0ID0gR2F1Z2VDaGFydC5nYXVnZUNoYXJ0KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5jYW52YXNXaWR0aCxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICApXG4gICAgdGhpcy5nYXVnZUNoYXJ0LnVwZGF0ZU5lZWRsZSh0aGlzLm5lZWRsZVZhbHVlKVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLm5lZWRsZVZhbHVlICYmICFjaGFuZ2VzLm5lZWRsZVZhbHVlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLm5lZWRsZVZhbHVlID0gY2hhbmdlcy5uZWVkbGVWYWx1ZS5jdXJyZW50VmFsdWVcbiAgICAgIHRoaXMuZ2F1Z2VDaGFydC51cGRhdGVOZWVkbGUodGhpcy5uZWVkbGVWYWx1ZSlcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY2VudHJhbExhYmVsICYmICFjaGFuZ2VzLmNlbnRyYWxMYWJlbC5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5jZW50cmFsTGFiZWwgPSBjaGFuZ2VzLmNlbnRyYWxMYWJlbC5jdXJyZW50VmFsdWVcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KHRydWUpXG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZ2F1Z2UtY2hhcnRcIlxuICAgICBbc3R5bGUud2lkdGgucHhdPVwiY2FudmFzV2lkdGhcIlxuICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cImNhbnZhc0hlaWdodFwiXG4+XG4gIDxzcGFuXG4gICAgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJuYW1lRm9udFwiXG4gICAgW3N0eWxlLm1hcmdpbi1ib3R0b20ucHhdPVwibmFtZU1hcmdpblwiPlxuICAgIHt7bmFtZX19XG4gIDwvc3Bhbj5cbiAgPGRpdiAjZ2F1Z2VBcmVhPjwvZGl2PlxuICA8c3BhblxuICAgIGNsYXNzPVwiZ2F1Z2UtY2hhcnRfX2xhYmVsXCJcbiAgICBbc3R5bGUuZGlzcGxheV09XCJjdXN0b21EaXNwbGF5TGFiZWxcIlxuICAgIFtzdHlsZS5mb250LXNpemUucHhdPVwiYm90dG9tTGFiZWxGb250XCJcbiAgICBbc3R5bGUubWFyZ2luLXRvcC5weF09XCJib3R0b21MYWJlbE1hcmdpblwiPlxuICAgIHt7Ym90dG9tTGFiZWx9fVxuICA8L3NwYW4+XG48L2Rpdj5cbiJdfQ==