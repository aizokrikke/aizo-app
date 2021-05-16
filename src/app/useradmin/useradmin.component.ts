import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { faSearch, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../models/user';
import { isArray } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.scss']
})
export class UseradminComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  private userId: string | undefined = '0';
  public showlist = true;
  public showedit = false;
  private filter = '';
  public userList: User[] | undefined;
  public editUser: User = {
    firstname: '',
    lastname: ''
  };
  public errortext = '';

  public searchForm = this.fb.group({
    search: ['', Validators.required],
  });
  public editForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      login: ['', Validators.required],
      password: [''],
      passwordVerify: [''],
      role: ['']
    });

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  private list(): void {
    this.userService.list(this.filter).subscribe(
      (data) => {
        if (isArray(data)) {
          this.userList = data;
        } else {
          this.userList = [];
        }
        this.showlist = true;
    });
  }

  public search(): void {
    this.filter = this.searchForm.value.search;
    this.list();
    this.showlist = true;
  }

  public edit(id: string | undefined): void {
    this.userId = id;
    this.showlist = false;
    if (id) {
      this.userService.get(id).subscribe((data: User) => {
        this.editUser = data;
        this.editForm.setValue({
          firstname: data.firstname,
          lastname: data.lastname,
          login: data.login,
          role: data.role,
          password: '',
          passwordVerify: ''
        });
        this.showedit = true;
      });
    }
  }


  public update(): void {
    const id = this.editUser.id;
    console.log('update user');
  }

  public delete(id: string | undefined): void {
    this.userId = id;
    this.showlist = false;
  }

  public cancel(): void {
    this.showlist = true;
    console.log('terug');
  }
}
