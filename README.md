# HoustonJS

HoustonJS is an ultra lightweight javascript plugin for adding a countdown to your website. Best used as a countdown on a pre-launch coming soon page.

## Installing

HoustonJs should be installed using npm like so:

```shell
npm install houstonjs
```

Sit back as it downloads... it shouldn't take long.

## Getting Started

Using HoustonJs is as simple as can be! First, be sure to load it on your page:

```
<script src="dist/js/houston.min.js"></script>
```

Then, call it like so:

```
<script>
  var callback = function() {
      console.log('Finished');
    };

    houston.countdown(new Date('01/01/2017 12:00:00 AM UTC-0500'), callback);
</script>
```

Next, set up your HTML however you'd like as long as you include a few special classes...

### Example

```
<h1 class="text-center">
  <span class="hs-days">00</span> :
  <span class="hs-hours">00</span> :
  <span class="hs-minutes">00</span> :
  <span class="hs-seconds">00</span>
</h1>
```

## License

HoustonJs is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
