import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../shared/components/navbar/navbar';

@Component({
  selector: 'app-private-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './private-layout.html',
})
export default class PrivateLayout {}
