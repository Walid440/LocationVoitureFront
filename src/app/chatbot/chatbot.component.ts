import { Component } from '@angular/core';
 
interface Message {
  content: string;
  fromUser: boolean;
}
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})

export class ChatbotComponent {
  messages: Message[] = [];
  userMessage: string = '';

  


sendMessage() {
  if (this.userMessage.trim() === '') return;

  this.messages.push({ content: this.userMessage, fromUser: true });
  this.userMessage = '';

  const responses = [
    'Bonjour ! Comment puis-je vous aider ?',
    'Je suis un chatbot en construction. Veuillez m\'excuser pour mes limites actuelles.',
    'Désolé, je ne comprends pas encore cette commande.',
    // Ajoutez d'autres réponses ici
  ];

  const randomIndex = Math.floor(Math.random() * responses.length);
  const botResponse = responses[randomIndex];
  this.messages.push({ content: botResponse, fromUser: false });
}

}
