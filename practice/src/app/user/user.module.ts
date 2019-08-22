import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HomeComponent
    ],
    providers: []
})

export class UserModule { }
