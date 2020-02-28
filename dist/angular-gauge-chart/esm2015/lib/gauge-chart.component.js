import { __decorate, __metadata } from "tslib";
/**
 * Angular 2 decorators and services
 */
import { Component, Input, ViewChild, } from '@angular/core';
import * as GaugeChart from 'gauge-chart';
/**
 * GaugeChart Component
 */
let GaugeChartComponent = class GaugeChartComponent {
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
    drawChart(redraw = true) {
        if (redraw) {
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
export { GaugeChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1nYXVnZS1jaGFydC8iLCJzb3VyY2VzIjpbImxpYi9nYXVnZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR0wsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFBO0FBQ3RCLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxDQUFBO0FBRXpDOztHQUVHO0FBTUgsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUF1QjlCLFFBQVE7UUFDTiw0Q0FBNEM7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQTthQUN2RDtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ3REO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUE7YUFDOUQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO2dCQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUE7YUFDcEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElB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VyxFQUFFO1lBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUE7WUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNyQjtJQUNILENBQUM7Q0FDRixDQUFBO0FBekcyQztJQUF6QyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOztzREFBVTtBQUUxQztJQUFSLEtBQUssRUFBRTs7d0RBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzt5REFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7O3dEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTs7eURBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFOztvREFBUTtBQUNQO0lBQVIsS0FBSyxFQUFFOzt3REFBYTtBQUNaO0lBQVIsS0FBSyxFQUFFOztpREFBYztBQUNiO0lBQVIsS0FBSyxFQUFFOztxREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7O3dEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTs7K0RBQTRCO0FBQzNCO0lBQVIsS0FBSyxFQUFFOzs0REFBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7O29FQUFpQztBQWQ5QixtQkFBbUI7SUFML0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQywyZUFBMkM7O0tBRTVDLENBQUM7R0FDVyxtQkFBbUIsQ0EwRy9CO1NBMUdZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBBbmd1bGFyIDIgZGVjb3JhdG9ycyBhbmQgc2VydmljZXNcclxuICovXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIERvQ2hlY2ssXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0ICogYXMgR2F1Z2VDaGFydCBmcm9tICdnYXVnZS1jaGFydCdcclxuXHJcbi8qKlxyXG4gKiBHYXVnZUNoYXJ0IENvbXBvbmVudFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjaXJjdWxhci1nYXVnZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dhdWdlLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYXVnZS1jaGFydC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYXVnZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gIEBWaWV3Q2hpbGQoJ2dhdWdlQXJlYScsIHsgc3RhdGljOiB0cnVlIH0pIGdhdWdlQXJlYVxyXG5cclxuICBASW5wdXQoKSBjYW52YXNXaWR0aDogbnVtYmVyXHJcbiAgQElucHV0KCkgY2FudmFzSGVpZ2h0OiBudW1iZXJcclxuICBASW5wdXQoKSBuZWVkbGVWYWx1ZTogbnVtYmVyXHJcbiAgQElucHV0KCkgY2VudHJhbExhYmVsOiBzdHJpbmdcclxuICBASW5wdXQoKSBvcHRpb25zXHJcbiAgQElucHV0KCkgd3JhcE9wdGlvbnM/XHJcbiAgQElucHV0KCkgbmFtZT86IHN0cmluZ1xyXG4gIEBJbnB1dCgpIG5hbWVGb250Pzogc3RyaW5nXHJcbiAgQElucHV0KCkgYm90dG9tTGFiZWw/OiBzdHJpbmdcclxuICBASW5wdXQoKSBjdXN0b21EaXNwbGF5TGFiZWw/OiBzdHJpbmdcclxuICBASW5wdXQoKSBib3R0b21MYWJlbEZvbnQ/OiBzdHJpbmdcclxuICBASW5wdXQoKSBjdXN0b21Cb3R0b21MYWJlbE1hcmdpbj86IHN0cmluZ1xyXG5cclxuICBwdWJsaWMgbmFtZU1hcmdpbjogc3RyaW5nXHJcbiAgcHVibGljIGJvdHRvbUxhYmVsTWFyZ2luOiBzdHJpbmdcclxuXHJcbiAgcHJpdmF0ZSBlbGVtZW50XHJcbiAgcHJpdmF0ZSBnYXVnZUNoYXJ0OiBhbnlcclxuICBwcml2YXRlIG9sZE9wdGlvbnNcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjYWxjdWxhdGUgc3R5bGVzIGZvciBuYW1lIGFuZCBib3R0b21MYWJlbFxyXG4gICAgaWYgKHRoaXMubmFtZSkge1xyXG4gICAgICBpZiAoIXRoaXMubmFtZUZvbnQpIHtcclxuICAgICAgICB0aGlzLm5hbWVGb250ID0gJycgKyBNYXRoLnJvdW5kKHRoaXMuY2FudmFzV2lkdGggLyAxNSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm5hbWVNYXJnaW4gPSAnJyArIE1hdGgucm91bmQoK3RoaXMubmFtZUZvbnQgLyA0KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmJvdHRvbUxhYmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5ib3R0b21MYWJlbEZvbnQpIHtcclxuICAgICAgICB0aGlzLmJvdHRvbUxhYmVsRm9udCA9ICcnICsgTWF0aC5yb3VuZCh0aGlzLmNhbnZhc1dpZHRoIC8gMTApXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmN1c3RvbUJvdHRvbUxhYmVsTWFyZ2luKSB7XHJcbiAgICAgICAgdGhpcy5ib3R0b21MYWJlbE1hcmdpbiA9ICctJyArIHRoaXMuYm90dG9tTGFiZWxGb250XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ib3R0b21MYWJlbE1hcmdpbiA9IHRoaXMuY3VzdG9tQm90dG9tTGFiZWxNYXJnaW5cclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMuY3VzdG9tRGlzcGxheUxhYmVsKSB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21EaXNwbGF5TGFiZWwgPSAnYmxvY2snXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zQ2hlY2soKSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmdhdWdlQXJlYS5uYXRpdmVFbGVtZW50XHJcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KClcclxuICAgIH1cclxuICAgIHRoaXMub2xkT3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSlcclxuICB9XHJcblxyXG4gIG9wdGlvbnNDaGVjaygpIHtcclxuICAgIGlmICh0aGlzLmNhbnZhc1dpZHRoID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdnYXVnZS1jaGFydCB3YXJuaW5nOiBjYW52YXNXaWR0aCBpcyBub3Qgc3BlY2lmaWVkIScpXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2FudmFzSGVpZ2h0ID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdnYXVnZS1jaGFydCB3YXJuaW5nOiBjYW52YXNXaWR0aCBpcyBub3Qgc3BlY2lmaWVkIScpXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZWRsZVZhbHVlID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdnYXVnZS1jaGFydCB3YXJuaW5nOiBuZWVkbGVWYWx1ZSBpcyBub3Qgc3BlY2lmaWVkIScpXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2VudHJhbExhYmVsID09IG51bGwpIHtcclxuICAgICAgdGhpcy5jZW50cmFsTGFiZWwgPSAnJ1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYW52YXNIZWlnaHQgKz0gMTBcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuYXJlRXF1YWwodGhpcy5vcHRpb25zLCB0aGlzLm9sZE9wdGlvbnMpKSB7XHJcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KHRydWUpXHJcbiAgICAgIHRoaXMub2xkT3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFyZUVxdWFsKG9iajEsIG9iajIpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmoxKSA9PT0gSlNPTi5zdHJpbmdpZnkob2JqMilcclxuICB9XHJcblxyXG4gIGRyYXdDaGFydChyZWRyYXcgPSB0cnVlKSB7XHJcbiAgICBpZiAocmVkcmF3KSB7XHJcbiAgICAgIHRoaXMuZ2F1Z2VDaGFydC5yZW1vdmVHYXVnZSgpXHJcbiAgICB9XHJcbiAgICB0aGlzLm9wdGlvbnMuY2VudHJhbExhYmVsID0gdGhpcy5jZW50cmFsTGFiZWxcclxuICAgIHRoaXMuZ2F1Z2VDaGFydCA9IEdhdWdlQ2hhcnQuZ2F1Z2VDaGFydChcclxuICAgICAgdGhpcy5lbGVtZW50LFxyXG4gICAgICB0aGlzLmNhbnZhc1dpZHRoLFxyXG4gICAgICB0aGlzLm9wdGlvbnMsXHJcbiAgICApXHJcbiAgICB0aGlzLmdhdWdlQ2hhcnQudXBkYXRlTmVlZGxlKHRoaXMubmVlZGxlVmFsdWUpXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5uZWVkbGVWYWx1ZSAmJiAhY2hhbmdlcy5uZWVkbGVWYWx1ZS5maXJzdENoYW5nZSkge1xyXG4gICAgICB0aGlzLm5lZWRsZVZhbHVlID0gY2hhbmdlcy5uZWVkbGVWYWx1ZS5jdXJyZW50VmFsdWVcclxuICAgICAgdGhpcy5nYXVnZUNoYXJ0LnVwZGF0ZU5lZWRsZSh0aGlzLm5lZWRsZVZhbHVlKVxyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuY2VudHJhbExhYmVsICYmICFjaGFuZ2VzLmNlbnRyYWxMYWJlbC5maXJzdENoYW5nZSkge1xyXG4gICAgICB0aGlzLmNlbnRyYWxMYWJlbCA9IGNoYW5nZXMuY2VudHJhbExhYmVsLmN1cnJlbnRWYWx1ZVxyXG4gICAgICB0aGlzLmRyYXdDaGFydCh0cnVlKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=