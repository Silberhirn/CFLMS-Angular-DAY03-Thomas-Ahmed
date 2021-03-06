import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../products';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  adds(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  } 

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
     });
  }

}
