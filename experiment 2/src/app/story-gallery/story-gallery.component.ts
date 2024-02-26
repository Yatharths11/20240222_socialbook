import { Component } from '@angular/core';
import { StoryComponent } from './../story/story.component'
@Component({
    selector: 'app-story-gallery',
    standalone: true,
    templateUrl: './story-gallery.component.html',
    styleUrl: './story-gallery.component.css',
    imports: [StoryComponent]
})
export class StoryGalleryComponent {

}
