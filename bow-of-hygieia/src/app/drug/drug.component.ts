import { Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import { FdaService } from '../fda.service'

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


declare let d3: any;



@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['../../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation: ViewEncapsulation.None
})
export class DrugComponent implements OnInit {


  public drugList: string[];
  public openFdaLabel;
  public openFdaLabelKeys: string[];
  public drugLabel;
  public drugLabelKeys: string[];
  public labelNotFound: string;

  public chartTitle: string;

  public chartShow = 0;

  chartOptions = {
    chart: {
        type: 'multiBarHorizontalChart',
        height: 450,
        useInteractiveGuideline: false,
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showControls: false,
        showValues: true,
        transitionDuration: 1000,
        valueFormat: function (n){return d3.format(',')(n);},
        showYAxis:false,
        tooltipContent: function(key, x, y, e, graph){return '<center><span class="tooltipUpper">'+key+'</span><br>'+x+': '+y+'</center>'},
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 50
        },
        xAxis: {
            showMaxMin: false,
        },
        yAxis: {
          axisLabel: 'Incident Count',
          tickFormat: function(d){
            return d3.format(',')(d);
          },
          showMaxMin: false
        },
      }


  };


  chartData = [
          {
              "key": 'Serious Incidents',
              "color": "#d62728",
              "values": [
              ]
          },
          {
              "key": 'Not Serious Incidents',
              "color": "#1f77b4",
              "values": [
              ]
          }
      ];


  public model: string;

  constructor(private fdaService : FdaService) {}

  ngOnInit() {
    this.getDrugList();
  }

  getDrugList(): void {
    this.fdaService.getDrugList()
      .subscribe(data => (this.drugList = data.results.map(function(item){return item.term.toLowerCase();})));
  }



  getChart(): void {

    var maxTextLength=function(a, b) { return Math.max(a, b.label.length);};
    var chartValues1;
    var chartValues2;
    var chartHeight1;
    var chartHeight2;
    var drug=this.model.replace(' ', '+');

    this.fdaService.getChart1(drug).subscribe(data1 => {
      var results = data1.results;
      console.log(results);
      var resultCount=results.length;
      chartHeight1=resultCount*50;
      chartValues1=results.map(function(item) {return {"label":item.term.toLowerCase(), "value":Math.floor(item.count)};});
      var maxEffectLength=chartValues1.reduce(maxTextLength, 0);
      this.fdaService.getChart2(drug).subscribe(data2 => {
        var results=data2.results;
//                console.log(results);
        var resultCount=results.length;
        chartHeight2=resultCount*50;
        chartValues2=results.map(function(item) {return {"label":item.term.toLowerCase(), "value":Math.floor(item.count)};});
        maxEffectLength= chartValues2.reduce(maxTextLength,maxEffectLength);
        this.chartData[0].values=chartValues1;
//           $scope.chartData[0].key="Side Effect Count1";
        this.chartData[1].values=chartValues2;
//           $scope.chartData[1].key="Side Effect Count2";
        this.chartOptions.chart.height=chartHeight1+chartHeight2;
        this.chartTitle="Reported Side Effects Related to "+this.model;
        if (!this.chartShow)
            this.chartShow=this.chartShow+1;
      });
      maxEffectLength=Math.ceil(maxEffectLength*4.7);
      if (maxEffectLength>120)
          maxEffectLength=120;
      //this.paddingForLabel=maxEffectLength;
      //var cD;
      //cD = this.chartData.slice();
      //this.chartData = cD;
      //this.chartOptions = Object.assign({}, this.chartOptions);
      // this.chartData = this.chartData.slice();
      // this.chartOptions = Object.assign({}, this.chartOptions);
      console.log(this.chartData);
      this.chartShow = 0;
    });
  ;

    this.fdaService.getLabel(drug).subscribe(labelData=>{
      console.log(labelData);
      if (labelData.length == 0)
        this.labelNotFound = "No labeling information is found for "+this.model;
      else {
        var results=labelData.results[0];
        console.log(results);

        this.openFdaLabel=results.openfda;
        this.openFdaLabelKeys = Object.keys(this.openFdaLabel);
        console.log("openfda");
        console.log(results.openfda);
        console.log("openfdakeys");
        console.log(this.openFdaLabelKeys);
        delete results.openfda;
  //            delete results.set_id;
  //            delete results.id;
  //            delete results.effective_time;
        this.drugLabel=results;
        this.drugLabelKeys = Object.keys(this.drugLabel);
        this.labelNotFound=undefined;
      }
    });

  }

  formatLabel=function(val) {
      var result;
      if (typeof val !=="object")
          return val;
      for (var i=0; val.length && i<val.length; i++) {
          result =result?result+", "+val[i]:val[i];
      }
      return result?result:val;
  };


  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.drugList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 8));


  // getDrugTermList():void {
  //   for (let drug of this.drugList){}
  // }






}
