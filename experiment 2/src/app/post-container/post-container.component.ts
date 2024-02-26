import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-container.component.html',
  styleUrl: './post-container.component.css'
})
export class PostContainerComponent {
    posts=[
      {
        text:`Subscribe Youtube Channel to watch more videos on 
        website development and UI desings`,
        post_feed : "https://i.postimg.cc/9fjhGTY6/feed-image-1.png"
      },
      {
        text: `Like and share this video with friends, tag facebook page on your post.
        Ask your dobuts in the comments.`,
        post_feed:"https://i.postimg.cc/Xvc0xJ2p/feed-image-2.png"
      },
      {
        text:`Like and share this video with friends, tag facebook page on your post.
        Ask your dobuts in the comments.`,
        post_feed:"https://i.postimg.cc/tJ7QXz9x/feed-image-3.png"
      },
      {
        text:`Like and share this video with friends, tag facebook page on your post.
        Ask your dobuts in the comments.`,
        post_feed: "https://i.postimg.cc/hjDRYBwM/feed-image-4.png" 
      },
      {
        text:`Like and share this video with friends, tag facebook page on your post.
        Ask your dobuts in the comments.`,
        post_feed:"https://i.postimg.cc/ZRwztQzm/feed-image-5.png"
      }
    ]
}
