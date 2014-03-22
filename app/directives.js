angular.module('assignment.directives', []).
 directive('barsChart', function ($parse) {
     
     var directiveDefinitionObject = {
         //We restrict its use to an element
         restrict: 'E',
         //we don't want to overwrite our directive declaration in the HTML mark-up
         replace: false,
         //our data source would be an array passed thru chart-data attribute
         scope: {data: '=chartData'},
         link: function (scope, element, attrs) {

          var ChartBarsViewsForHours  =  dc.barChart(element[0].childNodes.item(3));
          var ChartPieViewsForTopPlayer   = dc.pieChart(element[0].childNodes.item(7));

          var ndx = crossfilter(scope.data); 
          
          var dateDim = ndx.dimension(function(d) {return d.dateTime;});
          var hourViews = dateDim.group().reduceSum(function(d) {return d.views;});         

          ChartBarsViewsForHours.width(620)
              .height(250)
              .margins({top: 30, right: 50, bottom: 30, left: 60})
              .dimension(dateDim)
              .group(hourViews)
              .elasticY(true)
              .centerBar(true)
              .gap(1)
              .round(dc.round.floor)
              .alwaysUseRounding(true)
              .x(d3.scale.linear().domain([-1, 23]))
              .yAxisLabel("Views for Hours")
              .xAxisLabel("Hours")
              .renderHorizontalGridLines(true);
            
              ChartBarsViewsForHours.yAxis().ticks(10);  

              var topPlayerDim  = ndx.dimension(function(d) {return d.topPlayer;});
              var topPlayerViews = topPlayerDim.group().reduceSum(function(d) {return d.views;});

              ChartPieViewsForTopPlayer
                  .width(250).height(200)
                  .dimension(topPlayerDim)
                  .group(topPlayerViews)
                  .innerRadius(50);            

              dc.renderAll();
         } 
      };
      return directiveDefinitionObject;
   });