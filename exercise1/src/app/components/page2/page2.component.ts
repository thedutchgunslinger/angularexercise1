import { Component  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component {
  Name: string = '';
  LastName: string = '';
  // apiData: any = null;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  // async ngOnInit(): Promise<void> {
  //     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //     const json = await data.json();
  //     console.log(json)
  //     this.apiData = json;

  //     // fetch('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
  //     //   return data.json();
  //     // }).then((json) => {
  //     //   console.log(json)
  //     //   this.apiData = json;
  //     // }).catch((error) => {
  //     //   console.log(error)
  //     // })
  // }
  // ngOnDestroy(): void {
  //   console.log('page2 destroyed')
  // }

  SubmitForm() {
    console.log(this.profileForm.value);
    this.Name = this.profileForm.value.firstName!;
    this.LastName = this.profileForm.value.lastName!;

  }
}
