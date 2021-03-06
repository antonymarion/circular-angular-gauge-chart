/**
 * Angular 2 decorators and services
 */
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
  DoCheck,
} from '@angular/core'
import * as GaugeChart from 'gauge-chart'

/**
 * GaugeChart Component
 */
@Component({
  selector: 'circular-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css'],
})
export class GaugeChartComponent implements OnInit, OnChanges, DoCheck {
  @ViewChild('gaugeArea', { static: true }) gaugeArea

  @Input() canvasWidth: number
  @Input() canvasHeight: number
  @Input() needleValue: number
  @Input() totalValue: number
  @Input() centralLabel: string
  @Input() options
  @Input() wrapOptions?
  @Input() name?: string
  @Input() nameFont?: string
  @Input() bottomLabel?: string
  @Input() customDisplayLabel?: string
  @Input() bottomLabelFont?: string
  @Input() customBottomLabelMargin?: string

  public nameMargin: string
  public bottomLabelMargin: string

  private element
  private gaugeChart: any
  private oldOptions

  ngOnInit() {
    // calculate styles for name and bottomLabel
    if (this.name) {
      if (!this.nameFont) {
        this.nameFont = '' + Math.round(this.canvasWidth / 15)
      }
      this.nameMargin = '' + Math.round(+this.nameFont / 4)
    }

    if (this.bottomLabel) {
      if (!this.bottomLabelFont) {
        this.bottomLabelFont = '' + Math.round(this.canvasWidth / 10)
      }
      if (!this.customBottomLabelMargin) {
        this.bottomLabelMargin = '-' + this.bottomLabelFont
      } else {
        this.bottomLabelMargin = this.customBottomLabelMargin
      }
      if (!this.customDisplayLabel) {
        this.customDisplayLabel = 'block'
      }
    }

    if (this.optionsCheck()) {
      this.element = this.gaugeArea.nativeElement
      this.drawChart()
    }
    this.oldOptions = JSON.parse(JSON.stringify(this.options))
  }

  optionsCheck() {
    if (this.canvasWidth == null) {
      console.warn('gauge-chart warning: canvasWidth is not specified!')
      return false
    }
    if (this.canvasHeight == null) {
      console.warn('gauge-chart warning: canvasWidth is not specified!')
      return false
    } else if (this.needleValue == null) {
      console.warn('gauge-chart warning: needleValue is not specified!')
      return false
    }
    if (this.centralLabel == null) {
      this.centralLabel = ''
    }
    this.canvasHeight += 10
    return true
  }

  ngDoCheck() {
    if (!this.areEqual(this.options, this.oldOptions)) {
      this.drawChart(true)
      this.oldOptions = JSON.parse(JSON.stringify(this.options))
    }
  }

  areEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
  }

  drawChart(redraw = true) {
    if (redraw && this.gaugeChart) {
      this.gaugeChart.removeGauge()
    }
    this.options.centralLabel = this.centralLabel
    this.options.arcDelimiters[0] > 99 ? this.options.arcDelimiters[0] = 99 : ''
    this.options.arcDelimiters[0] < 1 ? this.options.arcDelimiters[0] = 1 : ''
    this.gaugeChart = GaugeChart.gaugeChart(
      this.element,
      this.canvasWidth,
      this.options,
    )
    this.gaugeChart.updateNeedle(this.needleValue)
  }

  ngOnChanges(changes) {
    if (changes.needleValue && !changes.needleValue.firstChange) {
      this.needleValue = changes.needleValue.currentValue

      this.gaugeChart.removeGauge()
      this.bottomLabel = this.centralLabel = this.options.bottomLabel = this.options.centralLabel =
        '' + this.needleValue + '/' + this.totalValue
      this.gaugeChart = GaugeChart.gaugeChart(
        this.element,
        this.canvasWidth,
        this.options,
      )

      const arcDelimiterValue = Math.floor(
        (100 * this.needleValue) / this.totalValue,
      )
      this.options.arcDelimiters[0] =
        arcDelimiterValue > 100 ? 99 : arcDelimiterValue
      this.options.arcDelimiters[0] < 1 ? this.options.arcDelimiters[0] = 1 : ''

      this.gaugeChart.updateNeedle(this.needleValue)
    }
    if (changes.centralLabel && !changes.centralLabel.firstChange) {
      this.centralLabel = changes.centralLabel.currentValue
      this.drawChart(true)
    }
  }
}
