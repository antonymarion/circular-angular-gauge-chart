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
    drawChart(redraw = false) {
        if (redraw) {
            this.gaugeChart.removeGauge();
        }
        this.options.centralLabel = this.centralLabel;
        this.gaugeChart = GaugeChart.gaugeChart(this.element, this.canvasWidth, this.options);
        if (this.needleValue === 100) {
            this.needleValue = 99;
        }
        if (this.needleValue === 0) {
            this.needleValue = 1;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1nYXVnZS1jaGFydC8iLCJzb3VyY2VzIjpbImxpYi9nYXVnZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR0wsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFBO0FBQ3RCLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxDQUFBO0FBRXpDOztHQUVHO0FBTUgsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUF1QjlCLFFBQVE7UUFDTiw0Q0FBNEM7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQTthQUN2RDtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ3REO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUE7YUFDOUQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO2dCQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUE7YUFDcEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElB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QUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUE7WUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQy9DO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7WUFDN0QsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQTtZQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3JCO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFoSDJDO0lBQXpDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7O3NEQUFVO0FBRTFDO0lBQVIsS0FBSyxFQUFFOzt3REFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7O3lEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTs7d0RBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzt5REFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7O29EQUFRO0FBQ1A7SUFBUixLQUFLLEVBQUU7O3dEQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7O2lEQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7O3FEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTs7d0RBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFOzsrREFBNEI7QUFDM0I7SUFBUixLQUFLLEVBQUU7OzREQUF5QjtBQUN4QjtJQUFSLEtBQUssRUFBRTs7b0VBQWlDO0FBZDlCLG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLDJlQUEyQzs7S0FFNUMsQ0FBQztHQUNXLG1CQUFtQixDQWlIL0I7U0FqSFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBbmd1bGFyIDIgZGVjb3JhdG9ycyBhbmQgc2VydmljZXNcbiAqL1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgRG9DaGVjayxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCAqIGFzIEdhdWdlQ2hhcnQgZnJvbSAnZ2F1Z2UtY2hhcnQnXG5cbi8qKlxuICogR2F1Z2VDaGFydCBDb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2lyY3VsYXItZ2F1Z2UtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2F1Z2UtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nYXVnZS1jaGFydC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdhdWdlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgRG9DaGVjayB7XG4gIEBWaWV3Q2hpbGQoJ2dhdWdlQXJlYScsIHsgc3RhdGljOiB0cnVlIH0pIGdhdWdlQXJlYVxuXG4gIEBJbnB1dCgpIGNhbnZhc1dpZHRoOiBudW1iZXJcbiAgQElucHV0KCkgY2FudmFzSGVpZ2h0OiBudW1iZXJcbiAgQElucHV0KCkgbmVlZGxlVmFsdWU6IG51bWJlclxuICBASW5wdXQoKSBjZW50cmFsTGFiZWw6IHN0cmluZ1xuICBASW5wdXQoKSBvcHRpb25zXG4gIEBJbnB1dCgpIHdyYXBPcHRpb25zP1xuICBASW5wdXQoKSBuYW1lPzogc3RyaW5nXG4gIEBJbnB1dCgpIG5hbWVGb250Pzogc3RyaW5nXG4gIEBJbnB1dCgpIGJvdHRvbUxhYmVsPzogc3RyaW5nXG4gIEBJbnB1dCgpIGN1c3RvbURpc3BsYXlMYWJlbD86IHN0cmluZ1xuICBASW5wdXQoKSBib3R0b21MYWJlbEZvbnQ/OiBzdHJpbmdcbiAgQElucHV0KCkgY3VzdG9tQm90dG9tTGFiZWxNYXJnaW4/OiBzdHJpbmdcblxuICBwdWJsaWMgbmFtZU1hcmdpbjogc3RyaW5nXG4gIHB1YmxpYyBib3R0b21MYWJlbE1hcmdpbjogc3RyaW5nXG5cbiAgcHJpdmF0ZSBlbGVtZW50XG4gIHByaXZhdGUgZ2F1Z2VDaGFydDogYW55XG4gIHByaXZhdGUgb2xkT3B0aW9uc1xuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNhbGN1bGF0ZSBzdHlsZXMgZm9yIG5hbWUgYW5kIGJvdHRvbUxhYmVsXG4gICAgaWYgKHRoaXMubmFtZSkge1xuICAgICAgaWYgKCF0aGlzLm5hbWVGb250KSB7XG4gICAgICAgIHRoaXMubmFtZUZvbnQgPSAnJyArIE1hdGgucm91bmQodGhpcy5jYW52YXNXaWR0aCAvIDE1KVxuICAgICAgfVxuICAgICAgdGhpcy5uYW1lTWFyZ2luID0gJycgKyBNYXRoLnJvdW5kKCt0aGlzLm5hbWVGb250IC8gNClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3R0b21MYWJlbCkge1xuICAgICAgaWYgKCF0aGlzLmJvdHRvbUxhYmVsRm9udCkge1xuICAgICAgICB0aGlzLmJvdHRvbUxhYmVsRm9udCA9ICcnICsgTWF0aC5yb3VuZCh0aGlzLmNhbnZhc1dpZHRoIC8gMTApXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY3VzdG9tQm90dG9tTGFiZWxNYXJnaW4pIHtcbiAgICAgICAgdGhpcy5ib3R0b21MYWJlbE1hcmdpbiA9ICctJyArIHRoaXMuYm90dG9tTGFiZWxGb250XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJvdHRvbUxhYmVsTWFyZ2luID0gdGhpcy5jdXN0b21Cb3R0b21MYWJlbE1hcmdpblxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmN1c3RvbURpc3BsYXlMYWJlbCkge1xuICAgICAgICB0aGlzLmN1c3RvbURpc3BsYXlMYWJlbCA9ICdibG9jaydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zQ2hlY2soKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5nYXVnZUFyZWEubmF0aXZlRWxlbWVudFxuICAgICAgdGhpcy5kcmF3Q2hhcnQoKVxuICAgIH1cbiAgICB0aGlzLm9sZE9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMub3B0aW9ucykpXG4gIH1cblxuICBvcHRpb25zQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzV2lkdGggPT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKCdnYXVnZS1jaGFydCB3YXJuaW5nOiBjYW52YXNXaWR0aCBpcyBub3Qgc3BlY2lmaWVkIScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FudmFzSGVpZ2h0ID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybignZ2F1Z2UtY2hhcnQgd2FybmluZzogY2FudmFzV2lkdGggaXMgbm90IHNwZWNpZmllZCEnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZWRsZVZhbHVlID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybignZ2F1Z2UtY2hhcnQgd2FybmluZzogbmVlZGxlVmFsdWUgaXMgbm90IHNwZWNpZmllZCEnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmICh0aGlzLmNlbnRyYWxMYWJlbCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmNlbnRyYWxMYWJlbCA9ICcnXG4gICAgfVxuICAgIHRoaXMuY2FudmFzSGVpZ2h0ICs9IDEwXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuYXJlRXF1YWwodGhpcy5vcHRpb25zLCB0aGlzLm9sZE9wdGlvbnMpKSB7XG4gICAgICB0aGlzLmRyYXdDaGFydCh0cnVlKVxuICAgICAgdGhpcy5vbGRPcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm9wdGlvbnMpKVxuICAgIH1cbiAgfVxuXG4gIGFyZUVxdWFsKG9iajEsIG9iajIpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqMSkgPT09IEpTT04uc3RyaW5naWZ5KG9iajIpXG4gIH1cblxuICBkcmF3Q2hhcnQocmVkcmF3ID0gZmFsc2UpIHtcbiAgICBpZiAocmVkcmF3KSB7XG4gICAgICB0aGlzLmdhdWdlQ2hhcnQucmVtb3ZlR2F1Z2UoKVxuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMuY2VudHJhbExhYmVsID0gdGhpcy5jZW50cmFsTGFiZWxcbiAgICB0aGlzLmdhdWdlQ2hhcnQgPSBHYXVnZUNoYXJ0LmdhdWdlQ2hhcnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLmNhbnZhc1dpZHRoLFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgIClcbiAgICBpZiAodGhpcy5uZWVkbGVWYWx1ZT09PTEwMCl7XG4gICAgICB0aGlzLm5lZWRsZVZhbHVlID0gOTk7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLm5lZWRsZVZhbHVlPT09MCl7XG4gICAgICB0aGlzLm5lZWRsZVZhbHVlID0gMTtcbiAgICB9XG4gICAgdGhpcy5nYXVnZUNoYXJ0LnVwZGF0ZU5lZWRsZSh0aGlzLm5lZWRsZVZhbHVlKVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLm5lZWRsZVZhbHVlICYmICFjaGFuZ2VzLm5lZWRsZVZhbHVlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLm5lZWRsZVZhbHVlID0gY2hhbmdlcy5uZWVkbGVWYWx1ZS5jdXJyZW50VmFsdWVcbiAgICAgIHRoaXMuZ2F1Z2VDaGFydC51cGRhdGVOZWVkbGUodGhpcy5uZWVkbGVWYWx1ZSlcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY2VudHJhbExhYmVsICYmICFjaGFuZ2VzLmNlbnRyYWxMYWJlbC5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5jZW50cmFsTGFiZWwgPSBjaGFuZ2VzLmNlbnRyYWxMYWJlbC5jdXJyZW50VmFsdWVcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KHRydWUpXG4gICAgfVxuICB9XG59XG4iXX0=