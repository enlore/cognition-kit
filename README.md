# Cognition Starter Pack
## Razor Edition

Doing Occam proud.

## Use It

_First, dig it out of_ `node_modules/cognition-kit`. Assuming you're in your app
dir with a shell, maybe do a `cp -r node_modules/cognition-kit/* .`. Then you
can follow the directions below.

I'm working on a solution to make that process automatic.  Check back later.

Download the [latest release](https://github.com/enlore/cognition-vanilla/releases).
Unzip it, and move down into its newly created directory.


Then, from a shell/command prompt opened up in that same dir:

    # if you haven't already, install gulp globally
    sudo npm install --global gulp

    # next, install the dependencies for the project
    npm install

    # finally, run the project
    gulp

Now gulp is serving your SPA at [localhost:3000](http://localhost:3000).

Hack on the stuff in `src` and make a totally sweet, game changing app or whatever.

## Optionally

This build file responds to several options.

```sh
    # defaults are given here

    PORT=3000     # switch up the port you'd like to bind to
    RELOAD=true   # turn livereload on or off by passing "true" or "false"
    PREFIX=false  # enable inline css prefixing via the html-autoprefixer postcss module

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

This boilerplate places your app files (cogs) in the `dist/app` directory. See this
line:

    <script>$.cognition.init($("#cog-root"), "/app/index.html");</script>

After loading in cognition, the `cognition.init()` method takes a jQuery selection
and a path.  The path, that second arg, references the app's entry point, the
first ancestor cog, the genesis cog, the progenitor cog. It's an absolute path
that points to `PROJECT_ROOT/dist/app/index.html`.
