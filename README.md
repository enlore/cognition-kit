# Cognition Starter Pack
## Razor Edition

Doing Occam proud.

## Use It

Download the [latest release](https://github.com/enlore/cognition-vanilla/releases).
Unzip it, and move down into its newly created directory.

Then, from a shell/command prompt opened up in that same dir:

    npm install
    gulp

Now gulp is serving your SPA at [localhost:3000](http://localhost:3000).

Hack on the stuff in `public` and make a totally sweet, game changing app or whatever.

## Optionally

Pass things via env vars:

    PORT=4000 gulp

Now gulp is serving your project at [localhost:4000](http://localhost:4000). UH mazing.

## Fun for the Whole Family

You got Chrome? No? Do that.

Ok, now try this [livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).
All it does is inject a spot of javascript into your page (when it's turned on)
that causes the client to listen to the server for notice. When the server says
so, the client will reload the page.

By default, the webserver that runs this app has the `livereload` option
enabled, so use it!

## Going Forward

Drop a `css`, `img`, `assets`, whatever directory in `public` and put things in
them. There's no magic involved in building out the `.html` files, so you'll
have to add the appropriate markup (in your `index.html` file, or wherever)
to reference your various static assets.

Add more javascript and css dependencies in the `vendor/js` and `vendor/css`
directories, and gulp will copy them over.  If they don't copy right when you
drop them in, restart the gulp process.

This boilerplate places your app files in the `public/app` directory. See this
line:

    <script>$.cognition.init($("#cog-root"), "/app/index.html");</script>

After loading in cognition, the `cognition.init()` method takes a jQuery selector
and a path.  The path, that second arg, references the app's entry point, the
first ancestor cog, the genesis cog, the progenitor.
