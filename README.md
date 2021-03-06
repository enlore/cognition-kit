# Cognition Starter Kit
## Professional Edition

_Cause we're professionals._

This is simple boilerplate and build system that will generate a project structure
on which you can build a frontend app powered by the
[cognition-framework](https://www.npmjs.com/package/cognition-framework).

## Use It

__Note:__ You'll need to have `node >=4.0.0`.

Install `gulp` globally first.

    npm install -g gulp

This boilerplate project ships with a little cli app that currently responds
to the command `setup`, so

    ./node_modules/cognition-kit/bin/kit.js setup
    gulp

and you'll be off to the races. You can install `cognition-kit` globally and use
it, too.

    npm install -g cognition-kit
    kit setup
    gulp

This `kit` tool will populate your current working directory with the
boilerplate directories and files for a new `gulp` powered Cognition project,
and it will use `child_process.exec` to run `npm install`, pulling down the
project's dependencies.

### Coming Soon

* Pass a path like so: `kit setup path/to/project_root`, and populate the boilerplate there.
* A cog stub generator thing, so you can `kit cog path/of/new/cog.html` and save some keystrokes.
* You know, docs.

## Optionally

This build file responds to several options.

```sh
    # defaults are given here

    PORT=3000             # switch up the port you'd like to bind to
    RELOAD=true           # turn livereload on or off by passing "true" or "false"
    PREFIX=false          # enable inline css prefixing via the html-autoprefixer postcss module
    IMPORT_CSS=false      # use post css to parse @import directives

    # Running the project on port 4002 with autoprefixing enabled looks like this:
    PORT=4002 PREFIX=true gulp

```

Now gulp is serving your project at [localhost:4002](http://localhost:4002) and
handling some browser compatability crap for you. UH mazing.

## Fun for the Whole Family

Go install Chrome, then get this livereload extension thing.

Ok, now try this [livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).
All it does is inject a spot of javascript into your page (when it's turned on)
that causes the client to listen to the server for notice. When the server says
so, the client will reload the page.

By default, the webserver that runs this app has the `livereload` option
enabled, so use it!

## Going Forward

Drop a `css`, `img`, `assets`, whatever directory in `dist` and put things in
them. Add app files (or cogs, i.e. `.html` files) in `src/app`.

Add more javascript and css dependencies in the `vendor/js` and `vendor/css`
directories, and gulp will copy them over.  If they don't copy right when you
drop them in, restart the gulp process.

Everything ends up in `dist`, which is configured to be the webserver's
webroot, so write your paths to web resources accordingly.

The build system copies your app files (cogs) into the `dist/app` directory
as you hack on them.  See this line in the root `index.html` file:

    <script>$.cognition.init($("#cog-root"), "/app/app.html");</script>

After loading in Cognition, the `cognition.init()` method takes a jQuery selection
and a path.  The path, that second arg, references the app's entry point, the
first ancestor cog, the genesis cog, the progenitor cog. It's an absolute path
that points to `PROJECT_ROOT/dist/app/index.html`.

## If It Doesn't Work

The docs for the cognition-framework don't exist? Quite yet? Bear with us,
we're making them.

In the mean time, feel free to hit me up on the innerbeb:
[@enlore](https://twitter.com/enlore), my github's
[enlore](https://github.com/enlore), I'm on the NashDev slack as enlore, or
just email me at [n.e.lorenson@gmail.com](mailto:n.e.lorenson@gmail.com).

You can ask about this boilerplate kit, about the framework itself, whatever
you're feeling. I'll do my best to point you in the right direction.

