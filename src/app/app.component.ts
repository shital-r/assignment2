import { Component, OnInit } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  title = 'observables';

  ngOnInit(): void {
  //  var observables= new Observable((observer)=>{
  //     console.log('observables starts');
  //     observer.next('10');
  //     setTimeout(()=>{observer.next('20')},2000)
  //     // observer.complete();
  
  //     setTimeout(()=>{observer.next('30')},3000)
  //     // setTimeout(()=>{observer.error(new Error('something wrong'))},4000)
  //     setTimeout(()=>{observer.next('50')},5000)
  //     setTimeout(()=>{observer.next('70')},7000)
      
  //     observer.next('60');
  //     // observer.complete();
      
  
  //   }).pipe(map((el:any)=>el-5),filter((el:any)=>el>10));
  
  //   observables.subscribe((val)=>{
  //   console.log(val);
  //   },
  //   (error)=>{
  //     console.log(error.message);
  //     alert(error.message);
  //   },()=>{
  //      console.log('observables complete');
  //   });
  // }
//   console.log("Line 1")
//   var obs = new Observable((observer:any)=>{
//     console.log("Observables is getting excuted");
//     observer.next(100);
//     setTimeout(()=> {observer.next(200),2000});
//     observer.next(300);

//   })

//  console.log("Line 2");
//   obs.subscribe(
//    (val:any)=>{
//       console.log(val);
//    },
//    (error)=>{
//       console.log("Error " , error);
//    },

//    ()=>{
//      console.log("on Complete");
//    })
//   console.log("Line 3");


// }
var obs = new Observable((observer:any)=>{
  observer.next(100);
  observer.next(200);
  observer.next(300);
 setTimeout(()=>{observer.next(350);},2000) 
 // observer.complete();
  observer.next(500);
}).pipe(map((el:any)=> el - 10),filter((el:any)=> el > 200));

// console.log("Line 2");
obs.subscribe(
(val:any)=>{
   console.log(val);
},
(error)=>{
   console.log("Error " , error);
},

()=>{
  console.log("on Complete");
})
// console.log("Line 3");
}

}
