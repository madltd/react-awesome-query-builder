import React, { Component } from "react";
import { Query, Builder, BasicConfig, Utils as QbUtils } from 'react-awesome-query-builder';

// import MaterialConfig from 'react-awesome-query-builder/lib/config/material';
import MaterialConfig from "react-awesome-query-builder/config/material";


const config = {
  ...MaterialConfig,
  fields: {
    qty: {
      label: 'Qty',
      type: 'number',
      fieldSettings: {
        min: 0,
      },
      valueSources: ['value'],
      preferWidgets: ['number'],
    },
    price: {
      label: 'Price',
      type: 'number',
      valueSources: ['value'],
      fieldSettings: {
        min: 10,
        max: 100,
      },
      preferWidgets: ['slider', 'rangeslider'],
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


interface DemoQueryBuilderState {
  tree: any;
  config: any;
}

export default class DemoQueryBuilder extends Component<{}, DemoQueryBuilderState> {
  state = {
    tree: { "id": QbUtils.uuid(), "type": "group" },
    config
  }

  onTreeChange = (tree, config) => {
    this.setState({ tree, config });
  };

  renderBuilder = (props) => (
    <div className="query-builder-container" style={{ padding: '10px' }}>
      <div className="query-builder qb-lite">
        <Builder {...props} />
      </div>
    </div>
  );

  render() {
    return (
      <Query
        {...this.state.config}
        value={this.state.tree}
        onChange={this.onTreeChange}
        renderBuilder={this.renderBuilder}
      />
    );
  }
}
