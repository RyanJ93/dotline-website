'use strict';

import ApplicationProvider from './src/providers/ApplicationProvider';
import LocaleProvider from './src/providers/LocaleProvider';
import ProviderManager from './src/support/ProviderManager';
import IconProvider from './src/providers/IconProvider';
import './src/common/app.scss';

const providerManager = ProviderManager.getInstance();
providerManager.register(new LocaleProvider());
providerManager.register(new IconProvider());
providerManager.register(new ApplicationProvider());

document.addEventListener('DOMContentLoaded', () => {
    providerManager.runProviders().then(() => {
        console.log('App initialized!');
    });
});
