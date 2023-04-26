import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';



@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  bookings: MatTableDataSource<Booking>=null
  columnsToDisplay=['customerName','checkIn','status','roomType','phone','action']
  bookingLoadingStatus='Loading....'
  isLOading:boolean=false
  isError:boolean=false

  constructor(private CitiesService: BookingService){
    
  }
  ngOnInit(): void {
    this.isLOading=true
    this.CitiesService.getNewBookings().subscribe(
      (res)=>{
        this.bookings=new MatTableDataSource<Booking>(res)
        this.isLOading=false
      },
      (err)=>{
        this.isError=true
        this.bookingLoadingStatus="Error While Fetching the Data"
      }
    )
    
  }


}
