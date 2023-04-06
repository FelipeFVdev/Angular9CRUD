import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  
  private __headerData = new BehaviorSubject<HeaderData>({

    title: 'Inicio',
    icon: 'home' ,
    routeUrl: '',

  })

  constructor() { }

  get headerData(): HeaderData {
    
    return this.__headerData.value;

  }

  set headerData(headerData: HeaderData) {

    this.__headerData.next(headerData)

  }
}
