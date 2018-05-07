import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceThreadsService } from '../../service/service-threads.service';

@Component({
  selector: 'app-threads-id',
  templateUrl: './threads-id.component.html',
  styleUrls: ['./threads-id.component.scss']
})
export class ThreadsIdComponent implements OnInit {

  thread: Object;

  

  constructor(private serviceThreadsService:ServiceThreadsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      this.serviceThreadsService.getThread(params.id)
      .subscribe( thread => this.thread = thread );
    })
  }

}
