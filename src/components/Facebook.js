import React from "react";
import fb from "../assets/img/fb.svg";
const sites = [
    'https://m.me/j/Abbkuu6fq8mn_mQi/',
    'https://m.me/j/AbagqvKdzdupkVZE/',
    'https://m.me/j/Abb0Edt69esCMvbG/',
    'https://m.me/j/AbYcd-FEfj5Tuzux/',
    'https://m.me/j/Abbk-BxKx4_EsAMg/'
];

// function randomSite() {
//     var i = parseInt(Math.random() * sites.length);
//     location.href = sites[i];
// }
const Facebook = () => {
    //const [selected, setSelected] = useState(0)
    var i = parseInt(Math.random() * sites.length);
    function handleSites(e) {
        e.preventDefault();
        window.location = sites[i];
    }
    return (
        <>
            <img
                src={fb}
                width="48px"
                height="48px"
                onClick={handleSites}
                alt="facebook"
            />
        </>
    )
}

export default Facebook;