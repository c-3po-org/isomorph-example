import { t, ngettext, msgid } from 'c-3po';

const NavBar = () => {

    return `<ul>
            <li>${ t`Choose locale` }</li>
            <li><a href="locale/en">en</a></li>
            <li><a href="locale/uk">uk</a></li>
        </ul>
    `
};

export const ClockView = (hours, minutes, seconds) => {
    const hoursTxt = ngettext(msgid`${hours} hour`, `${hours} hours`, hours);
    const minutesTxt = ngettext(msgid`${minutes} minute`, `${minutes} minutes`, minutes);
    const secondsTxt = ngettext(msgid`${seconds} second`, `${seconds} seconds`, seconds);

    return `
    <h2>${ t`Current time is` }</h2>
    <h3>${hoursTxt} ${minutesTxt} ${secondsTxt}</h3>
    `
};

export const HelloPage = (data) => {
    return `<div>
        ${ NavBar() }
        <h1>${t`Simple full stack demo c-3po`}</h1>
        <h2>${t`This content is pre rendered on the backend`}</h2>
        
        <h3>${t`The folowing content is constantly rerendered on the frontend:`}</h3>
        <div id="clock">
            ${ClockView(data.hour, data.minutes, data.seconds)}
        </div>
    </div>`
};
