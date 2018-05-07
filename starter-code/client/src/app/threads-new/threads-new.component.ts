import { Component, OnInit } from '@angular/core';
import { ServiceThreadsService } from '../../service/service-threads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-threads-new',
  templateUrl: './threads-new.component.html',
  styleUrls: ['./threads-new.component.scss']
})
export class ThreadsNewComponent implements OnInit {

  threadInfo: Object = {
    title: "",
    content: ""
  }

  constructor(private serviceThreadsService:ServiceThreadsService, public router:Router) { }

  ngOnInit() {
  }

  newThread() {

    this.serviceThreadsService.newThread(this.threadInfo).subscribe( () => this.router.navigate(["/home"]) );
  }

}
