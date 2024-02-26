import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-online-list-element',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './online-list-element.component.html',
  styleUrl: './online-list-element.component.css'
})
export class OnlineListElementComponent {
  people = [
    {name:"Luffy",img:'https://lh3.googleusercontent.com/Ryg5ih-fOWbpEGDpbJYJz5RTq3_28Tvo2h3JQRCdiz16lw5ghitDMN6hcWA57g0d6_8VOqQYcCemRBOfZGQA64ZKkFOn71zuF1LDsXwCh4ywF-_z6VqxbBqmbQvK_-PWfZcztxDd1WDTEEUHX6GdP60'},
    {name:"Zoro",img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fnaruto-onepiece-fairytail%2Fimages%2F5%2F50%2FRoronoa_Zoro.png%2Frevision%2Flatest%3Fcb%3D20161215200705&tbnid=7P3nTS4PreSJWM&vet=12ahUKEwiP99mw9MSEAxVwmWMGHasDCI8QMygCegQIARB1..i&imgrefurl=https%3A%2F%2Fnaruto-onepiece-fairytail.fandom.com%2Fwiki%2FRoronoa_Zoro&docid=a8ZnnF-KjF7ejM&w=814&h=815&q=zoro&ved=2ahUKEwiP99mw9MSEAxVwmWMGHasDCI8QMygCegQIARB1"},
    {name:"Rayliegh",img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fonepiece%2Fimages%2Fc%2Fc3%2FRayleigh_Cries_for_Whitebeard.png%2Frevision%2Flatest%3Fcb%3D20220913101003&tbnid=CSZeKx2L-ySwoM&vet=12ahUKEwjZz_--9MSEAxVevmMGHZk3AE8QMygEegQIARB8..i&imgrefurl=https%3A%2F%2Fonepiece.fandom.com%2Fwiki%2FSilvers_Rayleigh&docid=FU6LR_vnNVVRuM&w=1920&h=1079&itg=1&q=rayliegh&ved=2ahUKEwjZz_--9MSEAxVevmMGHZk3AE8QMygEegQIARB8"},
    {name:"Mihawk",img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fpracticaltyping.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fmehawk.jpg&tbnid=E0q_vQ03n7E_cM&vet=12ahUKEwit-MXQ9MSEAxU9gWMGHdDlBacQMygSegUIARCVAQ..i&imgrefurl=https%3A%2F%2Fpracticaltyping.com%2F2019%2F01%2F11%2Fone-piece-dracule-mihawk-intj%2F&docid=e34WDcj6qxAPmM&w=1024&h=576&q=mihawk&ved=2ahUKEwit-MXQ9MSEAxU9gWMGHdDlBacQMygSegUIARCVAQ"}
  ]
}
