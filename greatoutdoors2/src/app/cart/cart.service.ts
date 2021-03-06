import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { cart } from '../models/cart.model';

@Injectable()
export class CartServiceModule {

    constructor(private httpClient: HttpClient, private toastr: ToastrService) {

    }
    addItem(addingItem: cart) : Observable<any> {

        const httpOptions: any = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Origin': '*'
            })
        };


        return this.httpClient.post("http://localhost:9090/Cart/AddItem", {
            "addItemuserId": addingItem.userId,
            "addItemProdId": addingItem.productId,
            "addItemProdQty": addingItem.quantity.toString(),
        })
    }
}
