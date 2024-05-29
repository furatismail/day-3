import { NgFor } from '@angular/common';
import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgFor],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent implements OnInit {
  search = signal('')
  users = signal([
    { id: 1, name: "Carl" },
    { id: 2, name: "Peter" }
  ])
  filtredUsers = computed(() => this.users().filter((user) => user.name.toLocaleLowerCase().startsWith(this.search())))

  logger = effect(() => {
    // console.log('effect runs')
    // console.log('search', this.search())
    localStorage.setItem('searchItem', this.search());
  })


  showCount = false
  count = signal(0)

  conditionalCount = computed(() => {
    console.log(this.showCount)
    if (this.showCount) {
      return `Count is ${this.count()}`
    }

    return 'In Count is 0'
  })

  ngOnInit(): void {
    setTimeout(() => {
      this.showCount = true
      this.count.set(10);
    }, 3000);
  }

  setSearchString(e: Event) {
    // c
    this.search.set((e?.target as HTMLInputElement).value.toLocaleLowerCase())
  }


  addUser() {
    // this.users.update((users) => [...users, {id: 3, name: "Random user"}])
    this.users.update((users) => {
      console.log('users should it be users', users)
      // const x = users;
      const x = [...users];
      x.push({ id: 3, name: "Random" });
      console.log('x should it be users + my user', users)
      return x
    })
  }
}


