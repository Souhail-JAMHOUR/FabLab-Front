import { Component, OnInit } from '@angular/core';
import { FooterService } from '../services/footer/footer.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerData: any; 


  constructor(private footerService: FooterService, private sanitizer: DomSanitizer) {}

  
  parseIcon(icon: string): SafeHtml {
    // Sanitize the SVG string
    const sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(icon);
    return sanitizedIcon;
  }
  

  ngOnInit(): void {
    this.footerService.getFooterData().subscribe(data => {
      this.footerData = data;
    });
  }

}
