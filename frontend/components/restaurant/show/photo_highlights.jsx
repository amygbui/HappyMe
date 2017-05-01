import React from 'react';

class PhotoHighlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img1: "img-default",
                   img2: "img-selected",
                   img3: "img-default"
                 };
    this.switchHover = this.switchHover.bind(this);
    this.resetHover = this.resetHover.bind(this);
  }

  switchHover(e) {
    const images = ["img1", "img2", "img3"];
    const selected = e.currentTarget.getAttribute("value");
    images.filter(el => el !== selected)
          .map(el => this.setState({ [el]: "img-default" }));
    this.setState({ [selected]: "img-selected" });
  }

  resetHover(e) {
    this.setState({ img1: "img-default",
                    img2: "img-selected", img3: "img-default"})
  }

  render() {
    return(
      <section className="photo-highlights">
        <img className={ this.state.img1 }
          value={ "img1" }
          onMouseEnter={ this.switchHover }
          onMouseLeave={ this.resetHover }
          src={ window.images.cocktail } />
        <img className={ this.state.img2 }
          value={ "img2" }
          onMouseEnter={ this.switchHover }
          onMouseLeave={ this.resetHover }
          src={ this.props.image_url } />
        <img className={ this.state.img3 }
          value={ "img3" }
          onMouseEnter={ this.switchHover }
          onMouseLeave={ this.resetHover }
          src="https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/17932707_1751729501805103_386157752214355968_n.jpg" />
      </section>
    )
  }
};

export default PhotoHighlights;
