import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
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
  ngOnInit(): void {}
  @ViewChild('chart') chart?: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  @ViewChild('areaChart') areaChart?: ChartComponent; // ViewChild for area chart
  public areaChartOptions!: Partial<ChartOptions>; // Separate options for area chart

  @ViewChild('Financial') financial!: ElementRef;
  @ViewChild('numOfUsers') numOfUsers!: ElementRef;
  @HostListener('window:scroll')
  onWindowScroll() {
    if (scrollY > this.financial.nativeElement.offsetTop - 500) {
      this._Renderer.setStyle(this.financial.nativeElement, 'opacity', 1);
      this._Renderer.setStyle(this.numOfUsers.nativeElement, 'opacity', 1);
      this._Renderer.setStyle(
        this.financial.nativeElement,
        'transition',
        '0.5s ease-in-out'
      );
      this._Renderer.setStyle(
        this.numOfUsers.nativeElement,
        'transition',
        '0.5s ease-in-out'
      );
    } else {
      this._Renderer.setStyle(this.financial.nativeElement, 'opacity', 0.3);
      this._Renderer.setStyle(this.numOfUsers.nativeElement, 'opacity', 0.3);
      this._Renderer.setStyle(
        this.financial.nativeElement,
        'transition',
        '0.5s ease-in-out'
      );
      this._Renderer.setStyle(
        this.numOfUsers.nativeElement,
        'transition',
        '0.5s ease-in-out'
      );
    }
  }
  constructor(private _Renderer: Renderer2) {
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
          columnWidth: '40%',
          // Set rounded corners with radius property
          borderRadius: 8, // Adjust the radius value for desired roundness
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

    // Define options for the area chart
    this.areaChartOptions = {
      series: [
        {
          name: 'Number of Users', // Matches the image
          data: [180, 250, 150, 180, 220, 170, 180, 160, 190, 250, 260, 250], // Placeholder data, update with actual values
          color: '#ffc107',
        },
      ],
      chart: {
        type: 'area',
        height: 350,
      },
      plotOptions: {},
      dataLabels: {
        enabled: true, // Enable data labels
        formatter: function (val: number, opts: any) {
          return val + ''; // Remove '%' if there are no percentages
        },
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
        ], // Adjust if there are more months
      },
      yaxis: {
        title: {
          text: 'Number of Users', // Matches the image
        },
        labels: {
          formatter: function (val: number) {
            return val.toFixed(0); // Assuming no decimals in the image
          },
        },
      },
      // ... other options
    };
  }
}
