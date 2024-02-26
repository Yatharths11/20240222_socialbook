import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shorcuts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shorcuts.component.html',
  styleUrl: './shorcuts.component.css'
})
export class ShorcutsComponent {
  shortcuts=[
    {
      text :"Vinland Saga",
      img:"https://i.pinimg.com/564x/b9/a8/0b/b9a80b84cd7e205f8b3160da33b14ce4.jpg"
    },
    {
      text: "One Piece",
      img : "https://i.pinimg.com/736x/02/bc/1d/02bc1ddfb478c7069ac1db5017955648.jpg"
    },{
      text: "Solo Leveling",
      img : "https://i.pinimg.com/564x/5b/6d/ee/5b6dee0124a9ccb6e890357521648104.jpg"
    },
    {
      text:"Naruto",
      img : "https://i.pinimg.com/564x/24/c3/e2/24c3e23ed4998498db67edcbf88dba7d.jpg"
    }

  ]


  a="hello";
}
