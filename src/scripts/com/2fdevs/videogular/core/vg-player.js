import {Component, Template, For} from 'angular2/angular2';

@Component({
    selector: 'vg-player',
    bind: {
        'src': 'src'
    }
})
@Template({
    url: 'scripts/com/2fdevs/videogular/core/vg-player.html',
    directives: [For]
})
export class VideogularPlayer {
    src:String;
    isPlaying:Boolean = false;
    element:HTMLElement;

    constructor() {
        this.element = document.querySelector("vg-player video");
    }

    playPause() {
        this.isPlaying = !this.isPlaying;

        // We can't access this file in Chrome debug tools, we need to debug with debugger statements here
        // debugger;

        if (this.isPlaying) this.element.play();
        else this.element.pause();
    }
}
