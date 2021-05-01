import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  // BehaviorSubject usado para fazer compartilhamento de dados em tempo de execucao entre os componentes
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  });

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }

}
