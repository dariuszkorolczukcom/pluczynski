import React, { Component } from 'react';
import '../css/Gallery.scss';
import { Carousel } from 'react-responsive-carousel';

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
                <Carousel>
                    <div>
                        <img src="https://patrykluczynski.s3-eu-west-1.amazonaws.com/photo/img0001.jpg" />
                        <p className="legend">Koncert LUPA 1</p>
                    </div>
                    <div>
                        <img src="https://patrykluczynski.s3-eu-west-1.amazonaws.com/photo/img0014.jpg" />
                        <p className="legend">Koncert LUPA 2</p>
                    </div>
                    <div>
                        <img src="https://patrykluczynski.s3-eu-west-1.amazonaws.com/photo/img0044.jpg" />
                        <p className="legend">Koncert LUPA 3</p>
                    </div>
                </Carousel>
            </div>
        )
    }
}   