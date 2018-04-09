
angular.module('ng-json-html', [])

.directive('dynamic', function ($compile) {
	var attrRender = function(data){
		var rtn = data.split('|').map(function(item){
		  if( item.indexOf('=') == -1 )
			return item.replace(/\.\[/, 'class="').replace(/\#\[/,'id="').replace(/\@\[/,'href="').replace(/\]/,'"').replace(/\|/g,' ');
		  else
			return item.replace(/\|/g,' ');
		})
		return rtn.join(' ');
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
			  scope.$watchCollection( attrs.dynamic, function(data) {
				  ele.html( convert(data) );
				  $compile(ele.contents())(scope);
			  });
		  }
	  };
});