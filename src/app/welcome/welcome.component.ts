import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name: string = '';
  message: string = 'Some Welcome Message';
  welcomeMessageFromService: string = '';;

  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response), 
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter() {
    this.welcomeDataService.executeHelloWorldServiceWithVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response), 
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any){
    this.welcomeMessageFromService = error.error.message;
  }
}
