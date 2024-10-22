import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [SidebarComponent, CardModule, TableModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  products!: Producto[];

    constructor(private productoService: ProductoService) {}

    ngOnInit() {
        
    }
}
