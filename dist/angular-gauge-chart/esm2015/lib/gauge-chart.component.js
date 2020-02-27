/**
 * Angular 2 decorators and services
 */
import { Component, Input, ViewChild, } from '@angular/core';
import * as GaugeChart from 'gauge-chart';
import * as i0 from "@angular/core";
const _c0 = ["gaugeArea"];
/**
 * GaugeChart Component
 */
export class GaugeChartComponent {
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
        if (redraw && !!this.gaugeChart) {
            this.gaugeChart.removeGauge();
        }
        this.options.centralLabel = this.centralLabel;
        this.gaugeChart = GaugeChart.gaugeChart(this.element, this.canvasWidth, this.options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1nYXVnZS1jaGFydC8iLCJzb3VyY2VzIjpbImxpYi9nYXVnZS1jaGFydC5jb21wb25lbnQudHMiLCJsaWIvZ2F1Z2UtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUE7QUFDdEIsT0FBTyxLQUFLLFVBQVUsTUFBTSxhQUFhLENBQUE7OztBQUV6Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxtQkFBbUI7SUF1QjlCLFFBQVE7UUFDTiw0Q0FBNEM7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQTthQUN2RDtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ3REO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUE7YUFDOUQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO2dCQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUE7YUFDcEQ7aUJBQU07Z0JBQ0wsSUFB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QUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTtZQUM3RCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFBO1lBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDckI7SUFDSCxDQUFDOztzRkF6R1UsbUJBQW1CO3dEQUFuQixtQkFBbUI7Ozs7OztRQ3JCaEMsOEJBSUU7UUFBQSw0QkFHRTtRQUFBLFlBQ0Y7UUFBQSxpQkFBTztRQUNQLCtCQUFzQjtRQUN0QiwrQkFLRTtRQUFBLFlBQ0Y7UUFBQSxpQkFBTztRQUNULGlCQUFNOztRQWhCRCw4Q0FBOEIsa0NBQUE7UUFJL0IsZUFBK0I7UUFBL0IsK0NBQStCLHVDQUFBO1FBRS9CLGVBQ0Y7UUFERSx5Q0FDRjtRQUlFLGVBQW9DO1FBQXBDLGlEQUFvQyx3Q0FBQSwyQ0FBQTtRQUdwQyxlQUNGO1FBREUsZ0RBQ0Y7O2tEREtXLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7O2tCQUVFLFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRXZDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFuZ3VsYXIgMiBkZWNvcmF0b3JzIGFuZCBzZXJ2aWNlc1xuICovXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBEb0NoZWNrLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0ICogYXMgR2F1Z2VDaGFydCBmcm9tICdnYXVnZS1jaGFydCdcblxuLyoqXG4gKiBHYXVnZUNoYXJ0IENvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaXJjdWxhci1nYXVnZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nYXVnZS1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dhdWdlLWNoYXJ0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR2F1Z2VDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcbiAgQFZpZXdDaGlsZCgnZ2F1Z2VBcmVhJywgeyBzdGF0aWM6IHRydWUgfSkgZ2F1Z2VBcmVhXG5cbiAgQElucHV0KCkgY2FudmFzV2lkdGg6IG51bWJlclxuICBASW5wdXQoKSBjYW52YXNIZWlnaHQ6IG51bWJlclxuICBASW5wdXQoKSBuZWVkbGVWYWx1ZTogbnVtYmVyXG4gIEBJbnB1dCgpIGNlbnRyYWxMYWJlbDogc3RyaW5nXG4gIEBJbnB1dCgpIG9wdGlvbnNcbiAgQElucHV0KCkgd3JhcE9wdGlvbnM/XG4gIEBJbnB1dCgpIG5hbWU/OiBzdHJpbmdcbiAgQElucHV0KCkgbmFtZUZvbnQ/OiBzdHJpbmdcbiAgQElucHV0KCkgYm90dG9tTGFiZWw/OiBzdHJpbmdcbiAgQElucHV0KCkgY3VzdG9tRGlzcGxheUxhYmVsPzogc3RyaW5nXG4gIEBJbnB1dCgpIGJvdHRvbUxhYmVsRm9udD86IHN0cmluZ1xuICBASW5wdXQoKSBjdXN0b21Cb3R0b21MYWJlbE1hcmdpbj86IHN0cmluZ1xuXG4gIHB1YmxpYyBuYW1lTWFyZ2luOiBzdHJpbmdcbiAgcHVibGljIGJvdHRvbUxhYmVsTWFyZ2luOiBzdHJpbmdcblxuICBwcml2YXRlIGVsZW1lbnRcbiAgcHJpdmF0ZSBnYXVnZUNoYXJ0OiBhbnlcbiAgcHJpdmF0ZSBvbGRPcHRpb25zXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY2FsY3VsYXRlIHN0eWxlcyBmb3IgbmFtZSBhbmQgYm90dG9tTGFiZWxcbiAgICBpZiAodGhpcy5uYW1lKSB7XG4gICAgICBpZiAoIXRoaXMubmFtZUZvbnQpIHtcbiAgICAgICAgdGhpcy5uYW1lRm9udCA9ICcnICsgTWF0aC5yb3VuZCh0aGlzLmNhbnZhc1dpZHRoIC8gMTUpXG4gICAgICB9XG4gICAgICB0aGlzLm5hbWVNYXJnaW4gPSAnJyArIE1hdGgucm91bmQoK3RoaXMubmFtZUZvbnQgLyA0KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdHRvbUxhYmVsKSB7XG4gICAgICBpZiAoIXRoaXMuYm90dG9tTGFiZWxGb250KSB7XG4gICAgICAgIHRoaXMuYm90dG9tTGFiZWxGb250ID0gJycgKyBNYXRoLnJvdW5kKHRoaXMuY2FudmFzV2lkdGggLyAxMClcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jdXN0b21Cb3R0b21MYWJlbE1hcmdpbikge1xuICAgICAgICB0aGlzLmJvdHRvbUxhYmVsTWFyZ2luID0gJy0nICsgdGhpcy5ib3R0b21MYWJlbEZvbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYm90dG9tTGFiZWxNYXJnaW4gPSB0aGlzLmN1c3RvbUJvdHRvbUxhYmVsTWFyZ2luXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY3VzdG9tRGlzcGxheUxhYmVsKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tRGlzcGxheUxhYmVsID0gJ2Jsb2NrJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnNDaGVjaygpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmdhdWdlQXJlYS5uYXRpdmVFbGVtZW50XG4gICAgICB0aGlzLmRyYXdDaGFydCgpXG4gICAgfVxuICAgIHRoaXMub2xkT3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSlcbiAgfVxuXG4gIG9wdGlvbnNDaGVjaygpIHtcbiAgICBpZiAodGhpcy5jYW52YXNXaWR0aCA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2dhdWdlLWNoYXJ0IHdhcm5pbmc6IGNhbnZhc1dpZHRoIGlzIG5vdCBzcGVjaWZpZWQhJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAodGhpcy5jYW52YXNIZWlnaHQgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKCdnYXVnZS1jaGFydCB3YXJuaW5nOiBjYW52YXNXaWR0aCBpcyBub3Qgc3BlY2lmaWVkIScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVlZGxlVmFsdWUgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKCdnYXVnZS1jaGFydCB3YXJuaW5nOiBuZWVkbGVWYWx1ZSBpcyBub3Qgc3BlY2lmaWVkIScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKHRoaXMuY2VudHJhbExhYmVsID09IG51bGwpIHtcbiAgICAgIHRoaXMuY2VudHJhbExhYmVsID0gJydcbiAgICB9XG4gICAgdGhpcy5jYW52YXNIZWlnaHQgKz0gMTBcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICghdGhpcy5hcmVFcXVhbCh0aGlzLm9wdGlvbnMsIHRoaXMub2xkT3B0aW9ucykpIHtcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KHRydWUpXG4gICAgICB0aGlzLm9sZE9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMub3B0aW9ucykpXG4gICAgfVxuICB9XG5cbiAgYXJlRXF1YWwob2JqMSwgb2JqMikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmoxKSA9PT0gSlNPTi5zdHJpbmdpZnkob2JqMilcbiAgfVxuXG4gIGRyYXdDaGFydChyZWRyYXcgPSBmYWxzZSkge1xuICAgIGlmIChyZWRyYXcgJiYgISF0aGlzLmdhdWdlQ2hhcnQpIHtcbiAgICAgIHRoaXMuZ2F1Z2VDaGFydC5yZW1vdmVHYXVnZSgpXG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5jZW50cmFsTGFiZWwgPSB0aGlzLmNlbnRyYWxMYWJlbFxuICAgIHRoaXMuZ2F1Z2VDaGFydCA9IEdhdWdlQ2hhcnQuZ2F1Z2VDaGFydChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMuY2FudmFzV2lkdGgsXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgKVxuICAgIHRoaXMuZ2F1Z2VDaGFydC51cGRhdGVOZWVkbGUodGhpcy5uZWVkbGVWYWx1ZSlcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5uZWVkbGVWYWx1ZSAmJiAhY2hhbmdlcy5uZWVkbGVWYWx1ZS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5uZWVkbGVWYWx1ZSA9IGNoYW5nZXMubmVlZGxlVmFsdWUuY3VycmVudFZhbHVlXG4gICAgICB0aGlzLmdhdWdlQ2hhcnQudXBkYXRlTmVlZGxlKHRoaXMubmVlZGxlVmFsdWUpXG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmNlbnRyYWxMYWJlbCAmJiAhY2hhbmdlcy5jZW50cmFsTGFiZWwuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuY2VudHJhbExhYmVsID0gY2hhbmdlcy5jZW50cmFsTGFiZWwuY3VycmVudFZhbHVlXG4gICAgICB0aGlzLmRyYXdDaGFydCh0cnVlKVxuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImdhdWdlLWNoYXJ0XCJcbiAgICAgW3N0eWxlLndpZHRoLnB4XT1cImNhbnZhc1dpZHRoXCJcbiAgICAgW3N0eWxlLmhlaWdodC5weF09XCJjYW52YXNIZWlnaHRcIlxuPlxuICA8c3BhblxuICAgIFtzdHlsZS5mb250LXNpemUucHhdPVwibmFtZUZvbnRcIlxuICAgIFtzdHlsZS5tYXJnaW4tYm90dG9tLnB4XT1cIm5hbWVNYXJnaW5cIj5cbiAgICB7e25hbWV9fVxuICA8L3NwYW4+XG4gIDxkaXYgI2dhdWdlQXJlYT48L2Rpdj5cbiAgPHNwYW5cbiAgICBjbGFzcz1cImdhdWdlLWNoYXJ0X19sYWJlbFwiXG4gICAgW3N0eWxlLmRpc3BsYXldPVwiY3VzdG9tRGlzcGxheUxhYmVsXCJcbiAgICBbc3R5bGUuZm9udC1zaXplLnB4XT1cImJvdHRvbUxhYmVsRm9udFwiXG4gICAgW3N0eWxlLm1hcmdpbi10b3AucHhdPVwiYm90dG9tTGFiZWxNYXJnaW5cIj5cbiAgICB7e2JvdHRvbUxhYmVsfX1cbiAgPC9zcGFuPlxuPC9kaXY+XG4iXX0=