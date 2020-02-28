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
        if (redraw && this.gaugeChart) {
            this.gaugeChart.removeGauge();
        }
        this.options.centralLabel = this.centralLabel;
        this.gaugeChart = GaugeChart.gaugeChart(this.element, this.canvasWidth, this.options);
        this.gaugeChart.updateNeedle(this.needleValue);
    };
    GaugeChartComponent.prototype.ngOnChanges = function (changes) {
        if (changes.needleValue && !changes.needleValue.firstChange) {
            this.needleValue = changes.needleValue.currentValue;
            this.gaugeChart.removeGauge();
            this.bottomLabel = this.centralLabel = this.options.bottomLabel
                = this.options.centralLabel = '' + this.needleValue + '/' + this.totalValue;
            this.gaugeChart = GaugeChart.gaugeChart(this.element, this.canvasWidth, this.options);
            this.options.arcDelimiters[0] = Math.floor(100 * this.needleValue / this.totalValue);
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
        __metadata("design:type", Number)
    ], GaugeChartComponent.prototype, "totalValue", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1nYXVnZS1jaGFydC8iLCJzb3VyY2VzIjpbImxpYi9nYXVnZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR0wsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFBO0FBQ3RCLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxDQUFBO0FBRXpDOztHQUVHO0FBTUg7SUFBQTtJQWtIQSxDQUFDO0lBMUZDLHNDQUFRLEdBQVI7UUFDRSw0Q0FBNEM7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQTthQUN2RDtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ3REO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUE7YUFDOUQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO2dCQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUE7YUFDcEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyx1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QUFLLEVBQUU7O3FEQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7O3lEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTs7NERBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFOzttRUFBNEI7SUFDM0I7UUFBUixLQUFLLEVBQUU7O2dFQUF5QjtJQUN4QjtRQUFSLEtBQUssRUFBRTs7d0VBQWlDO0lBZjlCLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLDJlQUEyQzs7U0FFNUMsQ0FBQztPQUNXLG1CQUFtQixDQWtIL0I7SUFBRCwwQkFBQztDQUFBLEFBbEhELElBa0hDO1NBbEhZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBBbmd1bGFyIDIgZGVjb3JhdG9ycyBhbmQgc2VydmljZXNcclxuICovXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIERvQ2hlY2ssXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0ICogYXMgR2F1Z2VDaGFydCBmcm9tICdnYXVnZS1jaGFydCdcclxuXHJcbi8qKlxyXG4gKiBHYXVnZUNoYXJ0IENvbXBvbmVudFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjaXJjdWxhci1nYXVnZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dhdWdlLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYXVnZS1jaGFydC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYXVnZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gIEBWaWV3Q2hpbGQoJ2dhdWdlQXJlYScsIHsgc3RhdGljOiB0cnVlIH0pIGdhdWdlQXJlYVxyXG5cclxuICBASW5wdXQoKSBjYW52YXNXaWR0aDogbnVtYmVyXHJcbiAgQElucHV0KCkgY2FudmFzSGVpZ2h0OiBudW1iZXJcclxuICBASW5wdXQoKSBuZWVkbGVWYWx1ZTogbnVtYmVyXHJcbiAgQElucHV0KCkgdG90YWxWYWx1ZTogbnVtYmVyXHJcbiAgQElucHV0KCkgY2VudHJhbExhYmVsOiBzdHJpbmdcclxuICBASW5wdXQoKSBvcHRpb25zXHJcbiAgQElucHV0KCkgd3JhcE9wdGlvbnM/XHJcbiAgQElucHV0KCkgbmFtZT86IHN0cmluZ1xyXG4gIEBJbnB1dCgpIG5hbWVGb250Pzogc3RyaW5nXHJcbiAgQElucHV0KCkgYm90dG9tTGFiZWw/OiBzdHJpbmdcclxuICBASW5wdXQoKSBjdXN0b21EaXNwbGF5TGFiZWw/OiBzdHJpbmdcclxuICBASW5wdXQoKSBib3R0b21MYWJlbEZvbnQ/OiBzdHJpbmdcclxuICBASW5wdXQoKSBjdXN0b21Cb3R0b21MYWJlbE1hcmdpbj86IHN0cmluZ1xyXG5cclxuICBwdWJsaWMgbmFtZU1hcmdpbjogc3RyaW5nXHJcbiAgcHVibGljIGJvdHRvbUxhYmVsTWFyZ2luOiBzdHJpbmdcclxuXHJcbiAgcHJpdmF0ZSBlbGVtZW50XHJcbiAgcHJpdmF0ZSBnYXVnZUNoYXJ0OiBhbnlcclxuICBwcml2YXRlIG9sZE9wdGlvbnNcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjYWxjdWxhdGUgc3R5bGVzIGZvciBuYW1lIGFuZCBib3R0b21MYWJlbFxyXG4gICAgaWYgKHRoaXMubmFtZSkge1xyXG4gICAgICBpZiAoIXRoaXMubmFtZUZvbnQpIHtcclxuICAgICAgICB0aGlzLm5hbWVGb250ID0gJycgKyBNYXRoLnJvdW5kKHRoaXMuY2FudmFzV2lkdGggLyAxNSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm5hbWVNYXJnaW4gPSAnJyArIE1hdGgucm91bmQoK3RoaXMubmFtZUZvbnQgLyA0KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmJvdHRvbUxhYmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5ib3R0b21MYWJlbEZvbnQpIHtcclxuICAgICAgICB0aGlzLmJvdHRvbUxhYmVsRm9udCA9ICcnICsgTWF0aC5yb3VuZCh0aGlzLmNhbnZhc1dpZHRoIC8gMTApXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmN1c3RvbUJvdHRvbUxhYmVsTWFyZ2luKSB7XHJcbiAgICAgICAgdGhpcy5ib3R0b21MYWJlbE1hcmdpbiA9ICctJyArIHRoaXMuYm90dG9tTGFiZWxGb250XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ib3R0b21MYWJlbE1hcmdpbiA9IHRoaXMuY3VzdG9tQm90dG9tTGFiZWxNYXJnaW5cclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMuY3VzdG9tRGlzcGxheUxhYmVsKSB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21EaXNwbGF5TGFiZWwgPSAnYmxvY2snXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zQ2hlY2soKSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmdhdWdlQXJlYS5uYXRpdmVFbGVtZW50XHJcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KClcclxuICAgIH1cclxuICAgIHRoaXMub2xkT3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSlcclxuICB9XHJcblxyXG4gIG9wdGlvbnNDaGVjaygpIHtcclxuICAgIGlmICh0aGlzLmNhbnZhc1dpZHRoID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdnYXVnZS1jaGFydCB3YXJuaW5nOiBjYW52YXNXaWR0aCBpcyBub3Qgc3BlY2lmaWVkIScpXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2FudmFzSGVpZ2h0ID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdnYXVnZS1jaGFydCB3YXJuaW5nOiBjYW52YXNXaWR0aCBpcyBub3Qgc3BlY2lmaWVkIScpXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZWRsZVZhbHVlID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdnYXVnZS1jaGFydCB3YXJuaW5nOiBuZWVkbGVWYWx1ZSBpcyBub3Qgc3BlY2lmaWVkIScpXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2VudHJhbExhYmVsID09IG51bGwpIHtcclxuICAgICAgdGhpcy5jZW50cmFsTGFiZWwgPSAnJ1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYW52YXNIZWlnaHQgKz0gMTBcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuYXJlRXF1YWwodGhpcy5vcHRpb25zLCB0aGlzLm9sZE9wdGlvbnMpKSB7XHJcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KHRydWUpXHJcbiAgICAgIHRoaXMub2xkT3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFyZUVxdWFsKG9iajEsIG9iajIpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmoxKSA9PT0gSlNPTi5zdHJpbmdpZnkob2JqMilcclxuICB9XHJcblxyXG4gIGRyYXdDaGFydChyZWRyYXcgPSB0cnVlKSB7XHJcbiAgICBpZiAocmVkcmF3ICYmIHRoaXMuZ2F1Z2VDaGFydCkge1xyXG4gICAgICB0aGlzLmdhdWdlQ2hhcnQucmVtb3ZlR2F1Z2UoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5vcHRpb25zLmNlbnRyYWxMYWJlbCA9IHRoaXMuY2VudHJhbExhYmVsXHJcbiAgICB0aGlzLmdhdWdlQ2hhcnQgPSBHYXVnZUNoYXJ0LmdhdWdlQ2hhcnQoXHJcbiAgICAgIHRoaXMuZWxlbWVudCxcclxuICAgICAgdGhpcy5jYW52YXNXaWR0aCxcclxuICAgICAgdGhpcy5vcHRpb25zLFxyXG4gICAgKVxyXG4gICAgdGhpcy5nYXVnZUNoYXJ0LnVwZGF0ZU5lZWRsZSh0aGlzLm5lZWRsZVZhbHVlKVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMubmVlZGxlVmFsdWUgJiYgIWNoYW5nZXMubmVlZGxlVmFsdWUuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5uZWVkbGVWYWx1ZSA9IGNoYW5nZXMubmVlZGxlVmFsdWUuY3VycmVudFZhbHVlXHJcblxyXG4gICAgICB0aGlzLmdhdWdlQ2hhcnQucmVtb3ZlR2F1Z2UoKTtcclxuICAgICAgdGhpcy5ib3R0b21MYWJlbCA9IHRoaXMuY2VudHJhbExhYmVsID0gdGhpcy5vcHRpb25zLmJvdHRvbUxhYmVsXHJcbiAgICAgID0gdGhpcy5vcHRpb25zLmNlbnRyYWxMYWJlbCA9ICcnICsgdGhpcy5uZWVkbGVWYWx1ZSArICcvJyArIHRoaXMudG90YWxWYWx1ZTtcclxuICAgICAgdGhpcy5nYXVnZUNoYXJ0ID0gR2F1Z2VDaGFydC5nYXVnZUNoYXJ0KHRoaXMuZWxlbWVudCwgdGhpcy5jYW52YXNXaWR0aCwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgdGhpcy5vcHRpb25zLmFyY0RlbGltaXRlcnNbMF0gPSBNYXRoLmZsb29yKDEwMCAqIHRoaXMubmVlZGxlVmFsdWUgLyB0aGlzLnRvdGFsVmFsdWUpO1xyXG4gICAgICB0aGlzLmdhdWdlQ2hhcnQudXBkYXRlTmVlZGxlKHRoaXMubmVlZGxlVmFsdWUpO1xyXG5cclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLmNlbnRyYWxMYWJlbCAmJiAhY2hhbmdlcy5jZW50cmFsTGFiZWwuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5jZW50cmFsTGFiZWwgPSBjaGFuZ2VzLmNlbnRyYWxMYWJlbC5jdXJyZW50VmFsdWVcclxuICAgICAgdGhpcy5kcmF3Q2hhcnQodHJ1ZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19