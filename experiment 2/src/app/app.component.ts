import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ShortcutsComponentComponent } from "./shortcuts-component/shortcuts-component.component";
import { OnlineListElementComponent } from "./online-list-element/online-list-element.component";
import { EventComponentComponent } from "./event-component/event-component.component";
import { StoryComponent } from "./story/story.component";
import { WritePostContainerComponent } from "./write-post-container/write-post-container.component";
import { PostContainerComponent } from "./post-container/post-container.component";
import { ShorcutsComponent } from "./shorcuts/shorcuts.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ShorcutsComponent, OnlineListElementComponent, EventComponentComponent, StoryComponent, WritePostContainerComponent, PostContainerComponent, ShorcutsComponent]
})
export class AppComponent {
  title = 'experimental2';
  

}
