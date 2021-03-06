import React from 'react'
import PropTypes from 'prop-types';

import Card from './Card';
import Parsers from './Parsers';

class CertCard extends React.Component {
  render() {
    let parser = Parsers(this.props.audit);
    return (
     <Card
       audit={this.props.audit}
       score={parser.score()}
       product={parser.product()}
       organization={parser.organization()}
       date={parser.date()}
       validSignature={parser.validSignature()} />
    )
  }
}

CertCard.propTypes = {
  audit: PropTypes.object.isRequired,
  correctiveActions: PropTypes.object,
  certificate: PropTypes.object,

  onChecked: PropTypes.func,
  finishAndSignClicked: PropTypes.func,
  checked: PropTypes.bool
};

export default CertCard;
