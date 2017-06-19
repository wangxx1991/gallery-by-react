require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

var imageDatas = require('json!../data/imageDatas.json');

imageDatas = (function getImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i ++) {
        var singleImageData = imageDatasArr[i];
        singleImageData.imageURL = require('../images/' + singleImageData.fileName);
        imageDatasArr[i] = singleImageData;
    }
    return imageDatasArr;
})(imageDatas);

var ImgFigure = React.createClass({
    render: function () {
        return (
            <figure className="img-figure">
                <img src={this.props.data.imageURL} alt={this.props.title}/>
                <figcaption>
                    <h2 className="img-title">{this.props.data.title}</h2>
                </figcaption>
            </figure>
            )
    }
})

class GalleryByReactApp extends React.Component {
    render() {
        var controllerUnits = [],
            imgFigures = [];

        imageDatas.forEach(function(value, index) {
                imgFigures.push( < ImgFigure data = { value } key = { index }/>)
                });

        return ( < section className = "stage" >
            < section className = "img-sec" > { imgFigures } < /section> < nav className = "controller-nav" > { controllerUnits } < /nav> < /section>
        );
    }
}

GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;
