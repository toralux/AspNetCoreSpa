import { Component } from '@angular/core';

@Component({
  selector: 'appc-devextreme_test',
  templateUrl: './devextreme-test.component.html',
  styleUrls: ['./devextreme-test.component.scss']
})
export class DevExtremeTestComponent {
    helloWorld() {
        alert('Hello world!');
    }
    data = [
        {
            firstName: 'Tor Anders',
            lastName: 'Johansen'
        },
        {
            firstName: 'Nikolai',
            lastName: 'Hegelstad'
        },
        {
            firstName: 'Viktor',
            lastName: 'Kjartansson'
        }
    ];
    showLastName = false;
    toggleLastName() {
        this.showLastName = !this.showLastName;
    }
}