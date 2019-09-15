import React from 'react';
import '../css/Links.scss';

export default function LinksContainer() {
    return (
        <div className={"LinksContainer"}>
            <ul>
                <li>
                    <a href={"https://www.youtube.com/user/patryk32167luczynski"}>Youtube</a>
                </li>
                <br />
                <li>
                    <a href={"https://myspace.com/patrykluczynski"}>Myspace</a>
                </li>
                <br />
                <li>
                    <a href={"https://soundcloud.com/patrykluczynski"}>Soundcloud</a>
                </li>
            </ul>
        </div>
    );
}