import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit, AfterViewInit {

  // For ngClass example
  active = true;

  // var testEl = document.getElementById('testElRef');
  // ElementRef >> A parent for all html Elements
  @ViewChild('testElRef') testEl!: ElementRef;

  @ViewChildren('sameTestClass') hamadaCollectionOfEl!: QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.testEl); // undefined
  }

  ngAfterViewInit(): void {
    console.log(this.testEl); // ElementRef {nativeElement: div#testID}

    // make it act as a nativeElement of html
    console.log(this.testEl.nativeElement); // div#testID

    // make casting for the nativeElement to be a HTMLElement
    // that has its javascript properties
    console.log((this.testEl.nativeElement as HTMLDivElement).id) // div#testID


    console.log(this.hamadaCollectionOfEl); //QueryList {_emitDistinctChangesOnly: true, dirty: false, _results: Array(3), _changesDetected: true, _changes: null, …}

    console.log(this.hamadaCollectionOfEl.first.nativeElement); // div.sameTestClass [first element]
    console.log(this.hamadaCollectionOfEl.last.nativeElement); // div.sameTestClass [last element]

    this.hamadaCollectionOfEl.forEach((item) => {
      (item.nativeElement as HTMLDivElement).style.cssText = 'color: blue; font-size: 40px'
    })

    //get(index)>> Return an element from queryList with its index
    console.log(this.hamadaCollectionOfEl.get(1)?.nativeElement.innerHTML)

  }

}
