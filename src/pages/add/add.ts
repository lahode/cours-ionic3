import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var window: any;
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  public base64Image: string;
  private error: string;
  private imageInfo: string = 'none';

  constructor(private readonly platform: Platform,
              private readonly camera: Camera) {}

  async getPicture() {

    await this.platform.ready();

    try {
      await this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 200,
        targetHeight: 200
      }).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
      }, (error) => this.error = error);
    }
    catch(e) {
      this.error = e;
    }

  }

  async resizePicture() {

    await this.platform.ready();

    try {
      let imageDataInBase64 = this.base64Image.replace(/^data:image\/jpeg;base64,/, "");
      var self = this;
      await window.imageResizer.resizeImage(
        function(data) {
           self.imageInfo = `Taille: ${data.width} x ${data.height}`;
           self.base64Image = "data:image/jpeg;base64," + data.imageData;
        }, function (error) {
           self.error = error;
        }, imageDataInBase64, 0.5, 0.5, {
           resizeType: window.ImageResizer.RESIZE_TYPE_FACTOR,
           imageDataType: window.ImageResizer.IMAGE_DATA_TYPE_BASE64,
           format: window.ImageResizer.FORMAT_JPG
        }
      );
    }
    catch(e) {
      this.error = e;
    }

  }

}
