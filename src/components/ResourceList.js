import React from 'react';

class ResourceList extends React.Component {
  render() {
    return (
      <div>
        {this.props.resource.str}
      </div>
    )
  }
}

export default ResourceList;