# Angular MDC Tinplate by Ahmed
> Cloned in Sambodia 2018.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5 to serve as an Angular learning experience &mdash; a Sambodian work in ordem e progreso. See «Development Notes» below

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. This project has generated a good number. Feel free to trim the fat.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Development Notes

Building this app generated some familiar errors at various times. More on that. I have notes somewhere.

But now how to get your theme party going.

Edit the `_variables.scss` file under `@angular-mdc/theme/scss` and set hex values for `$mdc-theme-primary` and `$mdc-theme-accent`.

In `theme/scss` again navigate to `typography/variables.scss` and trade the ubiquitous Roboto for the elegant "News Cycle" &mdash; but only if you want to. You can pull this font in with a link in the head of `src/index.html`.

Or you can edit the styles.scss file under `src` ...

```
$mdc-theme-primary: #607d8b; // my favorite blue-grey
$mdc-theme-secondary: #ffffe0; // some secondary yellow-gold

@import "~@angular-mdc/theme/material";

```

Run `ng build` in the root of your project.

Run `ng serve` in the root of your project.

I have had difficulty implementing [MDC Grid List](https://github.com/material-components/material-components-web/tree/master/packages/mdc-grid-list) and so have messed with fair number of third-party plugins, such as [Frow](https://frowcss.com/getting-started.html).

I miss the helper classes you often find in Material Design projects and so have pulled in [the Vuetify CDN](https://vuetifyjs.com/en/getting-started/quick-start#cdn-install) which works well for this purpose.
	
