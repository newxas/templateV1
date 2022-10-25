import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({providedIn: 'root'})
export class UsuarioService {
  private readonly API_URL = "localhost:6969/usuarios";
  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(){
    this.http.get(`${this.API_URL}`)
  }
}