import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Order } from '../services/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order1',
  templateUrl: './order1.component.html',
  styleUrls: ['./order1.component.css'],
})
export class Order1Component implements OnInit {
  @Input() form: any = {};

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isUpdate = false;

  id!: number;

  newOrder: Order = {
    id: 1,
    clientName: '',
    address: '',
    orderStatus: 0,
    purchaseDate: new Date(),
    description: '',
    totalUnits: 1,
    unitPrice: 1,
    totalBill: 1,
    dueDays: 1,
  };

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isUpdate = true;
      this.getresident(id);
    }
  }

  getresident(id: number): void {
    this.orderService.getById(id).subscribe(
      (data: any[]) => {
        this.newOrder = data[0];
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.updateresident();
    } else {
      this.addresident();
    }
  }

  updateresident(): void {
    this.orderService
      .update(this.newOrder.id, { ...this.newOrder, ...this.form })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/orders']);
        },
        (err: { error: { message: string } }) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
  }

  addresident(): void {
    this.orderService.create(this.form).subscribe(
      (data: any) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/orders']);
      },
      (err: { error: { message: string } }) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
