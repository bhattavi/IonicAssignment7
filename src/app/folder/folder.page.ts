import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ActionSheetController, LoadingController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Router } from '@angular/router';

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
    private loadingController: LoadingController) { }

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
   

    const actionSheet = this.actionSheetController.create({
      header: 'Dragon Ball Z Characters',
      buttons: [{
        text: 'Goku',
        role: 'Saiyan',
        handler: () => {
          console.log('Kamehamehaaaaaaaaa');

        }
      }, {
        text: 'Vegeta',
        role: 'Saiyan',
        handler: () => {
          console.log("YOU SAY I'M ARROGANT, I SAY DAMN RIGHT. THAT'S PRIDE. PRIDE IN THE SAIYAN I AM.");

        }
      }, {


        text: 'Frieza',
        role: 'Enemy',
        handler: () => {
          console.log('No Saiyan can be allowed to survive!');
        }
      }]
    });

    (await actionSheet).present();
  }

}
