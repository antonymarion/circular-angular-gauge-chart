/**
 * Angular 2 decorators and services
 */
import { OnChanges, OnInit, DoCheck } from '@angular/core';
import * as i0 from '@angular/core';
/**
 * GaugeChart Component
 */
export declare class GaugeChartComponent implements OnInit, OnChanges, DoCheck {
    static ɵfac: i0.ɵɵFactoryDef<GaugeChartComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GaugeChartComponent, 'circular-gauge-chart', never, { 'canvasWidth': 'canvasWidth'; 'canvasHeight': 'canvasHeight'; 'needleValue': 'needleValue'; 'centralLabel': 'centralLabel'; 'options': 'options'; 'wrapOptions': 'wrapOptions'; 'name': 'name'; 'nameFont': 'nameFont'; 'bottomLabel': 'bottomLabel'; 'customDisplayLabel': 'customDisplayLabel'; 'bottomLabelFont': 'bottomLabelFont'; 'customBottomLabelMargin': 'customBottomLabelMargin'; }, {}, never>;
    gaugeArea: any;
    canvasWidth: number;
    canvasHeight: number;
    needleValue: number;
    centralLabel: string;
    options: any;
    wrapOptions?: any;
    name?: string;
    nameFont?: string;
    bottomLabel?: string;
    customDisplayLabel?: string;
    bottomLabelFont?: string;
    customBottomLabelMargin?: string;
    nameMargin: string;
    bottomLabelMargin: string;
    private element;
    private gaugeChart;
    private oldOptions;
    ngOnInit(): void;
    optionsCheck(): boolean;
    ngDoCheck(): void;
    areEqual(obj1: any, obj2: any): boolean;
    drawChart(redraw?: boolean): void;
    ngOnChanges(changes: any): void;
}
