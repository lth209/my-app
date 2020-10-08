import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  en = '';
  vn = '';
  select = 0;
  isShow = false;
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];

  addWord() {
    if (this.isShow) {
      this.arrWords.unshift(
        { id: this.arrWords.length + 1, en: this.en, vn: this.vn, memorized: false }
      );
      this.en = '';
      this.vn = '';
      this.isShow = false;
    }
    else {
      this.isShow = !this.isShow;
    }
  }

  deleteWord(id: number){
    var index = this.arrWords.findIndex(w => w.id === id);
    this.arrWords.splice(index, 1);
  }

  getFilter(memorized: boolean){
    var all = this.select == 0;
    var mem = this.select == 1 && memorized;
    var nomem = this.select == 2 && !memorized;
    return all || mem || nomem;
  }

  changeStatus(id: number){
    this.arrWords.find(w => w.id === id).memorized = !this.arrWords.find(w => w.id === id).memorized;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
