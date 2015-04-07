import {Component, Template} from 'angular2/angular2';
import {VideogularPlayer} from 'scripts/com/2fdevs/videogular/core/vg-player';

@Component({
    selector: 'application'
})
@Template({
    url: 'scripts/application.html',
    directives: [VideogularPlayer]
})
export class Application {
    source: array;

    constructor() {
        this.source = [
            {src: 'http://static.videogular.com/assets/videos/videogular.mp4', type: 'video/mp4'},
            {src: 'http://static.videogular.com/assets/videos/videogular.webm', type: 'video/webm'},
            {src: 'http://static.videogular.com/assets/videos/videogular.ogg', type: 'video/ogg'}
        ];
    }
}
