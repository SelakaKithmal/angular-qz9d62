import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <p>
            A sparkline is a very small chart
            <kendo-sparkline [data]="data">
            </kendo-sparkline>
            , drawn without axes, coordinates or other supportive elements.
        </p>
        <p>
            While sparklines are typically Line Charts
            <kendo-sparkline [data]="data">
            </kendo-sparkline>
            , they can also be rendered as:
        <p>
        <ul>
          <li>
            Bar/Column Chart
            <kendo-sparkline [data]="data" type="column">
            </kendo-sparkline>
          </li>
          <li>
            Area Chart
            <kendo-sparkline [data]="data" type="area">
            </kendo-sparkline>
          </li>
          <li>
            Pie Chart
            <kendo-sparkline [data]="pieData" type="pie">
            </kendo-sparkline>
          </li>
          <li>
            Bullet Chart
            <kendo-sparkline [data]="bulletData" type="bullet" [valueAxis]="bulletValueAxis">
            </kendo-sparkline>
          </li>
        </ul>
    `
})
export class AppComponent {
    public data: any[] = [
        936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007
    ];

    public pieData: any[] = [1, 2, 3];
    public bulletData: any[] = [21, 23];
    public bulletValueAxis: any = {
        min: 0,
        max: 30,
        plotBands: [{
            from: 0, to: 15, color: '#787878', opacity: 0.15
        }, {
            from: 15, to: 22, color: '#787878', opacity: 0.3
        }, {
            from: 22, to: 30, color: '#787878', opacity: 0.15
        }]
    };
}
