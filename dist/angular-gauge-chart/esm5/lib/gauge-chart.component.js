import { __decorate, __metadata } from "tslib";
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
        if (redraw === void 0) { redraw = true; }
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
export { GaugeChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1nYXVnZS1jaGFydC8iLCJzb3VyY2VzIjpbImxpYi9nYXVnZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR0wsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFBO0FBQ3RCLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxDQUFBO0FBRXpDOztHQUVHO0FBTUg7SUFBQTtJQTBHQSxDQUFDO0lBbkZDLHNDQUFRLEdBQVI7UUFDRSw0Q0FBNEM7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQTthQUN2RDtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ3REO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUE7YUFDOUQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO2dCQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUE7YUFDcEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyx1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QUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7WUFDN0QsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQTtZQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3JCO0lBQ0gsQ0FBQztJQXhHeUM7UUFBekMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MERBQVU7SUFFMUM7UUFBUixLQUFLLEVBQUU7OzREQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTs7NkRBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFOzs0REFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7OzZEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTs7d0RBQVE7SUFDUDtRQUFSLEtBQUssRUFBRTs7NERBQWE7SUFDWjtRQUFSLEtBQUssRUFBRTs7cURBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTs7eURBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFOzs0REFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7O21FQUE0QjtJQUMzQjtRQUFSLEtBQUssRUFBRTs7Z0VBQXlCO0lBQ3hCO1FBQVIsS0FBSyxFQUFFOzt3RUFBaUM7SUFkOUIsbUJBQW1CO1FBTC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsMmVBQTJDOztTQUU1QyxDQUFDO09BQ1csbUJBQW1CLENBMEcvQjtJQUFELDBCQUFDO0NBQUEsQUExR0QsSUEwR0M7U0ExR1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEFuZ3VsYXIgMiBkZWNvcmF0b3JzIGFuZCBzZXJ2aWNlc1xyXG4gKi9cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRG9DaGVjayxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgKiBhcyBHYXVnZUNoYXJ0IGZyb20gJ2dhdWdlLWNoYXJ0J1xyXG5cclxuLyoqXHJcbiAqIEdhdWdlQ2hhcnQgQ29tcG9uZW50XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NpcmN1bGFyLWdhdWdlLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2F1Z2UtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dhdWdlLWNoYXJ0LmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhdWdlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgRG9DaGVjayB7XHJcbiAgQFZpZXdDaGlsZCgnZ2F1Z2VBcmVhJywgeyBzdGF0aWM6IHRydWUgfSkgZ2F1Z2VBcmVhXHJcblxyXG4gIEBJbnB1dCgpIGNhbnZhc1dpZHRoOiBudW1iZXJcclxuICBASW5wdXQoKSBjYW52YXNIZWlnaHQ6IG51bWJlclxyXG4gIEBJbnB1dCgpIG5lZWRsZVZhbHVlOiBudW1iZXJcclxuICBASW5wdXQoKSBjZW50cmFsTGFiZWw6IHN0cmluZ1xyXG4gIEBJbnB1dCgpIG9wdGlvbnNcclxuICBASW5wdXQoKSB3cmFwT3B0aW9ucz9cclxuICBASW5wdXQoKSBuYW1lPzogc3RyaW5nXHJcbiAgQElucHV0KCkgbmFtZUZvbnQ/OiBzdHJpbmdcclxuICBASW5wdXQoKSBib3R0b21MYWJlbD86IHN0cmluZ1xyXG4gIEBJbnB1dCgpIGN1c3RvbURpc3BsYXlMYWJlbD86IHN0cmluZ1xyXG4gIEBJbnB1dCgpIGJvdHRvbUxhYmVsRm9udD86IHN0cmluZ1xyXG4gIEBJbnB1dCgpIGN1c3RvbUJvdHRvbUxhYmVsTWFyZ2luPzogc3RyaW5nXHJcblxyXG4gIHB1YmxpYyBuYW1lTWFyZ2luOiBzdHJpbmdcclxuICBwdWJsaWMgYm90dG9tTGFiZWxNYXJnaW46IHN0cmluZ1xyXG5cclxuICBwcml2YXRlIGVsZW1lbnRcclxuICBwcml2YXRlIGdhdWdlQ2hhcnQ6IGFueVxyXG4gIHByaXZhdGUgb2xkT3B0aW9uc1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNhbGN1bGF0ZSBzdHlsZXMgZm9yIG5hbWUgYW5kIGJvdHRvbUxhYmVsXHJcbiAgICBpZiAodGhpcy5uYW1lKSB7XHJcbiAgICAgIGlmICghdGhpcy5uYW1lRm9udCkge1xyXG4gICAgICAgIHRoaXMubmFtZUZvbnQgPSAnJyArIE1hdGgucm91bmQodGhpcy5jYW52YXNXaWR0aCAvIDE1KVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubmFtZU1hcmdpbiA9ICcnICsgTWF0aC5yb3VuZCgrdGhpcy5uYW1lRm9udCAvIDQpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYm90dG9tTGFiZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmJvdHRvbUxhYmVsRm9udCkge1xyXG4gICAgICAgIHRoaXMuYm90dG9tTGFiZWxGb250ID0gJycgKyBNYXRoLnJvdW5kKHRoaXMuY2FudmFzV2lkdGggLyAxMClcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMuY3VzdG9tQm90dG9tTGFiZWxNYXJnaW4pIHtcclxuICAgICAgICB0aGlzLmJvdHRvbUxhYmVsTWFyZ2luID0gJy0nICsgdGhpcy5ib3R0b21MYWJlbEZvbnRcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJvdHRvbUxhYmVsTWFyZ2luID0gdGhpcy5jdXN0b21Cb3R0b21MYWJlbE1hcmdpblxyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5jdXN0b21EaXNwbGF5TGFiZWwpIHtcclxuICAgICAgICB0aGlzLmN1c3RvbURpc3BsYXlMYWJlbCA9ICdibG9jaydcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnNDaGVjaygpKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZ2F1Z2VBcmVhLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgdGhpcy5kcmF3Q2hhcnQoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5vbGRPcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm9wdGlvbnMpKVxyXG4gIH1cclxuXHJcbiAgb3B0aW9uc0NoZWNrKCkge1xyXG4gICAgaWYgKHRoaXMuY2FudmFzV2lkdGggPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ2dhdWdlLWNoYXJ0IHdhcm5pbmc6IGNhbnZhc1dpZHRoIGlzIG5vdCBzcGVjaWZpZWQhJylcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jYW52YXNIZWlnaHQgPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ2dhdWdlLWNoYXJ0IHdhcm5pbmc6IGNhbnZhc1dpZHRoIGlzIG5vdCBzcGVjaWZpZWQhJylcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVlZGxlVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ2dhdWdlLWNoYXJ0IHdhcm5pbmc6IG5lZWRsZVZhbHVlIGlzIG5vdCBzcGVjaWZpZWQhJylcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jZW50cmFsTGFiZWwgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmNlbnRyYWxMYWJlbCA9ICcnXHJcbiAgICB9XHJcbiAgICB0aGlzLmNhbnZhc0hlaWdodCArPSAxMFxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGlmICghdGhpcy5hcmVFcXVhbCh0aGlzLm9wdGlvbnMsIHRoaXMub2xkT3B0aW9ucykpIHtcclxuICAgICAgdGhpcy5kcmF3Q2hhcnQodHJ1ZSlcclxuICAgICAgdGhpcy5vbGRPcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm9wdGlvbnMpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXJlRXF1YWwob2JqMSwgb2JqMikge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iajEpID09PSBKU09OLnN0cmluZ2lmeShvYmoyKVxyXG4gIH1cclxuXHJcbiAgZHJhd0NoYXJ0KHJlZHJhdyA9IHRydWUpIHtcclxuICAgIGlmIChyZWRyYXcpIHtcclxuICAgICAgdGhpcy5nYXVnZUNoYXJ0LnJlbW92ZUdhdWdlKClcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9ucy5jZW50cmFsTGFiZWwgPSB0aGlzLmNlbnRyYWxMYWJlbFxyXG4gICAgdGhpcy5nYXVnZUNoYXJ0ID0gR2F1Z2VDaGFydC5nYXVnZUNoYXJ0KFxyXG4gICAgICB0aGlzLmVsZW1lbnQsXHJcbiAgICAgIHRoaXMuY2FudmFzV2lkdGgsXHJcbiAgICAgIHRoaXMub3B0aW9ucyxcclxuICAgIClcclxuICAgIHRoaXMuZ2F1Z2VDaGFydC51cGRhdGVOZWVkbGUodGhpcy5uZWVkbGVWYWx1ZSlcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLm5lZWRsZVZhbHVlICYmICFjaGFuZ2VzLm5lZWRsZVZhbHVlLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMubmVlZGxlVmFsdWUgPSBjaGFuZ2VzLm5lZWRsZVZhbHVlLmN1cnJlbnRWYWx1ZVxyXG4gICAgICB0aGlzLmdhdWdlQ2hhcnQudXBkYXRlTmVlZGxlKHRoaXMubmVlZGxlVmFsdWUpXHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5jZW50cmFsTGFiZWwgJiYgIWNoYW5nZXMuY2VudHJhbExhYmVsLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuY2VudHJhbExhYmVsID0gY2hhbmdlcy5jZW50cmFsTGFiZWwuY3VycmVudFZhbHVlXHJcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==