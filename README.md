# ng-json-html
Convert json to html tags and angular compile data

#usage
clone repository
<pre>
    git clone https://github.com/minasvisual/ng-json-html.git
</pre>

Add script after your angular import
<pre>
<script src="./ng-json-html/ngJsonHtml.js"></script>
</pre>

Import modulo on angular app
<pre>
    var app = angular.module('myApp', ['ng-json-html']);
</pre>

Set dynamic attribute on your content div
<pre>
    <div dynamic="myjson"></div>
</pre>