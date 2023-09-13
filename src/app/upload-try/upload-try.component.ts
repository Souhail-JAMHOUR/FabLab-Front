import {Component} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-upload-try',
  templateUrl: './upload-try.component.html',
  styleUrls: ['./upload-try.component.css']
})
export class UploadTryComponent {
  constructor(private storage: AngularFireStorage) {
  }

  async onFileChange(event: any) {
    const file = event.target.files[0]
    if (file) {
      const path = `users_images/${file.name}`
      const uploadTask = await this.storage.upload(path, file)
      const url = await uploadTask.ref.getDownloadURL()
      console.log(url)
    }
  }
}
