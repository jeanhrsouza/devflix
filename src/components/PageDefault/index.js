import React from 'react';
import PropTypes from 'prop-types';
import Main from './styles';
import Menu from '../Menu';
import Footer from '../Footer';

const PageDefault = ({ children, paddingAll }) => (
  <>
    <Menu />
    <Main paddingAll={paddingAll}>{children}</Main>
    <Footer />
  </>
);

const ChildElement = PropTypes.oneOfType([PropTypes.element, PropTypes.bool, PropTypes.string]);
PageDefault.defaultProps = {
  paddingAll: undefined,
};

PageDefault.propTypes = {
  children: PropTypes.oneOfType([ChildElement, PropTypes.arrayOf(ChildElement)]).isRequired,
  paddingAll: PropTypes.number,
};

export default PageDefault;
