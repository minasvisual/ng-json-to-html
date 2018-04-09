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

Import module on angular app
<pre>
var app = angular.module('myApp', ['ng-json-html']);
</pre>

create your json tree
<pre>
$scope.myJson = { 
    "h1|.[bg-warning]|#[title]":"{{ nameVar }}", 
    "div|ng-if=[nameVar != 'Hello World']":{ 
        "h4":'Sub Item', 
        'p':"Descrição etc e tal"
    }, 
    'ul|.[list-group]':[
        {'li|.[list-group-item]':
            { "a":"item 1", "i|.[fa fa-plus]":"icon"} 
        }, 
        {'li|.[list-group-item]':"item 2"}
    ]  
};
</pre>

Set dynamic attribute on your content div
```xml
<div dynamic="myjson">\</div>
```

Syntax:

Object key:
{
    "<TAG name>|<attribute>|<attribute>|.." 
}

.[] = class=""<br>
\#[] = id=""<br>
\@[] = href=""<br>
<any>[] can be defined normaly <any>=""

# Troubleshoot

Object keys of json need to be unique in the same level of tree. Define a id or class to be unique in this case:

<pre>
{
    "div|#[1]": "my div",
    "div|#[2]": "my div 2"
}
</pre> 

Author:
Ulisses Mantovani <contato@minasvisual.com> 
www.megagencia.com.br
