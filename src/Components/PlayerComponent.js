import React from 'react';
import '../css/Loading.scss';
import homeImage from '../css/img/vinyl2.png';
import Playlist from 'react-mp3-player';

const tracks = [
    {
        img: '',
        name: 'pop-rock', desc: 'wspanialy popowo rockowy utwor', src: 'https://patrykluczynski.s3-eu-west-1.amazonaws.com/pop_rock.mp3'
    }
]

const playlistOverideStylingOpts = {
    offset: {
        bottom: "2rem"
    },
    breakpoint: {
        maxWidth: 768
    }
};

export default function PlayerComponent() {
    return (
        <React.Fragment>
            <Playlist tracks={tracks} opts={playlistOverideStylingOpts} />
        </React.Fragment>
    );
}