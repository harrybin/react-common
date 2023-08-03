import * as React from 'react';

const baererContext = React.createContext<string>('');
let bearer = '';
/*
 * This context provider takes care of getting the access token which is injected in url by
 * a python script which is used for the OIDC login.
 * You must start this python script for local development with enabled OIDC.
 * For more information see the ssoRedirect folder in this project. There is a README.md inside.
 */
export function OidcBarerProxyProvider(props: { children: React.ReactNode }) {
    const regEx = /auth=(.*)/;
    const match = window.location.search.match(regEx);
    if (bearer === '' && match) {
        window.history.replaceState({}, document.title, window.location.href.split('?')[0]);
        bearer = match[1];
    }
    return <baererContext.Provider value={bearer}>{props.children}</baererContext.Provider>;
}

export function useOidcBaerer() {
    return React.useContext(baererContext);
}
