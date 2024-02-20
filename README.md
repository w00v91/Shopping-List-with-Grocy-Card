# Shopping List with Grocy Card by [@Anrolosia](https://github.com/Anrolosia) <!-- omit in toc -->

[![Stable][releases-shield]][releases] [![Beta][releases-dev-shield]][releases-dev] [![HACS Badge][hacs-badge]][hacs-link] ![Project Maintenance][maintenance-shield] <br/> [![GitHub Activity][commits-shield]][commits] [![License][license-shield]](LICENSE.md)

[commits-shield]: https://img.shields.io/github/commit-activity/y/Anrolosia/Shopping-List-with-Grocy-Card.svg
[commits]: https://github.com/Anrolosia/Shopping-List-with-Grocy-Card/commits/main
[license-shield]: https://img.shields.io/github/license/Anrolosia/Shopping-List-with-Grocy-Card.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2023.svg
[releases-shield]: https://img.shields.io/github/release/Anrolosia/Shopping-List-with-Grocy-Card.svg
[releases]: https://github.com/Anrolosia/Shopping-List-with-Grocy-Card/releases/latest
[releases-dev-shield]: https://img.shields.io/github/package-json/v/Anrolosia/Shopping-List-with-Grocy-Card/dev?label=release%40dev
[releases-dev]: https://github.com/Anrolosia/Shopping-List-with-Grocy-Card/releases
[hacs-badge]: https://img.shields.io/badge/HACS-Default-41BDF5.svg
[hacs-link]: https://hacs.xyz/

