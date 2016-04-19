exports.index = function(req, res) {
    res.render('index.html', {name: 'Gumersindo'});
};

exports.indexJade = function(req, res) {
    res.render('index.jade', {name: 'Gualberto'});
};