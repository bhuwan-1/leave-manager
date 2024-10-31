import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  loggedUser!: any
  
  constructor(private router: Router){
    const data = localStorage.getItem('user');
    if(data){
      this.loggedUser = JSON.parse(data);
    }
  }

  onLogout(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
}
