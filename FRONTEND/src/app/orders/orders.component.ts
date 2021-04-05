import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../services/order';
import { OrderService } from '../services/order.service';
import { TokenStorageService } from '../services/tokenStorageService';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  isLoggedIn = false;
  residents!: Order[];

  constructor(
    private residentService: OrderService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log(this.isLoggedIn);
    console.log(this.residents);

    if (this.isLoggedIn) {
      this.getresidents();
    } else {
      this.router.navigate(['/login']);
    }
  }

  getresidents(): void {
    this.residentService.getAllresidents().subscribe(
      (data: any[]) => {
        console.log(data);
        this.residents = data;
      },
      (err: { error: string; }) => {
        this.residents = JSON.parse(err.error).message;
      }
    );
  }

  delete(id: number): void {
    this.residentService.delete(id).subscribe(
      (data: any) => {
        console.log(data);
        this.reloadPage();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
