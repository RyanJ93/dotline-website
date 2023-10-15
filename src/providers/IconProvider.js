'use strict';

import { faComments, faLock, faUserSecret, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Provider from './Provider';

class IconProvider extends Provider {
    async run(){
        library.add(fas, faComments, faLock, faUserSecret, faWindowMaximize);
    }
}

export default IconProvider;
