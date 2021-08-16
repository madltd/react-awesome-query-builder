import MaterialConfig from "react-awesome-query-builder/config/material";

export default (skin: string) => {
  return {
    ...MaterialConfig,
    fields: {
      qty: {
        label: 'Qty',
        type: 'number',
        valueSources: ['value'],
        preferWidgets: ['number'],
      },
      price: {
        label: 'Price',
        type: 'number',
        valueSources: ['value'],
        preferWidgets: ['number'],
      },
      color: {
        label: 'Color',
        type: 'select',
        valueSources: ['value'],
        fieldSettings: {
          listValues: [
            { value: 'yellow', title: 'Yellow' },
            { value: 'green', title: 'Green' },
            { value: 'orange', title: 'Orange' }
          ],
        }
      },
      is_promotion: {
        label: 'Promo?',
        type: 'boolean',
        operators: ['equal'],
        valueSources: ['value'],
      },
    }
  };
};

