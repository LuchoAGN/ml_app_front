import { Component } from '@angular/core';
import { AnalyseTextService } from './services/analyse-text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ml_app_front';
  resultAnalysis: any[] = [];

  constructor(private _analyseTextService: AnalyseTextService){

  }

  analizarText(parametros: any){
    console.log(parametros);

    this._analyseTextService.getScoreandData(parametros).subscribe(data => {
      console.log(data)
      this.resultAnalysis = data
    }, error => {
      console.log(error);
    })
  }
}
