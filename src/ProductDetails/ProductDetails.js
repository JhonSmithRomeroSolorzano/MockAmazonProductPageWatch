import React from 'react';
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
 
  var colorOptions = props.data.colorOptions.map((item, pos) =>{
    const classArray = [classes.ProductImage]
    if(pos === props.currentPreviewImagePos) classArray.push(classes.SelectedProductImage)
    return (
      <img key={pos} className={classArray.join(' ')} src={item.imageUrl} alt={item.styleName}
      onClick={() => props.onColorOptionClick(pos)}></img>
    )
  })
  
  var featureList = props.data.featureList.map((item, pos) => {
    const classArray = [classes.FeatureItem];
    if(item === props.currentFeature) classArray.push(classes.SelectedFeatureItem)
    return (
      <button key={pos} className={classArray.join(' ')} onClick={() => props.onFeatureOptionClick(pos)}>{item}</button>
    )
  })
  
    return(
      <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{props.data.title}</h1>
      <p className={classes.ProductDescription}>{props.data.description}</p>
      <h3 className={classes.SectionHeading}>Select Color</h3>
      <div>
        {colorOptions}
      </div>
      <h3 className={classes.SectionHeading}>Features</h3>
      <div>
        {featureList}

      </div>
  
      <button className={classes.PrimaryButton}>Buy Now</button>
    </div>
    )
  
}

export default ProductDetails;