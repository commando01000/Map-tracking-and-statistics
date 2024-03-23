import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-Dashboard-Page',
  templateUrl: './Dashboard-Page.component.html',
  styleUrls: ['./Dashboard-Page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  @ViewChild('chart') chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Expense',
          data: [
            16000, 15000, 12000, 10000, 8000, 10000, 15000, 12000, 9000, 11000,
            14000, 16000,
          ],
          color: '#ffc107',
        },
        {
          name: 'Revenue',
          data: [
            25000, 22000, 18000, 15000, 12000, 16000, 20000, 18000, 13000,
            15000, 19000, 22000,
          ],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        title: {
          text: 'Month',
        },
      },
      yaxis: {
        title: {
          text: 'Amount',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return '$' + val + ' thousands';
          },
        },
      },
      legend: {
        horizontalAlign: 'left',
        position: 'bottom',
      },
    };
  }

  ngOnInit() {}
}
