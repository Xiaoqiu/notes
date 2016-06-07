```javascript
var html1 = '' // 此处用一个空字符串，以便整个HTML片段都在新行严格对齐
	+ '<article>'
	+     '<h1>Title here</h1>'
	+     '<p>This is a paragraph</p>'
	+     '<footer>Complete</footer>'
	+ '</article>';

// 也可使用数组来进行拼接，相对 + 更容易调整缩进。
var html2 = [
	'<article>',
		'<h1>Title here</h1>',
		'<p>This is a paragraph</p>',
		'<footer>Complete</footer>',
	'</article>'
];
htm2 = html2.join('');

var html3 = '\
	<article>\
		<h1>Title here</h1>\
		<p>This is a paragraph</p>\
		<footer>Complete</footer>\
	</article>';

var html4 = `
	<article>
		<h1>Title here</h1>
		<p>This is a paragraph</p>
		<footer>Complete</footer>
	</article>`;

console.log(html3);
console.log(html4);

```
