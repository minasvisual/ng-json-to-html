
angular.module('ng-json-html', [])

.directive('dynamic', function ($compile) {
  var attrRender = function(data){
      return data.replace(/\./g, 'class=').replace(/\#/g,'id=').replace(/\@/g,'href=').replace(/\|/g,' ');
  }
  var convert = function(json){
      var html = '';
			angular.forEach(json, function(item, index)
			{ 
			    html += "<"+attrRender(index)+">";
			    if( typeof item == "string" ) html += item;
          if( Array.isArray(item) ) html += item.reduce(function(prev, val){
              return prev + convert(val);
          }, ''); 
          if( item instanceof Object && !Array.isArray(item) ) html += convert( item );
			    html += "</"+index.split('|')[0]+">";
			})
      return html;
  }
	return {
		restrict: 'A',
		replace: true,
		link: function (scope, ele, attrs) {
			scope.$watch(scope, function() {
				ele.html(convert(scope[attrs.dynamic]));
				$compile(ele.contents())(scope);
			});
		}
	};
});