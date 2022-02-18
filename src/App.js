import React, {Component} from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './Utils/ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentFeature: ProductData.featureList[0]
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureOptionClick = (pos) => {
    const updatedcurrentFeature = this.state.productData.featureList[pos];
    this.setState({currentFeature: updatedcurrentFeature});
  }
  render () {
    return (
      <div className="App">
        <Topbar></Topbar>
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview 
            currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
            ></ProductPreview>
          </div>
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} 
              onColorOptionClick={this.onColorOptionClick} 
              onFeatureOptionClick={this.onFeatureOptionClick}
              currentPreviewImagePos={this.state.currentPreviewImagePos}
              currentFeature={this.state.currentFeature}
            ></ProductDetails>
          </div>
  
        </div>
      </div>
    );
  }
}

export default App;
