import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { ChatContainerComponent } from './chat-container/chat-container.component'
import { ChatMessagesListComponent } from './chat-messages-list/chat-messages-list.component'
import { ChatStoreService } from './chat-store.service'

@NgModule({
    declarations: [ChatContainerComponent, ChatMessagesListComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [ChatContainerComponent],
    providers: [ChatStoreService],
})
export class ChatModule {}
