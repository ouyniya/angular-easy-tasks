import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: true, // for version < 19
    // template: '<h1>Hello world</h1>'
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {}