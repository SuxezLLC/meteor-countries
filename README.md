# Suxez:Countries

Install this Meteor package to create a new collection called `SuxezCountries`. It contains extended data for more than 250 countries. A typical dataset looks like this:

```
SuxezCountries.findOne({cn_iso_2: 'CN'})
{ _id: 'GvJTCmYyvFjW2Dq5Y',
  uid: '46',
  pid: '0',
  deleted: '0',
  cn_iso_2: 'CN',
  cn_iso_3: 'CHN',
  cn_iso_nr: '156',
  cn_parent_territory_uid: '6',
  cn_parent_tr_iso_nr: '30',
  cn_official_name_local: '中华人民共和国'       ,
  cn_official_name_en: 'People’s Republic of China',
  cn_capital: 'Beijing',
  cn_tldomain: 'cn',
  cn_currency_uid: '34',
  cn_currency_iso_3: 'CNY',
  cn_currency_iso_nr: '156',
  cn_phone: '86',
  cn_eu_member: '0',
  cn_uno_member: '1',
  cn_address_format: '1',
  cn_zone_flag: '0',
  cn_short_local: '中华'  ,
  cn_short_en: 'China',
  cn_country_zones: '0' }
```

## Installation

To install the plugin all you need is to call:

     meteor add suxez:countries

The country data will be imported automatically when restarting your Meteor app if the country database is empty.

## Usage

The Country database is accessible through the global variable `SuxezCountries`. There're no default publications or subscriptions in place. These are left to you.

Publication example:

```
if (Meteor.isServer) {
    Meteor.publish('countries', function (query, options) {

        if (typeof query == 'undefined') query = {};
        if (typeof options == 'undefined') options = {};

        return SuxezCountries.find(query, options);

    });
}
```

Subscription example (with Iron Router):

```
Router.route('/', {
    name: 'siteIndex',
    waitOn: function () {
        return [
            Meteor.subscribe('countries')
        ]
    }
});
```

There's nothing special about these data. Work with them as you would with any other Meteor collection and you'll be fine.


## Data source

The country data are sourced from the Typo3 `static_info_tables` plugin ([Github](https://github.com/typo3-ter/static_info_tables).

## License

MIT