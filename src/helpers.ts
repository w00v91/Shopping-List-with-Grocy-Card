export interface ProductConfig {
  entity_id: string;
  attributes?: ProductEntity;
}

export interface ProductEntity {
  aggregated_opened?: BigInteger;
  aggregated_stock?: BigInteger;
  aggregated_unopened?: BigInteger;
  calories?: BigInteger;
  consume_location?: string;
  cumulate_min_stock_amount_of_sub_products?: string;
  default_best_before_days?: string;
  default_best_before_days_after_freezing?: string;
  default_best_before_days_after_open?: string;
  default_best_before_days_after_thawing?: string;
  due_type?: string;
  group?: string;
  list_count?: BigInteger;
  location?: string;
  min_stock_amount?: string;
  move_on_open?: string;
  no_own_stock?: string;
  parent_product_id?: string;
  product_id?: string;
  product_image?: string;
  qty_in_stock?: string;
  qty_opened?: BigInteger;
  qty_unit_purchase?: string;
  qty_unit_stock?: string;
  qty_unopened?: BigInteger;
  qu_factor_purchase_to_stock?: string;
  qu_id_purchase?: string;
  qu_id_stock?: string;
  quick_consume_amount?: string;
  should_not_be_frozen?: string;
  topic?: string;
  treat_opened_as_out_of_stock?: string;
  friendly_name: string;
}

export const compare_deep = (a: any, b: any) => {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (!(a instanceof Object && b instanceof Object)) return false;
  for (const x in a) {
    if (!a.hasOwnProperty(x)) continue;
    if (!b.hasOwnProperty(x)) return false;
    if (a[x] === b[x]) continue;
    if (typeof a[x] !== 'object') return false;
    if (!compare_deep(a[x], b[x])) return false;
  }
  for (const x in b) {
    if (!b.hasOwnProperty(x)) continue;
    if (!a.hasOwnProperty(x)) return false;
  }
  return true;
};

export const get_products = (states, config, is_shopping_list = false) => {
  let cpt = 0;
  let productArray = Object.entries(states).filter(([key]) => key.includes('shopping_list_with_grocy_product_v'));
  if (is_shopping_list && config?.shopping_list_id) {
    productArray = productArray.filter(
      ([, value]) => (value as ProductConfig).attributes['list_' + config.shopping_list_id + '_qty'] > 0,
    );
  }
  if (config?.exclude) {
    for (const [exclude_key, exclude_values] of Object.entries(config.exclude)) {
      for (const exclude_value of Object.values(exclude_values)) {
        productArray = productArray.filter(
          ([, value]) => (value as ProductConfig).attributes[exclude_key] !== exclude_value,
        );
      }
    }
  }
  if (config?.include) {
    for (const [include_key, include_values] of Object.entries(config.include)) {
      for (const include_value of Object.values(include_values)) {
        productArray = productArray.filter(
          ([, value]) => (value as ProductConfig).attributes[include_key] === include_value,
        );
      }
    }
  }
  productArray = sorter(productArray, config?.sort_by);
  if (config.hasOwnProperty('group_by') && config.group_by !== '') {
    const grouped_by = [];
    Object.values(productArray).map((value) => {
      const entity = value[1] as ProductConfig;
      const group_by = config.group_by.trim();
      if (entity.attributes[group_by]) {
        if (!(entity.attributes[group_by] in grouped_by)) {
          grouped_by[entity.attributes[group_by]] = [];
        }
        grouped_by[entity.attributes[group_by]].push(entity);
      }
    });
    productArray = grouped_by;
  } else {
    productArray.forEach(function (v: Array<unknown>) {
      v[0] = cpt++;
    });
  }

  return productArray;
};

export const sorter = (data, fields) => {
  return data.sort((a, b) => {
    let value = 0;
    for (let i = 0; i < fields.length; i++) {
      value = value || a[1].attributes[fields[i]].localeCompare(b[1].attributes[fields[i]]);
      if (value) break;
    }
    return value;
  });
};
