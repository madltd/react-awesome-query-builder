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
      valueSources: ['value']
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


interface DemoQueryBuilderState {
  tree: any;
  config: any;
}

const queryValue: any = { "id": QbUtils.uuid(), "type": "group" };

export default class DemoQueryBuilder extends Component<{}, DemoQueryBuilderState> {
  state = {
    tree: QbUtils.checkTree(QbUtils.loadTree(queryValue), config),
    config
  }

  onTreeChange = (tree, config) => {
    this.setState({ tree, config });
  };

  renderBuilder = (props) => (
    <div className="query-builder-container">
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
