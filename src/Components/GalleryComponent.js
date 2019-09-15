import React, { Component } from 'react';
import '../css/Gallery.scss';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

const photos = [
    {
        photo: "photos/img0001.jpg",
        number: 1,
        caption: "dluga deskrypcja",
        subcaption: "krotki opis"
    },
    {
        photo: "photos/img0014.jpg",
        number: 1,
        caption: "dluga deskrypcja",
        subcaption: "krotki opis"
    },
    {
        photo: "photos/img0044.jpg",
        number: 1,
        caption: "dluga deskrypcja",
        subcaption: "krotki opis"
    }
];

export default class GalleryComponent extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            open: this.props.open,
        };
    }

    render() {
        return (
            <div className={"galleryContainer"}>
                <AutoRotatingCarousel
                    // label='Get started'
                    open={this.state.open}
                    onClose={() => this.setState({ open: false })}
                    onStart={() => this.setState({ open: false })}
                // style={{ position: 'absolute', top: "3rem" }}
                >
                    <img key={1} className={"carouselImage"} src={"https://patrykluczynski.s3-eu-west-1.amazonaws.com/photo/img0001.jpg"} />
                    <img key={1} className={"carouselImage"} src={"https://patrykluczynski.s3-eu-west-1.amazonaws.com/photo/img0014.jpg"} />
                    <img key={1} className={"carouselImage"} src={"https://patrykluczynski.s3-eu-west-1.amazonaws.com/photo/img0044.jpg"} />
                </AutoRotatingCarousel>
            </div>
        )
    }
}   