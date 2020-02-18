import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { ChatStoreService, IMessage } from '../chat-store.service'

@Component({
    selector: 'app-chat-container',
    templateUrl: './chat-container.component.html',
    styleUrls: ['./chat-container.component.css'],
})
export class ChatContainerComponent implements OnInit {
    form: FormGroup
    messages$: Observable<IMessage[]>

    constructor(fb: FormBuilder, private chatStore: ChatStoreService) {
        this.form = fb.group({
            text: ['', Validators.required],
        })

        this.messages$ = this.chatStore.getAll()
    }

    ngOnInit(): void {}

    submitText(form: FormGroup) {
        if (!form.value.text) {
            return
        }

        this.chatStore.send({
            sender: 'John Doe',
            message: form.value.text,
            timestamp: new Date(),
        })

        form.get('text').setValue('')
    }

    getFakeResponse() {
        this.chatStore.send({
            sender: 'Customer Support',
            message: 'lorem ipsum dolor sit amet',
            timestamp: new Date(),
        })
    }
}
