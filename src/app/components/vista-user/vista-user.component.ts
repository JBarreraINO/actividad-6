import { Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vista-user',
  templateUrl: './vista-user.component.html',
  styleUrls: ['./vista-user.component.css']
})
export class VistaUserComponent implements OnInit {
 
  myUser : User | any;
 
  constructor(
    private userservice:UserService,
    private activateRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {

this.activateRoute.params.subscribe(async(params:any) => {
  let id :number = parseInt(params.id);
  let response = await this.userservice.getUserById(id);
  this.myUser = response;
})
  }
  
  async deleteUser(pId:number|undefined): Promise<void> {

    if (pId !== undefined) {
  
  let text;
 if (confirm(`¿Estas seguro de eliminar el usuario con id ${pId}?`) == true) {
   alert('Usuario'+pId+' eliminado');
   let response = await this.userservice.delete(pId);
  this.router.navigate(['/home']);
   
 } else {
   text = "No se elimino el usuario";
   alert(text);
 }
     
 
   }
   }

}
