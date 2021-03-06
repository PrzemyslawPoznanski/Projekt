import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './accounts-routing.module';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EventsRoutingModule
    ],
    declarations: [
        ListComponent,
        AddEditComponent
    ]
})
export class userEventsModule { }