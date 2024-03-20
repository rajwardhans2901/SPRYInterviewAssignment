export class NavBarService {
    selectedDropdown:string = 'primary';

    changeSelectedDropdown(data: string) {
        let mainComponent = document.getElementById('mainComponent');
        switch(data){
            case 'client1':
              mainComponent.classList.remove('alternative');
              mainComponent.classList.remove('third');
              mainComponent.classList.add('primary');
              break;
            case 'client2':
                mainComponent.classList.remove('primary');
                mainComponent.classList.remove('third');
                mainComponent.classList.add('alternative');
              break;
            case 'client3':
                mainComponent.classList.remove('primary');
                mainComponent.classList.remove('alternative');
                mainComponent.classList.add('third');
              break;
            default:
              mainComponent.classList.remove('alternative');
              mainComponent.classList.remove('third');
              mainComponent.classList.add('primary');
          }
    }
}