import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, UpperCasePipe, TitleCasePipe, AsyncPipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';


const client1 = {
  name: 'Juan Carlos Dev',
  age: 30,
  gender: 'male'
};

const client2 = {
  name: 'Ana María',
  age: 25,
  gender: 'female'
};

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

    // i18nSelectPipe
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'

  };
value: any;
  changeClient() {
    this.client.set(this.client() === client1 ? client2 : client1);
  }

    // i18nPluralPipe
  private readonly initialClients = ['Maria', 'Pedro', 'Juan', 'Ana', 'Luis', 'Carlos', 'Sofia', 'Miguel', 'Laura', 'Diego'];
  clients = signal<string[]>(this.initialClients);

  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  deleteClient() {
    return this.clients.update((prev) => prev.slice(1));
  }

  resetClients() {
    this.clients.set(this.initialClients);
  }

  // KeyValuePipe
  profile = {
    name: 'Juan Carlos Dev',
    age: 30,
    gender: 'male'
  };

  // AsyncPipe
  promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Data de la promesa');
      // reject('Error en la promesa');
      console.log('Promesa resuelta');
    }, 3000);
  });

  // Observable
  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('Valor del observable:', value))
  );


}
