import { Component, OnInit } from '@angular/core';
import { QuoteGeneratorService } from '../quote-generator-service.service';
import { IQuote } from './quote.model';
import { Clipboard } from "@angular/cdk/clipboard";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quote-generator',
  templateUrl: './quote-generator.component.html',
  styleUrls: ['./quote-generator.component.css']
})


export class QuoteGeneratorComponent implements OnInit {
  quote: IQuote;

  constructor(
    private quoteService: QuoteGeneratorService, 
    private clipboard: Clipboard,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote(): void {
    this.quoteService.getQuote()
      .subscribe(quote => this.quote = quote);
  }

  copyContent(quote) {
    this.clipboard.copy(quote.quote);
    console.log(`"${quote.quote}" foi copiado!`);
    this.showSuccess(quote);
  }

  showSuccess(quote) {
    this.toastr.success(`"${quote.quote}" foi copiado!`);
  }
}
