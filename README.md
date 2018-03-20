# IMPORTANT NOTICE
Feel free to clone and reuse any code with a mention to me if it really helped you out.

### BUT
Do not use any of the visuals on this site at all.  This is a portfolio piece in itself wide open for evaluation but not to steal.

# pocketninjadesign
Repo for my porfolio website which in itself is a portfolio entry

## To run

1. Open 3 terminals
2. Terminal 1: run `$ gulp`
3. Terminal 2: run `$ npm run build`
4. Terminal 3: run `$ npm run serve`

and off you go.

## Tech used:

1. Gulp
   * gulp-twig
2. Webpack / Babel / ES6
   * axios
3. Testing
   * Eslint
   * Jest
4. jqlite
5. Greensock


### Gulp

Currently used for pulling the site data and generating the portfolio page templates. These landing pages then hook up with the Javascript and continue as a single page application.

### Webpack / Babel / ES6

Used for generating all of the lovely code

### Testing

**ESlint**

is used for code format checking

```
$ npm lint
```

**jest**

Currently creating the tests using the amazingly simple Jest

```
$ npm test
```


### jqlite

Just need that connection with jQuery mannnnnnn :-P

### Greensock

Never used it before but it worked out very nicely for the basic slide in of the peekaboo code and has it's own callback / promises so I don't need to use the Animate start finished methods I created.

My next project will be animating the logo which in flash would be very easy but in the world of none flash the world of aching (balls / overies) prevails.