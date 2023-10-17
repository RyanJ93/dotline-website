'use strict';

import { faComments, faLock, faUserSecret, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { fas, faB } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Provider from './Provider';

class IconProvider extends Provider {
    async run(){
        library.add(fas, faB, faComments, faLock, faUserSecret, faWindowMaximize, faGithub);
    }
}

export default IconProvider;
