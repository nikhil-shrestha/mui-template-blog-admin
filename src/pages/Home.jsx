import React from 'react';

import ProductCategories from 'src/modules/views/ProductCategories';
import ProductSmokingHero from 'src/modules/views/ProductSmokingHero';
import ProductHero from 'src/modules/views/ProductHero';
import ProductValues from 'src/modules/views/ProductValues';
import ProductHowItWorks from 'src/modules/views/ProductHowItWorks';
import ProductCTA from 'src/modules/views/ProductCTA';

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
    </React.Fragment>
  );
}

export default Index;
