import { Component, OnInit, Input } from '@angular/core'
import { IMessage } from '../chat-store.service'

@Component({
    selector: 'app-chat-messages-list',
    templateUrl: './chat-messages-list.component.html',
    styleUrls: ['./chat-messages-list.component.css'],
})
export class ChatMessagesListComponent implements OnInit {
    @Input()
    messages: IMessage[] = []

    constructor() {}

    ngOnInit(): void {}
}
