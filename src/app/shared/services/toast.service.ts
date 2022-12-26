import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    constructor(private toastController: ToastController) { }

    async show(message: any, color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'success', position: 'top' | 'middle' | 'bottom' = 'bottom') {
        const toast = await this.toastController.create({
            message,
            duration: 1500,
            color,
            position
        });

        await toast.present();
    }
}