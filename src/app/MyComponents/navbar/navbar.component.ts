import { Component, ElementRef } from '@angular/core';
import { NavBarService } from '../../Services/navBar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [NavBarService]
})
export class NavbarComponent {


  constructor(private navbarService: NavBarService) {

  }

  changeTheme(data: string) {
    let topBar = document.getElementById('topbar');
    switch(data){
      case 'client1':
          topBar.style.backgroundColor = '#2196f3';
        break;
      case 'client2':
        topBar.style.backgroundColor = '#4caf50';
        break;
      case 'client3':
        topBar.style.backgroundColor = '#f44336';
        break;
      default:
        topBar.style.backgroundColor = '#2196f3';
    }
    this.navbarService.changeSelectedDropdown(data);
  }
}
