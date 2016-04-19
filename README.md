## Template Engines in Express.js

## Tips for writing the README.md file
[Read github guide here](https://help.github.com/articles/basic-writing-and-formatting-syntax/)

## Common template languages
* Common template languages like jade or ejs
* npm install --save jade
```
app.set('views', '/views');
app.set('view engine', 'jade');
```

## Uncommon template languages: consolidate.js
* To use not so common template languages like swig, we will use the module consolidate.js
* npm install --save handlebars
```
app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');
```

## Use multiple template engines in the same project
