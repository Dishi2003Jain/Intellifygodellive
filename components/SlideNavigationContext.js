import React from 'react';

const SlideNavigationContext = React.createContext({
    handleNextSlide: () => {},
    handlePreviousSlide: () => {},
});

export default SlideNavigationContext;