![Shopping-List-with-Grocy-Card](https://raw.githubusercontent.com/Anrolosia/Shopping-List-with-Grocy-Card/main/img/showcase.png)

Lovelace card for your [Shopping List with Grocy integration](https://github.com/Anrolosia/Shopping-List-with-Grocy-Card).

## TOC <!-- omit in toc -->

- [Features](#features)
- [Configuration](#configuration)
  - [Product List Options](#product-list-options)
  - [Shopping List Options](#shopping-list-options)
  - [Action](#action)
  - [Confirmation](#confirmation)
  - [Exclude](#exclude)
  - [Include](#include)
  - [SortBy](#sortby)
  - [Custom Buttons](#custom-buttons)
- [Installation](#installation)
  - [Manual Installation](#manual-installation)
  - [Installation and tracking with `hacs`](#installation-and-tracking-with-hacs)
- [Examples](#examples)
  - [Product list](#product-list)
  - [Shopping list](#shopping-list)
- [Credits](#credits)

## Features

- works with [Shopping List with Grocy integration](https://github.com/Anrolosia/Shopping-List-with-Grocy)
- uses [Button Card](https://github.com/custom-cards/button-card) by [@RomRider](https://github.com/RomRider)
- uses [Layout Card](https://github.com/thomasloven/lovelace-layout-card) by [@thomasloven](https://github.com/thomasloven)
- uses [Collapsable Cards](https://github.com/RossMcMillan92/lovelace-collapsable-cards) by [@RossMcMillan92](https://github.com/RossMcMillan92)
- uses [Bootstrap Grid Card](https://github.com/ownbee/bootstrap-grid-card) by [@ownbee](https://github.com/ownbee)
- automatic display of your products in a list, poster grid, or collaspable list
- automatic display of your shopping list
- uses javascript templates in some fields for live update
- custom buttons usable in shopping list

## Configuration

### Product List Options

| Name | Type | Default | Supported options | Description |
| --- | --- | --- | --- | --- |
| `type` | string | **Required** | `custom:slwg-product-card` | Type of the card |
| `shopping_list_id` | number | 1 | Any number | Used to display quantity in your shopping list |
| `sort_by` | object | optional | See [SortBy](#SortBy) | Define the sorting used to display your products |
| `display_as_poster` | boolean | false | `true` \| `false` | Display your products in a grid using product image |
| `group_by` | string | optional | Any product attribute |  Used with `display_as_poster` to `false`. Define the product attribute you'd like to use to group your products |
| `exclude` | object | optional | See [Exclude](#Exclude) | Exclude some products depending on parameters |
| `include` | object | optional | See [Include](#Include) | Include some products depending on parameters |
| `tap_action` | object | optional | See [Action](#Action) | Define the type of action on click, if undefined, nothing happens. |
| `hold_action` | object | optional | See [Action](#Action) | Define the type of action on hold, if undefined, nothing happens. |
| `double_tap_action` | object | optional | See [Action](#Action) | Define the type of action on double click, if undefined, nothing happens. |
| `confirmation` | object | optional | See [confirmation](#confirmation) | Display a confirmation popup |

### Shopping List Options

| Name | Type | Default | Supported options | Description |
| --- | --- | --- | --- | --- |
| `type` | string | **Required** | `custom:slwg-product-card` | Type of the card |
| `shopping_list_id` | number | 1 | Any number | Used to display quantity in your shopping list |
| `sort_by` | object | optional | See [SortBy](#SortBy) | Define the sorting used to display your products |
| `group_by` | string | optional | Any product attribute | Define the product attribute you want to use to group your products |
| `exclude` | object | optional | See [Exclude](#Exclude) | Exclude some products depending on parameters |
| `include` | object | optional | See [Include](#Include) | Include some products depending on parameters |
| `use_collapsable_card` | boolean | true | `true` \| `false` | Display your products using collapsable cards to use control buttons |
| `custom_buttons` | array | [] | See [Custom Buttons](#Custom-Buttons) | Used with `use_collapsable_card` to `true`. dd more control buttons |
| `collaspable_buttons_class` | string | `col` | Any class you want to use | Used with `use_collapsable_card` to `true`. Specify class to use on control buttons |
| `tap_action` | object | optional | See [Action](#Action) | Used with `use_collapsable_card` to `false`. Define the type of action on click, if undefined, nothing happens. |
| `hold_action` | object | optional | See [Action](#Action) | Used with `use_collapsable_card` to `false`. Define the type of action on hold, if undefined, nothing happens. |
| `double_tap_action` | object | optional | See [Action](#Action) | Used with `use_collapsable_card` to `false`. Define the type of action on double click, if undefined, nothing happens. |
| `confirmation` | object | optional | See [confirmation](#confirmation) | Display a confirmation popup |
| `icon` | string | `mdi:cart` | `mdi:cart` | Icon to display for each product |

### Action

All actions supported by [Button Card](https://github.com/custom-cards/button-card) by [@RomRider](https://github.com/RomRider).

:warning: you need to use `'[PRODUCT_ID]'` for the card to replace it by the real product id. See [Custom Buttons](#Custom-Buttons) for an example. :warning:

| Name | Type | Default | Supported options | Description |
| --- | --- | --- | --- | --- |
| `action` | string | `toggle` | `more-info`, `toggle`, `call-service`, `none`, `navigate`, `url`, `assist` | Action to perform |
| `entity` | string | none | Any entity id | **Only valid for `action: more-info`** to override the entity on which you want to call `more-info` |
| `target` | object | none |  | Only works with `call-service`. Follows the [home-assistant syntax](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | none | Eg: `/lovelace/0/` | Path to navigate to (e.g. `/lovelace/0/`) when action defined as navigate |
| `url_path` | string | none | Eg: `https://www.google.fr` | URL to open on click when action is `url`. The URL will open in a new tab |
| `service` | string | none | Any service | Service to call (e.g. `media_player.media_play_pause`) when `action` defined as `call-service` |
| `data` or `service_data` | object | none | Any service data | Service data to include (e.g. `entity_id: media_player.bedroom`) when `action` defined as `call-service`. If your `data` requires an `entity_id`, you can use the keywork `entity`, this will actually call the service on the entity defined in the main configuration of this card. Useful for [configuration templates](#configuration-templates) |
| `haptic` | string | none | `success`, `warning`, `failure`, `light`, `medium`, `heavy`, `selection` | Haptic feedback for the [Beta IOS App](http://home-assistant.io/ios/beta) |
| `repeat` | number | none | eg: `500` | For a hold_action, you can optionally configure the action to repeat while the button is being held down (for example, to repeatedly increase the volume of a media player). Define the number of milliseconds between repeat actions here. |
| `repeat_limit` | number | none | eg: `5` | For Hold action and if `repeat` if defined, it will stop calling the action after the `repeat_limit` has been reached. |
| `confirmation` | object | none | See [confirmation](#confirmation) | Display a confirmation popup, overrides the default `confirmation` object |

### Confirmation

Same confirmation popup used by [Button Card](https://github.com/custom-cards/button-card) by [@RomRider](https://github.com/RomRider).

| Name | Type | Default | Supported options | Description |
| --- | --- | --- | --- | --- |
| `text` | string | none | Any text | This text will be displayed in the popup. Supports templates, see [templates](#javascript-templates) |
| `exemptions` | array of users | none | `user: USER_ID` | Any user declared in this list will not see the confirmation dialog |

Example:

```yaml
confirmation:
  text: '[[[ return `Are you sure you want to add ${entity.attributes.friendly_name} to the shopping list? ]]]'
  exemptions:
    - user: afdge6a9bsf44d98b890fd7e1b7b4996
```

### Exclude

Exlude definition by product attribute(s) and value(s).

| Name | Type | Default | Supported options | Description |
| --- | --- | --- | --- | --- |
| product attribute | array of values | none | Any product attribute | Define the product attribute(s) and values you want to exclude |

Example:

```yaml
exclude:
  location:
    - Demo - Bathroom
    - Demo - Fridge
  group:
    - Demo
  list_1_note:
    - out_of_stock
```

### Include

Include definition by product attribute(s) and value(s).

| Name | Type | Default | Supported options | Description |
| --- | --- | --- | --- | --- |
| product attribute | array of values | none | Any product attribute | Define the product attribute(s) and values you want to include |

Example:

```yaml
include:
  list_1_note:
    - out_of_stock
```

### SortBy

An array of product attribute(s) you want to use to sort your list. This is an order sorting, meaning the first product attribute in the list will be used first to sort.

| Name | Type | Default | Supported options | Description |
| --- | --- | --- | --- | --- |
| - | array of values | none | Any product attribute | Define the product attribute(s) you want to use to sort your products |

Example:

```yaml
sort_by:
  - location
  - friendly_name
```

### Custom Buttons

An array of custom [Button Card](https://github.com/custom-cards/button-card) by [@RomRider](https://github.com/RomRider).

:warning: you need to use `'[PRODUCT_ID]'` for the card to replace it by the real product id. :warning:

Example:

```yaml
custom_buttons:
  - type: custom:button-card
    class: col-3
    icon: mdi:cart-off
    tap_action:
      action: call-service
      service: shopping_list_with_grocy.update_note
      service_data:
        product_id: '[PRODUCT_ID]'
        note: out_of_stock
```

## Installation

### Manual Installation

1. Download the [shopping-list-with-grocy-card](https://github.com/Anrolosia/Shopping-List-with-Grocy-Card/releases/latest/download/shopping-list-with-grocy-card.js)
2. Place the file in your `config/www` folder
3. Include the card code in your `ui-lovelace-card.yaml`

   ```yaml
   title: Home
   resources:
     - url: /local/shopping-list-with-grocy-card.js
       type: module
   ```

### Installation and tracking with `hacs`

...Incoming

4. Refresh home-assistant.

## Examples

### Product list

```yaml
type: custom:slwg-product-card
display_as_poster: true
shopping_list_id: 1
sort_by:
  - location
  - friendly_name
exclude:
  location:
    - Demo - Bathroom
    - Demo - Fridge
confirmation:Are you sure you want to add Bread to the shopping list?
  text: >-
    [[[ return `Are you sure you want to remove 
    ${entity.attributes.friendly_name} from the shopping list?` ]]]
  exemptions:
    - user: >-
        [[[ if
        (states['switch.pause_update_shopping_list_with_grocy'].state
              == "on")
                  return `5711f3d21be04a4bb3f1ef114deeea61`;
              return `1234`; ]]]
    - user: >-
        [[[ if
        (states['switch.pause_update_shopping_list_with_grocy'].state
              == "on")
                  return `afdfesdwb5d4gt98b890fd0e1q7b4996`;
              return `1234`; ]]]
tap_action:
  action: call-service
  service: shopping_list_with_grocy.add_product
  service_data:
    product_id: '[PRODUCT_ID]'
  confirmation:
    text: >-
      [[[ return `Are you sure you want to add 
      ${entity.attributes.friendly_name} to the shopping list?` ]]]
    exemptions:
      - user: >-
          [[[ if
          (states['switch.pause_update_shopping_list_with_grocy'].state
                == "on")
                    return `5711f3d21be04a4bb3f1ef114deeea61`;
                return `1234`; ]]]
      - user: >-
          [[[ if
          (states['switch.pause_update_shopping_list_with_grocy'].state
                == "on")
                    return `afdfesdwb5d4gt98b890fd0e1q7b4996`;
                return `1234`; ]]]
double_tap_action:
  action: call-service
  service: shopping_list_with_grocy.remove_product
  service_data:
    product_id: '[PRODUCT_ID]'
hold_action:
  action: call-service
  service: shopping_list_with_grocy.remove_product
  service_data:
    product_id: '[PRODUCT_ID]'
```

### Shopping list

```yaml
- type: 'vertical-stack'
  cards:
    - type: custom:slwg-shopping-list-card
      exclude:
        location:
          - Demo - Bathroom
          - Demo - Fridge
        list_1_note:
          - out_of_stock
      shopping_list_id: 1
      sort_by:
        - location
        - friendly_name
      collaspable_buttons_class: col-3
      custom_buttons:
        - type: custom:button-card
          class: col-3
          icon: mdi:cart-off
          tap_action:
            action: call-service
            service: shopping_list_with_grocy.update_note
            service_data:
              product_id: '[PRODUCT_ID]'
              note: out_of_stock
    - type: entities
      title: Out of stock
      entities:
        - type: divider
    - type: custom:slwg-shopping-list-card
      exclude:
        location:
          - Demo - Bathroom
          - Demo - Fridge
      include:
        list_1_note:
          - out_of_stock
      shopping_list_id: 1
      use_collapsable_card: false
      icon: mdi:cart-arrow-up
      sort_by:
        - location
        - friendly_name
      color: disabled
      tap_action:
        action: call-service
        service: shopping_list_with_grocy.update_note
        service_data:
          product_id: '[PRODUCT_ID]'
          note: ''
```

## Credits

- [RomRider](https://github.com/RomRider) for the readme template and some awesome templates and cards you've created.
- [thomasloven](https://github.com/thomasloven), [RossMcMillan92](https://github.com/RossMcMillan92) and [ownbee](https://github.com/ownbee) for the inspiration and the awesome templates and cards you've created.