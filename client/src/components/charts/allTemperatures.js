import React, {
    Component
} from 'react';

import ReactApexChart from 'react-apexcharts';

// Chart to show the temperature readings from each chart
export class AllTemperatureChart extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // data for each series
            series: [
                {
                    // device 1 temperature 
                    name: 'Device1',
                    type: 'line',
                    data: '', // TODO: add data
                }, 
                {
                    // device 2 temperature
                    name: 'Device2',
                    type: 'line',
                    data: '', // TODO: add data
                }, 
                {
                    // device 3 temperature
                    name: 'Device3',
                    type: 'line',
                    data: '', // TODO: add data
                }, 
                {
                    // as many for each device
                },
            ],
            // Chart styling
            options: {
                chart: {
                    height: 380,
                    type: 'line',
                    foreColor: '#9f9ea4',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false,
                    }
                },
                  colors: ['#4090cb', '#e74c5e', '#47bd9a', ],
                  dataLabels: {
                      enabled: false
                  },
                  //   stroke: {
                  //     width: [3, 4, 3],
                  //     curve: 'straight',
                  //     dashArray: [0, 8, 5]
                  //   },
                  title: {
                      text: 'Pressure From All Devices',
                      align: 'left'
                  },
                  markers: {
                      size: 0,

                      hover: {
                          sizeOffset: 6
                      }
                  },
                  xaxis: {
                      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                          '10 Jan', '11 Jan', '12 Jan'
                      ],
                  },
                  tooltip: {
                      enabled: true,
                      shared: true,
                      y: [{
                          title: {
                              formatter: function (val) {
                                  return val;
                              }
                          }
                      }, {
                          title: {
                              formatter: function (val) {
                                  return val;
                              }
                          }
                      }, {
                          title: {
                              formatter: function (val) {
                                  return val;
                              }
                          }
                      },]
                  },
                  grid: {
                      borderColor: '#f1f1f1',
                  }
            },
        };
    }
    render() {
        return ( 
            <div className = 'app' >
                <div className = 'row' >
                    <div className = 'mixed-chart' >
                        <ReactApexChart 
                            options = {this.state.options}
                            series = {this.state.series}
                            type = 'line'
                            width = '500' 
                        />
                    </div> 
                </div> 
            </div>
        );
    }
}

export default AllTemperatureChart