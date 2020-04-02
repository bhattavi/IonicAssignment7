import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ActionSheetController, LoadingController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  
  public folder: string;

  name: string;

  constructor(private activatedRoute: ActivatedRoute, private modal: ModalController,
    private actionSheetController: ActionSheetController,
    private router: Router,
    private loadingController: LoadingController,
    public toastController: ToastController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async onModal() {

    const modal = await this.modal.create({
      component: ModalPage,
      componentProps: {
        data: this.name
      }
    });

    await modal.present();


  }

  async actionSheet() {
   

    const actionSheet = await this.actionSheetController.create({
      header: 'Dragon Ball Z Characters',
      buttons: [{
        text: 'Goku',
        role: 'Saiyan',
        icon: 'heart',
        handler: () => {
          console.log('Kamehamehaaaaaaaaa');

        }
      }, {
        text: 'Vegeta',
        role: 'Saiyan',
        icon: 'heart',
        handler: () => {
          console.log("YOU SAY I'M ARROGANT, I SAY DAMN RIGHT. THAT'S PRIDE. PRIDE IN THE SAIYAN I AM.");

        }
      }, {


        text: 'Frieza',
        role: 'Enemy',
        icon: 'heart',
        handler: () => {
          console.log('No Saiyan can be allowed to survive!');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
    });

    await actionSheet.present();
  }



  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Wifi turn on',
      duration: 2000,
      
    });
    toast.present();
  }

  

}
