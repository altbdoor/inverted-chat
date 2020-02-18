import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { scan, startWith } from 'rxjs/operators'

export interface IMessage {
    sender: string
    message: string
    timestamp: Date
}

@Injectable()
export class ChatStoreService {
    private messagesSub = new Subject<IMessage>()
    messages$: Observable<IMessage[]> = this.messagesSub.asObservable().pipe(
        scan((acc, val) => [...acc, val], []),
        startWith([])
    )

    constructor() {}

    getAll() {
        return this.messages$
    }

    send(message: IMessage) {
        this.messagesSub.next(message)
    }
}
