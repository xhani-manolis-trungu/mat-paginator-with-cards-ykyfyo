import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef, AfterViewInit
} from "@angular/core";
import { Observable } from "rxjs";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { PageEvent } from "@angular/material/typings/paginator/public-api";

export interface Card {
  title: string;
  subtitle: string;
  text: string;
}

const DATA: Card[] = [
  {
    title: "Shiba Inu 1",
    subtitle: "Dog Breed",
    text:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
  },
  {
    title: "Shiba Inu 2",
    subtitle: "Dog Breed",
    text:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
  },
  {
    title: "Shiba Inu 3",
    subtitle: "Dog Breed",
    text:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
  },
  {
    title: "Shiba Inu 4",
    subtitle: "Dog Breed",
    text:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
  },
  {
    title: "Shiba Inu 5",
    subtitle: "Dog Breed",
    text:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
  },
  {
    title: "Shiba Inu 6",
    subtitle: "Dog Breed",
    text:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
  },
  {
    title: "Shiba Inu 7",
    subtitle: "Dog Breed",
    text:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
  },
  {
    title: "Shiba Inu 8",
    subtitle: "Dog Breed",
    text:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
  },
  {
    title: "Shiba Inu 9",
    subtitle: "Dog Breed",
    text:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
  },
  {
    title: "Shiba Inu 10",
    subtitle: "Dog Breed",
    text:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
  }
];

const DATA2: Card[] = [
  {
    title: "Shiba Inu 1",
    subtitle: "Dog Breed",
    text:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
  },
  {
    title: "Shiba Inu 2",
    subtitle: "Dog Breed",
    text:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
  }
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("paginator") paginator: MatPaginator;
  @ViewChild("paginator2") paginator2: MatPaginator;
  obs: Observable<any>;
  obs2: Observable<any>;
  dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(DATA);
  dataSource2: MatTableDataSource<Card> = new MatTableDataSource<Card>(DATA2);

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    // this.dataSource.paginator = this.paginator;
    // this.dataSource2.paginator = this.paginator2;
    console.log(this.dataSource2);
    this.obs = this.dataSource.connect();
    this.obs2 = this.dataSource2.connect();
  }

  _setDataSource(indexNumber) {
    setTimeout(() => {
      switch (indexNumber) {
        case 0:
          !this.dataSource.paginator ? this.dataSource.paginator = this.paginator : null;
          break;
        case 1:
          !this.dataSource2.paginator ? this.dataSource2.paginator = this.paginator2 : null;
      }
    });
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
    if (this.dataSource2) {
      this.dataSource2.disconnect();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource2.paginator = this.paginator2;
  }
}
