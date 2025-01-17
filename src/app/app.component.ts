import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [CommonModule],
    templateUrl: './app.component.html',
})
export class AppComponent {
    public $mobileMenuOpen = new BehaviorSubject<boolean>(false);

    public toggleMobileMenu() {
        this.$mobileMenuOpen.next(!this.$mobileMenuOpen.getValue());
    }
}
