import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @Output() dataText =  new EventEmitter<any>()
  @Input() resultAnalysis: any;


  text_anali = '';

  constructor() { }

  ngOnInit(): void {
  }

  analizarText(){
    const PARAMETROS = {
      text: this.text_anali
    }

    this.dataText.emit(PARAMETROS)
  }

}
