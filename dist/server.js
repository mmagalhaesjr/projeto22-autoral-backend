import app, { init } from '@/app';

var port = +process.env.PORT || 4000;
init().then(function () {
    app.listen(port, function () {
        /* eslint-disable-next-line no-console */
        console.log("Server is listening on port ".concat(port, "."));
    });
});
