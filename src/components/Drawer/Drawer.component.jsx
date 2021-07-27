import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, Placeholder} from "rsuite";

const DrawerComponent = (props) => {
  const {size, placement, show, closeDrawer } = props;

  return (
      <Drawer
        size={size}
        placement={placement}
        show={show}
        onHide={closeDrawer}
      >
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph />
        </Drawer.Body>
        <Drawer.Footer>
        </Drawer.Footer>
      </Drawer>
  );
};

DrawerComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};

export default DrawerComponent;
