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
        if (redraw && this.gaugeChart) {
            this.gaugeChart.removeGauge();
        }
        this.options.centralLabel = this.centralLabel;
        this.gaugeChart = GaugeChart.gaugeChart(this.element, this.canvasWidth, this.options);
        this.gaugeChart.updateNeedle(this.needleValue);
    }
    ngOnChanges(changes) {
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
export { GaugeChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1nYXVnZS1jaGFydC8iLCJzb3VyY2VzIjpbImxpYi9nYXVnZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR0wsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFBO0FBQ3RCLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxDQUFBO0FBRXpDOztHQUVHO0FBTUgsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUF3QjlCLFFBQVE7UUFDTiw0Q0FBNEM7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQTthQUN2RDtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ3REO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUE7YUFDOUQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO2dCQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUE7YUFDcEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElB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QUFSLEtBQUssRUFBRTs7cURBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOzt3REFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7OytEQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTs7NERBQXlCO0FBQ3hCO0lBQVIsS0FBSyxFQUFFOztvRUFBaUM7QUFmOUIsbUJBQW1CO0lBTC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsMmVBQTJDOztLQUU1QyxDQUFDO0dBQ1csbUJBQW1CLENBa0gvQjtTQWxIWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQW5ndWxhciAyIGRlY29yYXRvcnMgYW5kIHNlcnZpY2VzXHJcbiAqL1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBEb0NoZWNrLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCAqIGFzIEdhdWdlQ2hhcnQgZnJvbSAnZ2F1Z2UtY2hhcnQnXHJcblxyXG4vKipcclxuICogR2F1Z2VDaGFydCBDb21wb25lbnRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2lyY3VsYXItZ2F1Z2UtY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYXVnZS1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2F1Z2VDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICBAVmlld0NoaWxkKCdnYXVnZUFyZWEnLCB7IHN0YXRpYzogdHJ1ZSB9KSBnYXVnZUFyZWFcclxuXHJcbiAgQElucHV0KCkgY2FudmFzV2lkdGg6IG51bWJlclxyXG4gIEBJbnB1dCgpIGNhbnZhc0hlaWdodDogbnVtYmVyXHJcbiAgQElucHV0KCkgbmVlZGxlVmFsdWU6IG51bWJlclxyXG4gIEBJbnB1dCgpIHRvdGFsVmFsdWU6IG51bWJlclxyXG4gIEBJbnB1dCgpIGNlbnRyYWxMYWJlbDogc3RyaW5nXHJcbiAgQElucHV0KCkgb3B0aW9uc1xyXG4gIEBJbnB1dCgpIHdyYXBPcHRpb25zP1xyXG4gIEBJbnB1dCgpIG5hbWU/OiBzdHJpbmdcclxuICBASW5wdXQoKSBuYW1lRm9udD86IHN0cmluZ1xyXG4gIEBJbnB1dCgpIGJvdHRvbUxhYmVsPzogc3RyaW5nXHJcbiAgQElucHV0KCkgY3VzdG9tRGlzcGxheUxhYmVsPzogc3RyaW5nXHJcbiAgQElucHV0KCkgYm90dG9tTGFiZWxGb250Pzogc3RyaW5nXHJcbiAgQElucHV0KCkgY3VzdG9tQm90dG9tTGFiZWxNYXJnaW4/OiBzdHJpbmdcclxuXHJcbiAgcHVibGljIG5hbWVNYXJnaW46IHN0cmluZ1xyXG4gIHB1YmxpYyBib3R0b21MYWJlbE1hcmdpbjogc3RyaW5nXHJcblxyXG4gIHByaXZhdGUgZWxlbWVudFxyXG4gIHByaXZhdGUgZ2F1Z2VDaGFydDogYW55XHJcbiAgcHJpdmF0ZSBvbGRPcHRpb25zXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY2FsY3VsYXRlIHN0eWxlcyBmb3IgbmFtZSBhbmQgYm90dG9tTGFiZWxcclxuICAgIGlmICh0aGlzLm5hbWUpIHtcclxuICAgICAgaWYgKCF0aGlzLm5hbWVGb250KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lRm9udCA9ICcnICsgTWF0aC5yb3VuZCh0aGlzLmNhbnZhc1dpZHRoIC8gMTUpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5uYW1lTWFyZ2luID0gJycgKyBNYXRoLnJvdW5kKCt0aGlzLm5hbWVGb250IC8gNClcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5ib3R0b21MYWJlbCkge1xyXG4gICAgICBpZiAoIXRoaXMuYm90dG9tTGFiZWxGb250KSB7XHJcbiAgICAgICAgdGhpcy5ib3R0b21MYWJlbEZvbnQgPSAnJyArIE1hdGgucm91bmQodGhpcy5jYW52YXNXaWR0aCAvIDEwKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5jdXN0b21Cb3R0b21MYWJlbE1hcmdpbikge1xyXG4gICAgICAgIHRoaXMuYm90dG9tTGFiZWxNYXJnaW4gPSAnLScgKyB0aGlzLmJvdHRvbUxhYmVsRm9udFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYm90dG9tTGFiZWxNYXJnaW4gPSB0aGlzLmN1c3RvbUJvdHRvbUxhYmVsTWFyZ2luXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmN1c3RvbURpc3BsYXlMYWJlbCkge1xyXG4gICAgICAgIHRoaXMuY3VzdG9tRGlzcGxheUxhYmVsID0gJ2Jsb2NrJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9uc0NoZWNrKCkpIHtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5nYXVnZUFyZWEubmF0aXZlRWxlbWVudFxyXG4gICAgICB0aGlzLmRyYXdDaGFydCgpXHJcbiAgICB9XHJcbiAgICB0aGlzLm9sZE9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMub3B0aW9ucykpXHJcbiAgfVxyXG5cclxuICBvcHRpb25zQ2hlY2soKSB7XHJcbiAgICBpZiAodGhpcy5jYW52YXNXaWR0aCA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignZ2F1Z2UtY2hhcnQgd2FybmluZzogY2FudmFzV2lkdGggaXMgbm90IHNwZWNpZmllZCEnKVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNhbnZhc0hlaWdodCA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignZ2F1Z2UtY2hhcnQgd2FybmluZzogY2FudmFzV2lkdGggaXMgbm90IHNwZWNpZmllZCEnKVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0gZWxzZSBpZiAodGhpcy5uZWVkbGVWYWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignZ2F1Z2UtY2hhcnQgd2FybmluZzogbmVlZGxlVmFsdWUgaXMgbm90IHNwZWNpZmllZCEnKVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNlbnRyYWxMYWJlbCA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuY2VudHJhbExhYmVsID0gJydcclxuICAgIH1cclxuICAgIHRoaXMuY2FudmFzSGVpZ2h0ICs9IDEwXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgaWYgKCF0aGlzLmFyZUVxdWFsKHRoaXMub3B0aW9ucywgdGhpcy5vbGRPcHRpb25zKSkge1xyXG4gICAgICB0aGlzLmRyYXdDaGFydCh0cnVlKVxyXG4gICAgICB0aGlzLm9sZE9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMub3B0aW9ucykpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcmVFcXVhbChvYmoxLCBvYmoyKSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqMSkgPT09IEpTT04uc3RyaW5naWZ5KG9iajIpXHJcbiAgfVxyXG5cclxuICBkcmF3Q2hhcnQocmVkcmF3ID0gdHJ1ZSkge1xyXG4gICAgaWYgKHJlZHJhdyAmJiB0aGlzLmdhdWdlQ2hhcnQpIHtcclxuICAgICAgdGhpcy5nYXVnZUNoYXJ0LnJlbW92ZUdhdWdlKClcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9ucy5jZW50cmFsTGFiZWwgPSB0aGlzLmNlbnRyYWxMYWJlbFxyXG4gICAgdGhpcy5nYXVnZUNoYXJ0ID0gR2F1Z2VDaGFydC5nYXVnZUNoYXJ0KFxyXG4gICAgICB0aGlzLmVsZW1lbnQsXHJcbiAgICAgIHRoaXMuY2FudmFzV2lkdGgsXHJcbiAgICAgIHRoaXMub3B0aW9ucyxcclxuICAgIClcclxuICAgIHRoaXMuZ2F1Z2VDaGFydC51cGRhdGVOZWVkbGUodGhpcy5uZWVkbGVWYWx1ZSlcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLm5lZWRsZVZhbHVlICYmICFjaGFuZ2VzLm5lZWRsZVZhbHVlLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMubmVlZGxlVmFsdWUgPSBjaGFuZ2VzLm5lZWRsZVZhbHVlLmN1cnJlbnRWYWx1ZVxyXG5cclxuICAgICAgdGhpcy5nYXVnZUNoYXJ0LnJlbW92ZUdhdWdlKCk7XHJcbiAgICAgIHRoaXMuYm90dG9tTGFiZWwgPSB0aGlzLmNlbnRyYWxMYWJlbCA9IHRoaXMub3B0aW9ucy5ib3R0b21MYWJlbFxyXG4gICAgICA9IHRoaXMub3B0aW9ucy5jZW50cmFsTGFiZWwgPSAnJyArIHRoaXMubmVlZGxlVmFsdWUgKyAnLycgKyB0aGlzLnRvdGFsVmFsdWU7XHJcbiAgICAgIHRoaXMuZ2F1Z2VDaGFydCA9IEdhdWdlQ2hhcnQuZ2F1Z2VDaGFydCh0aGlzLmVsZW1lbnQsIHRoaXMuY2FudmFzV2lkdGgsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5hcmNEZWxpbWl0ZXJzWzBdID0gTWF0aC5mbG9vcigxMDAgKiB0aGlzLm5lZWRsZVZhbHVlIC8gdGhpcy50b3RhbFZhbHVlKTtcclxuICAgICAgdGhpcy5nYXVnZUNoYXJ0LnVwZGF0ZU5lZWRsZSh0aGlzLm5lZWRsZVZhbHVlKTtcclxuXHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5jZW50cmFsTGFiZWwgJiYgIWNoYW5nZXMuY2VudHJhbExhYmVsLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuY2VudHJhbExhYmVsID0gY2hhbmdlcy5jZW50cmFsTGFiZWwuY3VycmVudFZhbHVlXHJcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==